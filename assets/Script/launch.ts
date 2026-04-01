import { _decorator, assetManager, Canvas, Component, director, Node, Sprite, UITransform, view } from 'cc';
import { ResizeAdapter } from './ResizeAdapter';
const { ccclass, property } = _decorator;

@ccclass('launch')
export class launch extends Component {

    @property({ type: Sprite, displayName: '进度条' })
    ProgressBar: Sprite = null;
    @property({ type: Node, displayName: 'light' })
    light: Node = null;

    @property({ type: Node, displayName: '背景图' })
    bg: Node = null;
    private resizeAdapter = new ResizeAdapter(1080, 1920);

    protected onLoad(): void {
        if (this.resizeAdapter.isRealPCBrowser()) {
            this.resizeAdapter.initResizeListener(this.node.getComponent(Canvas));
        }
        this.scaleVideoToMaxResolution();
        let wid = this.ProgressBar.node.getComponent(UITransform).width;
        assetManager.loadBundle("andarbahar", (err, bundle) => {
            bundle.loadScene("AndarBaharScene", (finish, total) => {
                let progress = finish / total;
                this.light.active = progress > 0 && progress < 1;
                this.light.setPosition(wid * progress, this.light.getPosition().y, this.light.getPosition().z);
                this.ProgressBar.fillRange = progress;
            }, function (err, scene) {
                director.runScene(scene);
            });
        });
    }
    private scaleVideoToMaxResolution(): void {
        const bgTransform = this.bg.getComponent(UITransform);
        if (!bgTransform) {
            return;
        }
        const bgWidth = bgTransform.width;
        const bgHeight = bgTransform.height;
        if (bgWidth <= 0 || bgHeight <= 0) {
            return;
        }

        const visibleSize = view.getVisibleSize();
        const scaleX = visibleSize.width / bgWidth;
        const scaleY = visibleSize.height / bgHeight;
        const maxScale = Math.max(scaleX, scaleY);
        if (this.resizeAdapter.isRealPCBrowser()) {
            this.bg.setScale(scaleY, scaleY, 1);
        } else {
            this.bg.setScale(maxScale, maxScale, 1);
        }

    }

}


