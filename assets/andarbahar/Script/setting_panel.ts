import { _decorator, Component, Node, Toggle } from 'cc';
import { music } from './AndarbaharMusic';
const { ccclass, property } = _decorator;

@ccclass('setting_panel')
export class setting_panel extends Component {


    @property({ type: Toggle, displayName: 'sound' })
    sound: Toggle = null;

    @property({ type: Toggle, displayName: 'music' })
    music: Toggle = null;

    onEnable() {
        if (this.sound) {
            this.sound.isChecked = music.isSoundEnabled();
        }
        if (this.music) {
            this.music.isChecked = music.isMusicEnabled();
        }
    }
    onClickClose() {
        this.node.destroy();
    }

    onClickSound(toggle?: Toggle) {

        if (toggle) {
            this.sound.isChecked = toggle.isChecked;
        }
        const checked = this.sound.isChecked;
        music.playMusic(music.Click);
        music.setSoundEnabled(checked);
    }

    onClickMusic(toggle?: Toggle) {
        if (toggle) {
            this.music.isChecked = toggle.isChecked;
        }
        const checked = this.music.isChecked;

        music.setMusicEnabled(checked);
        music.playMusic(music.Click);
    }
}


