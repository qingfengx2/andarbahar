// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html


import { net_protocol } from "./net_protocol";
export let network = {
    // 连接
    ws: null,
    is_connected: false,
    listeners: [],
    bind: function (listener) {
        if (listener === undefined || listener === null) {
            return;
        }
        if (this.listeners.indexOf(listener) !== -1) {
            return;
        }
        this.listeners.push(listener);
    },

    unBind: function (listener) {
        if (listener === undefined || listener === null) {
            return;
        }
        if (this.listeners.indexOf(listener) === -1) {
            return;
        }
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    },

    connect: function (ip, port) {
        // 连接
        // let proto_name = 'ws';//'websocket-protocol';
        // this.ws = new WebSocket('ws://' + ip + ':' + port + '/' + proto_name);

        let proto_name = 'wss1';//'websocket-protocol';
        this.ws = new WebSocket(ip + ':' + port);
        this.ws.binaryType = "arraybuffer";

        // ws.onmessage = (event) => {
        //     if (event.data instanceof ArrayBuffer) {
        //         // binary frame
        //         console.log("ArrayBuff");
        //         console.log(event.data);
        //     }
        //  else {
        //         // text frame
        //         console.log("Array text");
        //         console.log(event.data);
        //     }
        // };

        console.log('连接:' + ip + ':' + port);

        this.ws.onopen = function () {
            console.log('[LOG] 连接成功')
            this.is_connected = true;
            this.onConnected();
        }.bind(this);

        this.ws.onmessage = function (msg) {
            if (msg.data instanceof ArrayBuffer) {
                //console.log('[RECV]' + msg.data.byteLength);
                let uint8array = new Int8Array(msg.data);

                // 转换成协议
                let protos = net_protocol.protos_from_bytes(uint8array);
                // console.log('接收到协议包数:' + protos.length);
                for (let i = 0; i < protos.length; i++)
                    this.onRead(protos[i]);
            }
            else {
                // text frame
                console.log("Array text");
                console.log(msg.data);
            }
        }.bind(this);

        this.ws.onclose = function (e) {
            console.log('[LOG] 连接关闭');
            this.is_connected = false;
            this.onClosed();
            // this.ws = null;
        }.bind(this);

        this.ws.onerror = function (e) {
            console.log('[LOG] 连接失败');
            this.is_connected = false;
            this.onError();
            // this.ws = null;
        }.bind(this);
    },

    reconnect(ip, port) {
        let proto_name = 'websocket-protocol';
        this.ws = new WebSocket(ip + ':' + port);
        this.ws.binaryType = "arraybuffer";

        console.log('重新连接:' + ip + "," + port + ":" + this.ws);

        this.ws.onopen = function () {
            console.log('onopen:' + this.ws);
            this.is_connected = true;
            this.onConnected();
        }.bind(this);

        this.ws.onmessage = function (msg) {
            if (msg.data instanceof ArrayBuffer) {
                // console.log('[RECV]' + msg.data.byteLength);
                let uint8array = new Int8Array(msg.data);

                // 转换成协议
                let protos = net_protocol.protos_from_bytes(uint8array);
                // console.log('接收到协议包数:' + protos.length);
                for (let i = 0; i < protos.length; i++)
                    this.onRead(protos[i]);
            }
        }.bind(this);

        this.ws.onclose = function (e) {
            this.is_connected = false;
            this.onClosed();
            console.log('this.ws.onclose');
            //    if (this.ws) {
            //        this.ws = null;
            //    }
        }.bind(this);

        this.ws.onerror = function (e) {
            this.is_connected = false;
            this.onError();
            console.log('this.ws.onerror');
            // if (this.ws) {
            //     this.ws = null;
            // }
        }.bind(this);
    },

    close() {
        // window.global.isLogin = false;
        if (this.ws) {
            this.ws.close();
        }
    },

    isConnected: function () {
        return this.is_connected;
    },

    onConnected: function () {
        console.log('连接成功:' + this.ws);
        for (let i = 0; i < this.listeners.length; i++) {
            let listener = this.listeners[i];
            if (listener.onConnected !== undefined && listener.onConnected !== null) {
                listener.onConnected();
            }
        }
    },

    onRead: function (proto) {
        //console.log('[LOG] 处理协议:0x' + proto.protocol.toString(16));
        for (let i = 0; i < this.listeners.length; i++) {
            let listener = this.listeners[i];
            if (listener.onRead !== undefined && listener.onRead !== null) {
                listener.onRead(proto);
            }
        }
    },

    onClosed: function () {
        console.log('断开连接');
        for (let i = 0; i < this.listeners.length; i++) {
            let listener = this.listeners[i];
            if (listener.onClosed !== undefined && listener.onClosed !== null) {
                listener.onClosed();
            }
        }
    },

    onError: function () {
        console.log('网络错误');
    }
}

