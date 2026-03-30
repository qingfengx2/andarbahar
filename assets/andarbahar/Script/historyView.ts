import { _decorator, Button, Component, find, instantiate, Label, Node, ScrollView } from 'cc';
import { AndarBahar_network } from './AndarBahar_network';
import { ABCard } from './ABCard';
import { music } from './AndarbaharMusic';
import { ClipboardUtils } from './ClipboardUtils';
import { AndarbaharManager } from './AndarbaharManager';
import { roundDetails } from './roundDetails';
const { ccclass, property } = _decorator;

@ccclass('historyView')
export class historyView extends Component {
    @property({ type: Node, displayName: 'item' })
    item: Node = null;

    @property({ type: Label, displayName: 'pageCount' })
    pageCount: Label = null;

    @property({ type: ScrollView, displayName: 'ScrollView' })
    scrollView: ScrollView = null;

    totalPage = 0;
    currentPage = 1;
    recordsData = null;
    start() {
        this.item.active = false;
    }
    initData(data) {
        this.pageCount.string = `${data.page}/${data.PageCount}`;
        this.totalPage = data.PageCount;
        this.currentPage = data.page;
        this.recordsData = data.records;
        this.scrollView.content.removeAllChildren();
        data.records.forEach(element => {
            let itemNode = instantiate(this.item);
            itemNode.active = true;
            this.setDataItem(itemNode, element);
            this.scrollView.content.addChild(itemNode);
        });
    }
    setDataItem(itemNode: Node, data) {
        let LabelNumber = find("ListItem/LabelNumber", itemNode).getComponent(Label);
        LabelNumber.string = data.period;

        let andarNode = find("ListItem/box_blue@3x", itemNode);
        find("ABCard", andarNode).getComponent(ABCard).initCardValue(data.cardsA[data.cardsA.length - 1]);
        find("CardsLabel", andarNode).getComponent(Label).string = "Cards:" + data.cardsA.length;
        find("Label", andarNode).getComponent(Label).string = data.cardsA.length > data.cardsB.length ? "Andar Win" : "Andar";


        let baharNode = find("ListItem/box_red@3x", itemNode);
        if (data.cardsB.length > 0) {
            find("ABCard", baharNode).getComponent(ABCard).initCardValue(data.cardsB[data.cardsB.length - 1]);
            find("CardsLabel", baharNode).getComponent(Label).string = "Cards:" + data.cardsB.length;
            find("Label", baharNode).getComponent(Label).string = data.cardsB.length >= data.cardsA.length ? "Bahar Win" : "Bahar";
        } else {
            find("ABCard", baharNode).active = false;
        }
        let jokerNode = find("ListItem/box_joker", itemNode);
        find("ABCard", jokerNode).getComponent(ABCard).initCardValue(data.joker);
        find("CardsLabel", jokerNode).getComponent(Label).string = "Cards:" + (data.cardsA.length + data.cardsB.length);


        let rightArrow = find("ListItem/rightArrow", itemNode).getComponent(Button);
        if (rightArrow) {
            rightArrow.node.on(Button.EventType.CLICK, () => {
                // let scaleY = rightArrow.node.scale.y;
                // console.log("scaleY", scaleY);
                // rightArrow.node.scale = new Node().scale.set(1, scaleY > 0 ? -1 : 1, 1);
                this.onClickHashDetail(itemNode, data);
            }, this);
        }

        let detailButton = find("ListItem/DetailButton", itemNode).getComponent(Button);
        if (detailButton) {
            detailButton.node.on(Button.EventType.CLICK, () => {
                AndarbaharManager.instance.openPanel('prefab/RoundDetailsView', (panelNode) => {
                    const roundDetailsPanel = panelNode.getComponent(roundDetails);
                    if (roundDetailsPanel) {
                        roundDetailsPanel.initDataInView(data);
                    }

                })
                    ;
            }, this);
        }

    }

    onClickHashDetail(itemNode: Node, data) {
        music.playMusic(music.Click);
        let HashNode = itemNode.getChildByName("HashNode");
        HashNode.active = !HashNode.active;
        let secretKey = find("Sprite/Label", HashNode).getComponent(Label);
        secretKey.string = `${data.secretKey}`;
        let btnCopy = find("Sprite/btnCopy", HashNode).getComponent(Button);
        btnCopy.node.off(Button.EventType.CLICK);
        btnCopy.node.on(Button.EventType.CLICK, () => {
            ClipboardUtils.copy(data.secretKey);
        }, this);


        let result = find("Sprite-001/Label", HashNode).getComponent(Label);


        result.string = data.resultOriStr
        btnCopy = find("Sprite-001/btnCopy", HashNode).getComponent(Button);
        btnCopy.node.off(Button.EventType.CLICK);
        btnCopy.node.on(Button.EventType.CLICK, () => {
            ClipboardUtils.copy(result.string);
        }, this);


        let encryptKey = find("Sprite-002/Label", HashNode).getComponent(Label);
        encryptKey.string = `${data.encryptKey}`;
        btnCopy = find("Sprite-002/btnCopy", HashNode).getComponent(Button);
        btnCopy.node.off(Button.EventType.CLICK);
        btnCopy.node.on(Button.EventType.CLICK, () => {
            ClipboardUtils.copy(data.encryptKey);
        }, this);

        let encryptResult = find("Sprite-003/Label", HashNode).getComponent(Label);
        encryptResult.string = `${data.encryptResult}`;
        btnCopy = find("Sprite-003/btnCopy", HashNode).getComponent(Button);
        btnCopy.node.off(Button.EventType.CLICK);
        btnCopy.node.on(Button.EventType.CLICK, () => {
            ClipboardUtils.copy(data.encryptResult);
        }, this);

    }

    update(deltaTime: number) {

    }
    onClickPrev() {

        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageCount.string = `${this.currentPage}/${this.totalPage}`;
            AndarBahar_network.sendGameHistoryReq(this.currentPage);
        }
    }

    onClickNext() {

        if (this.currentPage < this.totalPage) {

            this.currentPage++;
            this.pageCount.string = `${this.currentPage}/${this.totalPage}`;
            AndarBahar_network.sendGameHistoryReq(this.currentPage);
        }
    }
    onClickClose() {

        this.node.destroy();
    }
}


