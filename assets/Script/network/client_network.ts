
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
            ws.send(buf);
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
    // //----------------------------------rummy游戏协议------
    // //rummy获取桌子状态
    // sendGetTableStatus_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GET_TABLE_STATUS_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy加载完成
    // sendMatchReady_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_MATCH_READY_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy客户端倒数结束后，通知服务器
    // sendReadyConfirm_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_READY_COMFIRM_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy智能分组
    // sendAiScore_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_AI_SCORE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy出牌
    // sendCardOut_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_USER_OUT_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy摸牌
    // sendCardChoice_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_USER_CHOICE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy弃牌
    // sendDrop_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_DROP_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy请求继续
    // sendContinue_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_CONTINUE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // rummy检查是否可以胡牌
    // checkWin_pack(ws, server_type, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_CHECK_WIN_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy请求胡牌
    // sendWin_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_WIN_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy请求Declare（摆牌）
    // sendDeclare_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_POSE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy请求退出分数查询
    // sendQuitScore_pack(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_GAME_QUIT_SCORE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //rummy请求聊天
    // rummySendChatReq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.rummy_2.Rummy2_C_Cmd.CMD_C_CHAT_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },

    // ///////////、、、、、、、、、、、、、、、、、、teenPatti 游戏请求协议 、、、、、、、、、、、、、、、/////////////////
    // //获取 teenPatti 游戏数据  1
    // send_teenPatti_GameStatus(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_GET_TABLE_STATUS_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // teenPatti 匹配成功 已准备好   3
    // send_teenPatti_MatchReady(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_MATCH_READY_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // 向 teenPatti 确定已经准备好   7
    // send_teenPatti_Confirm(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_GAME_READY_COMFIRM_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti 用户操作
    // send_teenPatti_userOperator(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_GAME_BET_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti 请求看牌
    // send_teenPatti_SeeCard_seq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_GAME_SEE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatii请求亮牌结算 show 
    // send_teenPatti_Show(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_GAME_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatii请求 sideShow 
    // send_teenPatti_SideShow(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatii请求 sideshow 答复
    // send_teenPatti_SideShowAnswer(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_ANSWER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatii请求继续游戏 
    // send_teenPatti_Continue(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_GAME_CONTINUE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatii 请求离开
    // send_teenPatti_Leave(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_USER_CHAIR_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti 聊天
    // send_teenPatti_talkReq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_CHAT_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //  teenpatti 充值延迟
    // send_teenPatti_recharge_delay(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_2.TeenpattiCmd.CMD_C_USER_ADD_COIN_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },

    // ///////////、、、、、、、、、、、、、、、、、、teenPatti_joker 游戏请求协议 、、、、、、、、、、、、、、、/////////////////
    // //获取 teenPatti_joker 癞子游戏 游戏数据  1
    // send_tp_joker_GameStatus(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_GET_TABLE_STATUS_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // teenPatti_joker 匹配成功 已准备好   3
    // send_tp_joker_MatchReady(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_MATCH_READY_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // 向 teenPatti_joker 确定已经准备好   7
    // send_tp_joker_Confirm(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_GAME_READY_COMFIRM_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_joker 用户操作
    // send_tp_joker_userOperator(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_GAME_BET_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_joker 请求看牌
    // send_tp_joker_SeeCard_seq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_GAME_SEE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_joker 请求亮牌结算 show 
    // send_tp_joker_Show(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_GAME_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_joker 请求 sideShow 
    // send_tp_joker_SideShow(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_joker 请求 sideshow 答复
    // send_tp_joker_SideShowAnswer(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_ANSWER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_joker 请求继续游戏 
    // send_tp_joker_Continue(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_GAME_CONTINUE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_joker 请求离开
    // send_tp_joker_Leave(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_USER_CHAIR_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_joker 聊天
    // send_tp_joker_talkReq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_CHAT_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //  teenPatti_joker 充值延迟
    // send_tp_joker_recharge_delay(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_lai.TeenpattiCmd.CMD_C_USER_ADD_COIN_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },

    // ///////////、、、、、、、、、、、、、、、、、、teenPatti_jd 游戏请求协议 、、、、、、、、、、、、、、、/////////////////
    // //获取 teenPatti_jd 游戏数据  1
    // send_tp_jd_GameStatus(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_GET_TABLE_STATUS_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // teenPatti_jd 匹配成功 已准备好   3
    // send_tp_jd_MatchReady(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_MATCH_READY_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // 向 teenPatti_jd 确定已经准备好   7
    // send_tp_jd_Confirm(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_GAME_READY_COMFIRM_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 用户操作
    // send_tp_jd_userOperator(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_GAME_BET_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 请求看牌
    // send_tp_jd_SeeCard_seq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_GAME_SEE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 请求亮牌结算 show 
    // send_tp_jd_Show(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_GAME_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 请求 sideShow 
    // send_tp_jd_SideShow(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 请求 sideshow 答复
    // send_tp_jd_SideShowAnswer(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_ANSWER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 请求继续游戏 
    // send_tp_jd_Continue(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_GAME_CONTINUE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 请求离开
    // send_tp_jd_Leave(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_USER_CHAIR_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 聊天
    // send_tp_jd_talkReq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_CHAT_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenPatti_jd 充值延迟
    // send_tp_jd_recharge_delay(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_jd.TeenpattiCmd.CMD_C_USER_ADD_COIN_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },

    // ///////////、、、、、、、、、、、、、、、、、、teenPatti_star 游戏请求协议 、、、、、、、、、、、、、、、/////////////////
    // //获取 teenPatti_star 游戏数据  1
    // send_tp_star_GameStatus(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_GET_TABLE_STATUS_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // teenpatti_star 匹配成功 已准备好   3
    // send_tp_star_MatchReady(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_MATCH_READY_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // 向 teenpatti_star 确定已经准备好   7
    // send_tp_star_Confirm(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_GAME_READY_COMFIRM_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 用户操作
    // send_tp_star_userOperator(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_GAME_BET_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 请求看牌
    // send_tp_star_SeeCard_seq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_GAME_SEE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 请求亮牌结算 show
    // send_tp_star_Show(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_GAME_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 请求 sideShow
    // send_tp_star_SideShow(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 请求 sideshow 答复
    // send_tp_star_SideShowAnswer(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_ANSWER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 请求继续游戏
    // send_tp_star_Continue(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_GAME_CONTINUE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 请求离开
    // send_tp_star_Leave(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_USER_CHAIR_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 聊天
    // send_tp_star_talkReq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_CHAT_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_star 充值延迟
    // send_tp_star_recharge_delay(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_star.TeenpattiCmd.CMD_C_USER_ADD_COIN_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },

    // ///////////、、、、、、、、、、、、、、、、、、teenPatti_final 游戏请求协议 、、、、、、、、、、、、、、、/////////////////
    // //获取 teenPatti_final 游戏数据  1
    // send_tp_final_GameStatus(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_GET_TABLE_STATUS_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // teenpatti_final 匹配成功 已准备好   3
    // send_tp_final_MatchReady(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_MATCH_READY_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // 向 teenpatti_final 确定已经准备好   7
    // send_tp_final_Confirm(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_GAME_READY_COMFIRM_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 用户操作
    // send_tp_final_userOperator(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_GAME_BET_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 请求看牌
    // send_tp_final_SeeCard_seq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_GAME_SEE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 请求亮牌结算 show
    // send_tp_final_Show(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_GAME_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 请求 sideShow
    // send_tp_final_SideShow(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 请求 sideshow 答复
    // send_tp_final_SideShowAnswer(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_GAME_SIDE_SHOW_ANSWER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 请求继续游戏
    // send_tp_final_Continue(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_GAME_CONTINUE_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 请求离开
    // send_tp_final_Leave(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_USER_CHAIR_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 聊天
    // send_tp_final_talkReq(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_CHAT_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //teenpatti_final 充值延迟
    // send_tp_final_recharge_delay(ws, server_type, msg) {
    //     var proto = net_data.net_struct_new_with_protobuf(server_type, awesomeRoot.com.cw.chess2.teenpatti_final.TeenpattiCmd.CMD_C_USER_ADD_COIN_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },

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
    // sendDragonTigerGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_DROGON_TIGER_, awesomeRoot.com.cw.chess2.dragon_tiger.DragonTigerCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // 7up7down 请求进入游戏
    // sendSevenUpDownGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_SEVEN_UP_DOWN_, awesomeRoot.com.cw.chess2.sevenupdown.SevenUpDownCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // // AB请求进入游戏
    // sendAndarBaharGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_AB, awesomeRoot.com.cw.chess2.andarbahar.AndarBaharCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //munda请求进入游戏
    // sendJhandiMundaGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_JHANDI_MUNDA, awesomeRoot.com.cw.chess2.jhandimunda.JhanDimundaCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //carracing请求进入游戏
    // sendCarRacingGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_CAR_RACING, awesomeRoot.com.cw.chess2.carracing.CarRacingCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //wingo请求进入游戏
    // sendWinGoGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_WINGO_LOTTERY, awesomeRoot.com.cw.chess2.wingo.WinGoCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //fruitSlot请求进入游戏
    // sendFruitSlotGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_SLOT_FRUIT, awesomeRoot.com.cw.chess2.fruit.FruitCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //ROCKET请求进入游戏
    // sendRocketGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_ROCKET, awesomeRoot.com.cw.chess2.rocket.RocketCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
    // //DzPoker请求进入游戏
    // sendDzPokerGameEnterReq(ws, msg) {
    //     let proto = net_data.net_struct_new_with_protobuf(awesomeRoot.com.cw.chess2.platform.ServerType.SERVER_TYPE_TEXAS_BR, awesomeRoot.com.cw.chess2.texasbr.TexasBrCmd.CMD_C_GAME_ENTER_REQ, msg);
    //     this.send_net_raw_data(ws, proto);
    // },
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