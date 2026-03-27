export let net_data = {
    getLength: function (str) {
        var cArr = str.match(/[^\x00-\xff]/ig);
        return str.length + (cArr == null ? 0 : cArr.length);
    },

    net_struct_new: function (protocol, buf_size) {
        /*
        var data = {
            length : 5 + buf_size,  // short
            protocol : protocol,    // short
            data : new Array(buf_size), // n bit
            md5 : 0,    // byte
        };
        */
        var data = {
            length: 10 + buf_size,  // short
            type: 1000,    // short
            protocol: protocol,    // short
            uid: 0,  // int
            data: new Array(buf_size) // n bit
        };

        for (var i = 0; i < buf_size; i++)
            data.data[i] = 0;

        return data;
    },

    net_struct_new_with_protobuf: function (typePro, protocol, buffer) {
        var buf_size = 0;
        if (buffer != null)
            buf_size = buffer.length;
        var data = null;
        if (buf_size > 0) {
            data = {
                length: 10 + buf_size,  // short
                type: typePro,    // short
                protocol: protocol,    // short
                uid: 0,  // int
                data: new Array(buf_size) // n bit
            };

            for (var i = 0; i < buf_size; i++)
                data.data[i] = buffer[i];
        }
        else {
            data = {
                length: 10,  // short
                type: typePro,    // short
                protocol: protocol,    // short
                uid: 0,  // int
                data: null,
            };

        }
        // console.log("==== 客户端发送协议到服务端=====主协议==" + typePro + ",次协议===" + protocol);

        return data;
    },

    net_struct_push_string: function (proto, offset, str) {
        var bytes = this.getStringBytes(str);

        for (var i = 0; i < bytes.length; i++)
            proto.data[offset + i] = bytes[i];
    },

    net_struct_push_long: function (proto, offset, val) {
        var bytes = this.getLongBytes(val);

        for (var i = 0; i < bytes.length; i++)
            proto.data[offset + i] = bytes[i];
    },

    net_struct_push_int: function (proto, offset, val) {
        var bytes = this.getIntBytes(val);

        for (var i = 0; i < bytes.length; i++)
            proto.data[offset + i] = bytes[i];
    },

    net_struct_push_short: function (proto, offset, val) {
        var bytes = this.getShortBytes(val);

        for (var i = 0; i < bytes.length; i++)
            proto.data[offset + i] = bytes[1 - i];
    },

    net_struct_push_byte: function (proto, offset, val) {
        proto.data[offset] = val;
    },

    net_struct_push_bytes: function (proto, offset, val) {
        this.arraycopy(val, 0, proto.data, offset, val.length);
    },

    arraycopy: function (src, offset, target, target_offset, length) {
        for (var i = 0; i < length; i++)
            target[target_offset + i] = src[offset + i];
    },

    intFromBytes: function (x, offset) {
        var val = (x[offset + 3] << 24) + (x[offset + 2] << 16) + (x[offset + 1] << 8) + x[offset];
        return val;
    },

    longFromBytes: function (x, offset) {
        var val = (x[offset + 7] << 56) + (x[offset + 6] << 48) + (x[offset + 5] << 40) + (x[offset + 4] << 32) + (x[offset + 3] << 24) + (x[offset + 2] << 16) + (x[offset + 1] << 8) + x[offset];
        return val;
    },

    shortFromBytes: function (x, offset) {
        var val = ((x[offset + 1] & 0xFF) << 8) + (x[offset] & 0xFF);
        return val;
    },

    getLongBytes: function (x) {
        var bytes = [];
        var i = 0;
        do {
            bytes[i++] = x & (255);
            x = x >> 8;
        } while (i <= 7)
        return bytes;
    },

    getIntBytes: function (x) {
        var bytes = [];
        var i = 0;
        do {
            bytes[i++] = x & (255);
            x = x >> 8;
        } while (i <= 3)
        return bytes;
    },

    getShortBytes: function (x) {
        var bytes = [];
        var i = 0;
        do {
            bytes[i++] = x & (255);
            x = x >> 8;
        } while (i <= 1)
        return bytes;
    },

    getStringBytes: function (str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            } else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            } else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;
    },

    stringFromBytes: function (arr, offset, length) {
        if (typeof arr === 'string') {
            return arr;
        }
        var str = '',
            _arr = arr;
        for (var i = 0; i < length; i++) {
            if (_arr[offset + i] == 0)
                break;

            var one = _arr[offset + i].toString(2),
                v = one.match(/^1+?(?=0)/);
            if (v && one.length == 8) {
                var bytesLength = v[0].length;
                var store = _arr[offset + i].toString(2).slice(7 - bytesLength);
                for (var st = 1; st < bytesLength; st++) {
                    store += _arr[offset + st + i].toString(2).slice(2);
                }
                str += String.fromCharCode(parseInt(store, 2));
                i += bytesLength - 1;
            } else {
                str += String.fromCharCode(_arr[offset + i]);
            }
        }
        return str;
    }
};

