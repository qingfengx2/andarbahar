
import * as awesomeRoot1 from "../proto/awesome.js";

import { config } from "../util/config";
import { network } from "../network/network";
import { client_network } from "../network/client_network";
import { Component, director, game, sys, _decorator } from "cc";

const awesomeRoot = (awesomeRoot1 as any).default || awesomeRoot1;
// import { mySelfInfo } from "../util/mySelfInfo";
const { ccclass } = _decorator;
let TAG = 'NetWorkStatus';

@ccclass('game_network')
export class game_network extends Component {


    extends: Component;

    listener: null;

    // properties: {}
    uid = null
    token = null
    ping_interval = null
    last_ping_ticket = null
    logSocketReq(str, data = null) {
        console.log(TAG, "----------- C 2 S----------");
        console.log(TAG, str, JSON.stringify(data));
    }

    start() {
        // 连接通讯
        network.bind(this);
    }

    connect(uid, token) {
        if (!network.isConnected()) {
            console.log(TAG, 'has not connect, connecting', uid, token);
            console.log(TAG, '连接服务器:' + config.websocket_ip + ':' + config.websocket_port);

            network.connect(config.websocket_ip, config.websocket_port);

            this.last_ping_ticket = new Date().getTime() / 1000;

            this.uid = uid;
            this.token = token;
        } else {
            console.log(TAG, 'logging', uid, token);
            if (uid && token) {
                this.send_login(uid, token);
            }
        }

    }

    //心跳
    heartbeat() {
        this.clearPingInterval();

        this.ping_interval = setInterval(function () {
            if (network.isConnected()) {
                if (new Date().getTime() / 1000 - this.last_ping_ticket >= 40) {
                    network.close();
                    console.log(TAG, '心跳超时，关闭连接');
                    // director.loadScene("login");
                } else {
                    console.log(TAG, '发送心跳包');

                    this.sendPing();
                }
            }
        }.bind(this), 10000);
    }

    clearPingInterval() {
        if (this.ping_interval != null) {
            clearInterval(this.ping_interval);
        }
    }

    reconnect(uid, token) {
        if (!network.isConnected()) {
            network.reconnect(config.websocket_ip, config.websocket_port);

            this.uid = uid;
            this.token = token;

            // config.last_ping_ticket = new Date().getTime() / 1000;
        } else {
            this.send_login(uid, token);
        }
    }

    send_login(uid, token) {
        if (!network.isConnected()) {
            network.connect(config.websocket_ip, config.websocket_port);
            return;
        }
        /*
        var msg = net_protocol.proto_login_new();
        msg.user_id = 12364;
        msg.token = 'd7d5eefca1e2c1ab6bda739b209f535f';
        client_network.send_login_pack(network.ws, msg);
        */
        console.log(TAG, "请求登录_cw，连接服务端uid=" + uid + ",token=" + token);
        uid = parseInt(uid);

        var LoginRequest = awesomeRoot.com.cw.chess2.platform.LoginRequest;

        var payload = { userId: uid, token: token };
        // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = LoginRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // Create a new message
        var message = LoginRequest.create(payload); // or use .fromObject if conversion is necessary

        // Encode a message to an Uint8Array (browser) or Buffer (node)
        var buffer = LoginRequest.encode(message).finish();
        // ... do something with buffer

        // Decode an Uint8Array (browser) or Buffer (node) to a message
        // var message = LoginRequest.decode(buffer);

        // for (var i=0; i<buffer.length; i++)
        //   console.log(TAG,'[' + buffer[i] + ']');
        client_network.send_login_pack(network.ws, buffer);

        this.logSocketReq("请求登录", payload);
    }


    onConnected() {
        console.log(TAG, 'game_network.js:onConnected');

        game.emit('net_connected');

        this.send_login(this.uid, this.token);
    }

    onError() {
        game.emit('net_error');
    }

    onRead(proto) {

        let platform = awesomeRoot.com.cw.chess2.platform;
        if (proto.type === platform.ServerType.SERVER_TYPE_GATEWAY) {

        }
        if (proto.protocol === platform.ServerGatewayCmd.CMD_GATEWAY_LOGIN_RESP) {
            var LoginResponse = platform.LoginResponse;

            var message = LoginResponse.decode(proto.data);

            console.log(TAG, 'LoginResponse:[' + message.result + '],userId:[' + message.userId + ']');
            this.logSocketReq("登录结果", message);
            if (message.userId) {
                this.sendAndarBaharGameEnterReq();
            }
            if (message.result === 0) {
                console.log(TAG, "登录成功，开始心跳");
                //登录成功再发心跳
                this.heartbeat();

            }
        } else if (proto.protocol === platform.ServerGatewayCmd.CMD_GATEWAY_PING_RESP) {
            this.last_ping_ticket = new Date().getTime() / 1000;
        }

        this.last_ping_ticket = new Date().getTime() / 1000;

        if (proto.type === platform.ServerType.SERVER_TYPE_COMMON) {
            if (proto.protocol === platform.ServerCommonCmd.CMD_SYSMESSAGE_TO_USER_RESP) {
                let MessageToUserResp = platform.MessageToUserResp;
                let message = MessageToUserResp.decode(proto.data);
                console.log(TAG, "===== 系统发来广播数量 =======" + JSON.stringify(message));

                let context = message.context;
                let data = JSON.parse(context);
                // window.global.playAnnounce(data);

            }
        }


        game.emit('net_msg', proto);
    }

    onClosed() {
        console.log(TAG, 'game_network.js:onClosed');

        game.emit('net_closed');
    }

    // update (dt) {},


    //大厅协议

    //获取用户金币
    getUserCoin() {
        client_network.sendGetUserCoin_pack(network.ws);

        // this.logSocketReq("获取用户金币");
    }
    //获取用户属性
    getUserAttri() {
        let userAttriReq = awesomeRoot.com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ;
        let uid = sys.localStorage.getItem('userId');
        let array = [];
        array.push(parseInt(uid));
        let payload = { userIds: array };

        // let errMsg = userAttriReq.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        let message = userAttriReq.create(payload);

        let buffer = userAttriReq.encode(message).finish();

        client_network.sendGetUser_attri_pack(network.ws, buffer);

        this.logSocketReq("请求用户属性", payload);
    }
    sendAndarBaharGameEnterReq() {
        client_network.sendAndarBaharGameEnterReq(network.ws, null);
        this.logSocketReq("请求进入安达巴哈游戏");
    }





    sendPing() {
        client_network.send_ping_pack(network.ws, null);
    }





    //---------------------------------------百人类游戏---------------------------------
    // 获取百人类游戏房间列表
    sendGameRoomListReq(gameKind) {
        let serverType;
        switch (gameKind) {
            case awesomeRoot.com.cw.chess2.platform.GameKind.GAME_KIND_Wingo_Lottery:
                serverType = awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_WINGO_LOTTERY;
                break;
        }

        if (serverType) client_network.sendGameRoomListReq(network.ws, null, serverType);
    }



}

