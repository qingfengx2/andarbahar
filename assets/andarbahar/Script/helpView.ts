import { _decorator, Component, Label, Node } from 'cc';
import { music } from './AndarbaharMusic';

const { ccclass, property } = _decorator;

@ccclass('helpView')
export class helpView extends Component {

    onClickClose() {
        music.playMusic(music.Click);
        this.node.destroy();
    }
}


