import { _decorator, Component, Node, Sprite, tween, Vec3 } from 'cc';
import { AndarbaharManager } from './AndarbaharManager';
const { ccclass, property } = _decorator;

@ccclass('ABCard')
export class ABCard extends Component {
    @property(Node)
    node_face = null;
    @property(Node)
    node_color_x = null;

    @property(Node)
    node_color_d = null;

    @property(Node)
    node_value = null;

    @property(Node)
    node_back = null;

    @property(Node)
    node_mask = null;
    @property(Node)
    node_light = null;
    start() {

    }


    initCardValue(cardValue) {
        if (cardValue <= 0) {
            return;
        }
        let color = (cardValue & 0xf0) >> 4;
        let value = cardValue & 0x0f;
        let valueStr = "";
        if (color == 0 || color == 2) {
            valueStr = "n_r";
        } else if (color == 1 || color == 3) {
            valueStr = "n_b";
        } else if (color == 4) {
            return;
        }

        if (this.node_color_x) {
            AndarbaharManager.instance.loadSpriteFrame("load/cards/n_color_x" + color, this.node_color_x.getComponent(Sprite));
        }

        if (this.node_color_d) {
            if (value == 11 || value == 12 || value == 13) {
                AndarbaharManager.instance.loadSpriteFrame("load/cards/n_color_d" + color + "_" + value, this.node_color_d.getComponent(Sprite));
            } else {
                AndarbaharManager.instance.loadSpriteFrame("load/cards/n_color_d" + color, this.node_color_d.getComponent(Sprite));
            }
        }

        if (this.node_value) {
            AndarbaharManager.instance.loadSpriteFrame("load/cards/" + valueStr + value, this.node_value.getComponent(Sprite));
        }
    }
    showCard(bol) {
        this.node.active = true;
        if (this.node_face) {
            this.node_face.active = true;
        }
        if (this.node_back) {
            this.node_back.active = false;
        }
        if (bol) this.node_mask.active = true;
    }
    showBack() {
        this.node.active = true;

        // if(this.node_face){
        //     this.node_face.active = false;
        // }
        if (this.node_back) {
            this.node_back.active = true;
        }
        this.node_mask.active = false;
        if (this.node_light) this.node_light.active = false;
    }
    showLight() {
        if (this.node_light) this.node_light.active = true;
    }

    private startTurnAnim(time: number, callback?: Function) {
        this.showBack();
        if (this.node_face) {
            this.node_face.active = false;
        }

        const nodeBack = this.node_back;
        const nodeFace = this.node_face;
        tween(nodeBack)
            .delay(time)
            .to(time, {
                scale: new Vec3(0, 1, 1),
                eulerAngles: new Vec3(0, 20, 0)
            })
            .call(() => {
                nodeBack.active = false;
                nodeBack.eulerAngles = new Vec3(0, 0, 0);
                nodeBack.scale = new Vec3(1, 1, 1);

                nodeFace.active = true;
                nodeFace.scale = new Vec3(0, 1, 1);
                nodeFace.eulerAngles = new Vec3(0, -20, 0);

                tween(nodeFace)
                    .to(time, {
                        scale: new Vec3(1, 1, 1),
                        eulerAngles: new Vec3(0, 0, 0)
                    })
                    .call(() => {
                        // if (time === 0.13) music.playMusic(music.turn_card);
                        if (callback) callback();
                    })
                    .start();
            })
            .start();
    }
    turnCard3() {
        this.startTurnAnim(0.2);
    }

    turnCard(callback?: Function) {
        this.startTurnAnim(0.13, callback);
    }
}


