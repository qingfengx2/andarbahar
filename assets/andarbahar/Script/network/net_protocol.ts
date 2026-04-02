
import { net_data } from "./net_data";
export let net_protocol = {
    CMD_LOBBY_USER_ATTRI_REQ: 45,	// 获取用户属性
    CMD_LOBBY_USER_ATTRI_REP: 46,	// 获取用户属性返回

    // 登陆
    proto_login_new: function () {
        var login_pack = {
            user_id: 0,
            token: ''
        };

        return login_pack;
    },

    proto_login_bk_new: function () {
        var bk_pack = {
            result: 0, // int
            user_id: 0,
        };

        return bk_pack;
    },

    // 心跳包
    proto_ping_new: function () {
        var pack = {
            flag: 0,   // int
            onlines: 0,    // int
        };

        return pack;
    },

    proto_from_bytes: function (bytes) {
        if (bytes.length < 10)
            return null;

        var proto = {
            length: 0,	// short
            type: 0,	// short
            protocol: 0,  // short
            uid: 0,    // int
            data: null
        };

        proto.length = net_data.shortFromBytes(bytes, 0) & 0xFFFF;
        proto.type = net_data.shortFromBytes(bytes, 2) & 0xFFFF;
        proto.protocol = net_data.shortFromBytes(bytes, 4) & 0xFFFF;
        proto.uid = net_data.intFromBytes(bytes, 6) & 0xFFFF;
        var buf_size = proto.length - 10;
        proto.data = new Array(buf_size);
        for (var i = 0; i < buf_size; i++)
            proto.data[i] = bytes[10 + i] & 0xFF;

        return proto;
    },

    protos_from_bytes: function (bytes) {
        if (bytes.length < 10)
            return null;

        var protos = new Array();

        var offset = 0;
        while (true) {
            if (bytes.length - offset < 10) {
                break;
            }
            var proto = {
                length: 0,	// short
                type: 0,	// short
                protocol: 0,  // short
                uid: 0,    // int
                data: null
            };

            proto.length = net_data.shortFromBytes(bytes, offset + 0) & 0xFFFF;
            proto.type = net_data.shortFromBytes(bytes, offset + 2) & 0xFFFF;
            proto.protocol = net_data.shortFromBytes(bytes, offset + 4) & 0xFFFF;
            proto.uid = net_data.intFromBytes(bytes, offset + 6) & 0xFFFF;
            var buf_size = proto.length - 10;
            proto.data = new Array(buf_size);
            for (var i = 0; i < buf_size; i++)
                proto.data[i] = bytes[offset + 10 + i] & 0xFF;

            offset += proto.length;

            protos.push(proto);

            if (offset >= bytes.length)
                break;
        }

        return protos;
    },

};

