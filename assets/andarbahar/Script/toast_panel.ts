import { _decorator, Component, isValid, Label, Node, tween, Tween, UIOpacity, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('toast_panel')
export class toast_panel extends Component {
    @property(Label)
    public label_content: Label = null;

    @property(Node)
    public node_transform_root: Node = null;

    @property
    public isShow = false;

    finishCallback: Function | null = null;
    curTimeoutIdx: ReturnType<typeof setTimeout> | null = null;

    toast(message: any, duration: any = null, finishCallback: any = null) {
        if (!message) {
            return;
        }
        if (!isValid(this.node)) {
            return;
        }

        const uiOpacity = this.getOrAddOpacity();
        this.label_content.string = message;


        if (this.curTimeoutIdx) {
            clearTimeout(this.curTimeoutIdx);
            this.curTimeoutIdx = null;
        }


        Tween.stopAllByTarget(this.node_transform_root);
        Tween.stopAllByTarget(uiOpacity);
        Tween.stopAllByTarget(this.node);

        this.isShow = true;
        this.finishCallback = finishCallback;
        this.node_transform_root.setScale(0.1, 0.1, 1);
        this.node_transform_root.setPosition(0, 0, 0);
        uiOpacity.opacity = 0;
        this.node.active = true;

        tween(this.node)
            .parallel(
                tween(this.node_transform_root)
                    .to(0.25, { scale: new Vec3(1, 1, 1) }, { easing: 'backOut' }),
                tween(uiOpacity)
                    .to(0.25, { opacity: 255 })
            )
            .start();
        this.curTimeoutIdx = setTimeout(this.dismiss.bind(this), duration ? duration : 2000);
    }

    dismiss() {
        if (!isValid(this.node)) return;

        const uiOpacity = this.getOrAddOpacity();
        this.isShow = false;

        if (this.curTimeoutIdx) {
            clearTimeout(this.curTimeoutIdx);
            this.curTimeoutIdx = null;
        }

        const callback = this.finishCallback;
        this.finishCallback = null;

        Tween.stopAllByTarget(this.node_transform_root);
        Tween.stopAllByTarget(uiOpacity);
        Tween.stopAllByTarget(this.node);
        tween(this.node)
            .parallel(
                tween(this.node_transform_root)
                    .to(0.25, { scale: new Vec3(0.1, 0.1, 1) }),
                tween(uiOpacity)
                    .to(0.25, { opacity: 0 })
            )
            .call(() => {
                if (callback) {
                    callback();
                }
                if (isValid(this.node)) {
                    this.node.active = false
                }
            })
            .start();
    }

    onDestroy() {
        this.isShow = false;
        if (this.curTimeoutIdx) {
            clearTimeout(this.curTimeoutIdx);
            this.curTimeoutIdx = null;
        }
    }

    private getOrAddOpacity(): UIOpacity {
        let uiOpacity = this.node_transform_root.getComponent(UIOpacity);
        if (!uiOpacity) {
            uiOpacity = this.node_transform_root.addComponent(UIOpacity);
        }
        return uiOpacity;
    }

} 
