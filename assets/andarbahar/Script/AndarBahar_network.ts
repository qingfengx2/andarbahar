
import * as awesomeRoot from "../../Script/proto/awesome.js";
import { network } from "../../Script/network/network";
import { net_data } from "../../Script/network/net_data";
let ab_proto = awesomeRoot.com.cw.chess2.andarbahar;
let cmd = ab_proto.AndarBaharCmd;
let serverType = awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_AB;

/** AB 游戏 */
export let AndarBahar_network = {
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

        console.log(str);

        if (ws != null)
            ws.send(buf);
        else
            console.log('发送失败，ws=null');
    },

    sendGameEnterReq() {
        console.log("请求登录房间");

        let proto = net_data.net_struct_new_with_protobuf(serverType, cmd.CMD_C_GAME_ENTER_REQ, null);
        this.send_net_raw_data(network.ws, proto);
    },

    sendGameLeaveReq() {
        console.log("请求退出房间");
        let proto = net_data.net_struct_new_with_protobuf(serverType, cmd.CMD_C_GAME_LEAVE_REQ, null);
        this.send_net_raw_data(network.ws, proto);
    },

    // 获取桌子信息
    sendGameGetTableStatusReq() {
        let proto = net_data.net_struct_new_with_protobuf(serverType, cmd.CMD_C_GAME_GET_TABLE_STATUS_REQ, null);
        this.send_net_raw_data(network.ws, proto);
    },

    // 请求下注
    sendGameBetReq(type, bet) {
        let GameBetReq = ab_proto.GameBetReq;
        let payload = {
            index: type,
            bet: bet,
        };

        // // verify
        // let errMsg = GameBetReq.verify(payload);
        // if (errMsg) {
        //     throw Error(errMsg);
        // }

        let message = GameBetReq.create(payload);
        // buffer
        let buffer = GameBetReq.encode(message).finish();
        let proto = net_data.net_struct_new_with_protobuf(serverType, cmd.CMD_C_GAME_BET_REQ, buffer);
        this.send_net_raw_data(network.ws, proto);
    },

    // 请求复投
    sendRebetReq() {
        let proto = net_data.net_struct_new_with_protobuf(serverType, cmd.CMD_C_GAME_REPEAT_BET_REQ, null);
        this.send_net_raw_data(network.ws, proto);
    },

    // 请求Players
    sendGameGetPlayersReq(page = 1) {
        let GameGetPlayersReq = ab_proto.GameGetPlayersReq;
        let payload = { page: page };
        // let errMsg = GameGetPlayersReq.verify(payload);
        // if (errMsg) {
        //     throw Error(errMsg);
        // }
        let message = GameGetPlayersReq.create(payload);
        let buffer = GameGetPlayersReq.encode(message).finish();

        let proto = net_data.net_struct_new_with_protobuf(serverType, cmd.CMD_C_GAME_GET_PLAYERS_REQ, buffer);
        this.send_net_raw_data(network.ws, proto);
    },
    sendGameBetRecordReq(page) {
        let GameBetReq = awesomeRoot.com.cw.chess2.andarbahar.GetSelfRecordReq;
        let payload = {
            page: page,
            pageSize: 15,
        };
        console.log('请求记录数据=========:[' + JSON.stringify(payload) + ']');
        let message = GameBetReq.create(payload);
        let buffer = GameBetReq.encode(message).finish();
        let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_AB, awesomeRoot.com.cw.chess2.andarbahar.AndarBaharCmd.CMD_C_GAME_GET_SELFRECORD_REQ, buffer);
        this.send_net_raw_data(network.ws, proto);
    },
    sendGameHistoryReq(page) {
        let GameBetReq = awesomeRoot.com.cw.chess2.andarbahar.GetDrawListReq;
        let payload = {
            page: page,
            pageSize: 10,
        };
        console.log('请求历史记录数据=========:[' + JSON.stringify(payload) + ']');
        let message = GameBetReq.create(payload);
        let buffer = GameBetReq.encode(message).finish();
        let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_AB, awesomeRoot.com.cw.chess2.andarbahar.AndarBaharCmd.CMD_C_GAME_GET_DRAWLIST_REQ, buffer);
        this.send_net_raw_data(network.ws, proto);
    },
    // 请求聊天
    sendChatReq(chatType, typeValue1, typeValue2) {
        let MsgChatReq = ab_proto.MsgChatReq;
        let payload = {
            // tableId: config.tableId,
            chatType: chatType,
            typeValue1: typeValue1,
            typeValue2: typeValue2,
        };

        // // verify
        // let errMsg = MsgChatReq.verify(payload);
        // if (errMsg) {
        //     throw Error(errMsg);
        // }

        let message = MsgChatReq.create(payload);
        // buffer
        let buffer = MsgChatReq.encode(message).finish();
        let proto = net_data.net_struct_new_with_protobuf(serverType, cmd.CMD_C_CHAT_REQ, buffer);
        this.send_net_raw_data(network.ws, proto);
    },

    // 请求发送互动道具
    sendMagicChatReq(sendUserId, toUserId, mogicId) {
        let MsgChatReq = awesomeRoot.com.cw.chess2.platform.MsgMagicChatReq;
        let payload = {
            // tableId: config.tableId,
            sendUserId: sendUserId,
            toUserId: toUserId,
            mogicId: mogicId,
        };
        // // verify
        // let errMsg = MsgChatReq.verify(payload);
        // if (errMsg) {
        //     throw Error(errMsg);
        // }

        let message = MsgChatReq.create(payload);

        // buffer
        let buffer = MsgChatReq.encode(message).finish();

        let proto = net_data.net_struct_new_with_protobuf(serverType, awesomeRoot.com.cw.chess2.platform.ServerGameCommonCmd.CMD_C_GAME_MAGIC_CHAT_REQ, buffer);
        this.send_net_raw_data(network.ws, proto);
    },

};

