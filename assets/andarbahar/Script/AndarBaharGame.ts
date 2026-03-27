import { _decorator, assetManager, Button, Canvas, Color, Component, find, game, instantiate, Intersection2D, isValid, Label, Layout, Node, NodePool, PolygonCollider2D, Prefab, Sprite, SpriteFrame, Toggle, Tween, tween, UIOpacity, UITransform, v2, v3, Vec3, view } from 'cc';
import { ResizeAdapter } from '../../Script/ResizeAdapter';
import { game_network } from '../../Script/network/game_network';
import { AndarBahar_network } from './AndarBahar_network';

// import * as awesomeRoot from '../../Script/proto/awesome';
import * as awesomeRoot from '../../Script/proto/awesome.js'
import { config } from '../../Script/util/config';
import { ABCard } from './ABCard';
import { PrefabPool } from '../../Script/util/PrefabPool';
import { ABPlayers } from './ABPlayers';
import { ABCardsTool } from './ABCardsTool';
import { PrefabConst } from '../../Script/util/PrefabConst';
import { music } from './AndarbaharMusic';
import { AndarbaharManager } from './AndarbaharManager';
const { ccclass, property } = _decorator;

@ccclass('AndarBaharGame')
export class AndarBaharGame extends Component {
    @property({ type: game_network, displayName: '网络组件' })
    node_network: game_network = null;

    @property(Button)
    btn_rebet = null;
    @property(Button)
    btn_players = null
    @property(Button)
    btnHistory = null

    @property(Label)
    label_players = null;

    @property([Node])
    userPlayerTb = [];

    @property(Node)
    mySelfNode = null;

    @property(Label)
    lblCount = null;
    // 可以用做动画，收金币，发牌
    @property(Node)
    node_heguan = null;

    @property(Node)
    panel_win_dot = null;

    @property(Node)
    node_table = null;

    @property([PolygonCollider2D])
    colliderArr = [];

    @property([Node])
    areaPoolArr = [];

    @property([Node])
    lightArr = [];

    @property([Node])
    betInfoArr = [];

    @property(Prefab)
    prefabPlayersList = null;
    @property(Node)
    node_anim = null;
    @property([Toggle])
    toggle_betBtns = [];

    @property(Node)
    cards_node = null;
    @property(Node)
    centerCard = null
    @property(Node)
    result_node = null;
    @property(SpriteFrame)
    spBlue = null;
    @property(SpriteFrame)
    spRed = null;

    @property(Prefab)
    danmu_prefab = null;

    @property(Node)
    node_danmu = null;
    @property(Prefab)
    chip_prefab = null;
    @property(Prefab)
    road_item_prefab = null
    @property(Prefab)
    drag_dot_prefab = null
    @property(Prefab)
    historyPrefab = null
    @property(Node)
    new_node = null;
    @property(Node)
    win_node = null;
    timerArray = [];
    @property(Prefab)
    panel_props_prefab = null
    @property(Prefab)
    props_magic_prefab = null
    @property([Node])
    star_arr = [];
    @property(Prefab)
    star_prefab = null;
    coinLists = [];
    private resizeAdapter = new ResizeAdapter(1080, 1920);
    coinTextureMaps = {}
    bundle = null;
    btnPlayersPos = null;
    pool = null;
    userPlayerHeadPosTb = [];
    gamePhase = 0
    selectedBet = 0;

    counter_interval = null;
    timeoutShowAllCards = null;
    timeoutGameOver = null;
    timeoutGameOverCallback = null;
    timeoutCoinRandomPosTb = null;

    gameDesc = null;
    roadData = null;
    canRebet = false;
    resultWinType = 0;
    myMoney = 0;
    resultWinData = null;
    timeoutGameOver1 = null;
    win_pos_y = [0, 17.172, 28.398, 35.249, 42.137, 44.257, 42.858, 39.691, 33.66, 24.934];
    onLoad() {
        if (this.resizeAdapter.isRealPCBrowser()) {
            this.resizeAdapter.initResizeListener(this.node.getComponent(Canvas));
        }


        this.loadBundle();
        this.getGateWays();
    }
    protected start(): void {
        music.playBgMusic(music.bgm, true, 0.5);
    }
    getGateWays() {

        const params = new URLSearchParams(window.location.search);
        const user_id = (params.get('uid') || '').trim();
        const token = (params.get('access_token') || '').trim();
        const wss = (params.get('wss') || '').trim();

        if (wss) {
            try {
                const wsUrl = new URL(wss);
                config.websocket_ip = `${wsUrl.protocol}//${wsUrl.hostname}`;
                config.websocket_port = wsUrl.port;
            } catch (e) {
                config.websocket_ip = "ws://124.156.187.63";
                config.websocket_port = "8000";
            }
        } else {
            config.websocket_ip = "ws://124.156.187.63";
            config.websocket_port = "8000";
        }
        if (user_id && token) {
            config.user_id = `${user_id}`;
            config.token = token;
        }

        this.webSocketConnect(config.user_id, config.token);

    }
    webSocketConnect(uid, token) {
        console.log('websocket连接服务器:' + uid + ',' + token);
        this.node_network.connect(uid, token);
    }
    loadBundle() {
        assetManager.loadBundle('andarbahar', (err, bundle) => {
            this.bundle = bundle;
            this.loadCoinSpriteTexture();
        });
    }
    loadCoinSpriteTexture() {
        if (!this.bundle) {
            console.error('Bundle 未加载，无法加载纹理');
            return;
        }
        this.btnPlayersPos = this.btn_players.node.getPosition();
        this.coinTextureMaps = {};
        this.coinLists = [];
        let self = this;
        self.pool = new NodePool();
        this.bundle.loadDir("load", SpriteFrame, function (error, assets) {
            assets.forEach((sp) => {
                self.coinTextureMaps[sp._name] = sp;
            });

            self.loadCoinTextureOK();
        });
    }
    loadCoinTextureOK() {
        game.on('net_msg', this.net_MessageBack.bind(this));
        game.on('net_closed', this.net_Closed.bind(this));

        for (var key in AndarBahar_network) {
            if (AndarBahar_network.hasOwnProperty(key) === true) {
                this.node_network[key] = AndarBahar_network[key];
            }
        }

        if (this.node_table != null) {
            this.node_table.on(Node.EventType.TOUCH_START, this._onTouchBegin, this);
        }

        this.btnPlayersPos = this.btn_players.node.getPosition();

        this.setRebetBtnState(false);

        if (this.userPlayerTb != null) {
            this.userPlayerHeadPosTb = [];
            for (let index = 0; index < this.userPlayerTb.length; index++) {
                let _playerNode = this.userPlayerTb[index];
                let headNode = find("Node/mask", _playerNode);
                this.userPlayerHeadPosTb[index] = headNode.getPosition();
            }
        }

        // 获取桌子信息
        AndarBahar_network.sendGameGetTableStatusReq();
    }
    resetTable() {
        this.resetBetLabel();
        this.clearDealCardAnim();
        this.stopNodeAnim();
        this.clearCountDown();
        this.clearHeadBetAnim();
        this.clearAllCoins();
        this.stopLightAnim();
        this.hidePlayerWinAnim();
        this.clearAllTimer();
        // if (this.bundle) this.setRebetBtnState(false);
        this.setRebetBtnState(false);
        this.hideAllCards();
        this.showStar();
        this.clearResultNum();
    }
    clearResultNum() {
        if (this.result_node) {
            this.result_node.active = false;
            this.result_node.getChildByName("lblNums").getComponent(Label).string = "0";
        }
    }
    showStar(area = null) {
        if (!area) {
            for (let i = 0; i < this.star_arr.length; i++) {
                this.star_arr[i].active = false;
            }
            return;
        }

        area = area - 1;   // 1龙 2虎 3和
        if (this.star_arr[area]) {
            //获取幸运星头像的位置
            let node = this.userPlayerTb[1];
            if (node) {
                let startPos = node.getPosition();
                // startPos = node.parent.convertToWorldSpaceAR(startPos);

                let star_node = this.star_arr[area];
                if (star_node) {
                    let endPos = star_node.getPosition();
                    endPos = star_node.parent.getComponent(UITransform).convertToWorldSpaceAR(endPos);
                    endPos = this.node_danmu.getComponent(UITransform).convertToNodeSpaceAR(endPos);
                    let star = PrefabPool.get(PrefabConst.STAR_MOTION, this.star_prefab);
                    star.setPosition(startPos);
                    star.parent = this.node_danmu;

                    tween(star).to(1, { x: endPos.x, y: endPos.y }).call(() => {
                        star_node.active = true;
                        PrefabPool.put(star);
                    }, this).start();
                }
            }
        }
    }
    hideAllCards() {
        if (this.cards_node) this.cards_node.getComponent(ABCardsTool).hideAllCards();
        this.centerCard.getComponent(ABCard).showBack();

        this.win_node.active = false;
    }
    clearAllTimer() {
        if (this.timeoutShowAllCards) {
            clearTimeout(this.timeoutShowAllCards);
        }

        if (this.timeoutGameOver) {
            clearTimeout(this.timeoutGameOver);
        }

        if (this.timeoutGameOverCallback) {
            clearTimeout(this.timeoutGameOverCallback);
        }

        if (this.timeoutCoinRandomPosTb != null) {
            for (let index = 0; index < this.timeoutCoinRandomPosTb.length; index++) {
                let timeoutId = this.timeoutCoinRandomPosTb[index];
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            }
        }

        if (this.timerArray != null && this.timerArray.length !== 0) {
            for (let index = 0; index < this.timerArray.length; index++) {
                let to = this.timerArray[index];
                if (to) {
                    clearTimeout(to);
                }

            }
        }
    }
    clearAllCoins() {
        for (let index = 0; index < this.areaPoolArr.length; index++) {
            let pool = this.areaPoolArr[index];
            if (pool) {

                while (pool.children.length > 0) {
                    let betNode = pool.children[0];
                    // betNode.stopAllActions();
                    Tween.stopAllByTarget(betNode);
                    //池子回收
                    PrefabPool.put(betNode);
                    betNode.removeFromParent();
                    // this.putInstant(betNode);
                    // index++;
                }
            }
        }

        this.coinLists = [];
    }
    hidePlayerWinAnim() {
        if (this.userPlayerTb != null) {
            for (let index = 0; index < this.userPlayerTb.length; index++) {
                let playerNode = this.userPlayerTb[index];
                playerNode.getComponent(ABPlayers).stopWinAnim();
            }
        }

        this.mySelfNode.getComponent(ABPlayers).stopWinAnim();
    }
    stopLightAnim() {
        let light;
        if (this.lightArr) {
            for (let i = 0; i < this.lightArr.length; i++) {
                light = this.lightArr[i];
                // light.stopAllActions();
                Tween.stopAllByTarget(light);
                light.active = false;
            }
        }

        Tween.stopAllByTag(1000);
    }
    clearHeadBetAnim() {
        if (this.btn_players != null) {

            Tween.stopAllByTarget(this.btn_players.node);
        }

        if (this.userPlayerTb != null) {
            for (let index = 0; index < this.userPlayerTb.length; index++) {
                let playerNode = this.userPlayerTb[index];
                if (playerNode) {
                    // playerNode.stopAllActions();
                    Tween.stopAllByTarget(playerNode);
                }
            }
        }
    }
    clearCountDown() {
        clearInterval(this.counter_interval);
        this.counter_interval = null;
    }
    clearDealCardAnim() {
        if (this.node_heguan != null) {
            // this.node_heguan.stopAllActions();
            Tween.stopAllByTarget(this.node_heguan);
        }
    }
    stopNodeAnim() {
        if (this.node_anim != null) {
            for (let index = 0; index < this.node_anim.children.length; index++) {
                let child = this.node_anim[index];
                if (isValid(child)) {
                    // child.stopAllActions();
                    Tween.stopAllByTarget(child);
                }
            }
        }
    }
    resetBetLabel() {
        let node;
        let label;
        if (this.betInfoArr) {
            for (let i = 0; i < this.betInfoArr.length; i++) {
                node = this.betInfoArr[i];
                if (node) {
                    label = node.getChildByName("label_total_bet").getComponent(Label);
                    if (label) label.string = "0";
                    label = node.getChildByName("label_bet").getComponent(Label);
                    if (label) label.string = "0";
                }
            }
        }
    }
    initChip() {
        let chips = this.gameDesc.chips;
        if (this.toggle_betBtns != null) {
            let sf;
            for (let index = 0; index < this.toggle_betBtns.length; index++) {
                let toggle = this.toggle_betBtns[index];
                if (chips[index]) {
                    toggle.node.bet = chips[index];
                    AndarbaharManager.instance.loadSpriteFrame("load/newChip/new_chip_" + (chips[index]) / 100, find("Background", toggle.node).getComponent(Sprite));
                    AndarbaharManager.instance.loadSpriteFrame("load/newChip/new_chip_" + (chips[index]) / 100, find("checkmark/sp_bet", toggle.node).getComponent(Sprite));

                    // find("Background", toggle.node).getComponent(Sprite).spriteFrame = sf;
                    // find("checkmark/sp_bet", toggle.node).getComponent(Sprite).spriteFrame = sf;

                    toggle.node.on("toggle", this.onToggleBet, this);
                }
                // 默认第一个
                if (index == 0) {
                    this.onToggleBet(toggle);
                    toggle.isChecked = true;
                }
            }
        }
    }
    onToggleBet(toggle) {
        music.playMusic(music.select_chip);

        for (let index = 0; index < this.toggle_betBtns.length; index++) {
            let toggle = this.toggle_betBtns[index];
            let bg = find("Background", toggle.node);
            bg.active = true;
        }

        let bg = find("Background", toggle.node);
        bg.active = false;

        this.selectedBet = toggle.node.bet;
    }
    getSFByName(name) {
        if (this.bundle) {
            return this.bundle.get(name, SpriteFrame);
        }
        console.log(name, "load error");
    }
    freshPlayerCount(count) {
        if (this.label_players != null) {
            this.label_players.string = count;
        }
    }
    initPlayersData(chairs) {
        for (let index = 0; index < chairs.length; index++) {
            let chair = chairs[index];

            if (chair.bUser == 1) {
                let chairIndex = chair.chairIndex;
                let player = this.userPlayerTb[chairIndex];
                player.getComponent("ABPlayers").updateInfo(chair.user);

                player.active = true;
                player.getChildByName("Node").on(Node.EventType.TOUCH_END, this.onClickPlayerHead.bind(this, player.getComponent(ABPlayers)), this);
            }

        }
    }
    onClickPlayerHead(data) {
        console.log("点击玩家头像", data);
        // this.selectPlayId = data.getUserId();
        // data.updatePos();
        // game.emit("showPropsMagicPanel", data.headPos)
    }
    initSelfData(data) {
        if (this.mySelfNode != null) {
            this.mySelfNode.getComponent("ABPlayers").updateInfo(data);

            this.myMoney = data.coin;
        }
    }
    getLastRoadData(num) {
        if (!this.roadData) return;
        let lastRoadData = this.roadData.slice(-num);
        return lastRoadData;
    }
    showRoadDotView(isReconnect = false) {
        if (this.panel_win_dot != null) {
            this.panel_win_dot.removeAllChildren();

            let lastRounds = 10;
            let lastRoadData = this.getLastRoadData(lastRounds);

            if (!lastRoadData) return;
            for (let index = 0; index < lastRoadData.length; index++) {
                let element = lastRoadData[index];
                if (element) {
                    // 1 2-6 2 8-12  3 7
                    let winner = element.winner;

                    let node = instantiate(this.road_item_prefab);
                    let sp = node.getComponent(Sprite);
                    // let lbl = node.getChildByName("label").getComponent(Label);
                    let sf = null;
                    if (winner === 1) {
                        sf = this.spBlue;
                    } else if (winner === 2) {
                        sf = this.spRed;
                    }
                    if (sf == null) {
                        console.error("数据错误 winner = " + winner);
                        return;
                    }

                    sp.spriteFrame = sf;
                    // if (lbl && element.nums) {
                    //     if (element.nums <= 5) lbl.string = "1~5";
                    //     else if (element.nums >= 6 && element.nums <= 10) lbl.string = "6~10";
                    //     else if (element.nums >= 11 && element.nums <= 15) lbl.string = "11~15";
                    //     else if (element.nums >= 16 && element.nums <= 25) lbl.string = "16~25";
                    //     else if (element.nums >= 26 && element.nums <= 30) lbl.string = "26~30";
                    //     else if (element.nums >= 31 && element.nums <= 35) lbl.string = "31~35";
                    //     else if (element.nums >= 36 && element.nums <= 40) lbl.string = "36~40";
                    //     else lbl.string = "41+";
                    // }
                    if (lastRoadData.length < lastRounds || isReconnect) {
                        node.setPosition(new Vec3(32.5 + index * 67, this.win_pos_y[index], 0));
                    } else {
                        node.setPosition(new Vec3(32.5 + (index + 1) * 67, this.win_pos_y[index + 1] ?? 24.934, 0));
                        tween(node)
                            .to(1, { position: new Vec3(32.5 + index * 67, this.win_pos_y[index], 0) })
                            .start();
                    }
                    this.panel_win_dot.addChild(node);
                }
            }
        }
    }
    showBetsInfoByType(areaBets) {
        let betsInfo;
        for (let i = 1; i <= areaBets.length; i++) {
            betsInfo = areaBets[i - 1];
            if (betsInfo) {
                this.showBetLabelByType(i, betsInfo);
                if (betsInfo.totalBalance) this.createBetsInPoolByType(i, betsInfo.totalBalance);
            }
        }
    }
    getChipNode(bet, poolType) {
        if (!this.chip_prefab) return;

        let node = PrefabPool.get(PrefabConst.AB_CHIP, this.chip_prefab);
        // node.stopAllActions();
        Tween.stopAllByTarget(node);
        node.bet = bet;
        node.poolType = poolType;
        node.selected = false;
        node.x = 0;
        node.y = 0;

        let chip = node.getComponent(Sprite);
        let coinName = "new_chip_" + bet / 100;
        chip.spriteFrame = this.coinTextureMaps[coinName];

        //自己下的筹码发光
        let lightNode = find("lightNode", node);
        let lightSp = lightNode.getComponent(Sprite);
        lightNode.active = false;
        let spStr = "light_circle";
        // if (bet >= 50000) {
        //     spStr = "light_kuang";
        // }

        lightSp.spriteFrame = this.coinTextureMaps[spStr];

        this.coinLists.push(node);

        return node;
    }
    createBetsInPoolByType(type, bets) {
        this.timeoutCoinRandomPosTb = [];
        let betList = this.getSplitTotalBetsList(bets);

        //桌上筹码性能优化
        for (let index = 0; index < betList.length; index++) {
            let bet = betList[index];
            let node = this.getChipNode(bet, type);//桌上筹码性能优化
            // let node = this.getInstant(bet, type);//桌上筹码性能优化
            let pos = this.setRandomPositionByTypeWithNode(type, node);//桌上筹码性能优化
        }
    }
    randomFrom(startValue, endValue) {
        return Math.floor(Math.random() * (endValue - startValue) + startValue);
    }

    // 获取区间随机数
    randomFromFloat(startValue, endValue) {
        return Math.random() * (endValue - startValue) + startValue;
    }
    setRandomPositionByTypeWithNode(betType, node, startPos = null, fromNode = null) {
        let poolPanel = this.areaPoolArr[betType - 1];

        if (poolPanel === null || !node) return;

        poolPanel.addChild(node);

        // 随机生成一个坐标
        let uiTransform = poolPanel.getComponent(UITransform);
        let size = uiTransform.contentSize;
        let width = size.width;
        let height = size.height;

        let effectPos = [
            v3(0, 0, 0),
            v3(-50, 0, 0),
            v3(50, 0, 0),
            v3(0, 40, 0),
            v3(0, -40, 0),
        ];

        let x = this.randomFrom(-width / 2, width / 2);
        let y = this.randomFrom(-height / 2, height / 2);
        let pos = v3(x, y, 0);

        let worldPos = uiTransform.convertToWorldSpaceAR(pos);

        let poolCollider = poolPanel.getComponent(PolygonCollider2D);
        let inFlag = null;

        // 判断是否在不规则图形内
        if (Intersection2D.pointInPolygon(v2(worldPos.x, worldPos.y), poolCollider.points)) {
            inFlag = true;
        }
        if (inFlag === null) {
            let a = this.randomFrom(0, effectPos.length - 1);
            pos = effectPos[a];
        }

        if (startPos) {
            node.setPosition(startPos);
            node.angle = this.randomFrom(-180, 180);

            tween(node)
                .call(() => {
                    if (fromNode != undefined) {
                        let lightNode = find("lightNode", node);
                        if (lightNode) {
                            if (fromNode == this.mySelfNode) {
                                if (lightNode) {
                                    lightNode.active = true;
                                }
                            } else {
                                if (lightNode) {
                                    lightNode.active = false;
                                }
                            }
                        }
                    }
                })
                .parallel(
                    tween(node).to(0.3, { position: v3(pos.x, pos.y, 0) }, { easing: 'quadOut' }),
                    tween(node).by(0.3, { angle: this.randomFrom(100, 180) }),
                )
                .call(() => {
                    if (fromNode != undefined) {
                        if (fromNode == this.mySelfNode) {
                            music.playMusic(music.my_betchips, false, 0.6);
                        } else {
                            music.playMusic(music.other_betchips, false, 0.6);
                        }
                    }
                })
                .start();

        } else {
            if (node) {
                node.setPosition(pos);
                node.angle = this.randomFrom(-60, 60);
            }
        }

        return pos;
    }
    getSplitTotalBetsList(bets) {
        let betList = [];
        let chips = this.gameDesc.chips;

        // 0:1000, 50%：500 ，45%：100，4%：50，1%：10 
        let rateTb = [
            0,
            0.5,
            0.45,
            0.04,
        ];

        let leftBets = bets;
        let i = 0;
        let totalRate = 0;
        for (let index = chips.length - 1; index >= 0; index--) {
            let rate = rateTb[i];
            totalRate = totalRate + rate;

            i++;

            if (rate != null) {
                let chip = chips[index];
                let num = Math.floor(leftBets * totalRate / chip);
                if (num > 0) {
                    leftBets = leftBets - num * chip;
                    for (let j = 0; j < num; j++) {
                        betList.push(chip);
                    }
                }
            } else {
                let minChip = chips[0];
                let num = Math.floor(leftBets / minChip);

                if (num > 0) {
                    for (let index = 0; index < num; index++) {
                        betList.push(minChip);
                    }
                }
                break;
            }
        }

        betList.sort(function () {
            return (0.5 - Math.random());
        });

        return betList;
    }
    showBetLabelByType(type, betsInfo) {
        let node = this.betInfoArr[type - 1];
        let label_total = null;
        let label_self = null;
        if (node) {
            label_total = node.getChildByName("label_total_bet").getComponent(Label);
            label_self = node.getChildByName("label_bet").getComponent(Label);
        }

        if (label_total && betsInfo.totalBalance) {
            label_total.string = betsInfo.totalBalance / 100;
        }
        if (label_self && betsInfo.ownerBalance) {
            label_self.string = betsInfo.ownerBalance / 100;
        }
    }
    showLeftTime(time) {
        time = time < 0 ? 0 : time;

        if (this.lblCount != null) {
            this.lblCount.string = time;
        }
    }
    timeCountDown(time) {
        let leftTime = time - 1;
        time = time < 0 ? 0 : time;

        this.showLeftTime(time)
        this.counter_interval = setInterval(function () {
            if (leftTime <= 0) {
                clearInterval(this.counter_interval);
            }
            if (leftTime <= 3) {
                music.playMusic(music.count_down);
            }
            this.showLeftTime(leftTime)

            leftTime--;

        }.bind(this), 1000, 1000);
    }
    process_table_status(message) {
        this.resetTable();

        this.gameDesc = message.desc;
        this.gamePhase = message.gamePhase;
        this.roadData = message.road;
        this.canRebet = message.repeatBet === 1;
        let gamePhase = awesomeRoot.com.cw.chess2.andarbahar.GamePhase;
        if (message.gamePhase >= gamePhase.PHS_GAME_RESULT) {
            this.resultWinType = message.winner;
        }
        this.initChip();
        this.freshPlayerCount(message.playerCount);
        this.initPlayersData(message.chairs);
        this.initSelfData(message.self);
        this.showRoadDotView(true);

        if (message.gamePhase <= gamePhase.PHS_GAME_RESULT) {
            this.showBetsInfoByType(message.areaBets);
        }

        if (message.gamePhase == gamePhase.PHS_GAME_BETTING) {
            this.timeCountDown(message.timeLimit);

            let bol = false;
            //判断自己是否下注
            for (let i = 0; i < message.areaBets.length; i++) {
                if (message.areaBets[i] && message.areaBets[i].ownerBalance) {
                    if (message.areaBets[i].ownerBalance > 0) {
                        bol = true;
                        break;
                    }
                }
            }

            this.setRebetBtnState(message.repeatBet === 1 && bol);
        } else {
            this.showLeftTime(0);
            this.setRebetBtnState(false);
        }

        if (message.gamePhase == gamePhase.PHS_GAME_READY) { //准备

        } else if (message.gamePhase == gamePhase.PHS_GAME_START) { //开始
            // this.showGamePhaseLabel("Start");
        } else if (message.gamePhase == gamePhase.PHS_GAME_BETTING) { //下注
            // this.showGamePhaseLabel("Betting");
        } else if (message.gamePhase == gamePhase.PHS_GAME_RESULT) { //开奖
            // this.showGamePhaseLabel("Show");
            let data = {
                winner: message.winner,
                joker: message.joker,
                nums: message.nums,
                cardsA: message.cardsA,
                cardsB: message.cardsB,
            }

            this.resultWinData = data;
        } else if (message.gamePhase == gamePhase.PHS_GAME_SETTLE) { // 派奖
            // this.showGamePhaseLabel("Settle");

            let data = {
                winner: message.winner,
                joker: message.joker,
                nums: message.nums,
                cardsA: message.cardsA,
                cardsB: message.cardsB,
            }
            this.freshRoadData(data);
        }

        if (message.joker) {
            //显示中间牌
            let card = this.centerCard.getComponent(ABCard);
            if (card) {
                card.initCardValue(message.joker);
                card.showCard();
            }
        }
    }
    freshRoadData(data) {
        this.roadData.push(data);
    }
    playStartOrStopBettingAnim(type, callback = null) {
        let name = "StartAnim";
        let imgName = "start";
        if (type == 1) {
            name = "StartAnim";
            imgName = "start";
        } else if (type == 2) {
            name = "StopAnim";
            imgName = "stop";
        }

        if (this.node_anim != null) {
            let node = this.node_anim.getChildByName(name);
            if (node == null) {
                node = new Node();
                node.name = name;
                node.addComponent(Sprite);
                this.node_anim.addChild(node);
            }

            node.active = true;
            this.bundle.load("load/ui/" + imgName + "/spriteFrame", SpriteFrame, function (err, spriteFrame) {
                if (err) {
                    console.error(err.message || err);
                    return;
                }

                if (!isValid(node)) {
                    return;
                }

                let sp = node.getComponent(Sprite);
                sp.spriteFrame = spriteFrame;

                let uiTransform = node.getComponent(UITransform);
                let size = uiTransform.contentSize;
                let dis = size.width / 2 + view.getVisibleSize().width / 2;
                node.setPosition(-dis, node.getPosition().y);

                tween(node)
                    .call(() => {
                        node.active = true;
                    })
                    .by(0.3, { position: v3(dis, 0, 0) }, { easing: 'quadOut' })
                    .delay(0.6)
                    .by(0.3, { position: v3(dis, 0, 0) }, { easing: 'quadOut' })
                    .call(() => {
                        node.active = false;
                    })
                    .call(() => {
                        if (callback) {
                            callback();
                        }
                    })
                    .start();
                if (type === 1) {
                    // music.playMusic(music.start_betting);
                } else if (type === 2) {
                    // music.playMusic(music.stop_betting);
                }
            }.bind(this));
        }
    }
    // 通知开始下注
    onGameBetNoticeResp(data) {
        this.timeCountDown(data.count);
        this.setRebetBtnState(data.repeatBet === 1);
    }
    showPanelRechargeTip(type, money = 0) {
        let self = this;
        let msg;
        if (type === 100) {
            //余额不足
            msg = "The bet amount is not enough,Please add";
        } else if (type === 101) {
            //低于允许下注最小额度
            msg = "You need Rs." + this.gameDesc.minChips / 100 + " at least to bet,Please add";
        } else if (type === 109) {
            console.log("余额不足，无法继续游戏");
            //充值金额不够
            // window.dialogManager.showPanelOPP(
            //     comonFun.formatMoney(money),
            //     function () {
            //         self.onClickAddCashBtn();
            //     }.bind(this),
            //     function () { }
            // );
            // return;
        }


    }
    onBetRsp(data) {
        let type = data.index;
        let betsInfo = {
            totalBalance: data.totalBet,
            ownerBalance: data.myBet,
        };
        this.showBetLabelByType(type, betsInfo);

        this.mySelfNode.getComponent("ABPlayers").updateMoney(data.balance);
        this.myMoney = data.balance;

        // 当前下注
        let bet = data.bet;
        this.sendCoinToTable(this.mySelfNode, type, bet);

        // 下注了就不能复投了
        this.setRebetBtnState(false);
    }
    sendCoinToTable(srcNode, type, bet) {
        let dstPool = this.areaPoolArr[type - 1];

        if (dstPool == null) {
            console.error("数据错误 index = " + type);
            return;
        }

        let coin = this.getChipNode(bet, type);//桌上筹码性能优化
        // let coin = this.getInstant(bet, type);//桌上筹码性能优化

        let pos = srcNode.getPosition();
        let worldPos = srcNode.parent.getComponent(UITransform).convertToWorldSpaceAR(pos);
        let startPos = dstPool.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        this.setRandomPositionByTypeWithNode(type, coin, startPos, srcNode);
    }
    onRebetRsp(data) {
        // 飞金币
        let list = data.list;
        for (let index = 0; index < list.length; index++) {
            const betData = list[index];
            let type = betData.index;
            let bet = betData.bet;
            this.sendCoinToTable(this.mySelfNode, type, bet);
        }
        console.log("onRebetRsp", data);
        // let dragonBet = data.totalDownBet;
        // let tigerBet = data.totalUpBet;
        // let tieBet = data.totalSevenBet;
        // this.showBetLabelByType(1, dragonBet);
        // this.showBetLabelByType(2, tigerBet);
        // this.showBetLabelByType(3, tieBet);
        for (let i = 0; i < data.areaBets.length; i++) {
            if (data.areaBets[i]) {
                this.freshPoolBetsByType(i, data.areaBets[i]);
            }
        }
        this.mySelfNode.getComponent(ABPlayers).updateMoney(data.balance);
        this.setRebetBtnState(false);
    }
    freshPoolBetsByType(type, data) {
        let node = this.betInfoArr[type];
        let label_total = null;
        if (node) label_total = node.getChildByName("label_total_bet").getComponent(Label);

        if (label_total != null && data.totalBalance) {
            label_total.string = data.totalBalance / 100;
        }

        if (node) label_total = node.getChildByName("label_bet").getComponent(Label);
        if (label_total != null && data.ownerBalance) {
            label_total.string = data.ownerBalance / 100;
        }
    }
    showTotalBetLabelByType(type, bet) {
        let node = this.betInfoArr[type - 1];
        let label_total = null;
        if (node) {
            label_total = node.getChildByName("label_total_bet").getComponent(Label);
        }

        if (label_total != null) {
            label_total.string = bet / 100;
        }
    }
    isMySelf(userId) {
        return config.user_id == userId;
    }
    onGameBettingNotify(data) {
        let type = data.index;
        let totalBet = data.totalBet;
        this.showTotalBetLabelByType(type, totalBet);

        let userId = data.userId;
        if (this.isMySelf(userId)) {
            this.mySelfNode.getComponent(ABPlayers).updateMoney(data.balance);
            return;
        }

        let onSeat = false;
        for (let index = 0; index < this.userPlayerTb.length; index++) {
            let playerNode = this.userPlayerTb[index];
            let player = playerNode.getComponent(ABPlayers);
            let _userId = player.getUserId();
            if (_userId === userId) {
                // 飞金币出去
                this.sendCoinToTable(playerNode, type, data.bet);
                player.updateMoney(data.balance);

                this.playHeadBetAnim(userId);

                onSeat = true;
                if (index == 1) {
                    //幸运星位置
                    this.showStar(type);
                }
                break;
            }
        }

        if (!onSeat) {
            if (this.btn_players.node != null) {
                this.sendCoinToTable(this.btn_players.node, type, data.bet);
                this.playOtherHeadBetAnim();
            }
        }
    }
    playOtherHeadBetAnim() {
        let moveDiff = 30;
        let time = 0.1;


        Tween.stopAllByTarget(this.btn_players.node);
        this.btn_players.node.setPosition(this.btnPlayersPos);

        tween(this.btn_players.node)
            .by(time, { position: v3(-moveDiff, moveDiff, 0) }, { easing: 'cubicIn' })
            .by(time, { position: v3(moveDiff, -moveDiff, 0) }, { easing: 'cubicIn' })
            .start();
    }
    playHeadBetAnim(userId) {
        if (this.isMySelf(userId)) {
            return;
        }

        let playerNode = null;
        let chairIndex = null;
        for (let index = 0; index < this.userPlayerTb.length; index++) {
            let _playerNode = this.userPlayerTb[index];
            let _userId = _playerNode.getComponent(ABPlayers).getUserId();
            if (_userId === userId) {
                playerNode = _playerNode;
                chairIndex = index;
                break;
            }
        }

        if (playerNode == null) {
            return;
        }

        let headNode = find("Node", playerNode);
        if (headNode == null) {
            return
        }

        let moveDiff = 60;
        let time = 0.1;
        let pos = this.userPlayerHeadPosTb[chairIndex];
        Tween.stopAllByTarget(headNode);

        headNode.setPosition(pos);

        if (chairIndex < 3) {
            tween(headNode)
                .by(time, { position: v3(moveDiff, 0, 0) }, { easing: 'cubicIn' })
                .by(time, { position: v3(-moveDiff, 0, 0) }, { easing: 'cubicIn' })
                .start();
        }

        if (chairIndex >= 3) {
            tween(headNode)
                .by(time, { position: v3(-moveDiff, 0, 0) }, { easing: 'cubicIn' })
                .by(time, { position: v3(moveDiff, 0, 0) }, { easing: 'cubicIn' })
                .start();
        }
    }
    hideAllBetCoinLight() {
        for (let index = 0; index < this.areaPoolArr.length; index++) {
            const pool = this.areaPoolArr[index];
            let children = pool.children;
            for (let i = 0; i < children.length; i++) {
                const betNode = children[i];
                let lightNode = find("lightNode", betNode);
                if (lightNode) lightNode.active = false;
            }
        }
    }
    initCardsData(cardsInfo) {
        if (this.cards_node) {
            let node = this.cards_node.getComponent(ABCardsTool);
            node.initCardsData(cardsInfo);
        }
    }
    playTurnCardAnim(callback) {
        if (this.cards_node) {
            this.result_node.active = true;
            let node = this.cards_node.getComponent(ABCardsTool);
            node.playTurnCardAnim(callback, this.result_node);
        }
    }
    showLightAnim(type) {
        this.stopLightAnim();

        this.playLightAnim(type);
    }
    /** 根据牌得数量算出中将区域 */
    winnerTypeByCardsNum() {
        const nums = this.resultWinData?.nums;
        if (typeof nums !== 'number') {
            return null;
        }

        let otherWinner;
        if (nums <= 5) otherWinner = 3;
        else if (nums >= 6 && nums <= 10) otherWinner = 4;
        else if (nums >= 11 && nums <= 15) otherWinner = 5;
        else if (nums >= 16 && nums <= 25) otherWinner = 6;
        else if (nums >= 26 && nums <= 30) otherWinner = 7;
        else if (nums >= 31 && nums <= 35) otherWinner = 8;
        else if (nums >= 36 && nums <= 40) otherWinner = 9;
        else if (nums >= 41) otherWinner = 10;
        return otherWinner;
    }
    playLightAnim(type) {
        if (!Array.isArray(this.lightArr) || this.lightArr.length === 0) {
            return;
        }
        let lightNode = this.lightArr[type - 1];
        //AB 位置
        if (isValid(lightNode)) {
            let lightOpacity = lightNode.getComponent(UIOpacity)
            lightOpacity.opacity = 10;
            lightNode.active = true;
            tween(lightOpacity)
                .repeatForever(
                    tween()
                        .to(0.6, { opacity: 255 }, { easing: 'quadIn' })
                        .to(0.6, { opacity: 10 }, { easing: 'quadIn' })
                )
                .start();
        }

        let area = this.winnerTypeByCardsNum();
        let area2 = area ? this.lightArr[area - 1] : null;
        if (isValid(area2)) {
            let area2Opacity = area2.getComponent(UIOpacity)
            area2Opacity.opacity = 10;
            area2.active = true;
            tween(area2Opacity)
                .repeatForever(
                    tween()
                        .to(0.6, { opacity: 255 }, { easing: 'quadIn' })
                        .to(0.6, { opacity: 10 }, { easing: 'quadIn' })
                )
                .start();
        }

        if (this.win_node) {
            if (type == 1) {
                this.win_node.x = -207;
                this.win_node.y = 63.55;
            } else {
                this.win_node.x = 207;
                this.win_node.y = 63.55;
            }

            this.win_node.active = true;
            this.win_node.scale = 0;
            tween(this.win_node).to(0.6, { scale: v3(1, 1, 1) }, { easing: "backOut" }).start();
        }
    }
    getBetCoinListByValue(type, value) {
        let coinList = [];
        let children = this.coinLists;
        for (let index = 0; index < children.length; index++) {
            let betNode = children[index];
            let bet = betNode.bet;

            if (betNode.poolType === type && !betNode.selected) {
                if (value >= bet) {
                    betNode.selected = true;
                    coinList.push(betNode);
                    value = value - bet;
                }
            }
        }

        coinList.sort(function (a, b) {
            // 从大到小
            return b.bet - a.bet;
        });

        return coinList;
    }
    getBetCoinList(type) {
        let coinList = [];
        let children = this.coinLists;
        for (let index = 0; index < children.length; index++) {
            let betNode = children[index];
            let bet = betNode.bet;

            if (betNode.poolType === type && !betNode.selected) {
                betNode.selected = true;
                coinList.push(betNode);
            }
        }

        return coinList;
    }
    sendCoinToSeat(dstNode, type, coinList) {
        let pool = this.areaPoolArr[type - 1];

        if (pool == null) {
            console.error("数据错误 index = " + type);
            return;
        }

        let pos = dstNode.getPosition();
        let worldPos = dstNode.parent.getComponent(UITransform).convertToWorldSpaceAR(pos);
        let endPos = pool.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        let length = coinList.length;

        let index = 0;
        while (coinList.length > 0) {
            let betCoin = coinList.shift();
            let totalTime = 0.5;
            let delayTime = totalTime / length;


            tween(betCoin)
                .delay(delayTime * index)
                .to(totalTime, { position: endPos }, { easing: 'quadOut' })
                .call(() => {
                    if (betCoin.parent) {
                        betCoin.removeFromParent();

                        // 回收到对象池
                        PrefabPool.put(betCoin);

                        // 如果需要调用组件内的方法：
                        // this.putInstant(betCoin); 
                    }
                })
                // 4. 启动 Tween
                .start();
            index++;
        }

        music.playMusic(music.all_flygold);
    }
    onGameWinNoticeResp(winners, callback) {
        let self = this;
        const winnerList = Array.isArray(winners) ? winners : [];
        let dealOtherBetCoin = function () {
            // 中了的pool还有剩余，那么就飞到players
            if (self.resultWinData.winner === 1) {
                let coinList = self.getBetCoinList(1);
                self.sendCoinToSeat(self.btn_players.node, 1, coinList);
            } else if (self.resultWinData.winner === 2) {
                let coinList = self.getBetCoinList(2);
                self.sendCoinToSeat(self.btn_players.node, 2, coinList);
            }
            let otherWinner = self.winnerTypeByCardsNum();
            if (otherWinner) {
                let coinList = self.getBetCoinList(otherWinner);
                self.sendCoinToSeat(self.btn_players.node, otherWinner, coinList);
            }
        }.bind(this);

        // 先收输的，再收赢的
        let dealLosePool = function () {
            if (self.resultWinData.winner == 1) {
                let coinList = self.getBetCoinList(2);
                self.sendCoinToSeat(self.node_heguan, 2, coinList);
            } else if (self.resultWinData.winner == 2) {
                let coinList = self.getBetCoinList(1);
                self.sendCoinToSeat(self.node_heguan, 1, coinList);
            }
            //数量区域
            let area = [3, 4, 5, 6, 7, 8, 9, 10];
            let otherWinner = self.winnerTypeByCardsNum();
            for (let i = 0; i < area.length; i++) {
                if (area[i] != otherWinner) {
                    let coinList = self.getBetCoinList(area[i]);
                    self.sendCoinToSeat(self.node_heguan, area[i], coinList);
                }
            }
        }.bind(this);


        let dealWinPool = function () {
            // 桌上没人中，全部飞到playerBtn里
            if (winnerList.length === 0) {
                dealOtherBetCoin();
            } else {
                // 桌上人(包括自己)中了
                for (let index = 0; index < winnerList.length; index++) {
                    let element = winnerList[index];
                    let userId = element.userId;
                    let balance = element.balance;
                    let wins = Array.isArray(element.wins) ? element.wins : [];
                    let winPlayerNode = null;
                    // 自己中
                    if (self.isMySelf(userId)) {
                        winPlayerNode = self.mySelfNode;
                        if (wins.length > 0) {
                            for (let index = 0; index < wins.length; index++) {
                                let winInfo = wins[index];
                                let type = winInfo.index;
                                let amount = winInfo.amount;
                                let bets = winInfo.bets;

                                let coinList = self.getBetCoinListByValue(type, bets);
                                // 飞金币
                                self.sendCoinToSeat(self.mySelfNode, type, coinList);
                            }
                            music.playMusic(music.win);
                        }

                    } else {
                        // 桌上别人中
                        for (let index = 0; index < self.userPlayerTb.length; index++) {
                            let playerNode = self.userPlayerTb[index];
                            let _userId = playerNode.getComponent(ABPlayers).getUserId();
                            if (userId === _userId) {
                                winPlayerNode = playerNode;
                                break;
                            }
                        }

                        for (let index = 0; index < wins.length; index++) {
                            let winInfo = wins[index];
                            let type = winInfo.index;
                            let amount = winInfo.amount;
                            let bets = winInfo.bets;

                            let coinList = self.getBetCoinListByValue(type, bets);
                            if (isValid(winPlayerNode)) {
                                self.sendCoinToSeat(winPlayerNode, type, coinList);

                            } else {
                                console.error("数据错误，找不到seat上的人");
                            }

                        }
                    }

                    let totalWin = 0;
                    for (let index = 0; index < wins.length; index++) {
                        let winInfo = wins[index];
                        totalWin += winInfo.amount;
                    }

                    this.timeoutGameOver = setTimeout(() => {
                        // 弹赢的数字
                        if (totalWin > 0) {
                            if (isValid(winPlayerNode)) {
                                winPlayerNode.getComponent(ABPlayers).playWinAnim(totalWin);
                            }
                        }
                        if (isValid(winPlayerNode)) {
                            // 更新余额
                            winPlayerNode.getComponent(ABPlayers).updateMoney(balance);
                        }
                    }, 800);

                    if (this.timerArray != null) {
                        this.timerArray.push(this.timeoutGameOver);
                    }
                }

                dealOtherBetCoin();
            }
        }.bind(this);


        dealLosePool();
        this.timeoutGameOver1 = setTimeout(() => {
            dealWinPool();

            self.timeoutGameOverCallback = setTimeout(() => {
                if (callback) {
                    callback();
                }
            }, 1200);
        }, 1000);

        if (this.timerArray != null) {
            this.timerArray.push(this.timeoutGameOver1);
        }

        // this.checkWithDrawTip();
    }
    onGameSyncChairResp(chairs) {
        this.initPlayersData(chairs);
    }
    playAddRoadAnim(callback = null) {
        this.showRoadDotView();
        if (this.panel_win_dot == null) return;

        let children = this.panel_win_dot.children;
        let length = children.length;
        let endDot = children[length - 1];
        endDot.active = false;

        let winner = this.resultWinData.winner;
        let pool = this.areaPoolArr[winner - 1];

        // start
        let pos = pool.getPosition();
        let worldPos = pool.parent.getComponent(UITransform).convertToWorldSpaceAR(pos);
        let startPos = this.panel_win_dot.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

        // endPos

        // let endDotPos = endDot.getPosition();
        let layout = this.panel_win_dot.getComponent(Layout);
        let spacingX = layout.spacingX;
        let paddingLeft = layout.paddingLeft;
        // let width = endDot.getContentSize().width;
        let width = 65;
        let x = paddingLeft + spacingX * (length - 1) + width * length - width / 2;
        let endDotPos = new Vec3(x, 0, 0);

        let endWPos = endDot.parent.getComponent(UITransform).convertToWorldSpaceAR(endDotPos);
        let endPos = this.panel_win_dot.parent.getComponent(UITransform).convertToNodeSpaceAR(endWPos);

        // 移动动画
        // if (length >= 12) {
        // let diffX = spacingX + width;
        // let pos = this.panel_win_dot.getPosition();
        // this.panel_win_dot.setPosition(new Vec3(pos.x + diffX, pos.y, pos.z));

        // tween(this.panel_win_dot)
        //     .to(1.0, { position: pos }, { easing: 'quadOut' })
        //     .start();
        // }

        let dot = instantiate(this.drag_dot_prefab);
        let sp = dot.getComponent(Sprite);
        this.panel_win_dot.parent.addChild(dot);
        dot.setPosition(startPos);

        // let time = 1.0;

        // tween(dot)
        //     .to(time, { position: endPos }, { easing: 'quadOut' })
        //     .call(() => { endDot.active = true; })
        //     .call(() => { dot.destroy(); })
        //     .start();
        // if (callback) {
        //     callback();
        // }
        let str = "img_0035";
        // this.loadAndAnimateDot(str, dot, sp, endPos, endDot, callback);
        AndarbaharManager.instance.loadAndAnimateDot(str, dot, sp, endPos, endDot, callback);
        music.playMusic(music.light_fly);
    }
    onRebetNoticeRsp(data) {
        let userId = data.userId;
        if (this.isMySelf(userId)) {
            this.mySelfNode.getComponent("ABPlayers").updateMoney(data.balance);
            return;
        }

        let fromNode = null;
        for (let index = 0; index < this.userPlayerTb.length; index++) {
            let playerNode = this.userPlayerTb[index];
            let player = playerNode.getComponent("ABPlayers");
            let _userId = player.getUserId();
            if (userId === _userId) {
                fromNode = playerNode;
                let balance = data.balance;
                player.updateMoney(balance);
                break;
            }
        }
        if (fromNode == null) {
            fromNode = this.btn_players.node;
        }

        // 飞金币
        let list = data.list;
        for (let index = 0; index < list.length; index++) {
            const betData = list[index];
            let type = betData.index;
            let bet = betData.bet;
            this.sendCoinToTable(fromNode, type, bet);
        }

        // 更新pool数量
        // let totalDragonBet = data.downBet;
        // let totalTigerBet = data.sevenBet;
        // let totalTieBet = data.upBet;
        // this.freshPoolBetsByType(1, totalDragonBet);
        // this.freshPoolBetsByType(2, totalTigerBet);
        // this.freshPoolBetsByType(3, totalTieBet);
        for (let i = 0; i < data.areaBets.length; i++) {
            if (data.areaBets[i]) {
                this.freshPoolBetsByType(i, data.areaBets[i]);
            }
        }
    }
    net_MessageBack(proto) {
        if (!isValid(this.node)) {
            return;
        }
        let platform = awesomeRoot.com.cw.chess2.platform;
        // console.log('接收到消息:' + proto.type + ',' + proto.protocol);
        if (proto.type === platform.ServerType.SERVER_TYPE_AB) {
            // console.log('接收到:' + proto.type + ',' + proto.protocol);
            if (proto.type === platform.ServerType.SERVER_TYPE_GATEWAY) {
                //断线重连登录成功后，重新走进去游戏请求和获取桌子信息
                if (proto.protocol === platform.ServerGatewayCmd.CMD_GATEWAY_LOGIN_RESP) {
                    var LoginResponse = platform.LoginResponse;
                    var message = LoginResponse.decode(proto.data);
                    console.log("NetWorkStatus", "断线重连后，进入游戏");
                    this.node_network.sendAndarBaharGameEnterReq();   //ab百人游戏
                }
            }

            if (proto.type === platform.ServerType.SERVER_TYPE_AB) {
                // console.log('接收到:' + proto.type + ',' + proto.protocol);

                let andarbaharProto = awesomeRoot.com.cw.chess2.andarbahar;
                let cmd = andarbaharProto.AndarBaharCmd;
                let gamePhase = andarbaharProto.GamePhase;

                if (proto.protocol === awesomeRoot.com.cw.chess2.andarbahar.AndarBaharCmd.CMD_C_GAME_ENTER_RESP) {
                    let GameEnterResp = awesomeRoot.com.cw.chess2.andarbahar.GameEnterResp;
                    if (proto && proto.data) {
                        let message = GameEnterResp.decode(proto.data);
                        if (message.result === 0) {
                            console.log("NetWorkStatus", "断线重连后，重新获取桌子信息");
                            // 获取桌子信息
                            AndarBahar_network.sendGameGetTableStatusReq();
                        }
                    }
                } else if (proto.protocol === cmd.CMD_C_GAME_GET_TABLE_STATUS_RESP) {  //获取桌子信息
                    let GameGetTableStatusResp = andarbaharProto.GameGetTableStatusResp;
                    let message = GameGetTableStatusResp.decode(proto.data);

                    console.log('获取桌子信息andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    this.process_table_status(message);
                    // comonFun.removeGameLoading();
                } else if (proto.protocol === cmd.CMD_C_GAME_LEAVE_RESP) { // 退出房间返回
                    let GameLeaveResp = awesomeRoot.com.cw.chess2.andarbahar.GameLeaveResp;
                    let message = GameLeaveResp.decode(proto.data);

                    console.log('获取退出andarbahar游戏=========:[' + JSON.stringify(message.result) + ']');

                    // // 0: 成功; 100: 当前局有下注结束前不能退出, 101:连续5局未下注 102：服务器维护
                    // if (message.result === 0) {
                    //     config.isReconnectToGame = false;
                    //     cc.director.loadScene("HallScene");
                    // } else if (message.result === 100) {
                    //     window.toastManager.toast("Can't leave table before settle");
                    // } else if (message.result === 101) {
                    //     config.isReconnectToGame = false;
                    //     cc.director.loadScene("HallScene");
                    // } else if (message.result === 102) {
                    //     config.isReconnectToGame = false;
                    //     window.toastManager.toast("The server is being maintained");

                    //     setTimeout(() => {
                    //         cc.director.loadScene("HallScene");
                    //     }, 1500);
                    // }

                } else if (proto.protocol === cmd.CMD_C_GAME_READY_NOTICE_RESP) { // 准备通知
                    this.gamePhase = gamePhase.PHS_GAME_READY;
                    console.log("准备通知")
                    this.resetTable();
                    // this.showGamePhaseLabel("Start");
                } else if (proto.protocol === cmd.CMD_C_GAME_START_NOTICE_RESP) { // 开始通知
                    this.gamePhase = gamePhase.PHS_GAME_START;

                    this.resetBetLabel();
                    this.clearCountDown();
                    this.clearHeadBetAnim();
                    this.clearAllCoins();
                    this.stopLightAnim();
                    this.hidePlayerWinAnim();
                    this.clearAllTimer();

                    let GameStartNoticeResp = andarbaharProto.GameStartNoticeResp;
                    let message = GameStartNoticeResp.decode(proto.data);

                    console.log("开始通知 === " + JSON.stringify(message))
                    let card = this.centerCard.getComponent(ABCard);
                    if (card) {
                        card.initCardValue(message.joker);
                        card.turnCard3();
                    }

                    let to = setTimeout(() => {
                        this.playStartOrStopBettingAnim(1);
                    }, 1000);
                    if (this.timerArray != null) {
                        this.timerArray.push(to);
                    }

                } else if (proto.protocol === cmd.CMD_C_GAME_BET_NOTICE_RESP) { // 开始下注通知
                    this.gamePhase = gamePhase.PHS_GAME_BETTING;

                    this.hidePlayerWinAnim();
                    this.clearAllCoins();
                    this.stopLightAnim();
                    this.clearHeadBetAnim();
                    this.clearAllTimer();
                    this.setRebetBtnState(this.canRebet);

                    let GameBetNoticeResp = andarbaharProto.GameBetNoticeResp;
                    let message = GameBetNoticeResp.decode(proto.data);
                    console.log("开始下注通知 == ", JSON.stringify(message))
                    this.onGameBetNoticeResp(message);
                    // this.showGamePhaseLabel("Betting");
                } else if (proto.protocol === cmd.CMD_C_GAME_BET_RESP) { // 自己下注返回
                    let GameBetResp = andarbaharProto.GameBetResp;
                    let message = GameBetResp.decode(proto.data);

                    console.log('自己下注返回andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    if (message.result === 0) {
                        this.onBetRsp(message);

                    } else if (message.result === 100) {
                        this.showPanelRechargeTip(100);
                    } else if (message.result === 101) {
                        this.showPanelRechargeTip(101);
                    } else if (message.result === 109) {
                        this.showPanelRechargeTip(109, message.bet);
                    } else if (message.result === 103) {
                        this.showPanelRechargeTip("Out of Maxbet limit for this area");
                    } else if (message.result === 104) {
                        this.showPanelRechargeTip("Please wait for the betting stage");
                    } else {
                        let result = message.result;
                        console.log("下注不成功" + result)
                    }

                } else if (proto.protocol === cmd.CMD_C_GAME_REPEAT_BET_RESP) { // 自己复投返回
                    let GameRepeatBetResp = andarbaharProto.GameRepeatBetResp;
                    let message = GameRepeatBetResp.decode(proto.data);
                    console.log('自己复投返回andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    if (message.result === 0) {
                        this.onRebetRsp(message);
                    } else if (message.result === 100) {
                        this.showPanelRechargeTip(100);
                    } else if (message.result === 101) {
                        this.showPanelRechargeTip(101);
                    } else if (message.result === 109) {

                        // this.showPanelRechargeTip(109, message.bet);
                    } else if (message.result === 103) {
                        this.showPanelRechargeTip("Out of Maxbet limit for this area");

                    } else if (message.result === 104) {
                        this.showPanelRechargeTip("Please wait for the betting stage");

                    } else {
                        let result = message.result;
                        console.log("下注不成功" + result)
                    }

                } else if (proto.protocol === cmd.CMD_C_GAME_REPEAT_BET_NOTICE_RESP) { // 复投广播
                    let GameRepeatBetNoticeResp = andarbaharProto.GameRepeatBetNoticeResp;
                    let message = GameRepeatBetNoticeResp.decode(proto.data);
                    console.log('复投广播返回andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    this.onRebetNoticeRsp(message);

                } else if (proto.protocol === cmd.CMD_C_GAME_SYNC_BET_RESP) { // 同步下注(广播下注)
                    // index
                    // bet
                    // total_bet
                    // user_id
                    // balance
                    let GameBettingNotify = andarbaharProto.GameBettingNotify;
                    let message = GameBettingNotify.decode(proto.data);

                    // console.log('下注广播返回andarbahar游戏=========:[' + JSON.stringify(message) + ']');
                    this.onGameBettingNotify(message);

                } else if (proto.protocol === cmd.CMD_C_GAME_SHOW_RESULT_RESP) { // 开奖 6.2s
                    //下注的金币去掉光圈
                    this.hideAllBetCoinLight();
                    this.clearDealCardAnim();
                    this.stopNodeAnim();
                    this.clearHeadBetAnim();
                    this.stopLightAnim();
                    this.hidePlayerWinAnim();
                    this.clearAllTimer();

                    this.gamePhase = gamePhase.PHS_GAME_RESULT;

                    let GameResultResp = andarbaharProto.GameResultResp;
                    let message = GameResultResp.decode(proto.data);

                    console.log('开奖返回andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    this.initCardsData(message);
                    // // 先红方
                    // // 再黑方
                    // // 再闪

                    // // 再派彩 先系统收输的，然后再分发到玩家赢得，                                            

                    // // 将结果加在roadData
                    let data = {
                        winner: message.winner,
                        joker: message.joker,
                        nums: message.nums,
                        cardsA: message.cardsA,
                        cardsB: message.cardsB,
                    };
                    this.resultWinData = data;

                    let self = this;
                    let func = function () {
                        self.playTurnCardAnim(function () {
                            // self.showDiceResult(data.cards, function () {
                            self.showLightAnim(message.winner);
                            // });
                        });
                    }.bind(this);

                    this.playStartOrStopBettingAnim(2, func);

                } else if (proto.protocol === cmd.CMD_C_GAME_SETTLE_NOTICE_RESP) { // 派彩通知
                    this.gamePhase = gamePhase.PHS_GAME_SETTLE;

                    this.clearDealCardAnim();
                    this.stopNodeAnim();
                    this.clearCountDown();
                    this.clearHeadBetAnim();
                    this.hidePlayerWinAnim();
                    this.clearAllTimer();


                    let GameWinNoticeResp = andarbaharProto.GameWinNoticeResp;
                    let message = GameWinNoticeResp.decode(proto.data);

                    console.log('派彩返回andarbahar游戏=========:[' + JSON.stringify(message) + ']');
                    let self = this;
                    let callback = function () {
                        self.playAddRoadAnim();
                        self.resetBetLabel();
                        self.stopLightAnim();
                    }.bind(this);

                    // 再派彩 先系统收输的，然后再分发到玩家赢得，                                            
                    this.onGameWinNoticeResp(message.winners, callback);



                    this.freshRoadData(this.resultWinData);

                    // if (isValid(this.PanelHistory)) {
                    //     this.PanelHistory.getComponent("ABHistory").initDataInView(this.roadData);
                    // }

                } else if (proto.protocol === cmd.CMD_C_GAME_SYNC_CHAIR_RESP) { // 同步桌上的人
                    let GameSyncChairResp = andarbaharProto.GameSyncChairResp;
                    let message = GameSyncChairResp.decode(proto.data);

                    console.log('同步桌上的人andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    this.onGameSyncChairResp(message.chairs);

                } else if (proto.protocol === cmd.CMD_C_GAME_SYNC_PLAYER_COUNT_RESP) { // 同步总人数
                    let GameSyncPlayerCountResp = andarbaharProto.GameSyncPlayerCountResp;
                    let message = GameSyncPlayerCountResp.decode(proto.data);

                    console.log('同步桌上的总人数andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    this.freshPlayerCount(message.count);

                } else if (proto.protocol === cmd.CMD_C_GAME_NO_BET_NOTICE_RESP) { // 连续未下注通知
                    let GameNoBetNoticeResp = andarbaharProto.GameNoBetNoticeResp;
                    let message = GameNoBetNoticeResp.decode(proto.data);

                    console.log('连续未下注通知 andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    // if (message.count >= 3) {
                    //     window.toastManager.toast("No bet in last 5 rounds will leave table automatically");
                    // }

                } else if (proto.protocol === cmd.CMD_C_GAME_SYNC_BALANCE_RESP) { // 同步余额
                    let GameSyncBalanceResp = andarbaharProto.GameSyncBalanceResp;
                    let message = GameSyncBalanceResp.decode(proto.data);

                    console.log('同步余额 andarbahar游戏=========:[' + JSON.stringify(message) + ']');
                    let balance = message.balance;
                    this.mySelfNode.getComponent(ABPlayers).updateMoney(balance);
                    // this.refreshBankrutcy(balance);
                } else if (proto.protocol === cmd.CMD_C_CHAT_RESP) { // 聊天
                    let MsgChatResp = andarbaharProto.MsgChatResp;
                    let message = MsgChatResp.decode(proto.data);

                    console.log('聊天返回 弹幕 andarbahar游戏=========:[' + JSON.stringify(message) + ']');

                    // this.playDanmu(message);
                } else if (proto.protocol === platform.ServerGameCommonCmd.CMD_C_GAME_MAGIC_CHAT_RESP) {
                    //互动道具
                    // this.refreshRecharge();
                    // let MsgMagicChatResp = platform.MsgMagicChatResp;
                    // let message = MsgMagicChatResp.decode(proto.data);
                    console.log("收到互动道具消息", message);

                    // this.playPorpsMagic(message.tableId, message.sendUserId, message.toUserId, message.mogicId);
                }

            } else if (proto.protocol === platform.ServerCommonCmd.CMD_SYSMESSAGE_TO_USER_RESP) {

            } else if (proto.protocol === platform.ServerCommonCmd.CMD_WEB_RECHARGE_SUCCESS_RESP) {
                //充值反馈
                // this.refreshRecharge();
                // let RechargeNoticeResp = platform.RechargeNoticeResp;
                // let message = RechargeNoticeResp.decode(proto.data);
                // mySelfInfo.rechargeTip = message;

                // if (message.type == 6) {
                //     this.gameBuffer().hideBankrupt();
                // } else if (message.type == 99) {
                //     //充值失败
                //     let self = this;
                //     window.dialogManager.showPanelAddCash(
                //         "The transaction was rejected by the bank,please  change the UPI app for payment",
                //         function () {
                //             self.showRecharge();
                //         }.bind(this),
                //         "Payment Tips"
                //     );
                // }
            }
        }
    }
    _onTouchBegin(touch, event) {
        console.log("touch start");
        const location = touch.getUILocation();
        const worldPos = v3(location.x, location.y, 0);

        this.colliderArr.forEach((node, index) => {
            const uiTransform = node.getComponent(UITransform);
            const collider = node.getComponent(PolygonCollider2D);

            if (uiTransform && collider) {
                const localPos = uiTransform.convertToNodeSpaceAR(worldPos);
                if (Intersection2D.pointInPolygon(v2(localPos.x, localPos.y), collider.points)) {
                    this.requestBet(index + 1);
                }
            }
        });

    }
    requestBet(type) {
        AndarBahar_network.sendGameBetReq(type, this.selectedBet);
    }
    net_Closed() {
        console.log("网络断开了");
        config.curType = awesomeRoot.com.cw.chess2.platform.GameKind.GAME_KIND_Andar_Bahar;
        config.isReconnectToGame = true;
        // cc.director.loadScene("HallScene");
    }
    onClickRebetBtn(btn) {

        music.playMusic(music.Click);
        AndarBahar_network.sendRebetReq();
    }
    setRebetBtnState(flag) {
        if (this.btn_rebet != null) {
            this.btn_rebet.interactable = flag;
            let str = flag ? "But_yellow_m" : "btn_Rebet_Disabled";
            let self = this;
            let bgNode = find("Background", self.btn_rebet.node);
            AndarbaharManager.instance.loadSpriteFrame(`image/newGame/${str}`, bgNode.getComponent(Sprite));
            find("Label", self.btn_rebet.node).getComponent(Label).color = flag ? new Color(0x68, 0x2C, 0x05) : new Color(0x1B, 0x18, 0x16);
            find("Label", self.btn_rebet.node).getComponent(Label).shadowColor = flag ? new Color(0xF5, 0xEF, 0x76) : new Color(0xEB, 0xEB, 0xEB);
        }
    }
}


