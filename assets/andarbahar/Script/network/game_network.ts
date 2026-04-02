
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
        // console.log(TAG,'服务端 发送到 客户端 主协议===' + proto.type + ",次协议==" + proto.protocol);

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
    //更新用户属性
    updateUserAttr() {
        console.log(TAG, "更新用户属性_cw，连接服务端uid=");
        // let updateUserAttrReq = awesomeRoot.com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ;
        // let uid = sys.localStorage.getItem('userId');
        // let data = { userAttri: { userId: parseInt(uid), nick: mySelfInfo.nick, head: mySelfInfo.head } };
        // let errMsg = updateUserAttrReq.verify(data);
        // if (errMsg)
        //     throw Error(errMsg);
        // let message = updateUserAttrReq.create(data);
        // let buffer = updateUserAttrReq.encode(message).finish();
        // client_network.sendUpdateUser_attri_pack(network.ws, buffer);

        // this.logSocketReq("更新用户属性", payload);
    }

    getGameKindRequest(gamekind) {
        // var GameKindRequest = awesomeRoot.com.cw.chess2.platform.GameKindRequest;

        // var payload = { gameKind: gamekind };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = GameKindRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = GameKindRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = GameKindRequest.encode(message).finish();

        // client_network.sendGameKind_pack(network.ws, buffer);

        // this.logSocketReq("玩法类型", payload);
    }

    // 匹配, game_currency=1-真金,2-练习
    matchRequest(action, gamekind, game_level, game_currency) {

        // var MatchRequest = awesomeRoot.com.cw.chess2.platform.MatchRequest;
        // var payload = { action: action, gameKind: gamekind, gameLevel: game_level, gameCurrency: game_currency };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = MatchRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = MatchRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = MatchRequest.encode(message).finish();

        // client_network.sendMatch_pack(network.ws, buffer);

        // this.logSocketReq("开始匹配游戏", payload);
    }

    // 求获取游戏数据
    getTableStatusRequest(server_type, table_id) {

        // var CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_COMMON_REQ;
        // var payload = { tableId: table_id };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = CommonRequest.encode(message).finish();


        // client_network.sendGetTableStatus_pack(network.ws, server_type, buffer);

        // this.logSocketReq("获取游戏数据", payload);
    }




    sendPing() {
        client_network.send_ping_pack(network.ws, null);
    }


    // 出牌
    sendCardOut(server_type, table_id, out_card) {
        // var CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_GAME_USER_OUT_REQ;
        // var payload = { tableId: table_id, outCard: out_card };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = CommonRequest.encode(message).finish();

        // client_network.sendCardOut_pack(network.ws, server_type, buffer);

        // this.logSocketReq("出牌", payload);
    }

    // 摸牌
    sendCardChoice(server_type, table_id, openorclose) {
        // var CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_GAME_USER_CHOICE_REQ;
        // var payload = { tableId: table_id, openorclose: openorclose };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = CommonRequest.encode(message).finish();

        // client_network.sendCardChoice_pack(network.ws, server_type, buffer);

        // this.logSocketReq("摸牌", payload);
    }

    // 弃牌
    sendDrop(server_type, table_id) {
        // var CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_COMMON_REQ;
        // var payload = { tableId: table_id };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = CommonRequest.encode(message).finish();

        // client_network.sendDrop_pack(network.ws, server_type, buffer);

        // this.logSocketReq("弃牌", payload);
    }

    // 请求继续
    // 0：继续；1：直接退出；2：重新返回匹配队列
    sendContinue(server_type, table_id, result) {
        // var CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_GAME_CONTINUE_REQ;
        // var payload = { tableId: table_id, continue: result };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = CommonRequest.encode(message).finish();

        // client_network.sendContinue_pack(network.ws, server_type, buffer);

        // this.logSocketReq("请求继续", payload);
    }

    // rummy检查是否可以胡牌
    checkWin(server_type, table_id, card_group, out_card) {
        // let CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_GAME_CHECK_WIN_REQ;
        // let payload = { tableId: table_id, userGroups: card_group, outPoker: out_card };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // let errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // let message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // let buffer = CommonRequest.encode(message).finish();

        // let message2 = CommonRequest.decode(buffer);

        // console.log(TAG, '=====================检查是否可以胡牌:' + JSON.stringify(message2));

        // client_network.checkWin_pack(network.ws, server_type, buffer);

        // this.logSocketReq("检查是否可以胡牌", payload);
    }

    // 请求胡牌
    sendWin(server_type, table_id, card_group, out_card) {
        // var CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_GAME_WIN_REQ;
        // var payload = { tableId: table_id, userGroups: card_group, outPoker: out_card };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = CommonRequest.encode(message).finish();

        // var message2 = CommonRequest.decode(buffer);

        // console.log(TAG, '=====================胡牌:' + JSON.stringify(message2));

        // client_network.sendWin_pack(network.ws, server_type, buffer);

        // this.logSocketReq("请求胡牌", payload);
    }

    // 请求Declare
    sendDeclare(server_type, table_id, card_group) {
        // var CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_GAME_POSE_REQ;
        // var payload = { tableId: table_id, userGroups: card_group };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = CommonRequest.encode(message).finish();

        // var message2 = CommonRequest.decode(buffer);

        // console.log(TAG, '=====================摆牌:' + JSON.stringify(message2));

        // client_network.sendDeclare_pack(network.ws, server_type, buffer);

        // this.logSocketReq("请求declare", payload);
    }

    sendQuitScore(server_type, table_id) {
        // var CommonRequest = awesomeRoot.com.cw.chess2.rummy_2.MSG_C_COMMON_REQ;
        // var payload = { tableId: table_id };
        // // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
        // var errMsg = CommonRequest.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = CommonRequest.create(payload); // or use .fromObject if conversion is necessary

        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = CommonRequest.encode(message).finish();

        // client_network.sendQuitScore_pack(network.ws, server_type, buffer);

        // this.logSocketReq("sendQuitScore", payload);
    }












    // // 向 teenPatti 请求离开   60
    // sendTeenPattiLeaveReq(server_type, table_id) {
    //     var TableData = awesomeRoot.com.cw.chess2.teenpatti_2.TableData;
    //     var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_2.MSG_C_COMMON_REQ;
    //     var payload1 = {};
    //     var errMsg1 = CommonRequest.verify(payload1);
    //     if (errMsg1)
    //         throw Error(errMsg1);
    //     var message1 = CommonRequest.create(payload1);
    //     var buffer1 = CommonRequest.encode(message1).finish();

    //     var payload = { tableId: table_id, data: buffer1 };
    //     var errMsg = TableData.verify(payload);
    //     if (errMsg)
    //         throw Error(errMsg);

    //     // Create a new message
    //     var message = TableData.create(payload); // or use .fromObject if conversion is necessary
    //     // Encode a message to an Uint8Array (browser) or Buffer (node)
    //     var buffer = TableData.encode(message).finish();

    //     client_network.send_teenPatti_Leave(network.ws, server_type, buffer);

    //     this.logSocketReq("向 teenPatti 请求离开   60", payload);
    // },
    // 向 teenPatti 请求聊天   62  sendMagicChatReq
    // sendTeenPattiTalkReq(server_type, table_id, chatType, typevalue1, typevalue2) {
    //     var TableData = awesomeRoot.com.cw.chess2.teenpatti_2.TableData;
    //     var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_2.MSG_C_CHAT_REQ;
    //     var payload1 = {
    //         chatType: chatType,
    //         type_1Value: typevalue1,
    //         type_2Value: typevalue2,
    //     };
    //     var errMsg1 = CommonRequest.verify(payload1);
    //     if (errMsg1)
    //         throw Error(errMsg1);
    //     var message1 = CommonRequest.create(payload1);
    //     var buffer1 = CommonRequest.encode(message1).finish();

    //     var payload = { tableId: table_id, data: buffer1 };
    //     var errMsg = TableData.verify(payload);
    //     if (errMsg)
    //         throw Error(errMsg);

    //     // Create a new message
    //     var message = TableData.create(payload); // or use .fromObject if conversion is necessary
    //     // Encode a message to an Uint8Array (browser) or Buffer (node)
    //     var buffer = TableData.encode(message).finish();

    //     client_network.send_teenPatti_talkReq(network.ws, server_type, buffer);

    //     this.logSocketReq("向 teenPatti 请求聊天   62", payload);
    // },
    // 请求发送互动道具 通用接口
    // sendMagicChatReq(sendUserId, toUserId, mogicId) {
    //     let MsgChatReq = awesomeRoot.com.cw.chess2.platform.MsgMagicChatReq;
    //     let payload = {
    //         tableId: config.tableId,
    //         sendUserId: sendUserId,
    //         toUserId: toUserId,
    //         mogicId: mogicId,
    //     };
    //     // verify
    //     let errMsg = MsgChatReq.verify(payload);
    //     if (errMsg) {
    //         throw Error(errMsg);
    //     }

    //     let message = MsgChatReq.create(payload);

    //     // buffer
    //     let buffer = MsgChatReq.encode(message).finish();


    //     let proto = net_data.net_struct_new_with_protobuf(config.gameType, awesomeRoot.com.cw.chess2.platform.ServerGameCommonCmd.CMD_C_GAME_MAGIC_CHAT_REQ, buffer);

    //     client_network.send_net_raw_data(network.ws, proto);
    // },
    // 充值延迟
    sendTeenPattiRechargeDelay(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_2.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_2.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_teenPatti_recharge_delay(network.ws, server_type, buffer);

        // this.logSocketReq("向 teenPatti 请求充值延迟   60", payload);
    }

    //、、、、、、、、、、、、、、、teenPatti_joker 游戏协议、、、、、、、、、、、///////////////////////////////
    //获取 teenPatti_joker 癞子 游戏数据  1
    sendTPJokerGetTableStatusReq(server_type, table_id) {

        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;

        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);

        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_GameStatus(network.ws, server_type, buffer);
        // this.logSocketReq("获取 JOKER 游戏数据", payload);
    }
    // teenPatti 匹配成功 已准备好   3
    sendTPJokerMatchReadyReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_MatchReady(network.ws, server_type, buffer);
        // this.logSocketReq("JOKER 匹配成功 已准备好", payload);
    }
    // 向 teenPatti 确定已经准备好   7
    sendTPJokerConfirmReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_Confirm(network.ws, server_type, buffer);
        // this.logSocketReq("JOKER 确定已经准备好", payload);
    }
    //teepatti 请求操作  // 0：放弃；1：跟注；2：加注；
    sendTPJokerBetReq(server_type, table_id, bet_odd) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_GAME_BET_REQ;
        // var payload1 = { betOdd: bet_odd };
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_userOperator(network.ws, server_type, buffer);
        // this.logSocketReq("JOKER 请求操作", payload);
    }
    //  teenPatti 请求看牌  15
    sendTPJokerSeeCardReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_SeeCard_seq(network.ws, server_type, buffer);
        // this.logSocketReq("JOKER 请求看牌  15", payload);
    }

    //  teenPatti 请求亮牌结算 17
    sendTPJokerShowReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_Show(network.ws, server_type, buffer);

        // this.logSocketReq("JOKER 请求亮牌结算 17", payload);

    }

    // teenPatti 请求sideShow 19
    sendTPJokerSideShowReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_SideShow(network.ws, server_type, buffer);

        // this.logSocketReq("JOKER 请求sideShow 19", payload);
    }

    // teenPatti 请求sideShow答复 21
    sendTPJokerSideShowAnswerReq(server_type, table_id, accpet1) {
        //是否接受Side Show：0不接受；1接受
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_GAME_SIDE_SHOW_ANSWER_REQ;
        // var payload1 = { accpet: accpet1 };
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_SideShowAnswer(network.ws, server_type, buffer);

        // this.logSocketReq("JOKER 请求sideShow答复 21", payload);
    }

    // 向 teenPatti 用户确认继续游戏  25
    sendTPJokerContinueReq(server_type, table_id) {
        //     var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        //     var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        //     var payload1 = {};
        //     var errMsg1 = CommonRequest.verify(payload1);
        //     if (errMsg1)
        //         throw Error(errMsg1);
        //     var message1 = CommonRequest.create(payload1);
        //     var buffer1 = CommonRequest.encode(message1).finish();

        //     var payload = { tableId: table_id, data: buffer1 };
        //     var errMsg = TableData.verify(payload);
        //     if (errMsg)
        //         throw Error(errMsg);

        //     // Create a new message
        //     var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        //     // Encode a message to an Uint8Array (browser) or Buffer (node)
        //     var buffer = TableData.encode(message).finish();

        //     client_network.send_tp_joker_Continue(network.ws, server_type, buffer);

        //     this.logSocketReq("向 JOKER 用户确认继续游戏  25", payload);
    }

    // 向 teenPatti 请求离开   60
    sendTPJokerLeaveReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_Leave(network.ws, server_type, buffer);

        // this.logSocketReq("向 JOKER 请求离开   60", payload);
    }
    // 向 teenPatti 请求聊天   62
    sendTPJokerTalkReq(server_type, table_id, chatType, typevalue1, typevalue2) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_CHAT_REQ;
        // var payload1 = {
        //     chatType: chatType,
        //     type_1Value: typevalue1,
        //     type_2Value: typevalue2,
        // };
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_talkReq(network.ws, server_type, buffer);

        // this.logSocketReq("向 JOKER 请求聊天   62", payload);
    }

    // 充值延迟
    sendTPJokerRechargeDelay(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_lai.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_lai.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_joker_recharge_delay(network.ws, server_type, buffer);

        // this.logSocketReq("向 JOKER 请求充值延迟   60", payload);
    }

    //、、、、、、、、、、、、、、、teenPatti jd 续桌玩法游戏协议、、、、、、、、、、、///////////////////////////////
    //获取 teenPatti_jd 游戏数据  1
    sendTPJdGetTableStatusReq(server_type, table_id) {

        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;

        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);

        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_GameStatus(network.ws, server_type, buffer);
        // this.logSocketReq("获取 teenPatti 游戏数据", payload);
    }
    // teenPatti_jd 匹配成功 已准备好   3
    sendTPJdMatchReadyReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_MatchReady(network.ws, server_type, buffer);
        // this.logSocketReq("teenPatti 匹配成功 已准备好", payload);
    }
    // 向 teenPatti_jd 确定已经准备好   7
    sendTPJdConfirmReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_Confirm(network.ws, server_type, buffer);
        // this.logSocketReq("向 teenPatti 确定已经准备好", payload);
    }
    //teepatti_jd 请求操作  // 0：放弃；1：跟注；2：加注；
    sendTPJdBetReq(server_type, table_id, bet_odd) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_GAME_BET_REQ;
        // var payload1 = { betOdd: bet_odd };
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_userOperator(network.ws, server_type, buffer);
        // this.logSocketReq("teepatti 请求操作", payload);
    }
    //  teenPatti_jd 请求看牌  15
    sendTPJdSeeCardReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_SeeCard_seq(network.ws, server_type, buffer);
        // this.logSocketReq("teenPatti 请求看牌  15", payload);
    }

    //  teenPatti_jd 请求亮牌结算 17
    sendTPJdShowReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_Show(network.ws, server_type, buffer);

        // this.logSocketReq("teenPatti 请求亮牌结算 17", payload);

    }

    // teenPatti_jd 请求sideShow 19
    sendTPJdSideShowReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_SideShow(network.ws, server_type, buffer);

        // this.logSocketReq("teenPatti 请求sideShow 19", payload);
    }

    // teenPatti_jd 请求sideShow答复 21
    sendTPJdSideShowAnswerReq(server_type, table_id, accpet1) {
        //是否接受Side Show：0不接受；1接受
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_GAME_SIDE_SHOW_ANSWER_REQ;
        // var payload1 = { accpet: accpet1 };
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_SideShowAnswer(network.ws, server_type, buffer);

        // this.logSocketReq("teenPatti 请求sideShow答复 21", payload);
    }

    // 向 teenPatti_jd 用户确认继续游戏  25
    sendTPJdContinueReq(server_type, table_id) {
        // var TableData = awesomeRoot.com.cw.chess2.teenpatti_jd.TableData;
        // var CommonRequest = awesomeRoot.com.cw.chess2.teenpatti_jd.MSG_C_COMMON_REQ;
        // var payload1 = {};
        // var errMsg1 = CommonRequest.verify(payload1);
        // if (errMsg1)
        //     throw Error(errMsg1);
        // var message1 = CommonRequest.create(payload1);
        // var buffer1 = CommonRequest.encode(message1).finish();

        // var payload = { tableId: table_id, data: buffer1 };
        // var errMsg = TableData.verify(payload);
        // if (errMsg)
        //     throw Error(errMsg);

        // // Create a new message
        // var message = TableData.create(payload); // or use .fromObject if conversion is necessary
        // // Encode a message to an Uint8Array (browser) or Buffer (node)
        // var buffer = TableData.encode(message).finish();

        // client_network.send_tp_jd_Continue(network.ws, server_type, buffer);

        // this.logSocketReq("向 teenPatti 用户确认继续游戏  25", payload);
    }




    /*------------------- 3Patti游戏玩法-------------------- */
    sendGameLeave3PattiReq() {
        console.log("请求退出3PT房间");
        client_network.sendGameLeave3PattiReq(network.ws, null);
    }

    // 获取桌子信息
    sendGameGetTableStatus3PTReq() {
        console.log("GetDesk")
        client_network.sendGameGetTableStatus3PTReq(network.ws);
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

