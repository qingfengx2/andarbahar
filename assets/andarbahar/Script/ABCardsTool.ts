import { _decorator, Button, Component, Label, Node, sp } from 'cc';
import awesome from '../../Script/proto/awesome';
import { ABCard } from './ABCard';
const { ccclass, property } = _decorator;

@ccclass('ABCardsTool')
export class ABCardsTool extends Component {


    @property([Node])
    andarCards = [];

    @property([Node])
    baharCards = [];

    @property(Button)
    btnAndar = null;
    @property(Button)
    btnBahar = null;

    @property(Node)
    andar_more_node = null;
    @property(Node)
    bahar_more_node = null;

    @property(Node)
    andar_more_cards = null;
    @property(Node)
    bahar_more_cards = null;

    @property(Node)
    bahar_node = null;
    @property(Node)
    andar_node = null;




    andarArr = [];
    baharArr = [];
    cardsA = [];
    cardsB = [];
    nums = 0;
    protected onLoad(): void {
        this.btnAndar.node.on(Button.EventType.CLICK, () => {
            this.andar_more_node.active = !this.andar_more_node.active;
        }, this);
        this.btnBahar.node.on(Button.EventType.CLICK, () => {
            this.bahar_more_node.active = !this.bahar_more_node.active;
        }, this);
    }

    hideAllCards() {
        let card;
        // for (let i = 0; i < 10; i++) {
        //     card = this.andarCards[i];
        //     card.getComponent(ABCard).showBack();
        //     card.active = false;

        //     card = this.baharCards[i];
        //     card.getComponent(ABCard).showBack();
        //     card.active = false;
        // }

        for (let i = 0; i < 10; i++) {
            card = this.andarCards[i];
            let spine = card.getComponent(sp.Skeleton);
            spine.setAnimation(0, "poker_L_A", false);
            card.active = false;

            card = this.baharCards[i];
            spine = card.getComponent(sp.Skeleton);
            spine.setAnimation(0, "poker_R_A", false);
            card.active = false;
        }

        if (this.andar_more_cards) {
            this.andarArr = this.andar_more_cards.children;
            this.baharArr = this.bahar_more_cards.children;
            for (let i = 0; i < this.andarArr.length; i++) {
                this.andarArr[i].active = false;
                this.baharArr[i].active = false;
            }
            this.andar_more_node.active = false;
            this.bahar_more_node.active = false;
        }
    }
    initCardsData(cardsInfo: awesome.com.cw.chess2.andarbahar.GameResultResp) {
        this.cardsA = cardsInfo.cardsA;     //所有Andar 得牌
        this.cardsB = cardsInfo.cardsB;     //所有Bahar 得牌
        this.nums = cardsInfo.nums;
    }
    cardMoreByNum(type, num, cardVal) {
        let arr = type == 1 ? this.andarArr : this.baharArr;
        let card = arr[num];
        if (card) {
            card.getComponent(ABCard).initCardValue(cardVal);
            card.getComponent(ABCard).showCard();
        }
    }

    updateCardsByNum(type, index) {
        let cards = type == 1 ? this.andarCards : this.baharCards;
        let start = index <= 10 ? 10 - index : 0;
        let end = 10;

        let cardsValue;

        if (index <= 10) {
            cardsValue = type == 1 ? this.cardsA.slice(0, index + 1) : this.cardsB.slice(0, index + 1);
        } else {
            cardsValue = type == 1 ? this.cardsA.slice(index - 10, index + 1) : this.cardsB.slice(index - 10, index + 1);
        }
        const side = (type === 1) ? 'L' : 'R';
        let node;
        let cardVal;
        let n = 0;
        for (let i = start - 1; i < end; i++) {
            node = cards[i];
            if (node) {
                node.active = true;
                cardVal = cardsValue[n];

                let color = (cardVal & 0xf0) >> 4;
                color++;
                let value = cardVal & 0x0f;
                node.getComponent(sp.Skeleton).addAnimation(0, `poker_${side}_B`, false);
                node.getComponent(sp.Skeleton).setSkin(`${color * 100 + value}`);
            }

            // if (node) {
            //     cardVal = cardsValue[n];
            //     node = node.getComponent("ABCard");
            //     node.initCardValue(cardVal);
            //     node.showCard(true);
            // }
            n++;
        }
    }
    playTurnCardAnim(callback, result_node) {
        let self = this;

        let lblNums = result_node.getChildByName("lblNums").getComponent(Label);
        let animFunc = function (index) {
            if (index < self.nums) {
                let node;       //牌质体
                let cardVal;    //牌值
                if (index % 2 == 0) {
                    node = self.andarCards[9];  //A牌
                    node.active = true
                    cardVal = self.cardsA[index / 2];
                    self.cardMoreByNum(1, index / 2, cardVal);
                    // self.updateCardsVal(1, index / 2)
                    self.updateCardsByNum(1, index / 2);
                    let color = (cardVal & 0xf0) >> 4;
                    color++;
                    let value = cardVal & 0x0f;
                    node.getComponent(sp.Skeleton).setSkin(`${color * 100 + value}`);
                    node.getComponent(sp.Skeleton).setSlotsToSetupPose();
                    node.getComponent(sp.Skeleton).setAnimation(0, `poker_L00`, false);

                } else {
                    node = self.baharCards[9];   //B牌
                    node.active = true
                    cardVal = self.cardsB[(index - 1) / 2];
                    self.cardMoreByNum(2, (index - 1) / 2, cardVal);
                    // self.updateCardsVal(2, (index - 1) / 2)
                    self.updateCardsByNum(2, (index - 1) / 2);
                    let color = (cardVal & 0xf0) >> 4;
                    color++;
                    let value = cardVal & 0x0f;
                    node.getComponent(sp.Skeleton).setSkin(`${color * 100 + value}`);
                    node.getComponent(sp.Skeleton).setSlotsToSetupPose();
                    node.getComponent(sp.Skeleton).setAnimation(0, `poker_R00`, false);
                }
                index += 1;
                setTimeout(() => {
                    animFunc(index);
                    if (index == self.nums) {
                        let slde = ((self.nums - 1) % 2 == 0) ? "L" : "R";
                        node.getComponent(sp.Skeleton).addAnimation(0, `poker_${slde}02`, true);
                    }
                }, 260);
            } else {
                setTimeout(() => {
                    // 翻牌翻完了
                    if (callback) {
                        callback();
                    }

                }, 600);


            }
        }
        animFunc(0);
    }
    updateCardsVal(type, index) {
        let cards = type == 1 ? this.andarCards : this.baharCards;
        let start = index <= 10 ? 10 - index : 0;
        let end = 10;

        let cardsValue;

        if (index <= 10) {
            cardsValue = type == 1 ? this.cardsA.slice(0, index + 1) : this.cardsB.slice(0, index + 1);
        } else {
            cardsValue = type == 1 ? this.cardsA.slice(index - 10, index + 1) : this.cardsB.slice(index - 10, index + 1);
        }

        let node;
        let cardVal;
        let n = 0;
        for (let i = start - 1; i < end; i++) {
            node = cards[i];
            if (node) {
                cardVal = cardsValue[n];
                node = node.getComponent(ABCard);
                node.initCardValue(cardVal);
                node.showCard(true);
            }
            n++;
        }
    }
}


