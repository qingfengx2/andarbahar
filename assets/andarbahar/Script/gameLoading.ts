import { _decorator, Component, game, Node, Tween, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameLoading')
export class gameLoading extends Component {
    @property({ type: Node, displayName: 'LoadingSprite' })
    LoadingSprite: Node = null;

    time = null;
    loadingTween: Tween<Node> = null;
    startLoading() {
        this.node.active = true;

        if (this.LoadingSprite != null) {
            this.loadingTween = tween(this.LoadingSprite)
                .repeatForever(
                    tween()
                        .by(2.0, { eulerAngles: new Vec3(0, 0, 360) })
                )
                .start();
        }

    }
    stopLoading() {
        if (this.loadingTween) {
            this.loadingTween.stop();
            this.loadingTween = null;
        }
        this.node.active = false;
    }

    onEnable() {
        this.time = setTimeout(function () {
            this.stopLoading();
        }.bind(this), 8000);
    }

    onDisable() {
        if (this.time) clearTimeout(this.time);
        if (this.loadingTween) {
            this.loadingTween.stop();
            this.loadingTween = null;
        }
    }
}


