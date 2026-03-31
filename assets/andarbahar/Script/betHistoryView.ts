import { _decorator, Button, Color, Component, find, instantiate, Label, Node, ScrollView, tween, Tween, v3, Vec3 } from 'cc';
import { AndarBahar_network } from './AndarBahar_network';
import { config } from '../../Script/util/config';
import { ABCard } from './ABCard';
import { music } from './AndarbaharMusic';
import { ClipboardUtils } from './ClipboardUtils';
const { ccclass, property } = _decorator;

@ccclass('betHistoryView')
export class betHistoryView extends Component {
    @property({ type: Node, displayName: 'item' })
    item: Node = null;

    @property({ type: Label, displayName: 'pageCount' })
    pageCount: Label = null;

    @property({ type: ScrollView, displayName: 'ScrollView' })
    scrollView: ScrollView = null;

    @property({ type: Node, displayName: 'BetRecord' })
    betRecord: Node = null;

    @property({ type: Node, displayName: 'RecordDetail' })
    recordDetail: Node = null;

    @property({ type: Node, displayName: 'betListNode' })
    betListNode: Node = null;
    slideOffset = 1400;
    totalPage = 0;
    currentPage = 1;
    recordsData = null;
    private betRecordCenterPos: Vec3 = null;
    private recordDetailCenterPos: Vec3 = null;
    reslutMap = {
        1: "Dragon",
        2: "Tiger",
        3: "Tie"
    }
    start() {
        if (this.betRecord) {
            this.betRecordCenterPos = this.betRecord.position.clone();
        }
        if (this.recordDetail) {
            this.recordDetailCenterPos = this.recordDetail.position.clone();
        }
        this.recordDetail.active = false;
    }
    onClickCopy() {
        music.playMusic(music.Click);
        ClipboardUtils.copy(find('RoundIDLabel', this.recordDetail).getComponent(Label).string);

    }
    initData(data) {
        this.totalPage = data.PageCount;
        this.currentPage = data.page;
        this.recordsData = data.records;
        this.pageCount.string = `${this.currentPage}/${this.totalPage}`;
        this.scrollView.content.removeAllChildren();
        data.records.forEach(element => {
            let itemNode = instantiate(this.item);
            itemNode.active = true;
            find('dateLabel', itemNode).getComponent(Label).string = this.formatDate(element.betTime);
            find('profitLabel', itemNode).getComponent(Label).string = this.convertCurrency(element.winlose);
            find('profitLabel', itemNode).getComponent(Label).color = element.winlose >= 0 ? new Color(88, 135, 56) : new Color(214, 53, 59);
            let betTotal = 0;
            let winTotal = 0;
            element.wins.forEach(bet => {
                betTotal += Number(bet.bets);
                if (bet.amount) {
                    winTotal += Number(bet.amount);
                }
            });
            find('betLabel', itemNode).getComponent(Label).string = this.convertCurrency(betTotal);
            find('winLabel', itemNode).getComponent(Label).string = this.convertCurrency(winTotal);
            let rightArrow = find('rightArrow', itemNode).getComponent(Button);
            if (rightArrow) {
                rightArrow.node.off(Button.EventType.CLICK);
                rightArrow.node.on(Button.EventType.CLICK, () => {
                    this.onClickRecordDetail(element);
                });
            }
            this.scrollView.content.addChild(itemNode);
        });
    }

    private formatDate(timestamp: number | string): string {
        let t = typeof timestamp === 'string' ? parseInt(timestamp) : timestamp;
        if (t < 10000000000) {
            t = t * 1000;
        }
        const date = new Date(t);
        const pad = (n: number) => n < 10 ? '0' + n : '' + n;
        const day = pad(date.getDate());
        const month = pad(date.getMonth() + 1);
        const year = date.getFullYear();
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    onClickRecordDetail(data) {
        console.log("record detail data", data);
        music.playMusic(music.Click);
        const betCenter = this.betRecordCenterPos || this.betRecord.position.clone();
        const detailCenter = this.recordDetailCenterPos || this.recordDetail.position.clone();
        const offset = this.slideOffset;

        this.recordDetail.setPosition(new Vec3(detailCenter.x + offset, detailCenter.y, 0));
        this.recordDetail.active = true;

        Tween.stopAllByTarget(this.betRecord);
        Tween.stopAllByTarget(this.recordDetail);

        tween(this.node)
            .parallel(
                tween(this.betRecord)
                    .to(0.3, { position: new Vec3(betCenter.x - offset, betCenter.y, 0) }, { easing: 'quadIn' })
                    .call(() => { this.betRecord.active = false; }),
                tween(this.recordDetail)
                    .to(0.3, { position: new Vec3(detailCenter.x, detailCenter.y, 0) }, { easing: 'quadIn' })
            )
            .start();

        find('RoundIDLabel', this.recordDetail).getComponent(Label).string = `${data.period}`;
        find('timeLabel', this.recordDetail).getComponent(Label).string = ` ${this.formatDate(data.betTime)}`;
        find("playerIDLayer", this.recordDetail).getComponent(Label).string = `${config.user_id}`;
        find('rightNode/profitLabel', this.recordDetail).getComponent(Label).string = this.convertCurrency(data.winlose);
        find('rightNode/profitLabel', this.recordDetail).getComponent(Label).color = data.winlose >= 0 ? new Color(88, 135, 56) : new Color(214, 53, 59);

        this.betListNode.children.forEach(child => child.active = false);
        let betTotal = 0;
        let winTotal = 0;
        data.wins.forEach(bet => {
            betTotal += Number(bet.bets);
            if (bet.amount) {
                winTotal += Number(bet.amount);
            }
            this.betListNode.children[bet.index - 1].active = true;
            find('betLabel', this.betListNode.children[bet.index - 1]).getComponent(Label).string = this.convertCurrency(bet.bets);
            find('winLabel', this.betListNode.children[bet.index - 1]).getComponent(Label).string = this.convertCurrency(bet.amount ? Number(bet.amount) : 0);
            find('oddsLabel', this.betListNode.children[bet.index - 1]).getComponent(Label).string = config.odds[bet.index - 1] ? `${config.odds[bet.index - 1] / 100}` : '';

        });
        find('rightNode/betLabel', this.recordDetail).getComponent(Label).string = this.convertCurrency(betTotal);
        find('rightNode/winLabel', this.recordDetail).getComponent(Label).string = this.convertCurrency(winTotal);
        find('resultLabel', this.recordDetail).getComponent(Label).string = `Win:  ${this.reslutMap[data.result]}`;

        let andar = find("frame/Andar/ABCard", this.recordDetail)
        andar.getComponent(ABCard).initCardValue(data.cardsA[data.cardsA.length - 1])

        let bahar = find("frame/Bahar/ABCard", this.recordDetail)
        if (data.cardsB.length > 0) {
            bahar.active = true;
            bahar.getComponent(ABCard).initCardValue(data.cardsB[data.cardsB.length - 1])
        } else {
            bahar.active = false;
        }
        let joker = find("frame/Joker/ABCard", this.recordDetail)
        joker.getComponent(ABCard).initCardValue(data.joker)

        find('Node/total/betTotalLabel', this.recordDetail).getComponent(Label).string = this.convertCurrency(betTotal);
        find('Node/total/winLabel', this.recordDetail).getComponent(Label).string = this.convertCurrency(winTotal);

    }
    convertCurrency(num) {
        return config.currencyStr + `${num / 100}`;
    }

    backToRecordList() {
        const betCenter = this.betRecordCenterPos || this.betRecord.position.clone();
        const detailCenter = this.recordDetailCenterPos || this.recordDetail.position.clone();
        const offset = this.slideOffset;

        this.betRecord.setPosition(new Vec3(betCenter.x - offset, betCenter.y, 0));
        this.betRecord.active = true;
        this.betRecord.setScale(v3(1, 1, 1))

        Tween.stopAllByTarget(this.betRecord);
        Tween.stopAllByTarget(this.recordDetail);

        tween(this.node)
            .parallel(
                tween(this.betRecord)
                    .to(0.3, { position: new Vec3(betCenter.x, betCenter.y, 0) }, { easing: 'quadIn' }),
                tween(this.recordDetail)
                    .to(0.3, { position: new Vec3(detailCenter.x + offset, detailCenter.y, 0) }, { easing: 'quadIn' })
                    .call(() => { this.recordDetail.active = false; })
            )
            .start();
    }


    onClickClose() {
        music.playMusic(music.Click);
        this.node.destroy();
    }
    onClickPrev() {
        music.playMusic(music.Click);
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageCount.string = `${this.currentPage}/${this.totalPage}`;
            AndarBahar_network.sendGameBetRecordReq(this.currentPage);
        }
    }

    onClickNext() {
        music.playMusic(music.Click);
        if (this.currentPage < this.totalPage) {
            this.currentPage++;
            this.pageCount.string = `${this.currentPage}/${this.totalPage}`;
            AndarBahar_network.sendGameBetRecordReq(this.currentPage);
        }
    }
}


