/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal.js";
import Long from 'long';
$protobuf.default.util.Long = Long;
$protobuf.default.configure();

const $Reader = $protobuf.default.Reader, $Writer = $protobuf.default.Writer, $util = $protobuf.default.util;

const $root = {};

export const com = $root.com = (() => {

    const com = {};

    com.cw = (function() {

        const cw = {};

        cw.chess2 = (function() {

            const chess2 = {};

            chess2.andarbahar = (function() {

                const andarbahar = {};

                andarbahar.AndarBahar_S_Cmd = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_S_INVALID"] = 0;
                    values[valuesById[1] = "CMD_S_PING"] = 1;
                    values[valuesById[2] = "CMD_S_PONG"] = 2;
                    return values;
                })();

                andarbahar.TableData = (function() {

                    function TableData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    TableData.prototype.tableId = 0;
                    TableData.prototype.data = $util.newBuffer([]);

                    TableData.create = function create(properties) {
                        return new TableData(properties);
                    };

                    TableData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.tableId != null && Object.hasOwnProperty.call(m, "tableId"))
                            w.uint32(8).uint32(m.tableId);
                        if (m.data != null && Object.hasOwnProperty.call(m, "data"))
                            w.uint32(18).bytes(m.data);
                        return w;
                    };

                    TableData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.TableData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.tableId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.data = r.bytes();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    TableData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.TableData";
                    };

                    return TableData;
                })();

                andarbahar.MSG_C_COMMON_REQ = (function() {

                    function MSG_C_COMMON_REQ(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MSG_C_COMMON_REQ.create = function create(properties) {
                        return new MSG_C_COMMON_REQ(properties);
                    };

                    MSG_C_COMMON_REQ.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    MSG_C_COMMON_REQ.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.MSG_C_COMMON_REQ();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MSG_C_COMMON_REQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.MSG_C_COMMON_REQ";
                    };

                    return MSG_C_COMMON_REQ;
                })();

                andarbahar.MSG_C_COMMON_RESP = (function() {

                    function MSG_C_COMMON_RESP(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MSG_C_COMMON_RESP.prototype.result = 0;

                    MSG_C_COMMON_RESP.create = function create(properties) {
                        return new MSG_C_COMMON_RESP(properties);
                    };

                    MSG_C_COMMON_RESP.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(16).uint32(m.result);
                        return w;
                    };

                    MSG_C_COMMON_RESP.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.MSG_C_COMMON_RESP();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 2: {
                                    m.result = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MSG_C_COMMON_RESP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.MSG_C_COMMON_RESP";
                    };

                    return MSG_C_COMMON_RESP;
                })();

                andarbahar.AndarBaharCmd = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_C_INVALID"] = 0;
                    values[valuesById[1] = "CMD_C_GAME_ENTER_REQ"] = 1;
                    values[valuesById[2] = "CMD_C_GAME_ENTER_RESP"] = 2;
                    values[valuesById[3] = "CMD_C_GAME_GET_TABLE_STATUS_REQ"] = 3;
                    values[valuesById[4] = "CMD_C_GAME_GET_TABLE_STATUS_RESP"] = 4;
                    values[valuesById[5] = "CMD_C_GAME_BET_REQ"] = 5;
                    values[valuesById[6] = "CMD_C_GAME_BET_RESP"] = 6;
                    values[valuesById[7] = "CMD_C_GAME_REPEAT_BET_REQ"] = 7;
                    values[valuesById[8] = "CMD_C_GAME_REPEAT_BET_RESP"] = 8;
                    values[valuesById[9] = "CMD_C_GAME_LEAVE_REQ"] = 9;
                    values[valuesById[10] = "CMD_C_GAME_LEAVE_RESP"] = 10;
                    values[valuesById[12] = "CMD_C_GAME_READY_NOTICE_RESP"] = 12;
                    values[valuesById[14] = "CMD_C_GAME_START_NOTICE_RESP"] = 14;
                    values[valuesById[16] = "CMD_C_GAME_BET_NOTICE_RESP"] = 16;
                    values[valuesById[18] = "CMD_C_GAME_SHOW_RESULT_RESP"] = 18;
                    values[valuesById[20] = "CMD_C_GAME_SETTLE_NOTICE_RESP"] = 20;
                    values[valuesById[21] = "CMD_C_GAME_GET_PLAYERS_REQ"] = 21;
                    values[valuesById[22] = "CMD_C_GAME_GET_PLAYERS_RESP"] = 22;
                    values[valuesById[24] = "CMD_C_GAME_SYNC_CHAIR_RESP"] = 24;
                    values[valuesById[26] = "CMD_C_GAME_SYNC_BET_RESP"] = 26;
                    values[valuesById[28] = "CMD_C_GAME_SYNC_PLAYER_COUNT_RESP"] = 28;
                    values[valuesById[30] = "CMD_C_GAME_REPEAT_BET_NOTICE_RESP"] = 30;
                    values[valuesById[32] = "CMD_C_GAME_NO_BET_NOTICE_RESP"] = 32;
                    values[valuesById[34] = "CMD_C_GAME_SYNC_BALANCE_RESP"] = 34;
                    values[valuesById[41] = "CMD_C_GAME_GET_SELFRECORD_REQ"] = 41;
                    values[valuesById[42] = "CMD_C_GAME_GET_SELFRECORD_RESP"] = 42;
                    values[valuesById[43] = "CMD_C_GAME_GET_DRAWLIST_REQ"] = 43;
                    values[valuesById[44] = "CMD_C_GAME_GET_DRAWLIST_RESP"] = 44;
                    values[valuesById[45] = "CMD_C_GAME_GET_DRAWINFO_REQ"] = 45;
                    values[valuesById[46] = "CMD_C_GAME_GET_DRAWINFO_RESP"] = 46;
                    values[valuesById[62] = "CMD_C_CHAT_REQ"] = 62;
                    values[valuesById[63] = "CMD_C_CHAT_RESP"] = 63;
                    values[valuesById[100] = "CMD_C_MATCH_FINISH_REQ"] = 100;
                    values[valuesById[101] = "CMD_C_MATCH_FINISH_RESP"] = 101;
                    values[valuesById[102] = "CMD_C_GET_TABLE_EMPTY_REQ"] = 102;
                    values[valuesById[103] = "CMD_C_GET_TABLE_EMPTY_RESP"] = 103;
                    values[valuesById[200] = "CMD_C_CAN_UPDATE_BALANCE_REQ"] = 200;
                    return values;
                })();

                andarbahar.GamePhase = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "PHS_INVALID"] = 0;
                    values[valuesById[1] = "PHS_GAME_READY"] = 1;
                    values[valuesById[2] = "PHS_GAME_START"] = 2;
                    values[valuesById[3] = "PHS_GAME_BETTING"] = 3;
                    values[valuesById[4] = "PHS_GAME_RESULT"] = 4;
                    values[valuesById[5] = "PHS_GAME_SETTLE"] = 5;
                    return values;
                })();

                andarbahar.BetData = (function() {

                    function BetData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    BetData.prototype.index = 0;
                    BetData.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    BetData.create = function create(properties) {
                        return new BetData(properties);
                    };

                    BetData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                            w.uint32(8).uint32(m.index);
                        if (m.bet != null && Object.hasOwnProperty.call(m, "bet"))
                            w.uint32(16).int64(m.bet);
                        return w;
                    };

                    BetData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.BetData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.index = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.bet = r.int64();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    BetData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.BetData";
                    };

                    return BetData;
                })();

                andarbahar.UserBetList = (function() {

                    function UserBetList(p) {
                        this.bets = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    UserBetList.prototype.userId = 0;
                    UserBetList.prototype.bets = $util.emptyArray;

                    UserBetList.create = function create(properties) {
                        return new UserBetList(properties);
                    };

                    UserBetList.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(8).uint32(m.userId);
                        if (m.bets != null && m.bets.length) {
                            for (var i = 0; i < m.bets.length; ++i)
                                $root.com.cw.chess2.andarbahar.BetData.encode(m.bets[i], w.uint32(18).fork()).ldelim();
                        }
                        return w;
                    };

                    UserBetList.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.UserBetList();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    if (!(m.bets && m.bets.length))
                                        m.bets = [];
                                    m.bets.push($root.com.cw.chess2.andarbahar.BetData.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    UserBetList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.UserBetList";
                    };

                    return UserBetList;
                })();

                andarbahar.ChairStatus = (function() {

                    function ChairStatus(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    ChairStatus.prototype.bUser = 0;
                    ChairStatus.prototype.chairIndex = 0;
                    ChairStatus.prototype.user = null;

                    ChairStatus.create = function create(properties) {
                        return new ChairStatus(properties);
                    };

                    ChairStatus.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.bUser != null && Object.hasOwnProperty.call(m, "bUser"))
                            w.uint32(8).uint32(m.bUser);
                        if (m.chairIndex != null && Object.hasOwnProperty.call(m, "chairIndex"))
                            w.uint32(16).uint32(m.chairIndex);
                        if (m.user != null && Object.hasOwnProperty.call(m, "user"))
                            $root.com.cw.chess2.platform.GameUser.encode(m.user, w.uint32(26).fork()).ldelim();
                        return w;
                    };

                    ChairStatus.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.ChairStatus();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.bUser = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.chairIndex = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.user = $root.com.cw.chess2.platform.GameUser.decode(r, r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    ChairStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.ChairStatus";
                    };

                    return ChairStatus;
                })();

                andarbahar.AreaBet = (function() {

                    function AreaBet(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    AreaBet.prototype.totalBalance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    AreaBet.prototype.ownerBalance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    AreaBet.create = function create(properties) {
                        return new AreaBet(properties);
                    };

                    AreaBet.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.totalBalance != null && Object.hasOwnProperty.call(m, "totalBalance"))
                            w.uint32(8).int64(m.totalBalance);
                        if (m.ownerBalance != null && Object.hasOwnProperty.call(m, "ownerBalance"))
                            w.uint32(16).int64(m.ownerBalance);
                        return w;
                    };

                    AreaBet.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.AreaBet();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.totalBalance = r.int64();
                                    break;
                                }
                            case 2: {
                                    m.ownerBalance = r.int64();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    AreaBet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.AreaBet";
                    };

                    return AreaBet;
                })();

                andarbahar.RoadData = (function() {

                    function RoadData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    RoadData.prototype.winner = 0;
                    RoadData.prototype.nums = 0;

                    RoadData.create = function create(properties) {
                        return new RoadData(properties);
                    };

                    RoadData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.winner != null && Object.hasOwnProperty.call(m, "winner"))
                            w.uint32(8).uint32(m.winner);
                        if (m.nums != null && Object.hasOwnProperty.call(m, "nums"))
                            w.uint32(16).uint32(m.nums);
                        return w;
                    };

                    RoadData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.RoadData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.winner = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.nums = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    RoadData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.RoadData";
                    };

                    return RoadData;
                })();

                andarbahar.GameGetTableStatusReq = (function() {

                    function GameGetTableStatusReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameGetTableStatusReq.create = function create(properties) {
                        return new GameGetTableStatusReq(properties);
                    };

                    GameGetTableStatusReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    GameGetTableStatusReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameGetTableStatusReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameGetTableStatusReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameGetTableStatusReq";
                    };

                    return GameGetTableStatusReq;
                })();

                andarbahar.GameGetTableStatusResp = (function() {

                    function GameGetTableStatusResp(p) {
                        this.chairs = [];
                        this.areaBets = [];
                        this.betList = [];
                        this.road = [];
                        this.cardsA = [];
                        this.cardsB = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameGetTableStatusResp.prototype.desc = null;
                    GameGetTableStatusResp.prototype.roundId = "";
                    GameGetTableStatusResp.prototype.gamePhase = 0;
                    GameGetTableStatusResp.prototype.timeCount = 0;
                    GameGetTableStatusResp.prototype.timeLimit = 0;
                    GameGetTableStatusResp.prototype.chairs = $util.emptyArray;
                    GameGetTableStatusResp.prototype.self = null;
                    GameGetTableStatusResp.prototype.areaBets = $util.emptyArray;
                    GameGetTableStatusResp.prototype.betList = $util.emptyArray;
                    GameGetTableStatusResp.prototype.road = $util.emptyArray;
                    GameGetTableStatusResp.prototype.repeatBet = 0;
                    GameGetTableStatusResp.prototype.playerCount = 0;
                    GameGetTableStatusResp.prototype.winner = 0;
                    GameGetTableStatusResp.prototype.joker = 0;
                    GameGetTableStatusResp.prototype.nums = 0;
                    GameGetTableStatusResp.prototype.cardsA = $util.emptyArray;
                    GameGetTableStatusResp.prototype.cardsB = $util.emptyArray;
                    GameGetTableStatusResp.prototype.secretKey = "";
                    GameGetTableStatusResp.prototype.encryptKey = "";
                    GameGetTableStatusResp.prototype.encryptResult = "";
                    GameGetTableStatusResp.prototype.currencyStr = "";
                    GameGetTableStatusResp.prototype.resultOriStr = "";

                    GameGetTableStatusResp.create = function create(properties) {
                        return new GameGetTableStatusResp(properties);
                    };

                    GameGetTableStatusResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.desc != null && Object.hasOwnProperty.call(m, "desc"))
                            $root.com.cw.chess2.platform.AndarBaharLevelDesc.encode(m.desc, w.uint32(10).fork()).ldelim();
                        if (m.roundId != null && Object.hasOwnProperty.call(m, "roundId"))
                            w.uint32(18).string(m.roundId);
                        if (m.gamePhase != null && Object.hasOwnProperty.call(m, "gamePhase"))
                            w.uint32(24).int32(m.gamePhase);
                        if (m.timeCount != null && Object.hasOwnProperty.call(m, "timeCount"))
                            w.uint32(32).uint32(m.timeCount);
                        if (m.timeLimit != null && Object.hasOwnProperty.call(m, "timeLimit"))
                            w.uint32(40).uint32(m.timeLimit);
                        if (m.chairs != null && m.chairs.length) {
                            for (var i = 0; i < m.chairs.length; ++i)
                                $root.com.cw.chess2.andarbahar.ChairStatus.encode(m.chairs[i], w.uint32(50).fork()).ldelim();
                        }
                        if (m.self != null && Object.hasOwnProperty.call(m, "self"))
                            $root.com.cw.chess2.platform.GameUser.encode(m.self, w.uint32(58).fork()).ldelim();
                        if (m.areaBets != null && m.areaBets.length) {
                            for (var i = 0; i < m.areaBets.length; ++i)
                                $root.com.cw.chess2.andarbahar.AreaBet.encode(m.areaBets[i], w.uint32(66).fork()).ldelim();
                        }
                        if (m.betList != null && m.betList.length) {
                            for (var i = 0; i < m.betList.length; ++i)
                                $root.com.cw.chess2.andarbahar.UserBetList.encode(m.betList[i], w.uint32(74).fork()).ldelim();
                        }
                        if (m.road != null && m.road.length) {
                            for (var i = 0; i < m.road.length; ++i)
                                $root.com.cw.chess2.andarbahar.RoadData.encode(m.road[i], w.uint32(82).fork()).ldelim();
                        }
                        if (m.repeatBet != null && Object.hasOwnProperty.call(m, "repeatBet"))
                            w.uint32(88).uint32(m.repeatBet);
                        if (m.playerCount != null && Object.hasOwnProperty.call(m, "playerCount"))
                            w.uint32(96).uint32(m.playerCount);
                        if (m.winner != null && Object.hasOwnProperty.call(m, "winner"))
                            w.uint32(104).uint32(m.winner);
                        if (m.joker != null && Object.hasOwnProperty.call(m, "joker"))
                            w.uint32(112).uint32(m.joker);
                        if (m.nums != null && Object.hasOwnProperty.call(m, "nums"))
                            w.uint32(120).uint32(m.nums);
                        if (m.cardsA != null && m.cardsA.length) {
                            w.uint32(130).fork();
                            for (var i = 0; i < m.cardsA.length; ++i)
                                w.uint32(m.cardsA[i]);
                            w.ldelim();
                        }
                        if (m.cardsB != null && m.cardsB.length) {
                            w.uint32(138).fork();
                            for (var i = 0; i < m.cardsB.length; ++i)
                                w.uint32(m.cardsB[i]);
                            w.ldelim();
                        }
                        if (m.secretKey != null && Object.hasOwnProperty.call(m, "secretKey"))
                            w.uint32(146).string(m.secretKey);
                        if (m.encryptKey != null && Object.hasOwnProperty.call(m, "encryptKey"))
                            w.uint32(154).string(m.encryptKey);
                        if (m.encryptResult != null && Object.hasOwnProperty.call(m, "encryptResult"))
                            w.uint32(162).string(m.encryptResult);
                        if (m.currencyStr != null && Object.hasOwnProperty.call(m, "currencyStr"))
                            w.uint32(170).string(m.currencyStr);
                        if (m.resultOriStr != null && Object.hasOwnProperty.call(m, "resultOriStr"))
                            w.uint32(178).string(m.resultOriStr);
                        return w;
                    };

                    GameGetTableStatusResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameGetTableStatusResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.desc = $root.com.cw.chess2.platform.AndarBaharLevelDesc.decode(r, r.uint32());
                                    break;
                                }
                            case 2: {
                                    m.roundId = r.string();
                                    break;
                                }
                            case 3: {
                                    m.gamePhase = r.int32();
                                    break;
                                }
                            case 4: {
                                    m.timeCount = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.timeLimit = r.uint32();
                                    break;
                                }
                            case 6: {
                                    if (!(m.chairs && m.chairs.length))
                                        m.chairs = [];
                                    m.chairs.push($root.com.cw.chess2.andarbahar.ChairStatus.decode(r, r.uint32()));
                                    break;
                                }
                            case 7: {
                                    m.self = $root.com.cw.chess2.platform.GameUser.decode(r, r.uint32());
                                    break;
                                }
                            case 8: {
                                    if (!(m.areaBets && m.areaBets.length))
                                        m.areaBets = [];
                                    m.areaBets.push($root.com.cw.chess2.andarbahar.AreaBet.decode(r, r.uint32()));
                                    break;
                                }
                            case 9: {
                                    if (!(m.betList && m.betList.length))
                                        m.betList = [];
                                    m.betList.push($root.com.cw.chess2.andarbahar.UserBetList.decode(r, r.uint32()));
                                    break;
                                }
                            case 10: {
                                    if (!(m.road && m.road.length))
                                        m.road = [];
                                    m.road.push($root.com.cw.chess2.andarbahar.RoadData.decode(r, r.uint32()));
                                    break;
                                }
                            case 11: {
                                    m.repeatBet = r.uint32();
                                    break;
                                }
                            case 12: {
                                    m.playerCount = r.uint32();
                                    break;
                                }
                            case 13: {
                                    m.winner = r.uint32();
                                    break;
                                }
                            case 14: {
                                    m.joker = r.uint32();
                                    break;
                                }
                            case 15: {
                                    m.nums = r.uint32();
                                    break;
                                }
                            case 16: {
                                    if (!(m.cardsA && m.cardsA.length))
                                        m.cardsA = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.cardsA.push(r.uint32());
                                    } else
                                        m.cardsA.push(r.uint32());
                                    break;
                                }
                            case 17: {
                                    if (!(m.cardsB && m.cardsB.length))
                                        m.cardsB = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.cardsB.push(r.uint32());
                                    } else
                                        m.cardsB.push(r.uint32());
                                    break;
                                }
                            case 18: {
                                    m.secretKey = r.string();
                                    break;
                                }
                            case 19: {
                                    m.encryptKey = r.string();
                                    break;
                                }
                            case 20: {
                                    m.encryptResult = r.string();
                                    break;
                                }
                            case 21: {
                                    m.currencyStr = r.string();
                                    break;
                                }
                            case 22: {
                                    m.resultOriStr = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameGetTableStatusResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameGetTableStatusResp";
                    };

                    return GameGetTableStatusResp;
                })();

                andarbahar.GameGetTableEmptyResp = (function() {

                    function GameGetTableEmptyResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameGetTableEmptyResp.create = function create(properties) {
                        return new GameGetTableEmptyResp(properties);
                    };

                    GameGetTableEmptyResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    GameGetTableEmptyResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameGetTableEmptyResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameGetTableEmptyResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameGetTableEmptyResp";
                    };

                    return GameGetTableEmptyResp;
                })();

                andarbahar.GameEnterReq = (function() {

                    function GameEnterReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameEnterReq.create = function create(properties) {
                        return new GameEnterReq(properties);
                    };

                    GameEnterReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    GameEnterReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameEnterReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameEnterReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameEnterReq";
                    };

                    return GameEnterReq;
                })();

                andarbahar.GameEnterResp = (function() {

                    function GameEnterResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameEnterResp.prototype.result = 0;

                    GameEnterResp.create = function create(properties) {
                        return new GameEnterResp(properties);
                    };

                    GameEnterResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        return w;
                    };

                    GameEnterResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameEnterResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameEnterResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameEnterResp";
                    };

                    return GameEnterResp;
                })();

                andarbahar.GameBetReq = (function() {

                    function GameBetReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameBetReq.prototype.index = 0;
                    GameBetReq.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    GameBetReq.create = function create(properties) {
                        return new GameBetReq(properties);
                    };

                    GameBetReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                            w.uint32(8).uint32(m.index);
                        if (m.bet != null && Object.hasOwnProperty.call(m, "bet"))
                            w.uint32(16).int64(m.bet);
                        return w;
                    };

                    GameBetReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameBetReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.index = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.bet = r.int64();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameBetReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameBetReq";
                    };

                    return GameBetReq;
                })();

                andarbahar.GameBetResp = (function() {

                    function GameBetResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameBetResp.prototype.result = 0;
                    GameBetResp.prototype.index = 0;
                    GameBetResp.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    GameBetResp.prototype.myBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    GameBetResp.prototype.totalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    GameBetResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    GameBetResp.create = function create(properties) {
                        return new GameBetResp(properties);
                    };

                    GameBetResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                            w.uint32(16).uint32(m.index);
                        if (m.bet != null && Object.hasOwnProperty.call(m, "bet"))
                            w.uint32(24).int64(m.bet);
                        if (m.myBet != null && Object.hasOwnProperty.call(m, "myBet"))
                            w.uint32(32).int64(m.myBet);
                        if (m.totalBet != null && Object.hasOwnProperty.call(m, "totalBet"))
                            w.uint32(40).int64(m.totalBet);
                        if (m.balance != null && Object.hasOwnProperty.call(m, "balance"))
                            w.uint32(48).int64(m.balance);
                        return w;
                    };

                    GameBetResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameBetResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.index = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.bet = r.int64();
                                    break;
                                }
                            case 4: {
                                    m.myBet = r.int64();
                                    break;
                                }
                            case 5: {
                                    m.totalBet = r.int64();
                                    break;
                                }
                            case 6: {
                                    m.balance = r.int64();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameBetResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameBetResp";
                    };

                    return GameBetResp;
                })();

                andarbahar.GameBettingNotify = (function() {

                    function GameBettingNotify(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameBettingNotify.prototype.index = 0;
                    GameBettingNotify.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    GameBettingNotify.prototype.totalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    GameBettingNotify.prototype.userId = 0;
                    GameBettingNotify.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    GameBettingNotify.create = function create(properties) {
                        return new GameBettingNotify(properties);
                    };

                    GameBettingNotify.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                            w.uint32(8).uint32(m.index);
                        if (m.bet != null && Object.hasOwnProperty.call(m, "bet"))
                            w.uint32(16).int64(m.bet);
                        if (m.totalBet != null && Object.hasOwnProperty.call(m, "totalBet"))
                            w.uint32(24).int64(m.totalBet);
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(32).uint32(m.userId);
                        if (m.balance != null && Object.hasOwnProperty.call(m, "balance"))
                            w.uint32(40).int64(m.balance);
                        return w;
                    };

                    GameBettingNotify.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameBettingNotify();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.index = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.bet = r.int64();
                                    break;
                                }
                            case 3: {
                                    m.totalBet = r.int64();
                                    break;
                                }
                            case 4: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.balance = r.int64();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameBettingNotify.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameBettingNotify";
                    };

                    return GameBettingNotify;
                })();

                andarbahar.GameRepeatBetReq = (function() {

                    function GameRepeatBetReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameRepeatBetReq.create = function create(properties) {
                        return new GameRepeatBetReq(properties);
                    };

                    GameRepeatBetReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    GameRepeatBetReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameRepeatBetReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameRepeatBetReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameRepeatBetReq";
                    };

                    return GameRepeatBetReq;
                })();

                andarbahar.GameRepeatBetNoticeResp = (function() {

                    function GameRepeatBetNoticeResp(p) {
                        this.areaBets = [];
                        this.list = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameRepeatBetNoticeResp.prototype.userId = 0;
                    GameRepeatBetNoticeResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    GameRepeatBetNoticeResp.prototype.areaBets = $util.emptyArray;
                    GameRepeatBetNoticeResp.prototype.list = $util.emptyArray;

                    GameRepeatBetNoticeResp.create = function create(properties) {
                        return new GameRepeatBetNoticeResp(properties);
                    };

                    GameRepeatBetNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(8).uint32(m.userId);
                        if (m.balance != null && Object.hasOwnProperty.call(m, "balance"))
                            w.uint32(16).int64(m.balance);
                        if (m.areaBets != null && m.areaBets.length) {
                            w.uint32(26).fork();
                            for (var i = 0; i < m.areaBets.length; ++i)
                                w.uint32(m.areaBets[i]);
                            w.ldelim();
                        }
                        if (m.list != null && m.list.length) {
                            for (var i = 0; i < m.list.length; ++i)
                                $root.com.cw.chess2.andarbahar.BetData.encode(m.list[i], w.uint32(34).fork()).ldelim();
                        }
                        return w;
                    };

                    GameRepeatBetNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameRepeatBetNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.balance = r.int64();
                                    break;
                                }
                            case 3: {
                                    if (!(m.areaBets && m.areaBets.length))
                                        m.areaBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.areaBets.push(r.uint32());
                                    } else
                                        m.areaBets.push(r.uint32());
                                    break;
                                }
                            case 4: {
                                    if (!(m.list && m.list.length))
                                        m.list = [];
                                    m.list.push($root.com.cw.chess2.andarbahar.BetData.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameRepeatBetNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameRepeatBetNoticeResp";
                    };

                    return GameRepeatBetNoticeResp;
                })();

                andarbahar.GameRepeatBetResp = (function() {

                    function GameRepeatBetResp(p) {
                        this.areaBets = [];
                        this.list = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameRepeatBetResp.prototype.result = 0;
                    GameRepeatBetResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    GameRepeatBetResp.prototype.areaBets = $util.emptyArray;
                    GameRepeatBetResp.prototype.list = $util.emptyArray;

                    GameRepeatBetResp.create = function create(properties) {
                        return new GameRepeatBetResp(properties);
                    };

                    GameRepeatBetResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        if (m.balance != null && Object.hasOwnProperty.call(m, "balance"))
                            w.uint32(16).int64(m.balance);
                        if (m.areaBets != null && m.areaBets.length) {
                            for (var i = 0; i < m.areaBets.length; ++i)
                                $root.com.cw.chess2.andarbahar.AreaBet.encode(m.areaBets[i], w.uint32(26).fork()).ldelim();
                        }
                        if (m.list != null && m.list.length) {
                            for (var i = 0; i < m.list.length; ++i)
                                $root.com.cw.chess2.andarbahar.BetData.encode(m.list[i], w.uint32(34).fork()).ldelim();
                        }
                        return w;
                    };

                    GameRepeatBetResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameRepeatBetResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.balance = r.int64();
                                    break;
                                }
                            case 3: {
                                    if (!(m.areaBets && m.areaBets.length))
                                        m.areaBets = [];
                                    m.areaBets.push($root.com.cw.chess2.andarbahar.AreaBet.decode(r, r.uint32()));
                                    break;
                                }
                            case 4: {
                                    if (!(m.list && m.list.length))
                                        m.list = [];
                                    m.list.push($root.com.cw.chess2.andarbahar.BetData.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameRepeatBetResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameRepeatBetResp";
                    };

                    return GameRepeatBetResp;
                })();

                andarbahar.GameLeaveReq = (function() {

                    function GameLeaveReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameLeaveReq.create = function create(properties) {
                        return new GameLeaveReq(properties);
                    };

                    GameLeaveReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    GameLeaveReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameLeaveReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameLeaveReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameLeaveReq";
                    };

                    return GameLeaveReq;
                })();

                andarbahar.GameLeaveResp = (function() {

                    function GameLeaveResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameLeaveResp.prototype.result = 0;

                    GameLeaveResp.create = function create(properties) {
                        return new GameLeaveResp(properties);
                    };

                    GameLeaveResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        return w;
                    };

                    GameLeaveResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameLeaveResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameLeaveResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameLeaveResp";
                    };

                    return GameLeaveResp;
                })();

                andarbahar.GameReadyNoticeResp = (function() {

                    function GameReadyNoticeResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameReadyNoticeResp.create = function create(properties) {
                        return new GameReadyNoticeResp(properties);
                    };

                    GameReadyNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    GameReadyNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameReadyNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameReadyNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameReadyNoticeResp";
                    };

                    return GameReadyNoticeResp;
                })();

                andarbahar.GameStartNoticeResp = (function() {

                    function GameStartNoticeResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameStartNoticeResp.prototype.joker = 0;

                    GameStartNoticeResp.create = function create(properties) {
                        return new GameStartNoticeResp(properties);
                    };

                    GameStartNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.joker != null && Object.hasOwnProperty.call(m, "joker"))
                            w.uint32(8).uint32(m.joker);
                        return w;
                    };

                    GameStartNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameStartNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.joker = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameStartNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameStartNoticeResp";
                    };

                    return GameStartNoticeResp;
                })();

                andarbahar.GameBetNoticeResp = (function() {

                    function GameBetNoticeResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameBetNoticeResp.prototype.count = 0;
                    GameBetNoticeResp.prototype.repeatBet = 0;
                    GameBetNoticeResp.prototype.encryptKey = "";
                    GameBetNoticeResp.prototype.encryptResult = "";
                    GameBetNoticeResp.prototype.period = "";

                    GameBetNoticeResp.create = function create(properties) {
                        return new GameBetNoticeResp(properties);
                    };

                    GameBetNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                            w.uint32(8).uint32(m.count);
                        if (m.repeatBet != null && Object.hasOwnProperty.call(m, "repeatBet"))
                            w.uint32(16).uint32(m.repeatBet);
                        if (m.encryptKey != null && Object.hasOwnProperty.call(m, "encryptKey"))
                            w.uint32(26).string(m.encryptKey);
                        if (m.encryptResult != null && Object.hasOwnProperty.call(m, "encryptResult"))
                            w.uint32(34).string(m.encryptResult);
                        if (m.period != null && Object.hasOwnProperty.call(m, "period"))
                            w.uint32(42).string(m.period);
                        return w;
                    };

                    GameBetNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameBetNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.count = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.repeatBet = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.encryptKey = r.string();
                                    break;
                                }
                            case 4: {
                                    m.encryptResult = r.string();
                                    break;
                                }
                            case 5: {
                                    m.period = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameBetNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameBetNoticeResp";
                    };

                    return GameBetNoticeResp;
                })();

                andarbahar.GameResultResp = (function() {

                    function GameResultResp(p) {
                        this.cardsA = [];
                        this.cardsB = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameResultResp.prototype.winner = 0;
                    GameResultResp.prototype.joker = 0;
                    GameResultResp.prototype.nums = 0;
                    GameResultResp.prototype.cardsA = $util.emptyArray;
                    GameResultResp.prototype.cardsB = $util.emptyArray;
                    GameResultResp.prototype.secretKey = "";
                    GameResultResp.prototype.period = "";
                    GameResultResp.prototype.resultOriStr = "";

                    GameResultResp.create = function create(properties) {
                        return new GameResultResp(properties);
                    };

                    GameResultResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.winner != null && Object.hasOwnProperty.call(m, "winner"))
                            w.uint32(8).uint32(m.winner);
                        if (m.joker != null && Object.hasOwnProperty.call(m, "joker"))
                            w.uint32(16).uint32(m.joker);
                        if (m.nums != null && Object.hasOwnProperty.call(m, "nums"))
                            w.uint32(24).uint32(m.nums);
                        if (m.cardsA != null && m.cardsA.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.cardsA.length; ++i)
                                w.uint32(m.cardsA[i]);
                            w.ldelim();
                        }
                        if (m.cardsB != null && m.cardsB.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.cardsB.length; ++i)
                                w.uint32(m.cardsB[i]);
                            w.ldelim();
                        }
                        if (m.secretKey != null && Object.hasOwnProperty.call(m, "secretKey"))
                            w.uint32(50).string(m.secretKey);
                        if (m.period != null && Object.hasOwnProperty.call(m, "period"))
                            w.uint32(58).string(m.period);
                        if (m.resultOriStr != null && Object.hasOwnProperty.call(m, "resultOriStr"))
                            w.uint32(66).string(m.resultOriStr);
                        return w;
                    };

                    GameResultResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameResultResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.winner = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.joker = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.nums = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.cardsA && m.cardsA.length))
                                        m.cardsA = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.cardsA.push(r.uint32());
                                    } else
                                        m.cardsA.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.cardsB && m.cardsB.length))
                                        m.cardsB = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.cardsB.push(r.uint32());
                                    } else
                                        m.cardsB.push(r.uint32());
                                    break;
                                }
                            case 6: {
                                    m.secretKey = r.string();
                                    break;
                                }
                            case 7: {
                                    m.period = r.string();
                                    break;
                                }
                            case 8: {
                                    m.resultOriStr = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameResultResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameResultResp";
                    };

                    return GameResultResp;
                })();

                andarbahar.WinnerBalance = (function() {

                    function WinnerBalance(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    WinnerBalance.prototype.index = 0;
                    WinnerBalance.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    WinnerBalance.prototype.bets = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    WinnerBalance.create = function create(properties) {
                        return new WinnerBalance(properties);
                    };

                    WinnerBalance.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.index != null && Object.hasOwnProperty.call(m, "index"))
                            w.uint32(8).uint32(m.index);
                        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                            w.uint32(16).int64(m.amount);
                        if (m.bets != null && Object.hasOwnProperty.call(m, "bets"))
                            w.uint32(24).int64(m.bets);
                        return w;
                    };

                    WinnerBalance.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.WinnerBalance();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.index = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.amount = r.int64();
                                    break;
                                }
                            case 3: {
                                    m.bets = r.int64();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    WinnerBalance.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.WinnerBalance";
                    };

                    return WinnerBalance;
                })();

                andarbahar.WinnerData = (function() {

                    function WinnerData(p) {
                        this.wins = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    WinnerData.prototype.userId = 0;
                    WinnerData.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    WinnerData.prototype.wins = $util.emptyArray;

                    WinnerData.create = function create(properties) {
                        return new WinnerData(properties);
                    };

                    WinnerData.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(8).uint32(m.userId);
                        if (m.balance != null && Object.hasOwnProperty.call(m, "balance"))
                            w.uint32(16).int64(m.balance);
                        if (m.wins != null && m.wins.length) {
                            for (var i = 0; i < m.wins.length; ++i)
                                $root.com.cw.chess2.andarbahar.WinnerBalance.encode(m.wins[i], w.uint32(26).fork()).ldelim();
                        }
                        return w;
                    };

                    WinnerData.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.WinnerData();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.balance = r.int64();
                                    break;
                                }
                            case 3: {
                                    if (!(m.wins && m.wins.length))
                                        m.wins = [];
                                    m.wins.push($root.com.cw.chess2.andarbahar.WinnerBalance.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    WinnerData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.WinnerData";
                    };

                    return WinnerData;
                })();

                andarbahar.GameWinNoticeResp = (function() {

                    function GameWinNoticeResp(p) {
                        this.winners = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameWinNoticeResp.prototype.winners = $util.emptyArray;

                    GameWinNoticeResp.create = function create(properties) {
                        return new GameWinNoticeResp(properties);
                    };

                    GameWinNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.winners != null && m.winners.length) {
                            for (var i = 0; i < m.winners.length; ++i)
                                $root.com.cw.chess2.andarbahar.WinnerData.encode(m.winners[i], w.uint32(10).fork()).ldelim();
                        }
                        return w;
                    };

                    GameWinNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameWinNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.winners && m.winners.length))
                                        m.winners = [];
                                    m.winners.push($root.com.cw.chess2.andarbahar.WinnerData.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameWinNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameWinNoticeResp";
                    };

                    return GameWinNoticeResp;
                })();

                andarbahar.GameGetPlayersReq = (function() {

                    function GameGetPlayersReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameGetPlayersReq.prototype.page = 0;

                    GameGetPlayersReq.create = function create(properties) {
                        return new GameGetPlayersReq(properties);
                    };

                    GameGetPlayersReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                            w.uint32(8).uint32(m.page);
                        return w;
                    };

                    GameGetPlayersReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameGetPlayersReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.page = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameGetPlayersReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameGetPlayersReq";
                    };

                    return GameGetPlayersReq;
                })();

                andarbahar.GameGetPlayersResp = (function() {

                    function GameGetPlayersResp(p) {
                        this.users = [];
                        this.winUsers = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameGetPlayersResp.prototype.users = $util.emptyArray;
                    GameGetPlayersResp.prototype.winUsers = $util.emptyArray;
                    GameGetPlayersResp.prototype.page = 0;
                    GameGetPlayersResp.prototype.count = 0;

                    GameGetPlayersResp.create = function create(properties) {
                        return new GameGetPlayersResp(properties);
                    };

                    GameGetPlayersResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.users != null && m.users.length) {
                            for (var i = 0; i < m.users.length; ++i)
                                $root.com.cw.chess2.platform.GameUser.encode(m.users[i], w.uint32(10).fork()).ldelim();
                        }
                        if (m.winUsers != null && m.winUsers.length) {
                            for (var i = 0; i < m.winUsers.length; ++i)
                                $root.com.cw.chess2.platform.GameUser.encode(m.winUsers[i], w.uint32(18).fork()).ldelim();
                        }
                        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                            w.uint32(24).uint32(m.page);
                        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                            w.uint32(32).uint32(m.count);
                        return w;
                    };

                    GameGetPlayersResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameGetPlayersResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.users && m.users.length))
                                        m.users = [];
                                    m.users.push($root.com.cw.chess2.platform.GameUser.decode(r, r.uint32()));
                                    break;
                                }
                            case 2: {
                                    if (!(m.winUsers && m.winUsers.length))
                                        m.winUsers = [];
                                    m.winUsers.push($root.com.cw.chess2.platform.GameUser.decode(r, r.uint32()));
                                    break;
                                }
                            case 3: {
                                    m.page = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.count = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameGetPlayersResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameGetPlayersResp";
                    };

                    return GameGetPlayersResp;
                })();

                andarbahar.GameSyncChairResp = (function() {

                    function GameSyncChairResp(p) {
                        this.chairs = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameSyncChairResp.prototype.chairs = $util.emptyArray;

                    GameSyncChairResp.create = function create(properties) {
                        return new GameSyncChairResp(properties);
                    };

                    GameSyncChairResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.chairs != null && m.chairs.length) {
                            for (var i = 0; i < m.chairs.length; ++i)
                                $root.com.cw.chess2.andarbahar.ChairStatus.encode(m.chairs[i], w.uint32(10).fork()).ldelim();
                        }
                        return w;
                    };

                    GameSyncChairResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameSyncChairResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.chairs && m.chairs.length))
                                        m.chairs = [];
                                    m.chairs.push($root.com.cw.chess2.andarbahar.ChairStatus.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameSyncChairResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameSyncChairResp";
                    };

                    return GameSyncChairResp;
                })();

                andarbahar.GameSyncPlayerCountResp = (function() {

                    function GameSyncPlayerCountResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameSyncPlayerCountResp.prototype.count = 0;

                    GameSyncPlayerCountResp.create = function create(properties) {
                        return new GameSyncPlayerCountResp(properties);
                    };

                    GameSyncPlayerCountResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                            w.uint32(8).uint32(m.count);
                        return w;
                    };

                    GameSyncPlayerCountResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameSyncPlayerCountResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.count = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameSyncPlayerCountResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameSyncPlayerCountResp";
                    };

                    return GameSyncPlayerCountResp;
                })();

                andarbahar.GameNoBetNoticeResp = (function() {

                    function GameNoBetNoticeResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameNoBetNoticeResp.prototype.count = 0;

                    GameNoBetNoticeResp.create = function create(properties) {
                        return new GameNoBetNoticeResp(properties);
                    };

                    GameNoBetNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                            w.uint32(8).uint32(m.count);
                        return w;
                    };

                    GameNoBetNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameNoBetNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.count = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameNoBetNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameNoBetNoticeResp";
                    };

                    return GameNoBetNoticeResp;
                })();

                andarbahar.GameSyncBalanceResp = (function() {

                    function GameSyncBalanceResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameSyncBalanceResp.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    GameSyncBalanceResp.create = function create(properties) {
                        return new GameSyncBalanceResp(properties);
                    };

                    GameSyncBalanceResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.balance != null && Object.hasOwnProperty.call(m, "balance"))
                            w.uint32(8).int64(m.balance);
                        return w;
                    };

                    GameSyncBalanceResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GameSyncBalanceResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.balance = r.int64();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameSyncBalanceResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GameSyncBalanceResp";
                    };

                    return GameSyncBalanceResp;
                })();

                andarbahar.RecordInfo = (function() {

                    function RecordInfo(p) {
                        this.cardsA = [];
                        this.cardsB = [];
                        this.wins = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    RecordInfo.prototype.period = "";
                    RecordInfo.prototype.joker = 0;
                    RecordInfo.prototype.nums = 0;
                    RecordInfo.prototype.cardsA = $util.emptyArray;
                    RecordInfo.prototype.cardsB = $util.emptyArray;
                    RecordInfo.prototype.wins = $util.emptyArray;
                    RecordInfo.prototype.winlose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    RecordInfo.prototype.betTime = 0;

                    RecordInfo.create = function create(properties) {
                        return new RecordInfo(properties);
                    };

                    RecordInfo.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.period != null && Object.hasOwnProperty.call(m, "period"))
                            w.uint32(10).string(m.period);
                        if (m.joker != null && Object.hasOwnProperty.call(m, "joker"))
                            w.uint32(16).uint32(m.joker);
                        if (m.nums != null && Object.hasOwnProperty.call(m, "nums"))
                            w.uint32(24).uint32(m.nums);
                        if (m.cardsA != null && m.cardsA.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.cardsA.length; ++i)
                                w.uint32(m.cardsA[i]);
                            w.ldelim();
                        }
                        if (m.cardsB != null && m.cardsB.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.cardsB.length; ++i)
                                w.uint32(m.cardsB[i]);
                            w.ldelim();
                        }
                        if (m.wins != null && m.wins.length) {
                            for (var i = 0; i < m.wins.length; ++i)
                                $root.com.cw.chess2.andarbahar.WinnerBalance.encode(m.wins[i], w.uint32(50).fork()).ldelim();
                        }
                        if (m.winlose != null && Object.hasOwnProperty.call(m, "winlose"))
                            w.uint32(56).int64(m.winlose);
                        if (m.betTime != null && Object.hasOwnProperty.call(m, "betTime"))
                            w.uint32(64).uint32(m.betTime);
                        return w;
                    };

                    RecordInfo.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.RecordInfo();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.period = r.string();
                                    break;
                                }
                            case 2: {
                                    m.joker = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.nums = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.cardsA && m.cardsA.length))
                                        m.cardsA = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.cardsA.push(r.uint32());
                                    } else
                                        m.cardsA.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.cardsB && m.cardsB.length))
                                        m.cardsB = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.cardsB.push(r.uint32());
                                    } else
                                        m.cardsB.push(r.uint32());
                                    break;
                                }
                            case 6: {
                                    if (!(m.wins && m.wins.length))
                                        m.wins = [];
                                    m.wins.push($root.com.cw.chess2.andarbahar.WinnerBalance.decode(r, r.uint32()));
                                    break;
                                }
                            case 7: {
                                    m.winlose = r.int64();
                                    break;
                                }
                            case 8: {
                                    m.betTime = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    RecordInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.RecordInfo";
                    };

                    return RecordInfo;
                })();

                andarbahar.GetSelfRecordReq = (function() {

                    function GetSelfRecordReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GetSelfRecordReq.prototype.page = 0;
                    GetSelfRecordReq.prototype.pageSize = 0;

                    GetSelfRecordReq.create = function create(properties) {
                        return new GetSelfRecordReq(properties);
                    };

                    GetSelfRecordReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                            w.uint32(8).uint32(m.page);
                        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                            w.uint32(16).uint32(m.pageSize);
                        return w;
                    };

                    GetSelfRecordReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GetSelfRecordReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.page = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.pageSize = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GetSelfRecordReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GetSelfRecordReq";
                    };

                    return GetSelfRecordReq;
                })();

                andarbahar.GetSelfRecordResp = (function() {

                    function GetSelfRecordResp(p) {
                        this.records = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GetSelfRecordResp.prototype.records = $util.emptyArray;
                    GetSelfRecordResp.prototype.page = 0;
                    GetSelfRecordResp.prototype.pageSize = 0;
                    GetSelfRecordResp.prototype.count = 0;
                    GetSelfRecordResp.prototype.PageCount = 0;

                    GetSelfRecordResp.create = function create(properties) {
                        return new GetSelfRecordResp(properties);
                    };

                    GetSelfRecordResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.records != null && m.records.length) {
                            for (var i = 0; i < m.records.length; ++i)
                                $root.com.cw.chess2.andarbahar.RecordInfo.encode(m.records[i], w.uint32(10).fork()).ldelim();
                        }
                        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                            w.uint32(16).uint32(m.page);
                        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                            w.uint32(24).uint32(m.pageSize);
                        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                            w.uint32(32).uint32(m.count);
                        if (m.PageCount != null && Object.hasOwnProperty.call(m, "PageCount"))
                            w.uint32(40).uint32(m.PageCount);
                        return w;
                    };

                    GetSelfRecordResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GetSelfRecordResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.records && m.records.length))
                                        m.records = [];
                                    m.records.push($root.com.cw.chess2.andarbahar.RecordInfo.decode(r, r.uint32()));
                                    break;
                                }
                            case 2: {
                                    m.page = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.pageSize = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.count = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.PageCount = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GetSelfRecordResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GetSelfRecordResp";
                    };

                    return GetSelfRecordResp;
                })();

                andarbahar.DrawInfo = (function() {

                    function DrawInfo(p) {
                        this.cardsA = [];
                        this.cardsB = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    DrawInfo.prototype.period = "";
                    DrawInfo.prototype.joker = 0;
                    DrawInfo.prototype.nums = 0;
                    DrawInfo.prototype.cardsA = $util.emptyArray;
                    DrawInfo.prototype.cardsB = $util.emptyArray;
                    DrawInfo.prototype.secretKey = "";
                    DrawInfo.prototype.encryptKey = "";
                    DrawInfo.prototype.encryptResult = "";
                    DrawInfo.prototype.resultOriStr = "";

                    DrawInfo.create = function create(properties) {
                        return new DrawInfo(properties);
                    };

                    DrawInfo.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.period != null && Object.hasOwnProperty.call(m, "period"))
                            w.uint32(10).string(m.period);
                        if (m.joker != null && Object.hasOwnProperty.call(m, "joker"))
                            w.uint32(16).uint32(m.joker);
                        if (m.nums != null && Object.hasOwnProperty.call(m, "nums"))
                            w.uint32(24).uint32(m.nums);
                        if (m.cardsA != null && m.cardsA.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.cardsA.length; ++i)
                                w.uint32(m.cardsA[i]);
                            w.ldelim();
                        }
                        if (m.cardsB != null && m.cardsB.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.cardsB.length; ++i)
                                w.uint32(m.cardsB[i]);
                            w.ldelim();
                        }
                        if (m.secretKey != null && Object.hasOwnProperty.call(m, "secretKey"))
                            w.uint32(50).string(m.secretKey);
                        if (m.encryptKey != null && Object.hasOwnProperty.call(m, "encryptKey"))
                            w.uint32(58).string(m.encryptKey);
                        if (m.encryptResult != null && Object.hasOwnProperty.call(m, "encryptResult"))
                            w.uint32(66).string(m.encryptResult);
                        if (m.resultOriStr != null && Object.hasOwnProperty.call(m, "resultOriStr"))
                            w.uint32(74).string(m.resultOriStr);
                        return w;
                    };

                    DrawInfo.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.DrawInfo();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.period = r.string();
                                    break;
                                }
                            case 2: {
                                    m.joker = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.nums = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.cardsA && m.cardsA.length))
                                        m.cardsA = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.cardsA.push(r.uint32());
                                    } else
                                        m.cardsA.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.cardsB && m.cardsB.length))
                                        m.cardsB = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.cardsB.push(r.uint32());
                                    } else
                                        m.cardsB.push(r.uint32());
                                    break;
                                }
                            case 6: {
                                    m.secretKey = r.string();
                                    break;
                                }
                            case 7: {
                                    m.encryptKey = r.string();
                                    break;
                                }
                            case 8: {
                                    m.encryptResult = r.string();
                                    break;
                                }
                            case 9: {
                                    m.resultOriStr = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    DrawInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.DrawInfo";
                    };

                    return DrawInfo;
                })();

                andarbahar.GetDrawListReq = (function() {

                    function GetDrawListReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GetDrawListReq.prototype.page = 0;
                    GetDrawListReq.prototype.pageSize = 0;

                    GetDrawListReq.create = function create(properties) {
                        return new GetDrawListReq(properties);
                    };

                    GetDrawListReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                            w.uint32(8).uint32(m.page);
                        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                            w.uint32(16).uint32(m.pageSize);
                        return w;
                    };

                    GetDrawListReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GetDrawListReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.page = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.pageSize = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GetDrawListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GetDrawListReq";
                    };

                    return GetDrawListReq;
                })();

                andarbahar.GetDrawListResp = (function() {

                    function GetDrawListResp(p) {
                        this.records = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GetDrawListResp.prototype.records = $util.emptyArray;
                    GetDrawListResp.prototype.page = 0;
                    GetDrawListResp.prototype.pageSize = 0;
                    GetDrawListResp.prototype.count = 0;
                    GetDrawListResp.prototype.PageCount = 0;
                    GetDrawListResp.prototype.ANum = 0;
                    GetDrawListResp.prototype.BNum = 0;
                    GetDrawListResp.prototype.statisticNum = 0;

                    GetDrawListResp.create = function create(properties) {
                        return new GetDrawListResp(properties);
                    };

                    GetDrawListResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.records != null && m.records.length) {
                            for (var i = 0; i < m.records.length; ++i)
                                $root.com.cw.chess2.andarbahar.DrawInfo.encode(m.records[i], w.uint32(10).fork()).ldelim();
                        }
                        if (m.page != null && Object.hasOwnProperty.call(m, "page"))
                            w.uint32(16).uint32(m.page);
                        if (m.pageSize != null && Object.hasOwnProperty.call(m, "pageSize"))
                            w.uint32(24).uint32(m.pageSize);
                        if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                            w.uint32(32).uint32(m.count);
                        if (m.PageCount != null && Object.hasOwnProperty.call(m, "PageCount"))
                            w.uint32(40).uint32(m.PageCount);
                        if (m.ANum != null && Object.hasOwnProperty.call(m, "ANum"))
                            w.uint32(48).uint32(m.ANum);
                        if (m.BNum != null && Object.hasOwnProperty.call(m, "BNum"))
                            w.uint32(56).uint32(m.BNum);
                        if (m.statisticNum != null && Object.hasOwnProperty.call(m, "statisticNum"))
                            w.uint32(64).uint32(m.statisticNum);
                        return w;
                    };

                    GetDrawListResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GetDrawListResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.records && m.records.length))
                                        m.records = [];
                                    m.records.push($root.com.cw.chess2.andarbahar.DrawInfo.decode(r, r.uint32()));
                                    break;
                                }
                            case 2: {
                                    m.page = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.pageSize = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.count = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.PageCount = r.uint32();
                                    break;
                                }
                            case 6: {
                                    m.ANum = r.uint32();
                                    break;
                                }
                            case 7: {
                                    m.BNum = r.uint32();
                                    break;
                                }
                            case 8: {
                                    m.statisticNum = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GetDrawListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GetDrawListResp";
                    };

                    return GetDrawListResp;
                })();

                andarbahar.GetDrawInfoReq = (function() {

                    function GetDrawInfoReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GetDrawInfoReq.prototype.period = "";

                    GetDrawInfoReq.create = function create(properties) {
                        return new GetDrawInfoReq(properties);
                    };

                    GetDrawInfoReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.period != null && Object.hasOwnProperty.call(m, "period"))
                            w.uint32(10).string(m.period);
                        return w;
                    };

                    GetDrawInfoReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GetDrawInfoReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.period = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GetDrawInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GetDrawInfoReq";
                    };

                    return GetDrawInfoReq;
                })();

                andarbahar.GetDrawInfoResp = (function() {

                    function GetDrawInfoResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GetDrawInfoResp.prototype.record = null;

                    GetDrawInfoResp.create = function create(properties) {
                        return new GetDrawInfoResp(properties);
                    };

                    GetDrawInfoResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.record != null && Object.hasOwnProperty.call(m, "record"))
                            $root.com.cw.chess2.andarbahar.DrawInfo.encode(m.record, w.uint32(10).fork()).ldelim();
                        return w;
                    };

                    GetDrawInfoResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.GetDrawInfoResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.record = $root.com.cw.chess2.andarbahar.DrawInfo.decode(r, r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GetDrawInfoResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.GetDrawInfoResp";
                    };

                    return GetDrawInfoResp;
                })();

                andarbahar.MsgChatReq = (function() {

                    function MsgChatReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MsgChatReq.prototype.tableId = 0;
                    MsgChatReq.prototype.chatType = 0;
                    MsgChatReq.prototype.typeValue1 = "";
                    MsgChatReq.prototype.typeValue2 = "";

                    MsgChatReq.create = function create(properties) {
                        return new MsgChatReq(properties);
                    };

                    MsgChatReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.tableId != null && Object.hasOwnProperty.call(m, "tableId"))
                            w.uint32(8).uint32(m.tableId);
                        if (m.chatType != null && Object.hasOwnProperty.call(m, "chatType"))
                            w.uint32(16).uint32(m.chatType);
                        if (m.typeValue1 != null && Object.hasOwnProperty.call(m, "typeValue1"))
                            w.uint32(26).string(m.typeValue1);
                        if (m.typeValue2 != null && Object.hasOwnProperty.call(m, "typeValue2"))
                            w.uint32(34).string(m.typeValue2);
                        return w;
                    };

                    MsgChatReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.MsgChatReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.tableId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.chatType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.typeValue1 = r.string();
                                    break;
                                }
                            case 4: {
                                    m.typeValue2 = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MsgChatReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.MsgChatReq";
                    };

                    return MsgChatReq;
                })();

                andarbahar.MsgChatResp = (function() {

                    function MsgChatResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MsgChatResp.prototype.tableId = 0;
                    MsgChatResp.prototype.userId = 0;
                    MsgChatResp.prototype.nickName = "";
                    MsgChatResp.prototype.chatType = 0;
                    MsgChatResp.prototype.typeValue1 = "";
                    MsgChatResp.prototype.typeValue2 = "";

                    MsgChatResp.create = function create(properties) {
                        return new MsgChatResp(properties);
                    };

                    MsgChatResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.tableId != null && Object.hasOwnProperty.call(m, "tableId"))
                            w.uint32(8).uint32(m.tableId);
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(16).uint32(m.userId);
                        if (m.nickName != null && Object.hasOwnProperty.call(m, "nickName"))
                            w.uint32(26).string(m.nickName);
                        if (m.chatType != null && Object.hasOwnProperty.call(m, "chatType"))
                            w.uint32(32).uint32(m.chatType);
                        if (m.typeValue1 != null && Object.hasOwnProperty.call(m, "typeValue1"))
                            w.uint32(42).string(m.typeValue1);
                        if (m.typeValue2 != null && Object.hasOwnProperty.call(m, "typeValue2"))
                            w.uint32(50).string(m.typeValue2);
                        return w;
                    };

                    MsgChatResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.andarbahar.MsgChatResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.tableId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.nickName = r.string();
                                    break;
                                }
                            case 4: {
                                    m.chatType = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.typeValue1 = r.string();
                                    break;
                                }
                            case 6: {
                                    m.typeValue2 = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MsgChatResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.andarbahar.MsgChatResp";
                    };

                    return MsgChatResp;
                })();

                return andarbahar;
            })();

            chess2.platform = (function() {

                const platform = {};

                platform.GameUser = (function() {

                    function GameUser(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameUser.prototype.uid = 0;
                    GameUser.prototype.realUser = 0;
                    GameUser.prototype.coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
                    GameUser.prototype.userNick = "";
                    GameUser.prototype.userHead = "";
                    GameUser.prototype.userType = 0;
                    GameUser.prototype.paid = 0;
                    GameUser.prototype.withdraw = 0;
                    GameUser.prototype.hands = 0;
                    GameUser.prototype.weekCardEndTime = 0;
                    GameUser.prototype.monCardEndTime = 0;
                    GameUser.prototype.winLoseCoin = 0;
                    GameUser.prototype.maxConWinRound = 0;
                    GameUser.prototype.winRound = 0;
                    GameUser.prototype.vip = 0;

                    GameUser.create = function create(properties) {
                        return new GameUser(properties);
                    };

                    GameUser.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.uid != null && Object.hasOwnProperty.call(m, "uid"))
                            w.uint32(8).uint32(m.uid);
                        if (m.realUser != null && Object.hasOwnProperty.call(m, "realUser"))
                            w.uint32(16).uint32(m.realUser);
                        if (m.coin != null && Object.hasOwnProperty.call(m, "coin"))
                            w.uint32(24).int64(m.coin);
                        if (m.userNick != null && Object.hasOwnProperty.call(m, "userNick"))
                            w.uint32(34).string(m.userNick);
                        if (m.userHead != null && Object.hasOwnProperty.call(m, "userHead"))
                            w.uint32(42).string(m.userHead);
                        if (m.userType != null && Object.hasOwnProperty.call(m, "userType"))
                            w.uint32(48).uint32(m.userType);
                        if (m.paid != null && Object.hasOwnProperty.call(m, "paid"))
                            w.uint32(56).int32(m.paid);
                        if (m.withdraw != null && Object.hasOwnProperty.call(m, "withdraw"))
                            w.uint32(64).int32(m.withdraw);
                        if (m.hands != null && Object.hasOwnProperty.call(m, "hands"))
                            w.uint32(72).uint32(m.hands);
                        if (m.weekCardEndTime != null && Object.hasOwnProperty.call(m, "weekCardEndTime"))
                            w.uint32(80).uint32(m.weekCardEndTime);
                        if (m.monCardEndTime != null && Object.hasOwnProperty.call(m, "monCardEndTime"))
                            w.uint32(88).uint32(m.monCardEndTime);
                        if (m.winLoseCoin != null && Object.hasOwnProperty.call(m, "winLoseCoin"))
                            w.uint32(96).int32(m.winLoseCoin);
                        if (m.maxConWinRound != null && Object.hasOwnProperty.call(m, "maxConWinRound"))
                            w.uint32(104).int32(m.maxConWinRound);
                        if (m.winRound != null && Object.hasOwnProperty.call(m, "winRound"))
                            w.uint32(112).int32(m.winRound);
                        if (m.vip != null && Object.hasOwnProperty.call(m, "vip"))
                            w.uint32(120).int32(m.vip);
                        return w;
                    };

                    GameUser.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.GameUser();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.uid = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.realUser = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.coin = r.int64();
                                    break;
                                }
                            case 4: {
                                    m.userNick = r.string();
                                    break;
                                }
                            case 5: {
                                    m.userHead = r.string();
                                    break;
                                }
                            case 6: {
                                    m.userType = r.uint32();
                                    break;
                                }
                            case 7: {
                                    m.paid = r.int32();
                                    break;
                                }
                            case 8: {
                                    m.withdraw = r.int32();
                                    break;
                                }
                            case 9: {
                                    m.hands = r.uint32();
                                    break;
                                }
                            case 10: {
                                    m.weekCardEndTime = r.uint32();
                                    break;
                                }
                            case 11: {
                                    m.monCardEndTime = r.uint32();
                                    break;
                                }
                            case 12: {
                                    m.winLoseCoin = r.int32();
                                    break;
                                }
                            case 13: {
                                    m.maxConWinRound = r.int32();
                                    break;
                                }
                            case 14: {
                                    m.winRound = r.int32();
                                    break;
                                }
                            case 15: {
                                    m.vip = r.int32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.GameUser";
                    };

                    return GameUser;
                })();

                platform.CommonResponse = (function() {

                    function CommonResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    CommonResponse.prototype.result = 0;

                    CommonResponse.create = function create(properties) {
                        return new CommonResponse(properties);
                    };

                    CommonResponse.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        return w;
                    };

                    CommonResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.CommonResponse();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    CommonResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.CommonResponse";
                    };

                    return CommonResponse;
                })();

                platform.ServerType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SERVER_TYPE_INVALID"] = 0;
                    values[valuesById[1000] = "SERVER_TYPE_GATEWAY"] = 1000;
                    values[valuesById[1100] = "SERVER_TYPE_COMMON"] = 1100;
                    values[valuesById[1101] = "SERVER_TYPE_MATCH"] = 1101;
                    values[valuesById[2002] = "SERVER_TYPE_BA"] = 2002;
                    values[valuesById[3000] = "SERVER_TYPE_RUMMY_"] = 3000;
                    values[valuesById[4000] = "SERVER_TYPE_TEEN_PATTI_"] = 4000;
                    values[valuesById[5000] = "SERVER_TYPE_TEEN_PATTI_WAR_"] = 5000;
                    values[valuesById[6000] = "SERVER_TYPE_DROGON_TIGER_"] = 6000;
                    values[valuesById[700] = "SERVER_TYPE_SEVEN_UP_DOWN_"] = 700;
                    values[valuesById[800] = "SERVER_TYPE_TEEN_PATTI_LAI"] = 800;
                    values[valuesById[900] = "SERVER_TYPE_TEEN_PATTI_JD"] = 900;
                    values[valuesById[1010] = "SERVER_TYPE_AB"] = 1010;
                    values[valuesById[1110] = "SERVER_TYPE_AB_DESK"] = 1110;
                    values[valuesById[1200] = "SERVER_TYPE_JHANDI_MUNDA"] = 1200;
                    values[valuesById[1300] = "SERVER_TYPE_CAR_RACING"] = 1300;
                    values[valuesById[1400] = "SERVER_TYPE_SLOT_FRUIT"] = 1400;
                    values[valuesById[1500] = "SERVER_TYPE_WINGO_LOTTERY"] = 1500;
                    values[valuesById[1600] = "SERVER_TYPE_TEXAS_BR"] = 1600;
                    values[valuesById[1700] = "SERVER_TYPE_ROCKET"] = 1700;
                    values[valuesById[2100] = "SERVER_TYPE_LUCKY3PATTI"] = 2100;
                    return values;
                })();

                platform.ServerGatewayCmd = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_GATEWAY_INVALID"] = 0;
                    values[valuesById[1] = "CMD_GATEWAY_LOGIN_REQ"] = 1;
                    values[valuesById[2] = "CMD_GATEWAY_LOGIN_RESP"] = 2;
                    values[valuesById[3] = "CMD_GATEWAY_LOGOUT_REQ"] = 3;
                    values[valuesById[4] = "CMD_GATEWAY_LOGOUT_RESP"] = 4;
                    values[valuesById[5] = "CMD_GATEWAY_DISCONNECT_REQ"] = 5;
                    values[valuesById[6] = "CMD_GATEWAY_DISCONNECT_RESP"] = 6;
                    values[valuesById[7] = "CMD_GATEWAY_REPEAT_LOGIN_REQ"] = 7;
                    values[valuesById[8] = "CMD_GATEWAY_REPEAT_LOGIN_RESP"] = 8;
                    values[valuesById[9] = "CMD_GATEWAY_PING_REQ"] = 9;
                    values[valuesById[10] = "CMD_GATEWAY_PING_RESP"] = 10;
                    return values;
                })();

                platform.LoginRequest = (function() {

                    function LoginRequest(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    LoginRequest.prototype.userId = 0;
                    LoginRequest.prototype.token = "";

                    LoginRequest.create = function create(properties) {
                        return new LoginRequest(properties);
                    };

                    LoginRequest.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(8).uint32(m.userId);
                        if (m.token != null && Object.hasOwnProperty.call(m, "token"))
                            w.uint32(18).string(m.token);
                        return w;
                    };

                    LoginRequest.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.LoginRequest();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.token = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.LoginRequest";
                    };

                    return LoginRequest;
                })();

                platform.LoginResponse = (function() {

                    function LoginResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    LoginResponse.prototype.result = 0;
                    LoginResponse.prototype.userId = 0;
                    LoginResponse.prototype.type = 0;
                    LoginResponse.prototype.game = 0;
                    LoginResponse.prototype.table = 0;

                    LoginResponse.create = function create(properties) {
                        return new LoginResponse(properties);
                    };

                    LoginResponse.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(16).uint32(m.userId);
                        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                            w.uint32(24).uint32(m.type);
                        if (m.game != null && Object.hasOwnProperty.call(m, "game"))
                            w.uint32(32).uint32(m.game);
                        if (m.table != null && Object.hasOwnProperty.call(m, "table"))
                            w.uint32(40).uint32(m.table);
                        return w;
                    };

                    LoginResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.LoginResponse();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.type = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.game = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.table = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.LoginResponse";
                    };

                    return LoginResponse;
                })();

                platform.ServerCommonCmd = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_COMMON_INVALID"] = 0;
                    values[valuesById[1] = "CMD_NA_1"] = 1;
                    values[valuesById[2] = "CMD_FREEZE_PLAYER_RESP"] = 2;
                    values[valuesById[3] = "CMD_GET_PLAYER_BALANCE_REQ"] = 3;
                    values[valuesById[4] = "CMD_GET_PLAYER_BALANCE_RESP"] = 4;
                    values[valuesById[5] = "CMD_NA_5"] = 5;
                    values[valuesById[6] = "CMD_SYSMESSAGE_TO_USER_RESP"] = 6;
                    values[valuesById[7] = "CMD_NA_7"] = 7;
                    values[valuesById[8] = "CMD_PHP_2_USER_COMMON_RESP"] = 8;
                    values[valuesById[9] = "CMD_GET_USER_ATTRI_REQ"] = 9;
                    values[valuesById[10] = "CMD_GET_USER_ATTRI_RESP"] = 10;
                    values[valuesById[11] = "CMD_UPDATE_USER_ATTRI_REQ"] = 11;
                    values[valuesById[12] = "CMD_UPDATE_USER_ATTRI_RESP"] = 12;
                    values[valuesById[13] = "CMD_GET_BONUS_REQ"] = 13;
                    values[valuesById[14] = "CMD_GET_BONUS_RESP"] = 14;
                    values[valuesById[31] = "CMD_WEB_RECHARGE_SUCCESS_RESP"] = 31;
                    values[valuesById[32] = "CMD_WEB_POPUP_NOTICE_RESP"] = 32;
                    values[valuesById[33] = "CMD_WEB_MAIL_NOTICE_RESP"] = 33;
                    return values;
                })();

                platform.CurrencyKind = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CK_INVALID"] = 0;
                    values[valuesById[1] = "CK_Money"] = 1;
                    values[valuesById[2] = "CK_Practice"] = 2;
                    return values;
                })();

                platform.GetPlayerBalanceResponse = (function() {

                    function GetPlayerBalanceResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GetPlayerBalanceResponse.prototype.result = 0;
                    GetPlayerBalanceResponse.prototype.balance = 0;
                    GetPlayerBalanceResponse.prototype.balanceWins = 0;
                    GetPlayerBalanceResponse.prototype.partices = 0;
                    GetPlayerBalanceResponse.prototype.gameCurrency = 0;

                    GetPlayerBalanceResponse.create = function create(properties) {
                        return new GetPlayerBalanceResponse(properties);
                    };

                    GetPlayerBalanceResponse.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        if (m.balance != null && Object.hasOwnProperty.call(m, "balance"))
                            w.uint32(16).uint32(m.balance);
                        if (m.balanceWins != null && Object.hasOwnProperty.call(m, "balanceWins"))
                            w.uint32(24).uint32(m.balanceWins);
                        if (m.partices != null && Object.hasOwnProperty.call(m, "partices"))
                            w.uint32(32).uint32(m.partices);
                        if (m.gameCurrency != null && Object.hasOwnProperty.call(m, "gameCurrency"))
                            w.uint32(40).int32(m.gameCurrency);
                        return w;
                    };

                    GetPlayerBalanceResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.GetPlayerBalanceResponse();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.balance = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.balanceWins = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.partices = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.gameCurrency = r.int32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GetPlayerBalanceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.GetPlayerBalanceResponse";
                    };

                    return GetPlayerBalanceResponse;
                })();

                platform.MessageToUserResp = (function() {

                    function MessageToUserResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MessageToUserResp.prototype.lastTime = 0;
                    MessageToUserResp.prototype.context = "";

                    MessageToUserResp.create = function create(properties) {
                        return new MessageToUserResp(properties);
                    };

                    MessageToUserResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.lastTime != null && Object.hasOwnProperty.call(m, "lastTime"))
                            w.uint32(8).uint32(m.lastTime);
                        if (m.context != null && Object.hasOwnProperty.call(m, "context"))
                            w.uint32(18).string(m.context);
                        return w;
                    };

                    MessageToUserResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MessageToUserResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.lastTime = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.context = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MessageToUserResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MessageToUserResp";
                    };

                    return MessageToUserResp;
                })();

                platform.UserAttri = (function() {

                    function UserAttri(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    UserAttri.prototype.userId = 0;
                    UserAttri.prototype.nick = "";
                    UserAttri.prototype.head = "";

                    UserAttri.create = function create(properties) {
                        return new UserAttri(properties);
                    };

                    UserAttri.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(8).uint32(m.userId);
                        if (m.nick != null && Object.hasOwnProperty.call(m, "nick"))
                            w.uint32(18).string(m.nick);
                        if (m.head != null && Object.hasOwnProperty.call(m, "head"))
                            w.uint32(26).string(m.head);
                        return w;
                    };

                    UserAttri.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.UserAttri();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.nick = r.string();
                                    break;
                                }
                            case 3: {
                                    m.head = r.string();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    UserAttri.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.UserAttri";
                    };

                    return UserAttri;
                })();

                platform.MSG_GET_USER_ATTRI_REQ = (function() {

                    function MSG_GET_USER_ATTRI_REQ(p) {
                        this.userIds = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MSG_GET_USER_ATTRI_REQ.prototype.userIds = $util.emptyArray;

                    MSG_GET_USER_ATTRI_REQ.create = function create(properties) {
                        return new MSG_GET_USER_ATTRI_REQ(properties);
                    };

                    MSG_GET_USER_ATTRI_REQ.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userIds != null && m.userIds.length) {
                            w.uint32(10).fork();
                            for (var i = 0; i < m.userIds.length; ++i)
                                w.uint32(m.userIds[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    MSG_GET_USER_ATTRI_REQ.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.userIds && m.userIds.length))
                                        m.userIds = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.userIds.push(r.uint32());
                                    } else
                                        m.userIds.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MSG_GET_USER_ATTRI_REQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ";
                    };

                    return MSG_GET_USER_ATTRI_REQ;
                })();

                platform.MSG_GET_USER_ATTRI_RESP = (function() {

                    function MSG_GET_USER_ATTRI_RESP(p) {
                        this.userAttris = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MSG_GET_USER_ATTRI_RESP.prototype.userAttris = $util.emptyArray;

                    MSG_GET_USER_ATTRI_RESP.create = function create(properties) {
                        return new MSG_GET_USER_ATTRI_RESP(properties);
                    };

                    MSG_GET_USER_ATTRI_RESP.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userAttris != null && m.userAttris.length) {
                            for (var i = 0; i < m.userAttris.length; ++i)
                                $root.com.cw.chess2.platform.UserAttri.encode(m.userAttris[i], w.uint32(10).fork()).ldelim();
                        }
                        return w;
                    };

                    MSG_GET_USER_ATTRI_RESP.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.userAttris && m.userAttris.length))
                                        m.userAttris = [];
                                    m.userAttris.push($root.com.cw.chess2.platform.UserAttri.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MSG_GET_USER_ATTRI_RESP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP";
                    };

                    return MSG_GET_USER_ATTRI_RESP;
                })();

                platform.MSG_UPDATE_USER_ATTRI_REQ = (function() {

                    function MSG_UPDATE_USER_ATTRI_REQ(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MSG_UPDATE_USER_ATTRI_REQ.prototype.userAttri = null;

                    MSG_UPDATE_USER_ATTRI_REQ.create = function create(properties) {
                        return new MSG_UPDATE_USER_ATTRI_REQ(properties);
                    };

                    MSG_UPDATE_USER_ATTRI_REQ.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userAttri != null && Object.hasOwnProperty.call(m, "userAttri"))
                            $root.com.cw.chess2.platform.UserAttri.encode(m.userAttri, w.uint32(10).fork()).ldelim();
                        return w;
                    };

                    MSG_UPDATE_USER_ATTRI_REQ.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.userAttri = $root.com.cw.chess2.platform.UserAttri.decode(r, r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MSG_UPDATE_USER_ATTRI_REQ.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ";
                    };

                    return MSG_UPDATE_USER_ATTRI_REQ;
                })();

                platform.MSG_GET_BONUS_RESP = (function() {

                    function MSG_GET_BONUS_RESP(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MSG_GET_BONUS_RESP.prototype.bonus = 0;

                    MSG_GET_BONUS_RESP.create = function create(properties) {
                        return new MSG_GET_BONUS_RESP(properties);
                    };

                    MSG_GET_BONUS_RESP.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.bonus != null && Object.hasOwnProperty.call(m, "bonus"))
                            w.uint32(8).uint32(m.bonus);
                        return w;
                    };

                    MSG_GET_BONUS_RESP.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MSG_GET_BONUS_RESP();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.bonus = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MSG_GET_BONUS_RESP.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MSG_GET_BONUS_RESP";
                    };

                    return MSG_GET_BONUS_RESP;
                })();

                platform.RechargeNoticeResp = (function() {

                    function RechargeNoticeResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    RechargeNoticeResp.prototype.userId = 0;
                    RechargeNoticeResp.prototype.amount = 0;
                    RechargeNoticeResp.prototype.bonus = 0;
                    RechargeNoticeResp.prototype.type = 0;
                    RechargeNoticeResp.prototype.cash = 0;

                    RechargeNoticeResp.create = function create(properties) {
                        return new RechargeNoticeResp(properties);
                    };

                    RechargeNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.userId != null && Object.hasOwnProperty.call(m, "userId"))
                            w.uint32(8).uint32(m.userId);
                        if (m.amount != null && Object.hasOwnProperty.call(m, "amount"))
                            w.uint32(16).uint32(m.amount);
                        if (m.bonus != null && Object.hasOwnProperty.call(m, "bonus"))
                            w.uint32(24).uint32(m.bonus);
                        if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                            w.uint32(32).uint32(m.type);
                        if (m.cash != null && Object.hasOwnProperty.call(m, "cash"))
                            w.uint32(40).uint32(m.cash);
                        return w;
                    };

                    RechargeNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.RechargeNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.userId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.amount = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.bonus = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.type = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.cash = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    RechargeNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.RechargeNoticeResp";
                    };

                    return RechargeNoticeResp;
                })();

                platform.PopupNoticeResp = (function() {

                    function PopupNoticeResp(p) {
                        this.uids = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    PopupNoticeResp.prototype.noticeId = 0;
                    PopupNoticeResp.prototype.bundleName = "";
                    PopupNoticeResp.prototype.uids = $util.emptyArray;

                    PopupNoticeResp.create = function create(properties) {
                        return new PopupNoticeResp(properties);
                    };

                    PopupNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.noticeId != null && Object.hasOwnProperty.call(m, "noticeId"))
                            w.uint32(8).uint32(m.noticeId);
                        if (m.bundleName != null && Object.hasOwnProperty.call(m, "bundleName"))
                            w.uint32(18).string(m.bundleName);
                        if (m.uids != null && m.uids.length) {
                            w.uint32(26).fork();
                            for (var i = 0; i < m.uids.length; ++i)
                                w.uint32(m.uids[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    PopupNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.PopupNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.noticeId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.bundleName = r.string();
                                    break;
                                }
                            case 3: {
                                    if (!(m.uids && m.uids.length))
                                        m.uids = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.uids.push(r.uint32());
                                    } else
                                        m.uids.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    PopupNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.PopupNoticeResp";
                    };

                    return PopupNoticeResp;
                })();

                platform.MailNoticeResp = (function() {

                    function MailNoticeResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MailNoticeResp.create = function create(properties) {
                        return new MailNoticeResp(properties);
                    };

                    MailNoticeResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    MailNoticeResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MailNoticeResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MailNoticeResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MailNoticeResp";
                    };

                    return MailNoticeResp;
                })();

                platform.ServerMatchCmd = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_MATCH_INVALID"] = 0;
                    values[valuesById[1] = "CMD_GET_GAME_KIND_REQ"] = 1;
                    values[valuesById[2] = "CMD_GET_GAME_KIND_RESP"] = 2;
                    values[valuesById[3] = "CMD_GET_ROOMS_REQ"] = 3;
                    values[valuesById[4] = "CMD_GET_ROOMS_RESP"] = 4;
                    values[valuesById[5] = "CMD_MATCH_REQ"] = 5;
                    values[valuesById[6] = "CMD_MATCH_RESP"] = 6;
                    values[valuesById[7] = "CMD_MATCH_NA_7"] = 7;
                    values[valuesById[8] = "CMD_MATCH_OK_RESP"] = 8;
                    return values;
                })();

                platform.GameKind = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "INVALID"] = 0;
                    values[valuesById[1] = "GAME_KIND_Rummy"] = 1;
                    values[valuesById[2] = "GAME_KIND_Rummy_pool"] = 2;
                    values[valuesById[3] = "GAME_KIND_Rummy_10"] = 3;
                    values[valuesById[4] = "GAME_KIND_TEEPATTI"] = 4;
                    values[valuesById[5] = "GAME_KIND_RedBlack"] = 5;
                    values[valuesById[6] = "GAME_KIND_DragonTiger"] = 6;
                    values[valuesById[7] = "GAME_KIND_SevenUpDown"] = 7;
                    values[valuesById[8] = "GAME_KIND_Teenpatti_Lai"] = 8;
                    values[valuesById[9] = "GAME_KIND_Teenpatti_JD"] = 9;
                    values[valuesById[10] = "GAME_KIND_Andar_Bahar"] = 10;
                    values[valuesById[20] = "GAME_KIND_AB_DESK"] = 20;
                    values[valuesById[12] = "GAME_KIND_JHANDI_MUNDA"] = 12;
                    values[valuesById[13] = "GAME_KIND_Car_Racing"] = 13;
                    values[valuesById[14] = "GAME_KIND_Slot_Fruit"] = 14;
                    values[valuesById[15] = "GAME_KIND_Wingo_Lottery"] = 15;
                    values[valuesById[16] = "GAME_KIND_Texas_Br"] = 16;
                    values[valuesById[17] = "GAME_KIND_Rocket"] = 17;
                    values[valuesById[18] = "GAME_KIND_Teenpatti_Star"] = 18;
                    values[valuesById[19] = "GAME_KIND_Teenpatti_Final"] = 19;
                    values[valuesById[21] = "GAME_KIND_Lucky3patti"] = 21;
                    values[valuesById[22] = "GAME_KIND_Teenpatti_Potblind"] = 22;
                    values[valuesById[23] = "GAME_KIND_Teenpatti_Must"] = 23;
                    return values;
                })();

                platform.GameLevelDesc = (function() {

                    function GameLevelDesc(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameLevelDesc.prototype.levelId = 0;
                    GameLevelDesc.prototype.currencyKind = 0;
                    GameLevelDesc.prototype.currencyLimit = 0;
                    GameLevelDesc.prototype.levelName = "";
                    GameLevelDesc.prototype.userCount = 0;
                    GameLevelDesc.prototype.taxPermillage = 0;
                    GameLevelDesc.prototype.maxLimit = 0;

                    GameLevelDesc.create = function create(properties) {
                        return new GameLevelDesc(properties);
                    };

                    GameLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.levelId != null && Object.hasOwnProperty.call(m, "levelId"))
                            w.uint32(8).uint32(m.levelId);
                        if (m.currencyKind != null && Object.hasOwnProperty.call(m, "currencyKind"))
                            w.uint32(16).int32(m.currencyKind);
                        if (m.currencyLimit != null && Object.hasOwnProperty.call(m, "currencyLimit"))
                            w.uint32(24).uint32(m.currencyLimit);
                        if (m.levelName != null && Object.hasOwnProperty.call(m, "levelName"))
                            w.uint32(34).string(m.levelName);
                        if (m.userCount != null && Object.hasOwnProperty.call(m, "userCount"))
                            w.uint32(40).uint32(m.userCount);
                        if (m.taxPermillage != null && Object.hasOwnProperty.call(m, "taxPermillage"))
                            w.uint32(48).uint32(m.taxPermillage);
                        if (m.maxLimit != null && Object.hasOwnProperty.call(m, "maxLimit"))
                            w.uint32(56).uint32(m.maxLimit);
                        return w;
                    };

                    GameLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.GameLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.levelId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.currencyKind = r.int32();
                                    break;
                                }
                            case 3: {
                                    m.currencyLimit = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.levelName = r.string();
                                    break;
                                }
                            case 5: {
                                    m.userCount = r.uint32();
                                    break;
                                }
                            case 6: {
                                    m.taxPermillage = r.uint32();
                                    break;
                                }
                            case 7: {
                                    m.maxLimit = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.GameLevelDesc";
                    };

                    return GameLevelDesc;
                })();

                platform.RummyLevelDesc = (function() {

                    function RummyLevelDesc(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    RummyLevelDesc.prototype.gameLevel = null;
                    RummyLevelDesc.prototype.rummyPlayersSize = 0;
                    RummyLevelDesc.prototype.scoreValue = 0;

                    RummyLevelDesc.create = function create(properties) {
                        return new RummyLevelDesc(properties);
                    };

                    RummyLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.gameLevel != null && Object.hasOwnProperty.call(m, "gameLevel"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(m.gameLevel, w.uint32(10).fork()).ldelim();
                        if (m.rummyPlayersSize != null && Object.hasOwnProperty.call(m, "rummyPlayersSize"))
                            w.uint32(16).uint32(m.rummyPlayersSize);
                        if (m.scoreValue != null && Object.hasOwnProperty.call(m, "scoreValue"))
                            w.uint32(24).uint32(m.scoreValue);
                        return w;
                    };

                    RummyLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.RummyLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.gameLevel = $root.com.cw.chess2.platform.GameLevelDesc.decode(r, r.uint32());
                                    break;
                                }
                            case 2: {
                                    m.rummyPlayersSize = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.scoreValue = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    RummyLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.RummyLevelDesc";
                    };

                    return RummyLevelDesc;
                })();

                platform.TeepattiLevelDesc = (function() {

                    function TeepattiLevelDesc(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    TeepattiLevelDesc.prototype.gameLevel = null;
                    TeepattiLevelDesc.prototype.blind = 0;
                    TeepattiLevelDesc.prototype.singleMaxBet = 0;
                    TeepattiLevelDesc.prototype.tableMaxBet = 0;
                    TeepattiLevelDesc.prototype.cashUserTime = 0;
                    TeepattiLevelDesc.prototype.cashAiTime = 0;

                    TeepattiLevelDesc.create = function create(properties) {
                        return new TeepattiLevelDesc(properties);
                    };

                    TeepattiLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.gameLevel != null && Object.hasOwnProperty.call(m, "gameLevel"))
                            $root.com.cw.chess2.platform.GameLevelDesc.encode(m.gameLevel, w.uint32(10).fork()).ldelim();
                        if (m.blind != null && Object.hasOwnProperty.call(m, "blind"))
                            w.uint32(16).uint32(m.blind);
                        if (m.singleMaxBet != null && Object.hasOwnProperty.call(m, "singleMaxBet"))
                            w.uint32(24).uint32(m.singleMaxBet);
                        if (m.tableMaxBet != null && Object.hasOwnProperty.call(m, "tableMaxBet"))
                            w.uint32(32).uint32(m.tableMaxBet);
                        if (m.cashUserTime != null && Object.hasOwnProperty.call(m, "cashUserTime"))
                            w.uint32(40).uint32(m.cashUserTime);
                        if (m.cashAiTime != null && Object.hasOwnProperty.call(m, "cashAiTime"))
                            w.uint32(48).uint32(m.cashAiTime);
                        return w;
                    };

                    TeepattiLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.TeepattiLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.gameLevel = $root.com.cw.chess2.platform.GameLevelDesc.decode(r, r.uint32());
                                    break;
                                }
                            case 2: {
                                    m.blind = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.singleMaxBet = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.tableMaxBet = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.cashUserTime = r.uint32();
                                    break;
                                }
                            case 6: {
                                    m.cashAiTime = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    TeepattiLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.TeepattiLevelDesc";
                    };

                    return TeepattiLevelDesc;
                })();

                platform.TeenPattiWarLevelDesc = (function() {

                    function TeenPattiWarLevelDesc(p) {
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    TeenPattiWarLevelDesc.prototype.roomId = 0;
                    TeenPattiWarLevelDesc.prototype.gameType = 0;
                    TeenPattiWarLevelDesc.prototype.minChips = 0;
                    TeenPattiWarLevelDesc.prototype.redBet = 0;
                    TeenPattiWarLevelDesc.prototype.blackBet = 0;
                    TeenPattiWarLevelDesc.prototype.luckBet = 0;
                    TeenPattiWarLevelDesc.prototype.chips = $util.emptyArray;

                    TeenPattiWarLevelDesc.create = function create(properties) {
                        return new TeenPattiWarLevelDesc(properties);
                    };

                    TeenPattiWarLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.redBet != null && Object.hasOwnProperty.call(m, "redBet"))
                            w.uint32(32).uint32(m.redBet);
                        if (m.blackBet != null && Object.hasOwnProperty.call(m, "blackBet"))
                            w.uint32(40).uint32(m.blackBet);
                        if (m.luckBet != null && Object.hasOwnProperty.call(m, "luckBet"))
                            w.uint32(48).uint32(m.luckBet);
                        if (m.chips != null && m.chips.length) {
                            w.uint32(58).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    TeenPattiWarLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.TeenPattiWarLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.redBet = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.blackBet = r.uint32();
                                    break;
                                }
                            case 6: {
                                    m.luckBet = r.uint32();
                                    break;
                                }
                            case 7: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    TeenPattiWarLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.TeenPattiWarLevelDesc";
                    };

                    return TeenPattiWarLevelDesc;
                })();

                platform.DragonTigerLevelDesc = (function() {

                    function DragonTigerLevelDesc(p) {
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    DragonTigerLevelDesc.prototype.roomId = 0;
                    DragonTigerLevelDesc.prototype.gameType = 0;
                    DragonTigerLevelDesc.prototype.minChips = 0;
                    DragonTigerLevelDesc.prototype.dragonBet = 0;
                    DragonTigerLevelDesc.prototype.tigerBet = 0;
                    DragonTigerLevelDesc.prototype.tieBet = 0;
                    DragonTigerLevelDesc.prototype.chips = $util.emptyArray;
                    DragonTigerLevelDesc.prototype.tieReturn1 = 0;
                    DragonTigerLevelDesc.prototype.tieReturn2 = 0;

                    DragonTigerLevelDesc.create = function create(properties) {
                        return new DragonTigerLevelDesc(properties);
                    };

                    DragonTigerLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.dragonBet != null && Object.hasOwnProperty.call(m, "dragonBet"))
                            w.uint32(32).uint32(m.dragonBet);
                        if (m.tigerBet != null && Object.hasOwnProperty.call(m, "tigerBet"))
                            w.uint32(40).uint32(m.tigerBet);
                        if (m.tieBet != null && Object.hasOwnProperty.call(m, "tieBet"))
                            w.uint32(48).uint32(m.tieBet);
                        if (m.chips != null && m.chips.length) {
                            w.uint32(58).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        if (m.tieReturn1 != null && Object.hasOwnProperty.call(m, "tieReturn1"))
                            w.uint32(64).uint32(m.tieReturn1);
                        if (m.tieReturn2 != null && Object.hasOwnProperty.call(m, "tieReturn2"))
                            w.uint32(72).uint32(m.tieReturn2);
                        return w;
                    };

                    DragonTigerLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.DragonTigerLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.dragonBet = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.tigerBet = r.uint32();
                                    break;
                                }
                            case 6: {
                                    m.tieBet = r.uint32();
                                    break;
                                }
                            case 7: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            case 8: {
                                    m.tieReturn1 = r.uint32();
                                    break;
                                }
                            case 9: {
                                    m.tieReturn2 = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    DragonTigerLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.DragonTigerLevelDesc";
                    };

                    return DragonTigerLevelDesc;
                })();

                platform.SevenUpDownLevelDesc = (function() {

                    function SevenUpDownLevelDesc(p) {
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    SevenUpDownLevelDesc.prototype.roomId = 0;
                    SevenUpDownLevelDesc.prototype.gameType = 0;
                    SevenUpDownLevelDesc.prototype.minChips = 0;
                    SevenUpDownLevelDesc.prototype.downBet = 0;
                    SevenUpDownLevelDesc.prototype.upBet = 0;
                    SevenUpDownLevelDesc.prototype.sevenBet = 0;
                    SevenUpDownLevelDesc.prototype.chips = $util.emptyArray;

                    SevenUpDownLevelDesc.create = function create(properties) {
                        return new SevenUpDownLevelDesc(properties);
                    };

                    SevenUpDownLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.downBet != null && Object.hasOwnProperty.call(m, "downBet"))
                            w.uint32(32).uint32(m.downBet);
                        if (m.upBet != null && Object.hasOwnProperty.call(m, "upBet"))
                            w.uint32(40).uint32(m.upBet);
                        if (m.sevenBet != null && Object.hasOwnProperty.call(m, "sevenBet"))
                            w.uint32(48).uint32(m.sevenBet);
                        if (m.chips != null && m.chips.length) {
                            w.uint32(58).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    SevenUpDownLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.SevenUpDownLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.downBet = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.upBet = r.uint32();
                                    break;
                                }
                            case 6: {
                                    m.sevenBet = r.uint32();
                                    break;
                                }
                            case 7: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    SevenUpDownLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.SevenUpDownLevelDesc";
                    };

                    return SevenUpDownLevelDesc;
                })();

                platform.AndarBaharLevelDesc = (function() {

                    function AndarBaharLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        this.odds = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    AndarBaharLevelDesc.prototype.roomId = 0;
                    AndarBaharLevelDesc.prototype.gameType = 0;
                    AndarBaharLevelDesc.prototype.minChips = 0;
                    AndarBaharLevelDesc.prototype.maxBets = $util.emptyArray;
                    AndarBaharLevelDesc.prototype.chips = $util.emptyArray;
                    AndarBaharLevelDesc.prototype.odds = $util.emptyArray;

                    AndarBaharLevelDesc.create = function create(properties) {
                        return new AndarBaharLevelDesc(properties);
                    };

                    AndarBaharLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        if (m.odds != null && m.odds.length) {
                            w.uint32(50).fork();
                            for (var i = 0; i < m.odds.length; ++i)
                                w.float(m.odds[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    AndarBaharLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.AndarBaharLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            case 6: {
                                    if (!(m.odds && m.odds.length))
                                        m.odds = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.odds.push(r.float());
                                    } else
                                        m.odds.push(r.float());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    AndarBaharLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.AndarBaharLevelDesc";
                    };

                    return AndarBaharLevelDesc;
                })();

                platform.AndarBaharDeskLevelDesc = (function() {

                    function AndarBaharDeskLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        this.odds = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    AndarBaharDeskLevelDesc.prototype.roomId = 0;
                    AndarBaharDeskLevelDesc.prototype.gameType = 0;
                    AndarBaharDeskLevelDesc.prototype.minChips = 0;
                    AndarBaharDeskLevelDesc.prototype.maxBets = $util.emptyArray;
                    AndarBaharDeskLevelDesc.prototype.chips = $util.emptyArray;
                    AndarBaharDeskLevelDesc.prototype.odds = $util.emptyArray;

                    AndarBaharDeskLevelDesc.create = function create(properties) {
                        return new AndarBaharDeskLevelDesc(properties);
                    };

                    AndarBaharDeskLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        if (m.odds != null && m.odds.length) {
                            w.uint32(50).fork();
                            for (var i = 0; i < m.odds.length; ++i)
                                w.float(m.odds[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    AndarBaharDeskLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.AndarBaharDeskLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            case 6: {
                                    if (!(m.odds && m.odds.length))
                                        m.odds = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.odds.push(r.float());
                                    } else
                                        m.odds.push(r.float());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    AndarBaharDeskLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.AndarBaharDeskLevelDesc";
                    };

                    return AndarBaharDeskLevelDesc;
                })();

                platform.JhandiMundaLevelDesc = (function() {

                    function JhandiMundaLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    JhandiMundaLevelDesc.prototype.roomId = 0;
                    JhandiMundaLevelDesc.prototype.gameType = 0;
                    JhandiMundaLevelDesc.prototype.minChips = 0;
                    JhandiMundaLevelDesc.prototype.maxBets = $util.emptyArray;
                    JhandiMundaLevelDesc.prototype.chips = $util.emptyArray;

                    JhandiMundaLevelDesc.create = function create(properties) {
                        return new JhandiMundaLevelDesc(properties);
                    };

                    JhandiMundaLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    JhandiMundaLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.JhandiMundaLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    JhandiMundaLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.JhandiMundaLevelDesc";
                    };

                    return JhandiMundaLevelDesc;
                })();

                platform.CarRacingLevelDesc = (function() {

                    function CarRacingLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    CarRacingLevelDesc.prototype.roomId = 0;
                    CarRacingLevelDesc.prototype.gameType = 0;
                    CarRacingLevelDesc.prototype.minChips = 0;
                    CarRacingLevelDesc.prototype.maxBets = $util.emptyArray;
                    CarRacingLevelDesc.prototype.chips = $util.emptyArray;

                    CarRacingLevelDesc.create = function create(properties) {
                        return new CarRacingLevelDesc(properties);
                    };

                    CarRacingLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    CarRacingLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.CarRacingLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    CarRacingLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.CarRacingLevelDesc";
                    };

                    return CarRacingLevelDesc;
                })();

                platform.FruitLevelDesc = (function() {

                    function FruitLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    FruitLevelDesc.prototype.roomId = 0;
                    FruitLevelDesc.prototype.gameType = 0;
                    FruitLevelDesc.prototype.minChips = 0;
                    FruitLevelDesc.prototype.maxBets = $util.emptyArray;
                    FruitLevelDesc.prototype.chips = $util.emptyArray;

                    FruitLevelDesc.create = function create(properties) {
                        return new FruitLevelDesc(properties);
                    };

                    FruitLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    FruitLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.FruitLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    FruitLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.FruitLevelDesc";
                    };

                    return FruitLevelDesc;
                })();

                platform.WinGoLevelDesc = (function() {

                    function WinGoLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    WinGoLevelDesc.prototype.roomId = 0;
                    WinGoLevelDesc.prototype.gameType = 0;
                    WinGoLevelDesc.prototype.minChips = 0;
                    WinGoLevelDesc.prototype.maxBets = $util.emptyArray;
                    WinGoLevelDesc.prototype.chips = $util.emptyArray;

                    WinGoLevelDesc.create = function create(properties) {
                        return new WinGoLevelDesc(properties);
                    };

                    WinGoLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    WinGoLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.WinGoLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    WinGoLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.WinGoLevelDesc";
                    };

                    return WinGoLevelDesc;
                })();

                platform.TexasBrLevelDesc = (function() {

                    function TexasBrLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    TexasBrLevelDesc.prototype.roomId = 0;
                    TexasBrLevelDesc.prototype.gameType = 0;
                    TexasBrLevelDesc.prototype.minChips = 0;
                    TexasBrLevelDesc.prototype.maxBets = $util.emptyArray;
                    TexasBrLevelDesc.prototype.chips = $util.emptyArray;

                    TexasBrLevelDesc.create = function create(properties) {
                        return new TexasBrLevelDesc(properties);
                    };

                    TexasBrLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    TexasBrLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.TexasBrLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    TexasBrLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.TexasBrLevelDesc";
                    };

                    return TexasBrLevelDesc;
                })();

                platform.RocketLevelDesc = (function() {

                    function RocketLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    RocketLevelDesc.prototype.roomId = 0;
                    RocketLevelDesc.prototype.gameType = 0;
                    RocketLevelDesc.prototype.minChips = 0;
                    RocketLevelDesc.prototype.maxBets = $util.emptyArray;
                    RocketLevelDesc.prototype.chips = $util.emptyArray;

                    RocketLevelDesc.create = function create(properties) {
                        return new RocketLevelDesc(properties);
                    };

                    RocketLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    RocketLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.RocketLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    RocketLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.RocketLevelDesc";
                    };

                    return RocketLevelDesc;
                })();

                platform.Lucky3pattiLevelDesc = (function() {

                    function Lucky3pattiLevelDesc(p) {
                        this.maxBets = [];
                        this.chips = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    Lucky3pattiLevelDesc.prototype.roomId = 0;
                    Lucky3pattiLevelDesc.prototype.gameType = 0;
                    Lucky3pattiLevelDesc.prototype.minChips = 0;
                    Lucky3pattiLevelDesc.prototype.maxBets = $util.emptyArray;
                    Lucky3pattiLevelDesc.prototype.chips = $util.emptyArray;

                    Lucky3pattiLevelDesc.create = function create(properties) {
                        return new Lucky3pattiLevelDesc(properties);
                    };

                    Lucky3pattiLevelDesc.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.minChips != null && Object.hasOwnProperty.call(m, "minChips"))
                            w.uint32(24).uint32(m.minChips);
                        if (m.maxBets != null && m.maxBets.length) {
                            w.uint32(34).fork();
                            for (var i = 0; i < m.maxBets.length; ++i)
                                w.uint32(m.maxBets[i]);
                            w.ldelim();
                        }
                        if (m.chips != null && m.chips.length) {
                            w.uint32(42).fork();
                            for (var i = 0; i < m.chips.length; ++i)
                                w.uint32(m.chips[i]);
                            w.ldelim();
                        }
                        return w;
                    };

                    Lucky3pattiLevelDesc.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.Lucky3pattiLevelDesc();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChips = r.uint32();
                                    break;
                                }
                            case 4: {
                                    if (!(m.maxBets && m.maxBets.length))
                                        m.maxBets = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.maxBets.push(r.uint32());
                                    } else
                                        m.maxBets.push(r.uint32());
                                    break;
                                }
                            case 5: {
                                    if (!(m.chips && m.chips.length))
                                        m.chips = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.chips.push(r.uint32());
                                    } else
                                        m.chips.push(r.uint32());
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    Lucky3pattiLevelDesc.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.Lucky3pattiLevelDesc";
                    };

                    return Lucky3pattiLevelDesc;
                })();

                platform.GameKindRequest = (function() {

                    function GameKindRequest(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameKindRequest.prototype.gameKind = 0;

                    GameKindRequest.create = function create(properties) {
                        return new GameKindRequest(properties);
                    };

                    GameKindRequest.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.gameKind != null && Object.hasOwnProperty.call(m, "gameKind"))
                            w.uint32(8).int32(m.gameKind);
                        return w;
                    };

                    GameKindRequest.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.GameKindRequest();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.gameKind = r.int32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameKindRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.GameKindRequest";
                    };

                    return GameKindRequest;
                })();

                platform.GameKindResponse = (function() {

                    function GameKindResponse(p) {
                        this.gameKind = [];
                        this.rummyLevels = [];
                        this.teepattiLevels = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameKindResponse.prototype.gameKind = $util.emptyArray;
                    GameKindResponse.prototype.rummyLevels = $util.emptyArray;
                    GameKindResponse.prototype.teepattiLevels = $util.emptyArray;

                    GameKindResponse.create = function create(properties) {
                        return new GameKindResponse(properties);
                    };

                    GameKindResponse.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.gameKind != null && m.gameKind.length) {
                            w.uint32(10).fork();
                            for (var i = 0; i < m.gameKind.length; ++i)
                                w.int32(m.gameKind[i]);
                            w.ldelim();
                        }
                        if (m.rummyLevels != null && m.rummyLevels.length) {
                            for (var i = 0; i < m.rummyLevels.length; ++i)
                                $root.com.cw.chess2.platform.RummyLevelDesc.encode(m.rummyLevels[i], w.uint32(18).fork()).ldelim();
                        }
                        if (m.teepattiLevels != null && m.teepattiLevels.length) {
                            for (var i = 0; i < m.teepattiLevels.length; ++i)
                                $root.com.cw.chess2.platform.TeepattiLevelDesc.encode(m.teepattiLevels[i], w.uint32(26).fork()).ldelim();
                        }
                        return w;
                    };

                    GameKindResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.GameKindResponse();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.gameKind && m.gameKind.length))
                                        m.gameKind = [];
                                    if ((t & 7) === 2) {
                                        var c2 = r.uint32() + r.pos;
                                        while (r.pos < c2)
                                            m.gameKind.push(r.int32());
                                    } else
                                        m.gameKind.push(r.int32());
                                    break;
                                }
                            case 2: {
                                    if (!(m.rummyLevels && m.rummyLevels.length))
                                        m.rummyLevels = [];
                                    m.rummyLevels.push($root.com.cw.chess2.platform.RummyLevelDesc.decode(r, r.uint32()));
                                    break;
                                }
                            case 3: {
                                    if (!(m.teepattiLevels && m.teepattiLevels.length))
                                        m.teepattiLevels = [];
                                    m.teepattiLevels.push($root.com.cw.chess2.platform.TeepattiLevelDesc.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameKindResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.GameKindResponse";
                    };

                    return GameKindResponse;
                })();

                platform.MatchRequest = (function() {

                    function MatchRequest(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MatchRequest.prototype.action = 0;
                    MatchRequest.prototype.gameKind = 0;
                    MatchRequest.prototype.gameLevel = 0;

                    MatchRequest.create = function create(properties) {
                        return new MatchRequest(properties);
                    };

                    MatchRequest.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.action != null && Object.hasOwnProperty.call(m, "action"))
                            w.uint32(8).uint32(m.action);
                        if (m.gameKind != null && Object.hasOwnProperty.call(m, "gameKind"))
                            w.uint32(16).int32(m.gameKind);
                        if (m.gameLevel != null && Object.hasOwnProperty.call(m, "gameLevel"))
                            w.uint32(24).uint32(m.gameLevel);
                        return w;
                    };

                    MatchRequest.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MatchRequest();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.action = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameKind = r.int32();
                                    break;
                                }
                            case 3: {
                                    m.gameLevel = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MatchRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MatchRequest";
                    };

                    return MatchRequest;
                })();

                platform.MatchResponse = (function() {

                    function MatchResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MatchResponse.prototype.result = 0;
                    MatchResponse.prototype.maxTime = 0;
                    MatchResponse.prototype.averageTime = 0;

                    MatchResponse.create = function create(properties) {
                        return new MatchResponse(properties);
                    };

                    MatchResponse.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        if (m.maxTime != null && Object.hasOwnProperty.call(m, "maxTime"))
                            w.uint32(16).uint32(m.maxTime);
                        if (m.averageTime != null && Object.hasOwnProperty.call(m, "averageTime"))
                            w.uint32(24).uint32(m.averageTime);
                        return w;
                    };

                    MatchResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MatchResponse();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.maxTime = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.averageTime = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MatchResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MatchResponse";
                    };

                    return MatchResponse;
                })();

                platform.MatchOKResponse = (function() {

                    function MatchOKResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MatchOKResponse.prototype.result = 0;
                    MatchOKResponse.prototype.gameType = 0;
                    MatchOKResponse.prototype.tableId = 0;
                    MatchOKResponse.prototype.gameKind = 0;
                    MatchOKResponse.prototype.gameLevel = 0;

                    MatchOKResponse.create = function create(properties) {
                        return new MatchOKResponse(properties);
                    };

                    MatchOKResponse.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.result != null && Object.hasOwnProperty.call(m, "result"))
                            w.uint32(8).uint32(m.result);
                        if (m.gameType != null && Object.hasOwnProperty.call(m, "gameType"))
                            w.uint32(16).uint32(m.gameType);
                        if (m.tableId != null && Object.hasOwnProperty.call(m, "tableId"))
                            w.uint32(24).uint32(m.tableId);
                        if (m.gameKind != null && Object.hasOwnProperty.call(m, "gameKind"))
                            w.uint32(32).int32(m.gameKind);
                        if (m.gameLevel != null && Object.hasOwnProperty.call(m, "gameLevel"))
                            w.uint32(40).uint32(m.gameLevel);
                        return w;
                    };

                    MatchOKResponse.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MatchOKResponse();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.result = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.gameType = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.tableId = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.gameKind = r.int32();
                                    break;
                                }
                            case 5: {
                                    m.gameLevel = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MatchOKResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MatchOKResponse";
                    };

                    return MatchOKResponse;
                })();

                platform.ServerGameCommonCmd = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "CMD_C_GAME_INVALID"] = 0;
                    values[valuesById[70] = "CMD_C_GAME_MAGIC_CHAT_REQ"] = 70;
                    values[valuesById[71] = "CMD_C_GAME_MAGIC_CHAT_RESP"] = 71;
                    values[valuesById[80] = "CMD_C_GAME_ROOM_LIST_REQ"] = 80;
                    values[valuesById[81] = "CMD_C_GAME_ROOM_LIST_RESP"] = 81;
                    return values;
                })();

                platform.MsgMagicChatReq = (function() {

                    function MsgMagicChatReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MsgMagicChatReq.prototype.tableId = 0;
                    MsgMagicChatReq.prototype.sendUserId = 0;
                    MsgMagicChatReq.prototype.toUserId = 0;
                    MsgMagicChatReq.prototype.mogicId = 0;

                    MsgMagicChatReq.create = function create(properties) {
                        return new MsgMagicChatReq(properties);
                    };

                    MsgMagicChatReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.tableId != null && Object.hasOwnProperty.call(m, "tableId"))
                            w.uint32(8).uint32(m.tableId);
                        if (m.sendUserId != null && Object.hasOwnProperty.call(m, "sendUserId"))
                            w.uint32(16).uint32(m.sendUserId);
                        if (m.toUserId != null && Object.hasOwnProperty.call(m, "toUserId"))
                            w.uint32(24).uint32(m.toUserId);
                        if (m.mogicId != null && Object.hasOwnProperty.call(m, "mogicId"))
                            w.uint32(32).uint32(m.mogicId);
                        return w;
                    };

                    MsgMagicChatReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MsgMagicChatReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.tableId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.sendUserId = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.toUserId = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.mogicId = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MsgMagicChatReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MsgMagicChatReq";
                    };

                    return MsgMagicChatReq;
                })();

                platform.MsgMagicChatResp = (function() {

                    function MsgMagicChatResp(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    MsgMagicChatResp.prototype.tableId = 0;
                    MsgMagicChatResp.prototype.sendUserId = 0;
                    MsgMagicChatResp.prototype.toUserId = 0;
                    MsgMagicChatResp.prototype.mogicId = 0;

                    MsgMagicChatResp.create = function create(properties) {
                        return new MsgMagicChatResp(properties);
                    };

                    MsgMagicChatResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.tableId != null && Object.hasOwnProperty.call(m, "tableId"))
                            w.uint32(8).uint32(m.tableId);
                        if (m.sendUserId != null && Object.hasOwnProperty.call(m, "sendUserId"))
                            w.uint32(16).uint32(m.sendUserId);
                        if (m.toUserId != null && Object.hasOwnProperty.call(m, "toUserId"))
                            w.uint32(24).uint32(m.toUserId);
                        if (m.mogicId != null && Object.hasOwnProperty.call(m, "mogicId"))
                            w.uint32(32).uint32(m.mogicId);
                        return w;
                    };

                    MsgMagicChatResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.MsgMagicChatResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.tableId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.sendUserId = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.toUserId = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.mogicId = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    MsgMagicChatResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.MsgMagicChatResp";
                    };

                    return MsgMagicChatResp;
                })();

                platform.GameRoomListReq = (function() {

                    function GameRoomListReq(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameRoomListReq.create = function create(properties) {
                        return new GameRoomListReq(properties);
                    };

                    GameRoomListReq.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        return w;
                    };

                    GameRoomListReq.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.GameRoomListReq();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameRoomListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.GameRoomListReq";
                    };

                    return GameRoomListReq;
                })();

                platform.GameRoomListResp = (function() {

                    function GameRoomListResp(p) {
                        this.roomList = [];
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameRoomListResp.prototype.roomList = $util.emptyArray;

                    GameRoomListResp.create = function create(properties) {
                        return new GameRoomListResp(properties);
                    };

                    GameRoomListResp.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomList != null && m.roomList.length) {
                            for (var i = 0; i < m.roomList.length; ++i)
                                $root.com.cw.chess2.platform.GameRoomInfo.encode(m.roomList[i], w.uint32(10).fork()).ldelim();
                        }
                        return w;
                    };

                    GameRoomListResp.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.GameRoomListResp();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    if (!(m.roomList && m.roomList.length))
                                        m.roomList = [];
                                    m.roomList.push($root.com.cw.chess2.platform.GameRoomInfo.decode(r, r.uint32()));
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameRoomListResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.GameRoomListResp";
                    };

                    return GameRoomListResp;
                })();

                platform.GameRoomInfo = (function() {

                    function GameRoomInfo(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null)
                                    this[ks[i]] = p[ks[i]];
                    }

                    GameRoomInfo.prototype.roomId = 0;
                    GameRoomInfo.prototype.maxPlayers = 0;
                    GameRoomInfo.prototype.minChip = 0;
                    GameRoomInfo.prototype.minEntry = 0;
                    GameRoomInfo.prototype.onlinePlayers = 0;

                    GameRoomInfo.create = function create(properties) {
                        return new GameRoomInfo(properties);
                    };

                    GameRoomInfo.encode = function encode(m, w) {
                        if (!w)
                            w = $Writer.create();
                        if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                            w.uint32(8).uint32(m.roomId);
                        if (m.maxPlayers != null && Object.hasOwnProperty.call(m, "maxPlayers"))
                            w.uint32(16).uint32(m.maxPlayers);
                        if (m.minChip != null && Object.hasOwnProperty.call(m, "minChip"))
                            w.uint32(24).uint32(m.minChip);
                        if (m.minEntry != null && Object.hasOwnProperty.call(m, "minEntry"))
                            w.uint32(32).uint32(m.minEntry);
                        if (m.onlinePlayers != null && Object.hasOwnProperty.call(m, "onlinePlayers"))
                            w.uint32(40).uint32(m.onlinePlayers);
                        return w;
                    };

                    GameRoomInfo.decode = function decode(r, l) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        var c = l === undefined ? r.len : r.pos + l, m = new $root.com.cw.chess2.platform.GameRoomInfo();
                        while (r.pos < c) {
                            var t = r.uint32();
                            switch (t >>> 3) {
                            case 1: {
                                    m.roomId = r.uint32();
                                    break;
                                }
                            case 2: {
                                    m.maxPlayers = r.uint32();
                                    break;
                                }
                            case 3: {
                                    m.minChip = r.uint32();
                                    break;
                                }
                            case 4: {
                                    m.minEntry = r.uint32();
                                    break;
                                }
                            case 5: {
                                    m.onlinePlayers = r.uint32();
                                    break;
                                }
                            default:
                                r.skipType(t & 7);
                                break;
                            }
                        }
                        return m;
                    };

                    GameRoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/com.cw.chess2.platform.GameRoomInfo";
                    };

                    return GameRoomInfo;
                })();

                return platform;
            })();

            return chess2;
        })();

        return cw;
    })();

    return com;
})();

export { $root as default };
