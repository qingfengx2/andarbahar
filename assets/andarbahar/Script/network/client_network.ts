
import { net_protocol } from "./net_protocol";
import { net_data } from "./net_data";
import * as awesomeRoot1 from "../proto/awesome.js";
const awesomeRoot = (awesomeRoot1 as any).default || awesomeRoot1;
var client_network = {

    send_net_raw_data: function (ws, proto) {
        var buf = new Int8Array(proto.length);

        for (var i = 0; i < buf.length; i++)
            buf[i] = 0;

        var offset = 0;

        // length:0
        var bytes = net_data.getShortBytes(proto.length);
        net_data.arraycopy(bytes, 0, buf, offset, bytes.length);
        offset += bytes.length;

        // type:2
        var bytes = net_data.getShortBytes(proto.type);
        net_data.arraycopy(bytes, 0, buf, offset, bytes.length);
        offset += bytes.length;

        // protocol:4
        var bytes = net_data.getShortBytes(proto.protocol);
        net_data.arraycopy(bytes, 0, buf, offset, bytes.length);
        offset += bytes.length;

        // uid:6
        var bytes = net_data.getIntBytes(proto.length);
        net_data.arraycopy(bytes, 0, buf, offset, bytes.length);
        offset += bytes.length;

        // data:n
        if (proto.data != null) {
            net_data.arraycopy(proto.data, 0, buf, offset, proto.data.length);
            offset += proto.data.length;
        }

        var str = '';
        for (var i = 0; i < buf.length; i++) {
            str += '0x' + (buf[i]).toString(16) + ' ';
        }

        // console.log(str);

        if (ws != null)
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(buf);
            } else {
                console.error(`WebSocket is not open. Current state: ${ws.readyState}`);
            }
        else
            console.log('发送失败，ws=null');
    },

    //-------------------------------大厅公共协议-------------------------
    //客户端发送登录包
    send_login_pack(ws, msg) {
        var proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_GATEWAY, awesomeRoot.com.cw.chess2.platform.ServerGatewayCmd.CMD_GATEWAY_LOGIN_REQ, msg);
        this.send_net_raw_data(ws, proto);
    },
    // 发送心跳包
    send_ping_pack(ws, msg) {
        var proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_GATEWAY, awesomeRoot.com.cw.chess2.platform.ServerGatewayCmd.CMD_GATEWAY_PING_REQ, msg);
        this.send_net_raw_data(ws, proto);
    },
    //发送获取用户金币
    sendGetUserCoin_pack(ws) {
        var proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_COMMON, awesomeRoot.com.cw.chess2.platform.ServerCommonCmd.CMD_GET_PLAYER_BALANCE_REQ, null);
        this.send_net_raw_data(ws, proto);
    },
    //获取用户属性
    sendGetUser_attri_pack(ws, msg) {
        var proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_COMMON, awesomeRoot.com.cw.chess2.platform.ServerCommonCmd.CMD_GET_USER_ATTRI_REQ, msg);
        this.send_net_raw_data(ws, proto);
    },
    //更新用户属性
    sendUpdateUser_attri_pack(ws, msg) {
        var proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_COMMON, awesomeRoot.com.cw.chess2.platform.ServerCommonCmd.CMD_UPDATE_USER_ATTRI_REQ, msg);
        this.send_net_raw_data(ws, proto);
    },
    // 获取支持的游戏类型
    sendGameKind_pack(ws, msg) {
        var proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_MATCH, awesomeRoot.com.cw.chess2.platform.ServerMatchCmd.CMD_GET_GAME_KIND_REQ, msg);
        this.send_net_raw_data(ws, proto);
    },
    // 匹配玩家
    sendMatch_pack(ws, msg) {
        var proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_MATCH, awesomeRoot.com.cw.chess2.platform.ServerMatchCmd.CMD_MATCH_REQ, msg);
        this.send_net_raw_data(ws, proto);
    },
    sendAndarBaharGameEnterReq(ws, msg) {
        let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_AB, awesomeRoot.com.cw.chess2.andarbahar.AndarBaharCmd.CMD_C_GAME_ENTER_REQ, msg);
        this.send_net_raw_data(ws, proto);
    },


    //---------------------------------------百人类游戏---------------------------------
    //获取百人游戏列表
    sendGameRoomListReq(ws, msg, cmd) {
        let proto = net_data.net_struct_new_with_protobuf(cmd, awesomeRoot.com.cw.chess2.platform.ServerGameCommonCmd.CMD_C_GAME_ROOM_LIST_REQ, msg);
        this.send_net_raw_data(ws, proto);
    },

    // // teenpattiwar 请求进入游戏
    // sendTeenpattiWarGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_TEEN_PATTI_WAR_, awesomeRoot.com.cw.chess2.teen_patti_war.TeenPattiWarCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // dragontiger 请求进入游戏
    // sendDragonTigerG 
    //3PATTI请求进入游戏
    send3PattiGameEnterReq(ws, msg) {
        // let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_LUCKY3PATTI, awesomeRoot.com.cw.chess2.lucky3patti.Lucky3pattiCmd.CMD_C_GAME_ENTER_REQ, msg);
        // this.send_net_raw_data(ws, proto);
    },

    //3PATTI 游戏逻辑
    // 请求离开
    sendGameLeave3PattiReq(ws, msg) {
        // let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_LUCKY3PATTI, awesomeRoot.com.cw.chess2.lucky3patti.Lucky3pattiCmd.CMD_C_GAME_LEAVE_REQ, msg);
        // this.send_net_raw_data(ws, proto);
    },
    // 获取桌子信息
    sendGameGetTableStatus3PTReq(ws) {
        // let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_LUCKY3PATTI, awesomeRoot.com.cw.chess2.lucky3patti.Lucky3pattiCmd.CMD_C_GAME_GET_TABLE_STATUS_REQ, null);
        // this.send_net_raw_data(ws, proto);
    },
    //下注
    sendGameBet3PTReq(ws, proto) {
        // let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_LUCKY3PATTI, awesomeRoot.com.cw.chess2.lucky3patti.Lucky3pattiCmd.CMD_C_GAME_BET_REQ, null);
        this.send_net_raw_data(ws, proto);
    },
    //请求彩金列表
    sendGameGetJackPotList3PTReq(ws, proto) {
        // let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_LUCKY3PATTI, awesomeRoot.com.cw.chess2.lucky3patti.Lucky3pattiCmd.CMD_C_GAME_BET_REQ, null);
        this.send_net_raw_data(ws, proto);
    },
    //请求复投
    sendRebet3PTReq(ws, proto) {
        // let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_LUCKY3PATTI, awesomeRoot.com.cw.chess2.lucky3patti.Lucky3pattiCmd.CMD_C_GAME_BET_REQ, null);
        this.send_net_raw_data(ws, proto);
    }





};

export { client_network };