import { _decorator, Button, Color, Component, find, instantiate, Label, Node, ScrollView, tween, Tween, v3, Vec3 } from 'cc';
import { AndarBahar_network } from './AndarBahar_network';
import { config } from '../../Script/util/config';
import { ABCard } from './ABCard';
import { music } from './AndarbaharMusic';
import { ClipboardUtils } from './ClipboardUtils';
const { ccclass, property } = _decorator;

@ccclass('roundDetails')
export class roundDetails extends Component {

    @property({ type: Node, displayName: 'BaharNode' })
    BaharNode: Node = null;
    @property({ type: Node, displayName: 'AndarNode' })
    AndarNode: Node = null;
    @property({ type: Node, displayName: 'jokerNode' })
    jokerNode: Node = null;

    @property({ type: Label, displayName: 'title' })
    title: Label = null;

    @property({ type: Node, displayName: 'BaharCards' })
    BaharCards: Node = null;

    @property({ type: Node, displayName: 'AndarCards' })
    AndarCards: Node = null;

    initDataInView(data) {
        this.title.string = `${data.period}`;


        find("ABCard", this.AndarNode).getComponent(ABCard).initCardValue(data.cardsA[data.cardsA.length - 1]);
        find("CardsLabel", this.AndarNode).getComponent(Label).string = "Cards:" + data.cardsA.length;
        find("Label", this.AndarNode).getComponent(Label).string = data.cardsA.length > data.cardsB.length ? "Andar Win" : "Andar";


        if (data.cardsB.length > 0) {
            find("ABCard", this.BaharNode).getComponent(ABCard).initCardValue(data.cardsB[data.cardsB.length - 1]);
            find("CardsLabel", this.BaharNode).getComponent(Label).string = "Cards:" + data.cardsB.length;
            find("Label", this.BaharNode).getComponent(Label).string = data.cardsB.length >= data.cardsA.length ? "Bahar Win" : "Bahar";
        } else {
            find("ABCard", this.BaharNode).active = false;
        }



        find("ABCard", this.jokerNode).getComponent(ABCard).initCardValue(data.joker);
        find("CardsLabel", this.jokerNode).getComponent(Label).string = "Cards:" + (data.cardsA.length + data.cardsB.length);



        data.cardsA.forEach((card, index) => {
            let cardNode = find(`ABCard${index + 1}`, this.AndarCards);
            cardNode.active = true;
            cardNode.getComponent(ABCard).initCardValue(card);
        });
        data.cardsB.forEach((card, index) => {
            let cardNode = find(`ABCard${index + 1}`, this.BaharCards);
            cardNode.active = true;
            cardNode.getComponent(ABCard).initCardValue(card);
        });


    }

    onClickClose() {
        music.playMusic(music.Click);
        this.node.destroy();
    }

}


