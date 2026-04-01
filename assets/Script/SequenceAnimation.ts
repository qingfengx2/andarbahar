import { _decorator, Component, Sprite, SpriteFrame, Animation, AnimationClip, animation, RealCurve } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SequenceAnimation')
export class SequenceAnimation extends Component {
    @property([SpriteFrame])
    public frames: SpriteFrame[] = []; // 在编辑器中拖入你的 WebP 或 PNG 序列图

    @property
    public fps: number = 25; // 帧率

    start() {
        this.playDynamicClip();
    }


    playDynamicClip() {
        const sprite = this.getComponent(Sprite);
        if (!sprite) {
            return;
        }

        const anim = this.getComponent(Animation) || this.addComponent(Animation);

        const clip = new AnimationClip();
        clip.name = 'auto_play_anim';
        clip.duration = this.frames.length / this.fps;
        clip.wrapMode = AnimationClip.WrapMode.Loop;

        const track = new animation.ObjectTrack();
        track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame');
        const curve = track.channel.curve;
        this.frames.forEach((frame, index) => {
            curve.addKeyFrame(index / this.fps, frame);
        });
        clip.addTrack(track);
        anim.addClip(clip);
        anim.defaultClip = clip;
        anim.play(clip.name);

    }
}