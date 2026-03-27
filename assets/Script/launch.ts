import { _decorator, assetManager, Canvas, Component, director, Node, Sprite, UITransform } from 'cc';
import { ResizeAdapter } from './ResizeAdapter';
const { ccclass, property } = _decorator;

@ccclass('launch')
export class launch extends Component {

    @property({ type: Sprite, displayName: '进度条' })
    ProgressBar: Sprite = null;
    @property({ type: Node, displayName: '背景图' })
    light: Node = null;

    private resizeAdapter = new ResizeAdapter(1080, 1920);

    protected onLoad(): void {
        if (this.resizeAdapter.isRealPCBrowser()) {
            this.resizeAdapter.initResizeListener(this.node.getComponent(Canvas));
        }
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
    update(deltaTime: number) {

    }

}


