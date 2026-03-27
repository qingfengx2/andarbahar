// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run build:types'.

export = awesome;

declare namespace awesome {


    namespace com {

        namespace cw {

            namespace chess2 {

                namespace andarbahar {

                    enum AndarBahar_S_Cmd {
                        CMD_S_INVALID = 0,
                        CMD_S_PING = 1,
                        CMD_S_PONG = 2
                    }

                    interface ITableData {
                        tableId?: (number|null);
                        data?: (Uint8Array|null);
                    }

                    class TableData implements ITableData {
                        constructor(p?: com.cw.chess2.andarbahar.ITableData);
                        public tableId: number;
                        public data: Uint8Array;
                        public static create(properties?: com.cw.chess2.andarbahar.ITableData): com.cw.chess2.andarbahar.TableData;
                        public static encode(m: com.cw.chess2.andarbahar.TableData, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.TableData;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMSG_C_COMMON_REQ {
                    }

                    class MSG_C_COMMON_REQ implements IMSG_C_COMMON_REQ {
                        constructor(p?: com.cw.chess2.andarbahar.IMSG_C_COMMON_REQ);
                        public static create(properties?: com.cw.chess2.andarbahar.IMSG_C_COMMON_REQ): com.cw.chess2.andarbahar.MSG_C_COMMON_REQ;
                        public static encode(m: com.cw.chess2.andarbahar.MSG_C_COMMON_REQ, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.MSG_C_COMMON_REQ;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMSG_C_COMMON_RESP {
                        result?: (number|null);
                    }

                    class MSG_C_COMMON_RESP implements IMSG_C_COMMON_RESP {
                        constructor(p?: com.cw.chess2.andarbahar.IMSG_C_COMMON_RESP);
                        public result: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IMSG_C_COMMON_RESP): com.cw.chess2.andarbahar.MSG_C_COMMON_RESP;
                        public static encode(m: com.cw.chess2.andarbahar.MSG_C_COMMON_RESP, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.MSG_C_COMMON_RESP;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    enum AndarBaharCmd {
                        CMD_C_INVALID = 0,
                        CMD_C_GAME_ENTER_REQ = 1,
                        CMD_C_GAME_ENTER_RESP = 2,
                        CMD_C_GAME_GET_TABLE_STATUS_REQ = 3,
                        CMD_C_GAME_GET_TABLE_STATUS_RESP = 4,
                        CMD_C_GAME_BET_REQ = 5,
                        CMD_C_GAME_BET_RESP = 6,
                        CMD_C_GAME_REPEAT_BET_REQ = 7,
                        CMD_C_GAME_REPEAT_BET_RESP = 8,
                        CMD_C_GAME_LEAVE_REQ = 9,
                        CMD_C_GAME_LEAVE_RESP = 10,
                        CMD_C_GAME_READY_NOTICE_RESP = 12,
                        CMD_C_GAME_START_NOTICE_RESP = 14,
                        CMD_C_GAME_BET_NOTICE_RESP = 16,
                        CMD_C_GAME_SHOW_RESULT_RESP = 18,
                        CMD_C_GAME_SETTLE_NOTICE_RESP = 20,
                        CMD_C_GAME_GET_PLAYERS_REQ = 21,
                        CMD_C_GAME_GET_PLAYERS_RESP = 22,
                        CMD_C_GAME_SYNC_CHAIR_RESP = 24,
                        CMD_C_GAME_SYNC_BET_RESP = 26,
                        CMD_C_GAME_SYNC_PLAYER_COUNT_RESP = 28,
                        CMD_C_GAME_REPEAT_BET_NOTICE_RESP = 30,
                        CMD_C_GAME_NO_BET_NOTICE_RESP = 32,
                        CMD_C_GAME_SYNC_BALANCE_RESP = 34,
                        CMD_C_CHAT_REQ = 62,
                        CMD_C_CHAT_RESP = 63,
                        CMD_C_MATCH_FINISH_REQ = 100,
                        CMD_C_MATCH_FINISH_RESP = 101,
                        CMD_C_GET_TABLE_EMPTY_REQ = 102,
                        CMD_C_GET_TABLE_EMPTY_RESP = 103,
                        CMD_C_CAN_UPDATE_BALANCE_REQ = 200
                    }

                    enum GamePhase {
                        PHS_INVALID = 0,
                        PHS_GAME_READY = 1,
                        PHS_GAME_START = 2,
                        PHS_GAME_BETTING = 3,
                        PHS_GAME_RESULT = 4,
                        PHS_GAME_SETTLE = 5
                    }

                    interface IBetData {
                        index?: (number|null);
                        bet?: (number|null);
                    }

                    class BetData implements IBetData {
                        constructor(p?: com.cw.chess2.andarbahar.IBetData);
                        public index: number;
                        public bet: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IBetData): com.cw.chess2.andarbahar.BetData;
                        public static encode(m: com.cw.chess2.andarbahar.BetData, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.BetData;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IUserBetList {
                        userId?: (number|null);
                        bets?: (com.cw.chess2.andarbahar.BetData[]|null);
                    }

                    class UserBetList implements IUserBetList {
                        constructor(p?: com.cw.chess2.andarbahar.IUserBetList);
                        public userId: number;
                        public bets: com.cw.chess2.andarbahar.BetData[];
                        public static create(properties?: com.cw.chess2.andarbahar.IUserBetList): com.cw.chess2.andarbahar.UserBetList;
                        public static encode(m: com.cw.chess2.andarbahar.UserBetList, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.UserBetList;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IChairStatus {
                        bUser?: (number|null);
                        chairIndex?: (number|null);
                        user?: (com.cw.chess2.platform.GameUser|null);
                    }

                    class ChairStatus implements IChairStatus {
                        constructor(p?: com.cw.chess2.andarbahar.IChairStatus);
                        public bUser: number;
                        public chairIndex: number;
                        public user?: (com.cw.chess2.platform.GameUser|null);
                        public static create(properties?: com.cw.chess2.andarbahar.IChairStatus): com.cw.chess2.andarbahar.ChairStatus;
                        public static encode(m: com.cw.chess2.andarbahar.ChairStatus, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.ChairStatus;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IAreaBet {
                        totalBalance?: (number|null);
                        ownerBalance?: (number|null);
                    }

                    class AreaBet implements IAreaBet {
                        constructor(p?: com.cw.chess2.andarbahar.IAreaBet);
                        public totalBalance: number;
                        public ownerBalance: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IAreaBet): com.cw.chess2.andarbahar.AreaBet;
                        public static encode(m: com.cw.chess2.andarbahar.AreaBet, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.AreaBet;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IRoadData {
                        winner?: (number|null);
                        nums?: (number|null);
                    }

                    class RoadData implements IRoadData {
                        constructor(p?: com.cw.chess2.andarbahar.IRoadData);
                        public winner: number;
                        public nums: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IRoadData): com.cw.chess2.andarbahar.RoadData;
                        public static encode(m: com.cw.chess2.andarbahar.RoadData, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.RoadData;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameGetTableStatusReq {
                    }

                    class GameGetTableStatusReq implements IGameGetTableStatusReq {
                        constructor(p?: com.cw.chess2.andarbahar.IGameGetTableStatusReq);
                        public static create(properties?: com.cw.chess2.andarbahar.IGameGetTableStatusReq): com.cw.chess2.andarbahar.GameGetTableStatusReq;
                        public static encode(m: com.cw.chess2.andarbahar.GameGetTableStatusReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameGetTableStatusReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameGetTableStatusResp {
                        desc?: (com.cw.chess2.platform.AndarBaharLevelDesc|null);
                        roundId?: (string|null);
                        gamePhase?: (com.cw.chess2.andarbahar.GamePhase|null);
                        timeCount?: (number|null);
                        timeLimit?: (number|null);
                        chairs?: (com.cw.chess2.andarbahar.ChairStatus[]|null);
                        self?: (com.cw.chess2.platform.GameUser|null);
                        areaBets?: (com.cw.chess2.andarbahar.AreaBet[]|null);
                        betList?: (com.cw.chess2.andarbahar.UserBetList[]|null);
                        road?: (com.cw.chess2.andarbahar.RoadData[]|null);
                        repeatBet?: (number|null);
                        playerCount?: (number|null);
                        winner?: (number|null);
                        joker?: (number|null);
                        nums?: (number|null);
                        cardsA?: (number[]|null);
                        cardsB?: (number[]|null);
                    }

                    class GameGetTableStatusResp implements IGameGetTableStatusResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameGetTableStatusResp);
                        public desc?: (com.cw.chess2.platform.AndarBaharLevelDesc|null);
                        public roundId: string;
                        public gamePhase: com.cw.chess2.andarbahar.GamePhase;
                        public timeCount: number;
                        public timeLimit: number;
                        public chairs: com.cw.chess2.andarbahar.ChairStatus[];
                        public self?: (com.cw.chess2.platform.GameUser|null);
                        public areaBets: com.cw.chess2.andarbahar.AreaBet[];
                        public betList: com.cw.chess2.andarbahar.UserBetList[];
                        public road: com.cw.chess2.andarbahar.RoadData[];
                        public repeatBet: number;
                        public playerCount: number;
                        public winner: number;
                        public joker: number;
                        public nums: number;
                        public cardsA: number[];
                        public cardsB: number[];
                        public static create(properties?: com.cw.chess2.andarbahar.IGameGetTableStatusResp): com.cw.chess2.andarbahar.GameGetTableStatusResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameGetTableStatusResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameGetTableStatusResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameGetTableEmptyResp {
                    }

                    class GameGetTableEmptyResp implements IGameGetTableEmptyResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameGetTableEmptyResp);
                        public static create(properties?: com.cw.chess2.andarbahar.IGameGetTableEmptyResp): com.cw.chess2.andarbahar.GameGetTableEmptyResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameGetTableEmptyResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameGetTableEmptyResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameEnterReq {
                    }

                    class GameEnterReq implements IGameEnterReq {
                        constructor(p?: com.cw.chess2.andarbahar.IGameEnterReq);
                        public static create(properties?: com.cw.chess2.andarbahar.IGameEnterReq): com.cw.chess2.andarbahar.GameEnterReq;
                        public static encode(m: com.cw.chess2.andarbahar.GameEnterReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameEnterReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameEnterResp {
                        result?: (number|null);
                    }

                    class GameEnterResp implements IGameEnterResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameEnterResp);
                        public result: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameEnterResp): com.cw.chess2.andarbahar.GameEnterResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameEnterResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameEnterResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameBetReq {
                        index?: (number|null);
                        bet?: (number|null);
                    }

                    class GameBetReq implements IGameBetReq {
                        constructor(p?: com.cw.chess2.andarbahar.IGameBetReq);
                        public index: number;
                        public bet: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameBetReq): com.cw.chess2.andarbahar.GameBetReq;
                        public static encode(m: com.cw.chess2.andarbahar.GameBetReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameBetReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameBetResp {
                        result?: (number|null);
                        index?: (number|null);
                        bet?: (number|null);
                        myBet?: (number|null);
                        totalBet?: (number|null);
                        balance?: (number|null);
                    }

                    class GameBetResp implements IGameBetResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameBetResp);
                        public result: number;
                        public index: number;
                        public bet: number;
                        public myBet: number;
                        public totalBet: number;
                        public balance: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameBetResp): com.cw.chess2.andarbahar.GameBetResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameBetResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameBetResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameBettingNotify {
                        index?: (number|null);
                        bet?: (number|null);
                        totalBet?: (number|null);
                        userId?: (number|null);
                        balance?: (number|null);
                    }

                    class GameBettingNotify implements IGameBettingNotify {
                        constructor(p?: com.cw.chess2.andarbahar.IGameBettingNotify);
                        public index: number;
                        public bet: number;
                        public totalBet: number;
                        public userId: number;
                        public balance: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameBettingNotify): com.cw.chess2.andarbahar.GameBettingNotify;
                        public static encode(m: com.cw.chess2.andarbahar.GameBettingNotify, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameBettingNotify;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameRepeatBetReq {
                    }

                    class GameRepeatBetReq implements IGameRepeatBetReq {
                        constructor(p?: com.cw.chess2.andarbahar.IGameRepeatBetReq);
                        public static create(properties?: com.cw.chess2.andarbahar.IGameRepeatBetReq): com.cw.chess2.andarbahar.GameRepeatBetReq;
                        public static encode(m: com.cw.chess2.andarbahar.GameRepeatBetReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameRepeatBetReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameRepeatBetNoticeResp {
                        userId?: (number|null);
                        balance?: (number|null);
                        areaBets?: (number[]|null);
                        list?: (com.cw.chess2.andarbahar.BetData[]|null);
                    }

                    class GameRepeatBetNoticeResp implements IGameRepeatBetNoticeResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameRepeatBetNoticeResp);
                        public userId: number;
                        public balance: number;
                        public areaBets: number[];
                        public list: com.cw.chess2.andarbahar.BetData[];
                        public static create(properties?: com.cw.chess2.andarbahar.IGameRepeatBetNoticeResp): com.cw.chess2.andarbahar.GameRepeatBetNoticeResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameRepeatBetNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameRepeatBetNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameRepeatBetResp {
                        result?: (number|null);
                        balance?: (number|null);
                        areaBets?: (com.cw.chess2.andarbahar.AreaBet[]|null);
                        list?: (com.cw.chess2.andarbahar.BetData[]|null);
                    }

                    class GameRepeatBetResp implements IGameRepeatBetResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameRepeatBetResp);
                        public result: number;
                        public balance: number;
                        public areaBets: com.cw.chess2.andarbahar.AreaBet[];
                        public list: com.cw.chess2.andarbahar.BetData[];
                        public static create(properties?: com.cw.chess2.andarbahar.IGameRepeatBetResp): com.cw.chess2.andarbahar.GameRepeatBetResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameRepeatBetResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameRepeatBetResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameLeaveReq {
                    }

                    class GameLeaveReq implements IGameLeaveReq {
                        constructor(p?: com.cw.chess2.andarbahar.IGameLeaveReq);
                        public static create(properties?: com.cw.chess2.andarbahar.IGameLeaveReq): com.cw.chess2.andarbahar.GameLeaveReq;
                        public static encode(m: com.cw.chess2.andarbahar.GameLeaveReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameLeaveReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameLeaveResp {
                        result?: (number|null);
                    }

                    class GameLeaveResp implements IGameLeaveResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameLeaveResp);
                        public result: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameLeaveResp): com.cw.chess2.andarbahar.GameLeaveResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameLeaveResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameLeaveResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameReadyNoticeResp {
                    }

                    class GameReadyNoticeResp implements IGameReadyNoticeResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameReadyNoticeResp);
                        public static create(properties?: com.cw.chess2.andarbahar.IGameReadyNoticeResp): com.cw.chess2.andarbahar.GameReadyNoticeResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameReadyNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameReadyNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameStartNoticeResp {
                        joker?: (number|null);
                    }

                    class GameStartNoticeResp implements IGameStartNoticeResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameStartNoticeResp);
                        public joker: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameStartNoticeResp): com.cw.chess2.andarbahar.GameStartNoticeResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameStartNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameStartNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameBetNoticeResp {
                        count?: (number|null);
                        repeatBet?: (number|null);
                    }

                    class GameBetNoticeResp implements IGameBetNoticeResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameBetNoticeResp);
                        public count: number;
                        public repeatBet: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameBetNoticeResp): com.cw.chess2.andarbahar.GameBetNoticeResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameBetNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameBetNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameResultResp {
                        winner?: (number|null);
                        joker?: (number|null);
                        nums?: (number|null);
                        cardsA?: (number[]|null);
                        cardsB?: (number[]|null);
                    }

                    class GameResultResp implements IGameResultResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameResultResp);
                        public winner: number;
                        public joker: number;
                        public nums: number;
                        public cardsA: number[];
                        public cardsB: number[];
                        public static create(properties?: com.cw.chess2.andarbahar.IGameResultResp): com.cw.chess2.andarbahar.GameResultResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameResultResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameResultResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IWinnerBalance {
                        index?: (number|null);
                        amount?: (number|null);
                        bets?: (number|null);
                    }

                    class WinnerBalance implements IWinnerBalance {
                        constructor(p?: com.cw.chess2.andarbahar.IWinnerBalance);
                        public index: number;
                        public amount: number;
                        public bets: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IWinnerBalance): com.cw.chess2.andarbahar.WinnerBalance;
                        public static encode(m: com.cw.chess2.andarbahar.WinnerBalance, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.WinnerBalance;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IWinnerData {
                        userId?: (number|null);
                        balance?: (number|null);
                        wins?: (com.cw.chess2.andarbahar.WinnerBalance[]|null);
                    }

                    class WinnerData implements IWinnerData {
                        constructor(p?: com.cw.chess2.andarbahar.IWinnerData);
                        public userId: number;
                        public balance: number;
                        public wins: com.cw.chess2.andarbahar.WinnerBalance[];
                        public static create(properties?: com.cw.chess2.andarbahar.IWinnerData): com.cw.chess2.andarbahar.WinnerData;
                        public static encode(m: com.cw.chess2.andarbahar.WinnerData, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.WinnerData;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameWinNoticeResp {
                        winners?: (com.cw.chess2.andarbahar.WinnerData[]|null);
                    }

                    class GameWinNoticeResp implements IGameWinNoticeResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameWinNoticeResp);
                        public winners: com.cw.chess2.andarbahar.WinnerData[];
                        public static create(properties?: com.cw.chess2.andarbahar.IGameWinNoticeResp): com.cw.chess2.andarbahar.GameWinNoticeResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameWinNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameWinNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameGetPlayersReq {
                        page?: (number|null);
                    }

                    class GameGetPlayersReq implements IGameGetPlayersReq {
                        constructor(p?: com.cw.chess2.andarbahar.IGameGetPlayersReq);
                        public page: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameGetPlayersReq): com.cw.chess2.andarbahar.GameGetPlayersReq;
                        public static encode(m: com.cw.chess2.andarbahar.GameGetPlayersReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameGetPlayersReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameGetPlayersResp {
                        users?: (com.cw.chess2.platform.GameUser[]|null);
                        winUsers?: (com.cw.chess2.platform.GameUser[]|null);
                        page?: (number|null);
                        count?: (number|null);
                    }

                    class GameGetPlayersResp implements IGameGetPlayersResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameGetPlayersResp);
                        public users: com.cw.chess2.platform.GameUser[];
                        public winUsers: com.cw.chess2.platform.GameUser[];
                        public page: number;
                        public count: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameGetPlayersResp): com.cw.chess2.andarbahar.GameGetPlayersResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameGetPlayersResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameGetPlayersResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameSyncChairResp {
                        chairs?: (com.cw.chess2.andarbahar.ChairStatus[]|null);
                    }

                    class GameSyncChairResp implements IGameSyncChairResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameSyncChairResp);
                        public chairs: com.cw.chess2.andarbahar.ChairStatus[];
                        public static create(properties?: com.cw.chess2.andarbahar.IGameSyncChairResp): com.cw.chess2.andarbahar.GameSyncChairResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameSyncChairResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameSyncChairResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameSyncPlayerCountResp {
                        count?: (number|null);
                    }

                    class GameSyncPlayerCountResp implements IGameSyncPlayerCountResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameSyncPlayerCountResp);
                        public count: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameSyncPlayerCountResp): com.cw.chess2.andarbahar.GameSyncPlayerCountResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameSyncPlayerCountResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameSyncPlayerCountResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameNoBetNoticeResp {
                        count?: (number|null);
                    }

                    class GameNoBetNoticeResp implements IGameNoBetNoticeResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameNoBetNoticeResp);
                        public count: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameNoBetNoticeResp): com.cw.chess2.andarbahar.GameNoBetNoticeResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameNoBetNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameNoBetNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameSyncBalanceResp {
                        balance?: (number|null);
                    }

                    class GameSyncBalanceResp implements IGameSyncBalanceResp {
                        constructor(p?: com.cw.chess2.andarbahar.IGameSyncBalanceResp);
                        public balance: number;
                        public static create(properties?: com.cw.chess2.andarbahar.IGameSyncBalanceResp): com.cw.chess2.andarbahar.GameSyncBalanceResp;
                        public static encode(m: com.cw.chess2.andarbahar.GameSyncBalanceResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.GameSyncBalanceResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMsgChatReq {
                        tableId?: (number|null);
                        chatType?: (number|null);
                        typeValue1?: (string|null);
                        typeValue2?: (string|null);
                    }

                    class MsgChatReq implements IMsgChatReq {
                        constructor(p?: com.cw.chess2.andarbahar.IMsgChatReq);
                        public tableId: number;
                        public chatType: number;
                        public typeValue1: string;
                        public typeValue2: string;
                        public static create(properties?: com.cw.chess2.andarbahar.IMsgChatReq): com.cw.chess2.andarbahar.MsgChatReq;
                        public static encode(m: com.cw.chess2.andarbahar.MsgChatReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.MsgChatReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMsgChatResp {
                        tableId?: (number|null);
                        userId?: (number|null);
                        nickName?: (string|null);
                        chatType?: (number|null);
                        typeValue1?: (string|null);
                        typeValue2?: (string|null);
                    }

                    class MsgChatResp implements IMsgChatResp {
                        constructor(p?: com.cw.chess2.andarbahar.IMsgChatResp);
                        public tableId: number;
                        public userId: number;
                        public nickName: string;
                        public chatType: number;
                        public typeValue1: string;
                        public typeValue2: string;
                        public static create(properties?: com.cw.chess2.andarbahar.IMsgChatResp): com.cw.chess2.andarbahar.MsgChatResp;
                        public static encode(m: com.cw.chess2.andarbahar.MsgChatResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.andarbahar.MsgChatResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                namespace platform {

                    interface IGameUser {
                        uid?: (number|null);
                        realUser?: (number|null);
                        coin?: (number|null);
                        userNick?: (string|null);
                        userHead?: (string|null);
                        userType?: (number|null);
                        paid?: (number|null);
                        withdraw?: (number|null);
                        hands?: (number|null);
                        weekCardEndTime?: (number|null);
                        monCardEndTime?: (number|null);
                        winLoseCoin?: (number|null);
                        maxConWinRound?: (number|null);
                        winRound?: (number|null);
                        vip?: (number|null);
                    }

                    class GameUser implements IGameUser {
                        constructor(p?: com.cw.chess2.platform.IGameUser);
                        public uid: number;
                        public realUser: number;
                        public coin: number;
                        public userNick: string;
                        public userHead: string;
                        public userType: number;
                        public paid: number;
                        public withdraw: number;
                        public hands: number;
                        public weekCardEndTime: number;
                        public monCardEndTime: number;
                        public winLoseCoin: number;
                        public maxConWinRound: number;
                        public winRound: number;
                        public vip: number;
                        public static create(properties?: com.cw.chess2.platform.IGameUser): com.cw.chess2.platform.GameUser;
                        public static encode(m: com.cw.chess2.platform.GameUser, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.GameUser;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface ICommonResponse {
                        result?: (number|null);
                    }

                    class CommonResponse implements ICommonResponse {
                        constructor(p?: com.cw.chess2.platform.ICommonResponse);
                        public result: number;
                        public static create(properties?: com.cw.chess2.platform.ICommonResponse): com.cw.chess2.platform.CommonResponse;
                        public static encode(m: com.cw.chess2.platform.CommonResponse, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.CommonResponse;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    enum ServerType {
                        SERVER_TYPE_INVALID = 0,
                        SERVER_TYPE_GATEWAY = 1000,
                        SERVER_TYPE_COMMON = 1100,
                        SERVER_TYPE_MATCH = 1101,
                        SERVER_TYPE_BA = 2002,
                        SERVER_TYPE_RUMMY_ = 3000,
                        SERVER_TYPE_TEEN_PATTI_ = 4000,
                        SERVER_TYPE_TEEN_PATTI_WAR_ = 5000,
                        SERVER_TYPE_DROGON_TIGER_ = 6000,
                        SERVER_TYPE_SEVEN_UP_DOWN_ = 700,
                        SERVER_TYPE_TEEN_PATTI_LAI = 800,
                        SERVER_TYPE_TEEN_PATTI_JD = 900,
                        SERVER_TYPE_AB = 1010,
                        SERVER_TYPE_AB_DESK = 1110,
                        SERVER_TYPE_JHANDI_MUNDA = 1200,
                        SERVER_TYPE_CAR_RACING = 1300,
                        SERVER_TYPE_SLOT_FRUIT = 1400,
                        SERVER_TYPE_WINGO_LOTTERY = 1500,
                        SERVER_TYPE_TEXAS_BR = 1600,
                        SERVER_TYPE_ROCKET = 1700,
                        SERVER_TYPE_LUCKY3PATTI = 2100
                    }

                    enum ServerGatewayCmd {
                        CMD_GATEWAY_INVALID = 0,
                        CMD_GATEWAY_LOGIN_REQ = 1,
                        CMD_GATEWAY_LOGIN_RESP = 2,
                        CMD_GATEWAY_LOGOUT_REQ = 3,
                        CMD_GATEWAY_LOGOUT_RESP = 4,
                        CMD_GATEWAY_DISCONNECT_REQ = 5,
                        CMD_GATEWAY_DISCONNECT_RESP = 6,
                        CMD_GATEWAY_REPEAT_LOGIN_REQ = 7,
                        CMD_GATEWAY_REPEAT_LOGIN_RESP = 8,
                        CMD_GATEWAY_PING_REQ = 9,
                        CMD_GATEWAY_PING_RESP = 10
                    }

                    interface ILoginRequest {
                        userId?: (number|null);
                        token?: (string|null);
                    }

                    class LoginRequest implements ILoginRequest {
                        constructor(p?: com.cw.chess2.platform.ILoginRequest);
                        public userId: number;
                        public token: string;
                        public static create(properties?: com.cw.chess2.platform.ILoginRequest): com.cw.chess2.platform.LoginRequest;
                        public static encode(m: com.cw.chess2.platform.LoginRequest, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.LoginRequest;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface ILoginResponse {
                        result?: (number|null);
                        userId?: (number|null);
                        type?: (number|null);
                        game?: (number|null);
                        table?: (number|null);
                    }

                    class LoginResponse implements ILoginResponse {
                        constructor(p?: com.cw.chess2.platform.ILoginResponse);
                        public result: number;
                        public userId: number;
                        public type: number;
                        public game: number;
                        public table: number;
                        public static create(properties?: com.cw.chess2.platform.ILoginResponse): com.cw.chess2.platform.LoginResponse;
                        public static encode(m: com.cw.chess2.platform.LoginResponse, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.LoginResponse;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    enum ServerCommonCmd {
                        CMD_COMMON_INVALID = 0,
                        CMD_NA_1 = 1,
                        CMD_FREEZE_PLAYER_RESP = 2,
                        CMD_GET_PLAYER_BALANCE_REQ = 3,
                        CMD_GET_PLAYER_BALANCE_RESP = 4,
                        CMD_NA_5 = 5,
                        CMD_SYSMESSAGE_TO_USER_RESP = 6,
                        CMD_NA_7 = 7,
                        CMD_PHP_2_USER_COMMON_RESP = 8,
                        CMD_GET_USER_ATTRI_REQ = 9,
                        CMD_GET_USER_ATTRI_RESP = 10,
                        CMD_UPDATE_USER_ATTRI_REQ = 11,
                        CMD_UPDATE_USER_ATTRI_RESP = 12,
                        CMD_GET_BONUS_REQ = 13,
                        CMD_GET_BONUS_RESP = 14,
                        CMD_WEB_RECHARGE_SUCCESS_RESP = 31,
                        CMD_WEB_POPUP_NOTICE_RESP = 32,
                        CMD_WEB_MAIL_NOTICE_RESP = 33
                    }

                    enum CurrencyKind {
                        CK_INVALID = 0,
                        CK_Money = 1,
                        CK_Practice = 2
                    }

                    interface IGetPlayerBalanceResponse {
                        result?: (number|null);
                        balance?: (number|null);
                        balanceWins?: (number|null);
                        partices?: (number|null);
                        gameCurrency?: (com.cw.chess2.platform.CurrencyKind|null);
                    }

                    class GetPlayerBalanceResponse implements IGetPlayerBalanceResponse {
                        constructor(p?: com.cw.chess2.platform.IGetPlayerBalanceResponse);
                        public result: number;
                        public balance: number;
                        public balanceWins: number;
                        public partices: number;
                        public gameCurrency: com.cw.chess2.platform.CurrencyKind;
                        public static create(properties?: com.cw.chess2.platform.IGetPlayerBalanceResponse): com.cw.chess2.platform.GetPlayerBalanceResponse;
                        public static encode(m: com.cw.chess2.platform.GetPlayerBalanceResponse, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.GetPlayerBalanceResponse;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMessageToUserResp {
                        lastTime?: (number|null);
                        context?: (string|null);
                    }

                    class MessageToUserResp implements IMessageToUserResp {
                        constructor(p?: com.cw.chess2.platform.IMessageToUserResp);
                        public lastTime: number;
                        public context: string;
                        public static create(properties?: com.cw.chess2.platform.IMessageToUserResp): com.cw.chess2.platform.MessageToUserResp;
                        public static encode(m: com.cw.chess2.platform.MessageToUserResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MessageToUserResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IUserAttri {
                        userId?: (number|null);
                        nick?: (string|null);
                        head?: (string|null);
                    }

                    class UserAttri implements IUserAttri {
                        constructor(p?: com.cw.chess2.platform.IUserAttri);
                        public userId: number;
                        public nick: string;
                        public head: string;
                        public static create(properties?: com.cw.chess2.platform.IUserAttri): com.cw.chess2.platform.UserAttri;
                        public static encode(m: com.cw.chess2.platform.UserAttri, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.UserAttri;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMSG_GET_USER_ATTRI_REQ {
                        userIds?: (number[]|null);
                    }

                    class MSG_GET_USER_ATTRI_REQ implements IMSG_GET_USER_ATTRI_REQ {
                        constructor(p?: com.cw.chess2.platform.IMSG_GET_USER_ATTRI_REQ);
                        public userIds: number[];
                        public static create(properties?: com.cw.chess2.platform.IMSG_GET_USER_ATTRI_REQ): com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ;
                        public static encode(m: com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MSG_GET_USER_ATTRI_REQ;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMSG_GET_USER_ATTRI_RESP {
                        userAttris?: (com.cw.chess2.platform.UserAttri[]|null);
                    }

                    class MSG_GET_USER_ATTRI_RESP implements IMSG_GET_USER_ATTRI_RESP {
                        constructor(p?: com.cw.chess2.platform.IMSG_GET_USER_ATTRI_RESP);
                        public userAttris: com.cw.chess2.platform.UserAttri[];
                        public static create(properties?: com.cw.chess2.platform.IMSG_GET_USER_ATTRI_RESP): com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP;
                        public static encode(m: com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MSG_GET_USER_ATTRI_RESP;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMSG_UPDATE_USER_ATTRI_REQ {
                        userAttri?: (com.cw.chess2.platform.UserAttri|null);
                    }

                    class MSG_UPDATE_USER_ATTRI_REQ implements IMSG_UPDATE_USER_ATTRI_REQ {
                        constructor(p?: com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_REQ);
                        public userAttri?: (com.cw.chess2.platform.UserAttri|null);
                        public static create(properties?: com.cw.chess2.platform.IMSG_UPDATE_USER_ATTRI_REQ): com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ;
                        public static encode(m: com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MSG_UPDATE_USER_ATTRI_REQ;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMSG_GET_BONUS_RESP {
                        bonus?: (number|null);
                    }

                    class MSG_GET_BONUS_RESP implements IMSG_GET_BONUS_RESP {
                        constructor(p?: com.cw.chess2.platform.IMSG_GET_BONUS_RESP);
                        public bonus: number;
                        public static create(properties?: com.cw.chess2.platform.IMSG_GET_BONUS_RESP): com.cw.chess2.platform.MSG_GET_BONUS_RESP;
                        public static encode(m: com.cw.chess2.platform.MSG_GET_BONUS_RESP, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MSG_GET_BONUS_RESP;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IRechargeNoticeResp {
                        userId?: (number|null);
                        amount?: (number|null);
                        bonus?: (number|null);
                        type?: (number|null);
                        cash?: (number|null);
                    }

                    class RechargeNoticeResp implements IRechargeNoticeResp {
                        constructor(p?: com.cw.chess2.platform.IRechargeNoticeResp);
                        public userId: number;
                        public amount: number;
                        public bonus: number;
                        public type: number;
                        public cash: number;
                        public static create(properties?: com.cw.chess2.platform.IRechargeNoticeResp): com.cw.chess2.platform.RechargeNoticeResp;
                        public static encode(m: com.cw.chess2.platform.RechargeNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.RechargeNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IPopupNoticeResp {
                        noticeId?: (number|null);
                        bundleName?: (string|null);
                        uids?: (number[]|null);
                    }

                    class PopupNoticeResp implements IPopupNoticeResp {
                        constructor(p?: com.cw.chess2.platform.IPopupNoticeResp);
                        public noticeId: number;
                        public bundleName: string;
                        public uids: number[];
                        public static create(properties?: com.cw.chess2.platform.IPopupNoticeResp): com.cw.chess2.platform.PopupNoticeResp;
                        public static encode(m: com.cw.chess2.platform.PopupNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.PopupNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMailNoticeResp {
                    }

                    class MailNoticeResp implements IMailNoticeResp {
                        constructor(p?: com.cw.chess2.platform.IMailNoticeResp);
                        public static create(properties?: com.cw.chess2.platform.IMailNoticeResp): com.cw.chess2.platform.MailNoticeResp;
                        public static encode(m: com.cw.chess2.platform.MailNoticeResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MailNoticeResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    enum ServerMatchCmd {
                        CMD_MATCH_INVALID = 0,
                        CMD_GET_GAME_KIND_REQ = 1,
                        CMD_GET_GAME_KIND_RESP = 2,
                        CMD_GET_ROOMS_REQ = 3,
                        CMD_GET_ROOMS_RESP = 4,
                        CMD_MATCH_REQ = 5,
                        CMD_MATCH_RESP = 6,
                        CMD_MATCH_NA_7 = 7,
                        CMD_MATCH_OK_RESP = 8
                    }

                    enum GameKind {
                        INVALID = 0,
                        GAME_KIND_Rummy = 1,
                        GAME_KIND_Rummy_pool = 2,
                        GAME_KIND_Rummy_10 = 3,
                        GAME_KIND_TEEPATTI = 4,
                        GAME_KIND_RedBlack = 5,
                        GAME_KIND_DragonTiger = 6,
                        GAME_KIND_SevenUpDown = 7,
                        GAME_KIND_Teenpatti_Lai = 8,
                        GAME_KIND_Teenpatti_JD = 9,
                        GAME_KIND_Andar_Bahar = 10,
                        GAME_KIND_AB_DESK = 20,
                        GAME_KIND_JHANDI_MUNDA = 12,
                        GAME_KIND_Car_Racing = 13,
                        GAME_KIND_Slot_Fruit = 14,
                        GAME_KIND_Wingo_Lottery = 15,
                        GAME_KIND_Texas_Br = 16,
                        GAME_KIND_Rocket = 17,
                        GAME_KIND_Teenpatti_Star = 18,
                        GAME_KIND_Teenpatti_Final = 19,
                        GAME_KIND_Lucky3patti = 21,
                        GAME_KIND_Teenpatti_Potblind = 22,
                        GAME_KIND_Teenpatti_Must = 23
                    }

                    interface IGameLevelDesc {
                        levelId?: (number|null);
                        currencyKind?: (com.cw.chess2.platform.CurrencyKind|null);
                        currencyLimit?: (number|null);
                        levelName?: (string|null);
                        userCount?: (number|null);
                        taxPermillage?: (number|null);
                        maxLimit?: (number|null);
                    }

                    class GameLevelDesc implements IGameLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IGameLevelDesc);
                        public levelId: number;
                        public currencyKind: com.cw.chess2.platform.CurrencyKind;
                        public currencyLimit: number;
                        public levelName: string;
                        public userCount: number;
                        public taxPermillage: number;
                        public maxLimit: number;
                        public static create(properties?: com.cw.chess2.platform.IGameLevelDesc): com.cw.chess2.platform.GameLevelDesc;
                        public static encode(m: com.cw.chess2.platform.GameLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.GameLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IRummyLevelDesc {
                        gameLevel?: (com.cw.chess2.platform.GameLevelDesc|null);
                        rummyPlayersSize?: (number|null);
                        scoreValue?: (number|null);
                    }

                    class RummyLevelDesc implements IRummyLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IRummyLevelDesc);
                        public gameLevel?: (com.cw.chess2.platform.GameLevelDesc|null);
                        public rummyPlayersSize: number;
                        public scoreValue: number;
                        public static create(properties?: com.cw.chess2.platform.IRummyLevelDesc): com.cw.chess2.platform.RummyLevelDesc;
                        public static encode(m: com.cw.chess2.platform.RummyLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.RummyLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface ITeepattiLevelDesc {
                        gameLevel?: (com.cw.chess2.platform.GameLevelDesc|null);
                        blind?: (number|null);
                        singleMaxBet?: (number|null);
                        tableMaxBet?: (number|null);
                        cashUserTime?: (number|null);
                        cashAiTime?: (number|null);
                    }

                    class TeepattiLevelDesc implements ITeepattiLevelDesc {
                        constructor(p?: com.cw.chess2.platform.ITeepattiLevelDesc);
                        public gameLevel?: (com.cw.chess2.platform.GameLevelDesc|null);
                        public blind: number;
                        public singleMaxBet: number;
                        public tableMaxBet: number;
                        public cashUserTime: number;
                        public cashAiTime: number;
                        public static create(properties?: com.cw.chess2.platform.ITeepattiLevelDesc): com.cw.chess2.platform.TeepattiLevelDesc;
                        public static encode(m: com.cw.chess2.platform.TeepattiLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.TeepattiLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface ITeenPattiWarLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        redBet?: (number|null);
                        blackBet?: (number|null);
                        luckBet?: (number|null);
                        chips?: (number[]|null);
                    }

                    class TeenPattiWarLevelDesc implements ITeenPattiWarLevelDesc {
                        constructor(p?: com.cw.chess2.platform.ITeenPattiWarLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public redBet: number;
                        public blackBet: number;
                        public luckBet: number;
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.ITeenPattiWarLevelDesc): com.cw.chess2.platform.TeenPattiWarLevelDesc;
                        public static encode(m: com.cw.chess2.platform.TeenPattiWarLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.TeenPattiWarLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IDragonTigerLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        dragonBet?: (number|null);
                        tigerBet?: (number|null);
                        tieBet?: (number|null);
                        chips?: (number[]|null);
                        tieReturn1?: (number|null);
                        tieReturn2?: (number|null);
                    }

                    class DragonTigerLevelDesc implements IDragonTigerLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IDragonTigerLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public dragonBet: number;
                        public tigerBet: number;
                        public tieBet: number;
                        public chips: number[];
                        public tieReturn1: number;
                        public tieReturn2: number;
                        public static create(properties?: com.cw.chess2.platform.IDragonTigerLevelDesc): com.cw.chess2.platform.DragonTigerLevelDesc;
                        public static encode(m: com.cw.chess2.platform.DragonTigerLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.DragonTigerLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface ISevenUpDownLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        downBet?: (number|null);
                        upBet?: (number|null);
                        sevenBet?: (number|null);
                        chips?: (number[]|null);
                    }

                    class SevenUpDownLevelDesc implements ISevenUpDownLevelDesc {
                        constructor(p?: com.cw.chess2.platform.ISevenUpDownLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public downBet: number;
                        public upBet: number;
                        public sevenBet: number;
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.ISevenUpDownLevelDesc): com.cw.chess2.platform.SevenUpDownLevelDesc;
                        public static encode(m: com.cw.chess2.platform.SevenUpDownLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.SevenUpDownLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IAndarBaharLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class AndarBaharLevelDesc implements IAndarBaharLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IAndarBaharLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.IAndarBaharLevelDesc): com.cw.chess2.platform.AndarBaharLevelDesc;
                        public static encode(m: com.cw.chess2.platform.AndarBaharLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.AndarBaharLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IAndarBaharDeskLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class AndarBaharDeskLevelDesc implements IAndarBaharDeskLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IAndarBaharDeskLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.IAndarBaharDeskLevelDesc): com.cw.chess2.platform.AndarBaharDeskLevelDesc;
                        public static encode(m: com.cw.chess2.platform.AndarBaharDeskLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.AndarBaharDeskLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IJhandiMundaLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class JhandiMundaLevelDesc implements IJhandiMundaLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IJhandiMundaLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.IJhandiMundaLevelDesc): com.cw.chess2.platform.JhandiMundaLevelDesc;
                        public static encode(m: com.cw.chess2.platform.JhandiMundaLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.JhandiMundaLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface ICarRacingLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class CarRacingLevelDesc implements ICarRacingLevelDesc {
                        constructor(p?: com.cw.chess2.platform.ICarRacingLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.ICarRacingLevelDesc): com.cw.chess2.platform.CarRacingLevelDesc;
                        public static encode(m: com.cw.chess2.platform.CarRacingLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.CarRacingLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IFruitLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class FruitLevelDesc implements IFruitLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IFruitLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.IFruitLevelDesc): com.cw.chess2.platform.FruitLevelDesc;
                        public static encode(m: com.cw.chess2.platform.FruitLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.FruitLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IWinGoLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class WinGoLevelDesc implements IWinGoLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IWinGoLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.IWinGoLevelDesc): com.cw.chess2.platform.WinGoLevelDesc;
                        public static encode(m: com.cw.chess2.platform.WinGoLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.WinGoLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface ITexasBrLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class TexasBrLevelDesc implements ITexasBrLevelDesc {
                        constructor(p?: com.cw.chess2.platform.ITexasBrLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.ITexasBrLevelDesc): com.cw.chess2.platform.TexasBrLevelDesc;
                        public static encode(m: com.cw.chess2.platform.TexasBrLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.TexasBrLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IRocketLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class RocketLevelDesc implements IRocketLevelDesc {
                        constructor(p?: com.cw.chess2.platform.IRocketLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.IRocketLevelDesc): com.cw.chess2.platform.RocketLevelDesc;
                        public static encode(m: com.cw.chess2.platform.RocketLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.RocketLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface ILucky3pattiLevelDesc {
                        roomId?: (number|null);
                        gameType?: (number|null);
                        minChips?: (number|null);
                        maxBets?: (number[]|null);
                        chips?: (number[]|null);
                    }

                    class Lucky3pattiLevelDesc implements ILucky3pattiLevelDesc {
                        constructor(p?: com.cw.chess2.platform.ILucky3pattiLevelDesc);
                        public roomId: number;
                        public gameType: number;
                        public minChips: number;
                        public maxBets: number[];
                        public chips: number[];
                        public static create(properties?: com.cw.chess2.platform.ILucky3pattiLevelDesc): com.cw.chess2.platform.Lucky3pattiLevelDesc;
                        public static encode(m: com.cw.chess2.platform.Lucky3pattiLevelDesc, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.Lucky3pattiLevelDesc;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameKindRequest {
                        gameKind?: (com.cw.chess2.platform.GameKind|null);
                    }

                    class GameKindRequest implements IGameKindRequest {
                        constructor(p?: com.cw.chess2.platform.IGameKindRequest);
                        public gameKind: com.cw.chess2.platform.GameKind;
                        public static create(properties?: com.cw.chess2.platform.IGameKindRequest): com.cw.chess2.platform.GameKindRequest;
                        public static encode(m: com.cw.chess2.platform.GameKindRequest, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.GameKindRequest;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameKindResponse {
                        gameKind?: (com.cw.chess2.platform.GameKind[]|null);
                        rummyLevels?: (com.cw.chess2.platform.RummyLevelDesc[]|null);
                        teepattiLevels?: (com.cw.chess2.platform.TeepattiLevelDesc[]|null);
                    }

                    class GameKindResponse implements IGameKindResponse {
                        constructor(p?: com.cw.chess2.platform.IGameKindResponse);
                        public gameKind: com.cw.chess2.platform.GameKind[];
                        public rummyLevels: com.cw.chess2.platform.RummyLevelDesc[];
                        public teepattiLevels: com.cw.chess2.platform.TeepattiLevelDesc[];
                        public static create(properties?: com.cw.chess2.platform.IGameKindResponse): com.cw.chess2.platform.GameKindResponse;
                        public static encode(m: com.cw.chess2.platform.GameKindResponse, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.GameKindResponse;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMatchRequest {
                        action?: (number|null);
                        gameKind?: (com.cw.chess2.platform.GameKind|null);
                        gameLevel?: (number|null);
                    }

                    class MatchRequest implements IMatchRequest {
                        constructor(p?: com.cw.chess2.platform.IMatchRequest);
                        public action: number;
                        public gameKind: com.cw.chess2.platform.GameKind;
                        public gameLevel: number;
                        public static create(properties?: com.cw.chess2.platform.IMatchRequest): com.cw.chess2.platform.MatchRequest;
                        public static encode(m: com.cw.chess2.platform.MatchRequest, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MatchRequest;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMatchResponse {
                        result?: (number|null);
                        maxTime?: (number|null);
                        averageTime?: (number|null);
                    }

                    class MatchResponse implements IMatchResponse {
                        constructor(p?: com.cw.chess2.platform.IMatchResponse);
                        public result: number;
                        public maxTime: number;
                        public averageTime: number;
                        public static create(properties?: com.cw.chess2.platform.IMatchResponse): com.cw.chess2.platform.MatchResponse;
                        public static encode(m: com.cw.chess2.platform.MatchResponse, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MatchResponse;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMatchOKResponse {
                        result?: (number|null);
                        gameType?: (number|null);
                        tableId?: (number|null);
                        gameKind?: (com.cw.chess2.platform.GameKind|null);
                        gameLevel?: (number|null);
                    }

                    class MatchOKResponse implements IMatchOKResponse {
                        constructor(p?: com.cw.chess2.platform.IMatchOKResponse);
                        public result: number;
                        public gameType: number;
                        public tableId: number;
                        public gameKind: com.cw.chess2.platform.GameKind;
                        public gameLevel: number;
                        public static create(properties?: com.cw.chess2.platform.IMatchOKResponse): com.cw.chess2.platform.MatchOKResponse;
                        public static encode(m: com.cw.chess2.platform.MatchOKResponse, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MatchOKResponse;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    enum ServerGameCommonCmd {
                        CMD_C_GAME_INVALID = 0,
                        CMD_C_GAME_MAGIC_CHAT_REQ = 70,
                        CMD_C_GAME_MAGIC_CHAT_RESP = 71,
                        CMD_C_GAME_ROOM_LIST_REQ = 80,
                        CMD_C_GAME_ROOM_LIST_RESP = 81
                    }

                    interface IMsgMagicChatReq {
                        tableId?: (number|null);
                        sendUserId?: (number|null);
                        toUserId?: (number|null);
                        mogicId?: (number|null);
                    }

                    class MsgMagicChatReq implements IMsgMagicChatReq {
                        constructor(p?: com.cw.chess2.platform.IMsgMagicChatReq);
                        public tableId: number;
                        public sendUserId: number;
                        public toUserId: number;
                        public mogicId: number;
                        public static create(properties?: com.cw.chess2.platform.IMsgMagicChatReq): com.cw.chess2.platform.MsgMagicChatReq;
                        public static encode(m: com.cw.chess2.platform.MsgMagicChatReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MsgMagicChatReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IMsgMagicChatResp {
                        tableId?: (number|null);
                        sendUserId?: (number|null);
                        toUserId?: (number|null);
                        mogicId?: (number|null);
                    }

                    class MsgMagicChatResp implements IMsgMagicChatResp {
                        constructor(p?: com.cw.chess2.platform.IMsgMagicChatResp);
                        public tableId: number;
                        public sendUserId: number;
                        public toUserId: number;
                        public mogicId: number;
                        public static create(properties?: com.cw.chess2.platform.IMsgMagicChatResp): com.cw.chess2.platform.MsgMagicChatResp;
                        public static encode(m: com.cw.chess2.platform.MsgMagicChatResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.MsgMagicChatResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameRoomListReq {
                    }

                    class GameRoomListReq implements IGameRoomListReq {
                        constructor(p?: com.cw.chess2.platform.IGameRoomListReq);
                        public static create(properties?: com.cw.chess2.platform.IGameRoomListReq): com.cw.chess2.platform.GameRoomListReq;
                        public static encode(m: com.cw.chess2.platform.GameRoomListReq, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.GameRoomListReq;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameRoomListResp {
                        roomList?: (com.cw.chess2.platform.GameRoomInfo[]|null);
                    }

                    class GameRoomListResp implements IGameRoomListResp {
                        constructor(p?: com.cw.chess2.platform.IGameRoomListResp);
                        public roomList: com.cw.chess2.platform.GameRoomInfo[];
                        public static create(properties?: com.cw.chess2.platform.IGameRoomListResp): com.cw.chess2.platform.GameRoomListResp;
                        public static encode(m: com.cw.chess2.platform.GameRoomListResp, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.GameRoomListResp;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    interface IGameRoomInfo {
                        roomId?: (number|null);
                        maxPlayers?: (number|null);
                        minChip?: (number|null);
                        minEntry?: (number|null);
                        onlinePlayers?: (number|null);
                    }

                    class GameRoomInfo implements IGameRoomInfo {
                        constructor(p?: com.cw.chess2.platform.IGameRoomInfo);
                        public roomId: number;
                        public maxPlayers: number;
                        public minChip: number;
                        public minEntry: number;
                        public onlinePlayers: number;
                        public static create(properties?: com.cw.chess2.platform.IGameRoomInfo): com.cw.chess2.platform.GameRoomInfo;
                        public static encode(m: com.cw.chess2.platform.GameRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.cw.chess2.platform.GameRoomInfo;
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }
}
