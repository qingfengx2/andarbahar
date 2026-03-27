
import { Appurl } from "./appurl";
import { config } from "./config";
export let appUrlConfig = {
    // sms获取验证码,
    GET_CODE: Appurl.RUMMY_BACKGROUND_URL + "sms-code",
    // 绑定手机号
    BIND_ACCOUNT: Appurl.RUMMY_BACKGROUND_URL + "account/bind-tel-number",
    //账号密码登录
    PWD_LOGIN: Appurl.RUMMY_BACKGROUND_URL + "pwd-login",
    //修改密码
    PWD_UPDATE: Appurl.RUMMY_BACKGROUND_URL + "change-pwd",
    // 游客登录
    GUEST_LOGIN: Appurl.RUMMY_BACKGROUND_URL + "device-login",
    // 手机号，code 去拿 token
    GET_TOKEN: Appurl.RUMMY_BACKGROUND_URL + "login",
    // token-login
    TOKEN_LOGIN: Appurl.RUMMY_BACKGROUND_URL + "account/token-login",
    // facebook登录
    FACEBOOK_LOGIN: Appurl.RUMMY_BACKGROUND_URL + "facebook-login",
    // 请求自己个人信息
    GET_SELF_USER_INFO: Appurl.RUMMY_BACKGROUND_URL + "account/info",
    // 获取消息列表
    GET_MESSAGE: Appurl.RUMMY_BACKGROUND_URL + "system/messages",
    // 上报设备信息
    REPORT_DEVICE: Appurl.RUMMY_BACKGROUND_URL + "system/report-device",
    // 修改nick
    MODIFY_NICK: Appurl.RUMMY_BACKGROUND_URL + "account/nickname",
    // 修改头像
    MODIFY_AVATAR: Appurl.RUMMY_BACKGROUND_URL + "account/avatar",
    // 获取游戏列表
    GET_GAME_KIND_LIST: Appurl.RUMMY_BACKGROUND_URL + "games",
    // 获取rummy房间列表
    GET_RUMMY_ROOM_LIST: Appurl.RUMMY_BACKGROUND_URL + "games/rummy/rooms",
    // 获取3patti房间列表
    GET_3PATTI_ROOM_LIST: Appurl.RUMMY_BACKGROUND_URL + "games/teen-patti/rooms",
    // 获取teenpatti 癞子房间
    GET_TEENPATTIJOKER_ROOM: Appurl.RUMMY_BACKGROUND_URL + "games/teen-patti-lai/rooms",
    //  获取TeenPattiPotblind房间列表
    GET_TEENPATTIPotblind_ROOM: Appurl.RUMMY_BACKGROUND_URL + "games/teen-patti-potblind/rooms",
    // 获取teenpatti 续桌房间
    GET_TEENPATTI_JD_ROOM: Appurl.RUMMY_BACKGROUND_URL + "games/teen-patti-jd/rooms",
    //获取TeenPattiFinal房间列表
    GET_TEENPATTI_FINAL_ROOMS: Appurl.RUMMY_BACKGROUND_URL + "games/teen-patti-final/rooms",
    // 获取轮播图
    GET_CAROUSEL: Appurl.RUMMY_BACKGROUND_URL + "system/carousels",
    // 获取任务
    GET_TASK: Appurl.RUMMY_BACKGROUND_URL + "task",
    // 获取任务 task/tomorrow
    GET_TOMORROW_TASK: Appurl.RUMMY_BACKGROUND_URL + "task/tomorrow",
    // 获取充值列表
    GET_RECHARGE_LIST: Appurl.RUMMY_BACKGROUND_URL + "wallet/default-amount",
    // 获取充值活动
    GET_RECHARGE_ACTIVITY: Appurl.RUMMY_BACKGROUND_URL + "wallet/activity",
    // 充值
    RECHARGE: Appurl.RUMMY_BACKGROUND_URL + "wallet/recharge",
    // 线下bank充值
    BANK_RECHARGE: Appurl.RUMMY_BACKGROUND_URL + "wallet/bank-recharge",
    // 查询订单
    QUERY_ORDER: Appurl.RUMMY_BACKGROUND_URL + "wallet/query-order",
    // 流水
    GET_DETAILS: Appurl.RUMMY_BACKGROUND_URL + "wallet/detail-balance-logs",
    // 提现信息
    GET_WITHDRAW_INFO: Appurl.RUMMY_BACKGROUND_URL + "wallet/withdraw-info",
    // 使用银行卡提现
    WITHDRAW_BY_BANK: Appurl.RUMMY_BACKGROUND_URL + "wallet/bank-card-withdraw",
    // 使用UPI提现
    WITHDRAW_BY_UPI: Appurl.RUMMY_BACKGROUND_URL + "wallet/upi-withdraw",
    // upi获取验证码
    GET_UPI_CODE: Appurl.RUMMY_BACKGROUND_URL + "wallet/upi-code",
    // 绑定邀请码
    BIND_INVITE: Appurl.RUMMY_BACKGROUND_URL + "share/bind-code",
    // 获取分享信息
    GET_INVITE_INFO: Appurl.RUMMY_BACKGROUND_URL + "share/info",
    // 获取分享的奖金
    GET_INVITE_BONUS: Appurl.RUMMY_BACKGROUND_URL + "share/bonus",
    // 获取分享的奖金log
    GET_INVITE_BONUS_LOG: Appurl.RUMMY_BACKGROUND_URL + 'share/bonus-logs',
    // 获取分享下级的奖金记录log
    GET_INVITE_BONUS_SUB_LOG: Appurl.RUMMY_BACKGROUND_URL + 'share/sub-logs',
    // 获取用户信息
    GET_USER_INFO: Appurl.RUMMY_BACKGROUND_URL + 'batch/user-info',
    // 获取app模式（是否是审核）1审核 2开放
    GET_APP_MODE: Appurl.RUMMY_BACKGROUND_URL + "app/mode",
    // 获取充值订单，提现列表
    GET_ORDERS: Appurl.RUMMY_BACKGROUND_URL + 'wallet/orders',
    // 获取商城
    GET_MARKET: Appurl.RUMMY_BACKGROUND_URL + 'google-pay/products',
    // 查询今日是否签到
    GET_IS_SIGN: Appurl.RUMMY_BACKGROUND_URL + "sign-in/is-received",
    // 获取签到列表
    GET_SIGN_LIST: Appurl.RUMMY_BACKGROUND_URL + "sign-in/prizes",
    // 签到
    SIGN_RECEIVE: Appurl.RUMMY_BACKGROUND_URL + "sign-in/receive",
    // google支付下单
    GOOGLE_PAY: Appurl.RUMMY_BACKGROUND_URL + "google-pay/launch",
    // 支付订单返回到服务端 
    SUBMIT_GOOGLE_PAY: Appurl.RUMMY_BACKGROUND_URL + "google-pay/submit",
    // 单个用户的mode
    GET_SELF_MODE: Appurl.RUMMY_BACKGROUND_URL + "account/mode",
    CHECK_DEVICE: Appurl.RUMMY_BACKGROUND_URL + "check-device",
    /** 获取用户存钱罐信息 */
    SAVING_POT_INFO: Appurl.RUMMY_BACKGROUND_URL + "saving-pot/info",
    /** 领取存钱罐金币 */
    SAVING_POT_RECEIVE: Appurl.RUMMY_BACKGROUND_URL + "saving-pot/receive",
    /** 获取用户是否充值 */
    ACCOUNT_PAID: Appurl.RUMMY_BACKGROUND_URL + "account/paid",
    /** 获取首充礼包信息 */
    FIRST_PAY_INFO: Appurl.RUMMY_BACKGROUND_URL + "wallet/first-pay-info",
    /** 请求首充礼包活动 */
    FIRST_PAY_ORDER: Appurl.RUMMY_BACKGROUND_URL + "wallet/first-pay-order",
    /** 请求快速充值 */
    QUICK_PAY: Appurl.RUMMY_BACKGROUND_URL + "wallet/quick-pay-order",
    /** 获取代理信息 */
    AGENCY_INFO: Appurl.RUMMY_BACKGROUND_URL + "agency/info",
    /** 获取代理用户列表 */
    AGENCY_USER: Appurl.RUMMY_BACKGROUND_URL + "agency/user",
    /** 获取代理收益 */
    AGENCY_PROFIT: Appurl.RUMMY_BACKGROUND_URL + "agency/profit",
    /** 领取代理收益 */
    AGENCY_REVEIVE: Appurl.RUMMY_BACKGROUND_URL + "agency/receive",
    /** 订单反馈提示 */
    ORDER_TIP: Appurl.RUMMY_BACKGROUND_URL + "system/order-tip",
    /** 7up 7down 游戏记录 */
    SEVENUPDOWN_RECORD: Appurl.RUMMY_BACKGROUND_URL + "games/seven-up-down/records",
    /** 请求VIP卡配置信息 */
    getWeekMonCardConfig: Appurl.RUMMY_BACKGROUND_URL + "vip/getWeekMonCardConfig",
    /** 请求用户VIP信息 */
    getWeekMonCardInfo: Appurl.RUMMY_BACKGROUND_URL + "vip/getWeekMonCardInfo",
    /** 请求购买VIP */
    buyWeekMonCard: Appurl.RUMMY_BACKGROUND_URL + "vip/buyWeekMonCard",
    /** 请求获取周卡月卡奖励 */
    getWeekMonCardDayBonus: Appurl.RUMMY_BACKGROUND_URL + "vip/getWeekMonCardDayBonus",
    /** 获取用户破产信息 */
    BANKRUPT_USER: Appurl.RUMMY_BACKGROUND_URL + "bankrupt/user",
    /** 破产充值 */
    BANKRUPT_ORDER: Appurl.RUMMY_BACKGROUND_URL + "bankrupt/order",
    /** 申请用户破产 */
    BANKRUPT_APPLY: Appurl.RUMMY_BACKGROUND_URL + "bankrupt/apply",
    /** 获取任务信息 */
    USER_TASK: Appurl.RUMMY_BACKGROUND_URL + "task/user-task",
    /** 代理排行榜信息 */
    AGENCY_RANK: Appurl.RUMMY_BACKGROUND_URL + "agency/rank",
    /** 在线人数 */
    APP_ONLINE: Appurl.RUMMY_BACKGROUND_URL + "app/online",
    /** 邮件列表 */
    SYSTEM_MESSAGES: Appurl.RUMMY_BACKGROUND_URL + "system/messages",
    /** 读取邮件 */
    SYSTEM_RED_MESSAGE: Appurl.RUMMY_BACKGROUND_URL + "system/read-message",
    /** 领取邮件 */
    SYSTEM_RECEIVED_MESSAGE: Appurl.RUMMY_BACKGROUND_URL + "system/received-message",
    /** 删除邮件 */
    SYSTEM_DEL_MESSAGE: Appurl.RUMMY_BACKGROUND_URL + "system/del-message",
    /** 获取拼多多信息 */
    PDD_INFO: Appurl.RUMMY_BACKGROUND_URL + "pdd/info",
    /** 推荐列表 */
    PDD_LIST: Appurl.RUMMY_BACKGROUND_URL + "pdd/list",
    /** 拼多多奖励 */
    PDD_RECEIVED: Appurl.RUMMY_BACKGROUND_URL + "pdd/received",
    /** 获取用户bonus信息 */
    BONUS_INFO: Appurl.RUMMY_BACKGROUND_URL + "bonus/info",
    /** 领取bonus */
    BONUS_RECEIVED: Appurl.RUMMY_BACKGROUND_URL + "bonus/received",
    /** 获取用户bonus赠送记录信息 */
    BONUS_LOG: Appurl.RUMMY_BACKGROUND_URL + "bonus/log",
    /** 获取转盘信息 */
    LUCKY_WHEEL_INFO: Appurl.RUMMY_BACKGROUND_URL + "lucky-wheel/info",
    /** 抽奖 */
    LUCKY_WHEEL_TURN: Appurl.RUMMY_BACKGROUND_URL + "lucky-wheel/turn",
    WALLET_USER_INFO: Appurl.RUMMY_BACKGROUND_URL + "wallet/pay-user-info",
    /** 获取新代理信息 */
    AGENCY_NEW_INFO: Appurl.RUMMY_BACKGROUND_URL + "agency/new-info",
    /** 获取新代理收益信息 */
    AGENCY_NEW_PROFIT: Appurl.RUMMY_BACKGROUND_URL + "agency/new-profit",
    /** 领取代理收益 */
    AGENCY_NEW_RECEIVE: Appurl.RUMMY_BACKGROUND_URL + "agency/new-receive",
    /** 获取新代理用户列表 */
    AGENCY_NEW_USER: Appurl.RUMMY_BACKGROUND_URL + "agency/new-user",
    /** 获取提现列表 */
    WALLET_DEFAULT_PAY: Appurl.RUMMY_BACKGROUND_URL + "wallet/default-pay-agent",
    /** 获取下一级VIP福利信息 */
    VIP_GET_NEXT_WELFAREINFO: Appurl.RUMMY_BACKGROUND_URL + "vip/getNextWelfareInfo",
    /** 获取用户VIP福利信息 */
    VIP_GET_WELFAREINFO: Appurl.RUMMY_BACKGROUND_URL + "vip/getWelfareInfo",
    /** 领取VIP福利 */
    VIP_RECEVIE_WELFARE: Appurl.RUMMY_BACKGROUND_URL + "vip/receiveWelfare",
    /** 获取新代理模式2 公告*/
    AGENCY_NEW_ANOUNCEMENT2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-announcement2",
    /** 获取新代理模式2 信息*/
    AGENCY_NEW_INFO2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-info2",
    /** 获取新代理模式2 收益信息 */
    AGENCY_NEW_PROFIT2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-profit2",
    /** 获取新代理模式2 收益排行榜 */
    AGENCY_NEW_RANK2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-rank2",
    /** 领取新代理模式2 额外收益 */
    AGENCY_NEW_RECEVIE_REWARD2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-receive-reward2",
    /** 领取新代理模式2 收益 */
    AGENCY_NEW_RECEIVE2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-receive2",
    /** 获取新代理模式2 周奖励信息 */
    AGENCY_NEW_REWARD2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-reward2",
    /** 获取新代理模式2 用户列表 */
    AGENCY_USER2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-user2",
    /** 获取新代理模式2下级用户信息 */
    AGENCY_NEW_UNDER_USER_INFO2: Appurl.RUMMY_BACKGROUND_URL + "agency/new-under-user-info2",

    /** 获取杭州代理模式 佣金信息 ------4 */
    AGENCY_Hz_bonus: Appurl.RUMMY_BACKGROUND_URL + "agency/hz-bonus",
    //  获取杭州代理模式首次充值列表
    AGENCY_Hz_firstPay: Appurl.RUMMY_BACKGROUND_URL + "agency/hz-first-pay",
    //  获取杭州代理模式信息
    AGENCY_Hz_info: Appurl.RUMMY_BACKGROUND_URL + "agency/hz-info",
    //  领取杭州代理模式收益
    AGENCY_Hz_receive: Appurl.RUMMY_BACKGROUND_URL + "agency/hz-receive",
    //  获取杭州代理模式用户列表
    AGENCY_Hz_userlist: Appurl.RUMMY_BACKGROUND_URL + "agency/hz-user",
    // 获取杭州代理模式佣金领取记录列表
    AGENCY_Hz_comRecord: Appurl.RUMMY_BACKGROUND_URL + "agency/hz-commission-record",
    // 获取杭州用户列表
    AGENCY_Hz_member: Appurl.RUMMY_BACKGROUND_URL + "agency/hz-member",

    SYSTEM_CONTACT_WAY: Appurl.RUMMY_BACKGROUND_URL + "system/contact-way",
    /*获取下注排行榜*/
    SYSTEM_BET_RANK: Appurl.RUMMY_BACKGROUND_URL + "system/bet-rank",
    /**修改广告属性 */
    ACCOUNT_ORGANIC: Appurl.RUMMY_BACKGROUND_URL + "account/organic",
    /** 获取转盘信息------新版 */
    PAY_WHEEL_INFO: Appurl.RUMMY_BACKGROUND_URL + "pay-wheel/info",
    /** 获取新6配置信息------新版 */
    PAY_WHEEL_CONFIG: Appurl.RUMMY_BACKGROUND_URL + "pay-wheel/config",
    /** 新6转盘下单------新版 */
    PAY_WHEEL_ORDER: Appurl.RUMMY_BACKGROUND_URL + "pay-wheel/order",
    /** 转动新6转盘------新版 POST */
    PAY_WHEEL_TURN: Appurl.RUMMY_BACKGROUND_URL + "pay-wheel/turn",
    /** 横板周奖励信息 */
    AGENCY_NEW_REWARD: Appurl.RUMMY_BACKGROUND_URL + "agency/new-reward",
    /** 领取横板周奖励收益 */
    AGENCY_NEW_RECEIVE_REWARD: Appurl.RUMMY_BACKGROUND_URL + "agency/new-receive-reward",
    // 获取rummy房间列表
    GET_TPSTAR_ROOM_LIST: Appurl.RUMMY_BACKGROUND_URL + "games/teen-patti-star/rooms",
    // 提交用户提现信息
    GET_USER_WITHDRAW_INFO: Appurl.RUMMY_BACKGROUND_URL + "wallet/user-withdraw-info",
    // 领取新手奖励
    POST_RECEIVED_NEW_AWARD: Appurl.RUMMY_BACKGROUND_URL + "system/received-new-award",
    // 获取通知信息
    GET_SYS_NOTICE: Appurl.RUMMY_BACKGROUND_URL + "system/notice",
    // 获取未读取通知信息
    GET_SYS_UNREADNOTICE: Appurl.RUMMY_BACKGROUND_URL + "system/unread-notice-ids",
    // 检测是否在提现黑名单中
    GET_WALLET_BLACKLIST: Appurl.RUMMY_BACKGROUND_URL + "wallet/in-withdraw-blacklist",
    // 刮刮乐开奖
    POST_CARDRECEIVED: Appurl.RUMMY_BACKGROUND_URL + "scratch-card/received",
    // 刮刮乐用户信息
    GET_CARDINFO: Appurl.RUMMY_BACKGROUND_URL + "scratch-card/info",
    //刮刮乐配置信息
    GET_CARDCONFIG: Appurl.RUMMY_BACKGROUND_URL + "scratch-card/config",
    //USTD充值通道
    GET_USTDRECHARGE: Appurl.RUMMY_BACKGROUND_URL + "usdtpay/recharge",

    //获取FB登录开关
    GET_FBLoginModeBtn: Appurl.RUMMY_BACKGROUND_URL + "bundle/fb-login-mode",
    // 获取召回活动相关弹框
    GET_NoticeRecall: Appurl.RUMMY_BACKGROUND_URL + "system/notice-recall",
    //玩家领取回归奖励 GET_RecallED
    GET_RecalledReward: Appurl.RUMMY_BACKGROUND_URL + "system/recalled-reward",
    //代理人领取召回成功奖励 recallER
    GET_recallerReward: Appurl.RUMMY_BACKGROUND_URL + "system/recaller-reward",

    /** activity/list 获取活动配置---弹窗列表 */
    GET_tuanchuang: Appurl.RUMMY_BACKGROUND_URL + "activity/list",

    // 红包雨 获取红包雨信息
    RedRain_Info: Appurl.RUMMY_BACKGROUND_URL + "red-rain/info",
    // 红包雨 点击红包
    RedRain_Click: Appurl.RUMMY_BACKGROUND_URL + "red-rain/click",
    // 红包雨 领取奖励
    RedRain_Receive: Appurl.RUMMY_BACKGROUND_URL + "red-rain/receive",
    // 获取复活礼包信息
    RebirthGift_Info: Appurl.RUMMY_BACKGROUND_URL + "gift-revive/info",
    // 复活礼包充值
    RebirthGift_Recharge: Appurl.RUMMY_BACKGROUND_URL + "gift-revive/recharge",

    /** 扭蛋 信息 */
    EggTwist_Info: Appurl.RUMMY_BACKGROUND_URL + "crazy-task/info",
    /** 扭蛋 play */
    EggTwist_Play: Appurl.RUMMY_BACKGROUND_URL + "crazy-task/draw",
    /** 扭蛋 bouns */
    EggTwist_Bouns: Appurl.RUMMY_BACKGROUND_URL + "crazy-task/exchange",
    /** 扭蛋 recieve */
    EggTwist_Recieve: Appurl.RUMMY_BACKGROUND_URL + "crazy-task/receive",

    /** 2048， 2049 注册 */
    LinkOut_Register: (config.isTest ? "https://xx1.pesber.com/" : "https://api.777kjutoj.cc/") + "addons/apiathletics/player/register",
    /** 2048， 2049 登录 */
    LinkOut_Login: (config.isTest ? "https://xx1.pesber.com/" : "https://api.777kjutoj.cc/") + "addons/apiathletics/player/login",

    /** month-card/info 获取月卡配置信息 */
    GET_VipCardInfo: Appurl.RUMMY_BACKGROUND_URL + "month-card/info",
    /** buy 购买豪华月卡 */
    POST_VipCardBuy: Appurl.RUMMY_BACKGROUND_URL + "month-card/buy",
    /** 每日领取 ---豪华月卡 */
    POST_VipCardReceive: Appurl.RUMMY_BACKGROUND_URL + "month-card/receive",

    /** Rank 排行榜 ---获取排行榜列表 */
    GET_RankInfo: Appurl.RUMMY_BACKGROUND_URL + "rank/list",

    /** NineGame */
    POST_NineGameList: (config.isTest ? "https://xx1.pesber.com/" : "https://api.777kjutoj.cc/") + "addons/ninesgame/player/getGameList",
    POST_NineGameRegister: (config.isTest ? "https://xx1.pesber.com/" : "https://api.777kjutoj.cc/") + "addons/ninesgame/player/register",
    POST_NineGameLogin: (config.isTest ? "https://xx1.pesber.com/" : "https://api.777kjutoj.cc/") + "addons/ninesgame/player/login",

    /** 玩家收藏游戏 */
    Post_FavAdd: Appurl.RUMMY_BACKGROUND_URL + "lobby/favorites-add",
    /** 玩家取消收藏游戏 */
    Post_FavDel: Appurl.RUMMY_BACKGROUND_URL + "lobby/favorites-del",
    /** 获取大厅游戏列表 */
    Get_GameList: Appurl.RUMMY_BACKGROUND_URL + "lobby/game-list",

    /** 获取活动中心配置列表 */
    Get_ActivityCenterList: Appurl.RUMMY_BACKGROUND_URL + "activity/center-list",

    /** AGENCY-NEW 获取最新代理模式信息 */
    Get_AgencyNewInfo: Appurl.RUMMY_BACKGROUND_URL + "agency-new/info",
    /** AGENCY-NEW 获取最新代理邀请列表 */
    Get_AgencyNewInviteList: Appurl.RUMMY_BACKGROUND_URL + "agency-new/invite-list",
    /** AGENCY-NEW 获取最新代理模式等级信息 */
    Get_AgencyNewLevel: Appurl.RUMMY_BACKGROUND_URL + "agency-new/level",
    /** AGENCY-NEW 最新代理领取佣金 */
    Post_AgencyNewProfit: Appurl.RUMMY_BACKGROUND_URL + "agency-new/profit",
    /** AGENCY-NEW 获取最新代理任务奖励列表 */
    Get_AgencyNewRewardList: Appurl.RUMMY_BACKGROUND_URL + "agency-new/reward-list",
    /** AGENCY-NEW 领取最新代理任务奖励 */
    Post_AgencyNewIRewardRecive: Appurl.RUMMY_BACKGROUND_URL + "agency-new/reward-receive",
    /** AGENCY-NEW 获取最新代理模式任务列表 */
    Get_AgencyNewTaskList: Appurl.RUMMY_BACKGROUND_URL + "agency-new/task-list",
    /** AGENCY-NEW 获取最新代理模下级用户信息 */
    Get_AgencyNewUser: Appurl.RUMMY_BACKGROUND_URL + "agency-new/user",
    /** AGENCY-NEW 获取最新代理提现列表 */
    Get_AgencyNewWithdrawList: Appurl.RUMMY_BACKGROUND_URL + "agency-new/withdraw-list",

    /** 获取新手嘉年华任务信息 */
    Get_NewTaskInfo: Appurl.RUMMY_BACKGROUND_URL + "newer-task/info",
    /** 新手嘉年华抽奖 */
    Post_NewTaskDraw: Appurl.RUMMY_BACKGROUND_URL + "newer-task/draw",
    /**  兑换新手嘉年华任务积分 */
    Post_NewTaskExchange: Appurl.RUMMY_BACKGROUND_URL + "newer-task/exchange",
    /** 领取新手嘉年华任务奖励 */
    Post_NewTaskRecrive: Appurl.RUMMY_BACKGROUND_URL + "newer-task/receive",

    /** OneApi 第三方平台 */
    /** 获取运营商支持的供应商列表 */
    Get_OneapiGameVendors: Appurl.RUMMY_BACKGROUND_URL + "oneapi/game/vendors",
    /** 获取运营商支持的游戏列表 */
    Get_OneapiGameList: Appurl.RUMMY_BACKGROUND_URL + "oneapi/game/list",
    /** 获取运营商支持的游戏地址 */
    Get_OneapiGameUrl: Appurl.RUMMY_BACKGROUND_URL + "oneapi/game/url",
    /** 终止玩家的游戏会话 */
    Get_OneapiGameTerminate: Appurl.RUMMY_BACKGROUND_URL + "oneapi/game/terminate",
};


