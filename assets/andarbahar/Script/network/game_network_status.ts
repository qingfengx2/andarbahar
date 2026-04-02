// let commonFun = require('comonFun');

import { network } from "./network";
import { config } from "../util/config";
import * as awesomeRoot1 from "../proto/awesome.js";
import { _decorator, Component, game, Prefab, sys } from "cc";
import { AndarbaharManager } from "../AndarbaharManager";
const awesomeRoot = (awesomeRoot1 as any).default || awesomeRoot1;
/**
 * 统一网络状态管理
 * 断网检测、重试重连TCP、失败弹窗跳转登录
 */
let TAG = 'NetWorkStatus';
let interval = 5;
let times = 3;
let delay = 1;
const { ccclass, property } = _decorator;
@ccclass('game_network_status')
export class game_network_status extends Component {
    @property({ type: Prefab, displayName: '提示预制物' })
    panel_tips_prefab: Prefab = null;

    @property({ displayName: '重试次数' })
    retryTimes: number = 0;

    isReconnecting: boolean = false;
    // retryTimes: number = 0;
    last_ping_ticket: number = 0;
    onLoad() {
        network.bind(this);
        game.on('net_msg', this.net_MessageBack.bind(this));
    }

    onDestroy() {
        this.recycle();
    }

    net_MessageBack(proto: any) {
        // console.log(TAG, 'net_MessageBack', proto);

        if (proto.type === awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_GATEWAY) {
            if (proto.protocol === awesomeRoot.com.cw.chess2.platform.ServerGatewayCmd.CMD_GATEWAY_REPEAT_LOGIN_RESP) {
                //被踢
                // commonFun.removeGameLoading();
                this.unschedule(this.reconnect);
                this.isReconnecting = true;

                sys.localStorage.removeItem("phoneNum");
                sys.localStorage.removeItem("password");
                sys.localStorage.removeItem("authorization");
                this.loginOtherPlace();
            }
        }
    }

    recycle() {
        network.unBind(this);
        this.unschedule(this.reconnect);
    }

    onConnected() {
        console.log(TAG, '已连上');
        this.retryTimes = 0;
        // commonFun.removeGameLoading();
        this.unschedule(this.reconnect);
        this.isReconnecting = false;
    }

    onClosed() {
        console.log(TAG, '断线了，启动重连操作');
        if (this.isReconnecting) return;
        this.isReconnecting = true;

        this.schedule(this.reconnect, interval, times, delay);
    }

    reconnect() {
        try {
            // commonFun.addGameLoading();
            console.log(TAG, 'reconnecting', this.retryTimes);
            if (network.isConnected()) {
                return;
            }
            this.retryTimes++;
            if (this.retryTimes === times) {
                this.connectFailed();
                return;
            }
            network.reconnect(config.websocket_ip, config.websocket_port);
            this.last_ping_ticket = new Date().getTime() / 1000;
        } catch (err: any) {
            console.error(err);
            console.error(err.message);
        }
    }

    loginOtherPlace() {
        console.log(TAG, 'loginOtherPlace');
        // commonFun.removeGameLoading();

        // this.unschedule(this.reconnect, this);

        AndarbaharManager.instance.showPopupView(999)
    }

    connectFailed() {
        console.log(TAG, 'connectFailed');
        // commonFun.removeGameLoading();

        // this.unschedule(this.reconnect, this);
        AndarbaharManager.instance.showPopupView(1000)
    }
}