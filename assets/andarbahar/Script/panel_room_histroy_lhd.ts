import { _decorator, Component, find, instantiate, Label, Node, Prefab, Sprite, SpriteFrame, Tween, tween, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('panel_room_histroy_lhd')
export class panel_room_histroy_lhd extends Component {

    @property({ type: Label, displayName: 'label_dragon_rate' })
    label_dragon_rate: Label = null;

    @property({ type: Label, displayName: 'label_tiger_rate' })
    label_tiger_rate: Label = null;

    @property({ type: Label, displayName: 'label_tie_rate' })
    label_tie_rate: Label = null;

    @property({ type: Node, displayName: 'node_zhu_roads' })
    node_zhu_roads: Node = null;

    @property({ type: Node, displayName: 'node_da_roads' })
    node_da_roads: Node = null;

    @property({ type: Label, displayName: 'label_dragon_num' })
    label_dragon_num: Label = null;

    @property({ type: Label, displayName: 'label_tiger_num' })
    label_tiger_num: Label = null;

    @property({ type: Label, displayName: 'label_tie_num' })
    label_tie_num: Label = null;

    @property({ type: Label, displayName: 'label_Statistic_num' })
    label_Statistic_num: Label = null;

    @property({ type: SpriteFrame, displayName: 'sf_andar' })
    sf_andar: SpriteFrame = null;
    @property({ type: SpriteFrame, displayName: 'sf_bahar' })
    sf_bahar: SpriteFrame = null;
    // @property({ type: SpriteFrame, displayName: 'sf_tie' })
    // sf_tie: SpriteFrame = null;


    @property({ type: Node, displayName: 'zhu_road_item' })
    zhu_road_item: Node = null;

    @property({ type: Node, displayName: 'da_road_item' })
    da_road_item: Node = null;


    @property({ type: SpriteFrame, displayName: 'sf_dragon_dot' })
    sf_dragon_dot: SpriteFrame = null;

    @property({ type: SpriteFrame, displayName: 'sf_tiger_dot' })
    sf_tiger_dot: SpriteFrame = null;



    roadData = null;
    roadDataGroup = [];
    maxNum = 10;
    start() {

    }
    initData(roadData) {
        this.roadData = roadData;
        this.addFlagToRoadData();

        this.dealRoadData();

        this.initWinRateView();

        this.initZhuRoadView();
        this.initDaRoadView();

        this.initRoundView();

        // this.playTipLastRound();
    }
    hideView() {
        this.node.active = false;
    }
    initDataInView(roadData, isPlayAnim = true) {
        this.initData(roadData);
        if (isPlayAnim) {
            this.playTipLastRound();
        }
    }

    playTipLastRound() {
        this.playZhuRoadAnim();
        this.playDaRoadAnim();
    }
    playZhuRoadAnim() {
        let lastDot = this.getLastZhuRoadDot();
        if (lastDot) {
            const sprite = lastDot.getComponent(Sprite);
            if (sprite) {
                Tween.stopAllByTarget(lastDot);
                sprite.enabled = true;
                tween(lastDot)
                    .repeat(2,
                        tween()
                            .call(() => { sprite.enabled = false; })
                            .delay(0.4)
                            .call(() => { sprite.enabled = true; })
                            .delay(0.4)
                    )
                    .call(() => { sprite.enabled = true; })
                    .start();
            }
        }
    }
    getLastDaRoadDot() {
        let dotNode = null;
        let maxRound = 0;
        let roadsChildren = this.node_da_roads.children;
        for (let index = 0; index < roadsChildren.length; index++) {
            let group = roadsChildren[index];
            let roads = group.children;

            for (let i = 0; i < roads.length; i++) {
                let _dot = roads[i];
                if (_dot.activeInHierarchy) {
                    if ((_dot as any).__round > maxRound) {
                        dotNode = _dot;
                    }
                    maxRound = (_dot as any).__round > maxRound ? (_dot as any).__round : maxRound;

                }
            }
        }
        return dotNode;
    }
    playDaRoadAnim() {

        let dotNode = this.getLastDaRoadDot();

        if (dotNode) {
            const sprite = dotNode.getComponent(Sprite);
            if (sprite) {
                Tween.stopAllByTarget(dotNode);
                const targetNames = ["oneNode", "twoNode", "tie_count"];
                let activeChild = null;

                for (const name of targetNames) {
                    const child = dotNode.getChildByName(name);
                    if (child && child.active) {
                        activeChild = child;
                        break;
                    }
                }
                if (activeChild) {
                    const opacityComp = activeChild.getComponent(UIOpacity) || activeChild.addComponent(UIOpacity);
                    Tween.stopAllByTarget(opacityComp);
                    tween(opacityComp)
                        .to(0.4, { opacity: 0 })
                        .to(0.4, { opacity: 255 })
                        .union()
                        .repeat(2)
                        .start();
                } else {
                    sprite.enabled = true;
                    tween(dotNode)
                        .repeat(2,
                            tween()
                                .call(() => { sprite.enabled = false; })
                                .delay(0.4)
                                .call(() => { sprite.enabled = true; })
                                .delay(0.4)
                        )
                        .call(() => { sprite.enabled = true; })
                        .start();
                }

            }
        }

    }
    getLastZhuRoadDot() {
        let dotNode = null;

        let roadsChildren = this.node_zhu_roads.children;
        dotNode = roadsChildren[roadsChildren.length - 1];

        return dotNode;
    }
    initRoundView() {
        let roundArray = this.getRoundInfoByLastNum(100);

        if (this.label_dragon_num != null) {
            this.label_dragon_num.string = "Andar:" + roundArray[0] + "";
        }

        if (this.label_tiger_num != null) {
            this.label_tiger_num.string = "Bahar:" + roundArray[1] + "";
        }

        // if (this.label_tie_num != null) {
        //     this.label_tie_num.string = "Tie:" + roundArray[2] + "";
        // }

        if (this.label_Statistic_num != null) {
            this.label_Statistic_num.string = "Statistic:" + (roundArray[0] + roundArray[1]) + "";
        }
    }

    getDaRoadData() {

        let lastRoadDataGroup = this.roadDataGroup.slice(-this.maxNum);
        const createEmptyCol = () => Array.from({ length: 6 }, () => ({ winner: 0, round: 0, tieCount: 0 }));

        let realRoadDataGroup = [];
        for (let index = 0; index < this.maxNum; index++) {
            realRoadDataGroup.push(createEmptyCol());
        }

        for (let index = 0; index < lastRoadDataGroup.length; index++) {
            let data = lastRoadDataGroup[index];
            let realRoadData = realRoadDataGroup[index];

            let nextIndex = index + 1;
            let winnerIndex = null;
            for (let _index = 0; _index < data.length; _index++) {
                let winner = data[_index].winner;
                let round = data[_index].round;
                let tieCount = data[_index].tieCount;

                let _winner = realRoadData[_index] && realRoadData[_index].winner;

                if (_winner === 0) {
                    realRoadData[_index].winner = winner;
                    realRoadData[_index].round = round;
                    realRoadData[_index].tieCount = tieCount;
                } else {
                    if (winnerIndex === null) {
                        winnerIndex = _index - 1 <= 0 ? 0 : _index - 1;
                    }

                    while (nextIndex >= realRoadDataGroup.length) {
                        realRoadDataGroup.push(createEmptyCol());
                    }

                    let nextRealRoadData = realRoadDataGroup[nextIndex];
                    if (nextRealRoadData == null) {
                        realRoadDataGroup[nextIndex] = createEmptyCol();
                        nextRealRoadData = realRoadDataGroup[nextIndex];
                    }

                    const safeWinnerIndex = Math.max(0, Math.min(5, winnerIndex));
                    if (!nextRealRoadData[safeWinnerIndex]) {
                        nextRealRoadData[safeWinnerIndex] = { winner: 0, round: 0, tieCount: 0 };
                    }
                    nextRealRoadData[safeWinnerIndex].winner = winner;
                    nextRealRoadData[safeWinnerIndex].round = round;
                    nextRealRoadData[safeWinnerIndex].tieCount = tieCount;
                    nextIndex += 1;
                }
            }

        }

        return realRoadDataGroup;
    }
    addFlagToRoadData() {
        if (this.roadData == null || this.roadData.length === 0) {
            return;
        }
        for (let index = 0; index < this.roadData.length; index++) {
            const road = this.roadData[index];
            if (road == null || typeof road !== "object") {
                // Keep index alignment stable when upstream data contains empty items.
                this.roadData[index] = { winner: 0, card: 0, round: index };
                continue;
            }
            road.round = index;
        }
    }
    initDaRoadView() {
        if (this.node_da_roads != null) {
            this.node_da_roads.destroyAllChildren();
        }
        let daRoadData = this.getDaRoadData();

        // console.log("daRoadData", daRoadData);
        for (let index = daRoadData.length - this.maxNum; index < daRoadData.length; index++) {
            let roadData = daRoadData[index];

            let item = instantiate(this.da_road_item);
            if (this.node_da_roads != null) {
                this.node_da_roads.addChild(item);
            }
            item.active = true;
            for (let _index = 0; _index < roadData.length; _index++) {
                let winner = roadData[_index].winner;
                let round = roadData[_index].round;

                let spNode = find("sp_" + _index, item);
                (spNode as any).__round = round;

                if (winner === 0) {
                    spNode.active = false;
                } else {
                    spNode.active = true;

                    let tieCount = roadData[_index].tieCount;
                    let sp = spNode.getComponent(Sprite);
                    spNode.getChildByName("oneNode").active = tieCount === 1;
                    spNode.getChildByName("twoNode").active = tieCount === 2;
                    if (tieCount > 2) {
                        spNode.getChildByName("tie_count").active = true;
                        spNode.getChildByName("tie_count").getComponent(Label).string = tieCount;
                    }
                    if (winner === 1) {
                        sp.spriteFrame = this.sf_dragon_dot;
                    } else if (winner === 2) {
                        sp.spriteFrame = this.sf_tiger_dot;
                    }

                }
            }
        }
    }
    dealRoadData() {
        // 合并数据
        let roadDataGroup = [];

        let tmp = [];
        let lastWinner = 0;
        let lastRound = 0;
        let firstTie = false;
        let tieCount = 0;

        for (let index = 0; index < this.roadData.length; index++) {
            let element = this.roadData[index];

            // 1 龙 2 虎  3 和
            let winner = element.winner;

            // 去除前面所有的tie
            if ((index === 0 || firstTie) && winner === 3) {
                firstTie = true;
                continue;
            } else {
                firstTie = false;
            }

            if (winner === 3) {
                tieCount = tieCount + 1;

                if (index === this.roadData.length - 1) {
                    let data = {
                        winner: lastWinner,
                        round: lastRound,
                        tieCount: tieCount,
                    }
                    tmp.push(data);
                    roadDataGroup.push(tmp);
                }

            } else {
                if (lastWinner !== 0) {
                    if (lastWinner !== winner) {
                        let data = {
                            winner: lastWinner,
                            round: lastRound,
                            tieCount: tieCount,
                        }
                        tmp.push(data);
                        roadDataGroup.push(tmp);

                        tmp = [];

                        if (index === this.roadData.length - 1) {
                            let data = {
                                winner: winner,
                                round: element.round,
                                tieCount: 0,
                            }
                            tmp.push(data);
                            roadDataGroup.push(tmp);
                        }
                    } else {
                        let data = {
                            winner: lastWinner,
                            round: lastRound,
                            tieCount: tieCount,
                        }
                        tmp.push(data);

                        if (index === this.roadData.length - 1) {
                            let data = {
                                winner: winner,
                                round: element.round,
                                tieCount: 0,
                            }
                            tmp.push(data);
                            roadDataGroup.push(tmp);
                        }
                    }

                    lastWinner = winner;
                    lastRound = element.round;
                    tieCount = 0;
                } else {
                    lastWinner = winner;
                    lastRound = element.round;
                }
            }

        }

        this.roadDataGroup = roadDataGroup;

        return roadDataGroup;
    }
    initZhuRoadView() {
        if (this.node_zhu_roads != null) {
            this.node_zhu_roads.destroyAllChildren();
        }
        let zhuRoadDataGroup = this.getZhuRoadData();
        for (let index = 0; index < zhuRoadDataGroup.length; index++) {
            let zhuRoadData = zhuRoadDataGroup[index];

            for (let _index = 0; _index < zhuRoadData.length; _index++) {
                let road = zhuRoadData[_index];
                let winner = road.winner;
                if (winner != 0) {
                    let item = instantiate(this.zhu_road_item);
                    this.node_zhu_roads.addChild(item);
                    item.active = true;
                    let sp = item.getComponent(Sprite);

                    if (winner === 1) {
                        sp.spriteFrame = this.sf_andar;
                    } else if (winner === 2) {
                        sp.spriteFrame = this.sf_bahar;
                    }

                    // else if (winner === 3) {
                    //     sp.spriteFrame = this.sf_tie;
                    // }
                }
            }
        }

    }
    getLastRoadData(num) {
        let lastRoadData = this.roadData.slice(-num);
        return lastRoadData;
    }
    getZhuRoadData() {
        // 最后30局
        let num = 30;
        let roadData = this.getLastRoadData(num);
        for (let index = 0; index < num; index++) {
            let road = roadData[index];
            if (road == undefined) {
                let data = { winner: 0, round: 0 }
                roadData[index] = data;
            }
        }

        let zhuRoadDataGroup = [];

        for (let index = 0; index < roadData.length; index += 6) {
            zhuRoadDataGroup.push(roadData.slice(index, index + 6));
        }

        return zhuRoadDataGroup;
    }

    initWinRateView() {
        let num = 100;
        let dragonRate = this.getWinRateByLastNum(num);

        if (this.label_dragon_rate != null) {
            this.label_dragon_rate.string = "Andar:" + (dragonRate[0] * 100).toFixed(0) + "%";
        }
        if (this.label_tiger_rate != null) {
            this.label_tiger_rate.string = "Bahar:" + (dragonRate[1] * 100).toFixed(0) + "%";
        }

        if (this.label_tie_rate != null) {
            this.label_tie_rate.string = "Tie:" + (dragonRate[2] * 100).toFixed(0) + "%";
        }
    }

    getWinRateByLastNum(num) {
        let lastRoadData = this.getLastRoadData(num);
        let dragonWinRound = 0;
        let tigerWinRound = 0;
        let tieRound = 0;
        for (let index = 0; index < lastRoadData.length; index++) {
            let element = lastRoadData[index];
            // 1 龙 2 虎  3 和
            let winner = element.winner;

            if (winner === 1) {
                dragonWinRound += 1;
            } else if (winner === 2) {
                tigerWinRound += 1;
            } else if (winner === 3) {
                tieRound += 1;
            }
        }
        let totelRound = dragonWinRound + tigerWinRound + tieRound;
        return [dragonWinRound / totelRound, tigerWinRound / totelRound, 1 - (dragonWinRound / totelRound) - (tigerWinRound / totelRound)];
    }

    getRoundInfoByLastNum(num) {
        let lastRoadData = this.getLastRoadData(num);
        let dragonWinRound = 0;
        let tigerWinRound = 0;
        // let tieRound = 0;
        for (let index = 0; index < lastRoadData.length; index++) {
            let element = lastRoadData[index];
            // 1 龙 2 虎  3 和
            let winner = element.winner;

            if (winner === 1) {
                dragonWinRound += 1;
            } else if (winner === 2) {
                tigerWinRound += 1;
            }
            // else if (winner === 3) {
            //     tieRound += 1;
            // }
        }

        return [dragonWinRound, tigerWinRound];
    }
}


