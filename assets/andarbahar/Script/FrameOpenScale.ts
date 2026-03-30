import { _decorator, Component, easing, tween, Tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FrameOpenScale')
export class FrameOpenScale extends Component {

    @property({ displayName: '开始缩放' })
    startScale = 0.2;

    @property({ displayName: '结束缩放' })
    endScale = 1;

    @property({ displayName: '放大过冲' })
    overshootScale = 1.05;

    @property({ displayName: '第一段时长' })
    openDuration = 0.18;

    @property({ displayName: '回弹时长' })
    settleDuration = 0.08;

    onEnable() {
        this.playOpenEffect();
    }

    onDisable() {
        Tween.stopAllByTarget(this.node);
    }

    playOpenEffect() {
        Tween.stopAllByTarget(this.node);

        this.node.setScale(this.startScale, this.startScale, 1);

        tween(this.node)
            .to(this.openDuration, { scale: new Vec3(this.overshootScale, this.overshootScale, 1) }, { easing: easing.sineIn })
            .to(this.settleDuration, { scale: new Vec3(this.endScale, this.endScale, 1) }, { easing: 'smooth' })
            .start();
    }
}