// let device_info = require('./device_info');

import { sys } from "cc";

// let update_config = require('../updateNew/UpdateConfig');
export let config = {
    isTest: true,               // true 内网 false外网
    preview_enabled: false,      //标识是否开启审核模式
    self_preview_mode: true,    //当前自己是否是审核模式
    preview_mode: true,         //当前是否是审核模式
    hall_mode: 2,               //大厅显示状态 //1 审核2 正常 3 广告
    game_currency: 1,           //真金场 广告用户，  审核模式 2 免费场
    firstComein: 0,             //首次进入点击领取金额 直接进入游戏 --标识 0 不操作 1 直接进入TP游戏
    host_ip: "",
    websocket_port: "0",
    websocket_ip: "",
    jsonUrl: "",
    httpUrl: "",
    demond_conumes: [],
    websocket_server_lists: null,
    webViewGameHttpUrl: "", //  webview 外接的子游戏 根目录 http
    webViewGameWss: "",//  webview 外接的子游戏 根目录 wss
    gameType: 0, // 服务器返回的
    tableId: 0, // 服务器返回的
    curType: 0,   ////当前在哪个游戏中
    key_values: [],
    gameKindList: [], //游戏种类
    rummyMoneyRoomListData: [],
    teenPattiMoneyRoomListData: [], //普通玩法
    teenPattiJokerRoomListData: [], //癞子房间
    teenPattiJdRoomListData: [],    //续桌房间
    rummyFreeRoom: [],
    teenpattiFreeRoom: [],
    isReconnectToGame: false, //是否重连游戏中
    gameRoomListData: null, //游戏房间列表数据 对应数据结构 GameKindResponse
    gameRoomNodeID: 0, //当前匹配的房间节点ID
    realtime_mode: false, // 实时模式，本地计算分组
    is_in_cheet: false, // 作弊模式

    rechargeActivityData: null, //充值活动
    isKYC: true,   // false 需要弹出 kyc , true ,已经认证
    kycAmount: 0,    //KYC 赠送金额
    //privacyUrl: "http://tpmas.xyz/Privacy.html", ///隐私链接
    privacyUrl: "#", ///隐私链接
    ifShare: true,  //登录大厅弹出分享
    odds: [], //赔率配置
    vipCarConfigData: [],//VIP 周卡月卡配置信息
    propsMagicData: [
        {
            propsId: 1,
            isVip: 0,
            animPath: "expression_bucket/expression_bucket",
            animName: "expression_bucket"
        },
        {
            propsId: 2,
            isVip: 0,
            animPath: "expression_egg/expression_egg",
            animName: "expression_egg"
        },
        {
            propsId: 3,
            isVip: 0,
            animPath: "expression_rose/expression_rose",
            animName: "expression_rose"
        },
        {
            propsId: 4,
            isVip: 0,
            animPath: "expression_mug/expression_mug",
            animName: "expression_mug"
        },
        {
            propsId: 5,
            isVip: 1,
            animPath: "expression_bomb/expression_bomb",
            animName: "expression_bomb"
        },
        {
            propsId: 6,
            isVip: 1,
            animPath: "expression_up/expression_up",
            animName: "expression_up"
        },
        {
            propsId: 7,
            isVip: 1,
            animPath: "expression_kiss/expression_kiss",
            animName: "expression_kiss"
        },
        {
            propsId: 8,
            isVip: 1,
            animPath: "expression_slipper/expression_slipper",
            animName: "expression_slipper"
        }

    ],
    promoter_id: "",

    isSendGameLeaveReq: false,

    isFirst: true,
    gameRecord: new Map(),
    user_id: "11138689",
    token: "8d89d1878ea1cc956aeb2ecac959a38d9adf437ed0fac85c6a573527aa3898e7",
    currencyStr: "₹",
    load: function () {
        // console.log("加载配置...", window.webInfo);


        if (this.isTest) {
            //测试服地址
            //config.jsonUrl = "http://ydqp-admin.rummgame.club/gateway.json";
            //config.httpUrl = "http://ydqp-client-api.rummgame.club/v1/";
            //config.jsonUrl = "http://gameres.ydqp.91gamers.com/ltgate.json";
            // config.httpUrl = "http://client-api.lottery.91gamers.com/v1/";

            //巴基斯坦测试服
            config.jsonUrl = "http://bjgame.patti.fun/gameres/gateway.json";
            config.httpUrl = "http://bjgame.patti.fun/client-api/v1/";

            //孟加拉测试服
            // config.jsonUrl = "https://c1.pesber.com/res/gateway2.json";
            // config.httpUrl = "https://c1.pesber.com/client-api/v1/";


        } else {
            //线上地址
            //config.jsonUrl = window.webInfo?.jsonUrl || "https://win92p.com/gateway2.json";//"https://static.agzxbz.com/game_win92/gateway2.json"//"https://win92.com/gateway2.json";//"https://win92.com/gateway_web.json";//;
            //config.httpUrl = window.webInfo?.httpUrl || "https://777kjutoj.cc/client-api/v1/";
            config.jsonUrl = "http://bjgame.tpmas.xyz/gameres/gateway.json";
            config.httpUrl = "http://bjgame.tpmas.xyz/client-api/v1/";
        }

        // config.self_preview_mode = !this.isTest; //外网打开审核模式
        //let url = this.isTest ? "https://xx3.pesber.com/game/hotUpdate5" : "https://win92p.com/game/hotUpdate2"//"https://static.agzxbz.com/game_win92/hotUpdate5"//"https://win92.com/game/1229"//"https://win92.com/game/hotUpdate2"//
        let url = "http://bjgame.tpmas.xyz/hotupdate/test";
        // update_config.setHotUpdateUrl(url);
        // console.log("HotUpdateUrl:", url)
        //let bundleId = this.isTest ? "com.win92.gplay" : window.webInfo?.bundleId || "com.sfacg.comic";
        let bundleId = "com.test.teenpatti.gplay";
        // device_info.setbundleId(bundleId);
        // if (cc.sys.os == cc.sys.OS_ANDROID) {
        //     this.realtime_mode = true;
        // } else if (cc.sys.os == cc.sys.OS_IOS) {
        //     this.realtime_mode = true;
        // }





    },
    updateKeyValues: function (val) {
        this.key_values = val;
    },
    get_key_value: function (key) {
        for (var i = 0; i < this.key_values.length; i++) {
            if (this.key_values[i].key_name == key) return this.key_values[i].value;
        }

        return null;
    },
};

config.load();



