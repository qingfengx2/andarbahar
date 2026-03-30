import { _decorator, Component, find, instantiate, Label, Node, ScrollView } from 'cc';
import { music } from './AndarbaharMusic';
import * as awesomeRoot from '../../Script/proto/awesome.js';
import { ABPlayers } from './ABPlayers';
import { AndarBahar_network } from './AndarBahar_network';
const { ccclass, property } = _decorator;
;
@ccclass('gamePlayers')
export class gamePlayers extends Component {
    @property({ type: Node, displayName: 'Miluonaire' })
    Miluonaire: Node = null;

    @property({ type: Node, displayName: 'LuckyStar' })
    LuckyStar: Node = null;

    @property({ type: Node, displayName: 'item' })
    item: Node = null;

    @property({ type: ScrollView, displayName: 'playerList' })
    playerList: ScrollView = null;

    @property({ type: Label, displayName: 'pageCount' })
    pageCount: Label = null;

    @property({ type: Label, displayName: 'countLabel' })
    countLabel: Label = null;

    totalPage = 0;
    currentPage = 1;
    start() {

    }
    onClickPrev() {
        music.playMusic(music.Click);
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageCount.string = `${this.currentPage}/${this.totalPage}`;
            AndarBahar_network.sendGameGetPlayersReq(this.currentPage);
        }
    }

    onClickNext() {
        music.playMusic(music.Click);
        if (this.currentPage < this.totalPage) {
            this.currentPage++;
            this.pageCount.string = `${this.currentPage}/${this.totalPage}`;
            AndarBahar_network.sendGameGetPlayersReq(this.currentPage);
        }
    }
    onClickClose() {
        music.playMusic(music.Click);
        this.node.destroy();
    }

    initDataInView(data: awesomeRoot.com.cw.chess2.andarbahar.GameGetPlayersResp) {
        this.totalPage = Math.ceil(data.count / 6);
        this.currentPage = data.page;
        this.setTopPlayer(data.winUsers[0], this.Miluonaire);
        this.setTopPlayer(data.winUsers[1], this.LuckyStar, true);
        this.countLabel.string = `Total online players : ${data.count}`;
        this.playerList.content.removeAllChildren();
        data.users.forEach(element => {

            let newItem = instantiate(this.item);
            newItem.active = true;
            let userItemNode = find("user_item_5", newItem);
            if (userItemNode) {
                userItemNode.getComponent(ABPlayers).updateInfo(element);
            }
            this.playerList.content.addChild(newItem);
        });
        this.pageCount.string = `${this.currentPage}/${this.totalPage}`;
    }

    setTopPlayer(winUser: awesomeRoot.com.cw.chess2.platform.GameUser, nodes: Node, isLuckyStar = false) {

        const rightLabelPath = "right/label/Fm_name03@3x/label_round";
        const moneyLabelPath = "right/label-001/Fm_name03@3x/label_money";
        let userItemNode = find("user_item_5", nodes);
        if (userItemNode) {
            userItemNode.getComponent(ABPlayers).updateInfo(winUser);
        }
        const roundLabel = find(rightLabelPath, nodes)?.getComponent(Label);
        if (roundLabel) {
            roundLabel.string = isLuckyStar ? `${winUser.winRound}` : `${winUser.maxConWinRound}`;
        }
        const moneyLabel = find(moneyLabelPath, nodes)?.getComponent(Label);
        if (moneyLabel) {
            moneyLabel.string = `${winUser.winLoseCoin / 100}`;
        }
    }
}


