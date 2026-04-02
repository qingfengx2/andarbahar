import { _decorator, assetManager, AssetManager, Prefab, director, instantiate, Node, Sprite, SpriteFrame, Vec3, tween, isValid } from 'cc';
import { music } from './AndarbaharMusic';
import { PopupVIew } from './PopupVIew';


export class AndarbaharManager {
    private static _instance: AndarbaharManager = null;
    private bundleName: string = 'andarbahar';
    private bundle: AssetManager.Bundle = null;

    public static get instance(): AndarbaharManager {
        if (!this._instance) {
            this._instance = new AndarbaharManager();
        }
        return this._instance;
    }


    private getBundle(callback: (bundle: AssetManager.Bundle) => void) {
        if (this.bundle) {
            callback(this.bundle);
            return;
        }
        assetManager.loadBundle(this.bundleName, (err, bundle) => {
            if (err || !bundle) {
                console.error(`加载 ${this.bundleName} bundle 失败:`, err);
                return;
            }
            this.bundle = bundle;
            callback(bundle);
        });
    }

    public openPanel(panelName: string, callback?: (node: Node) => void) {
        this.getBundle((bundle) => {
            bundle.load(panelName, Prefab, (err, prefab) => {
                if (err) {
                    console.error(`加载 ${panelName} 预制件失败:`, err);
                    return;
                }

                const canvas = director.getScene().getChildByName('Canvas');
                if (!canvas) {
                    console.error("未找到场景中的 Canvas 节点");
                    return;
                }

                const prefabName = prefab?.data?.name || panelName;
                const existingNode = canvas.getChildByName(prefabName);
                if (existingNode) {
                    callback?.(existingNode);
                    return;
                }

                const panelNode = instantiate(prefab);
                canvas.addChild(panelNode);
                callback?.(panelNode);
            });
        });
    }

    public showPopupView(code) {
        this.openPanel('prefab/PopupVIew', (panelNode) => {
            const round_Details = panelNode.getComponent(PopupVIew);
            if (round_Details) {
                round_Details.initDataInView(code);
            }
        });
    }
    public loadAndAnimateDot(
        spriteStr: string,
        dot: Node,
        sp: Sprite,
        endPos: Vec3,
        endDot: Node,
        callback?: Function
    ) {
        this.getBundle((bundle) => {

            const path = `load/ui/${spriteStr}/spriteFrame`;
            bundle.load(path, SpriteFrame, (err, spriteFrame) => {
                if (err) {
                    console.error(`加载 SpriteFrame 失败: ${path}`, err);
                    return;
                }

                if (!isValid(dot)) return;

                sp.spriteFrame = spriteFrame;

                const duration = 1.0;
                tween(dot)
                    .to(duration, { position: new Vec3(endPos.x, endPos.y, dot.position.z) })
                    .call(() => {
                        if (isValid(endDot)) endDot.active = true;
                        if (isValid(dot)) dot.removeFromParent();


                        if (typeof music !== 'undefined') {
                            music.playMusic(music.light_fly);
                        }
                    })
                    .start();

                callback?.();
            });
        });
    }


    public loadSpriteFrame(path: string, sprite: Sprite, callback?: Function) {
        this.getBundle((bundle) => {
            const fullPath = `${path}/spriteFrame`;
            bundle.load(fullPath, SpriteFrame, (err, spriteFrame) => {
                if (err) {
                    console.error(`加载图片失败: ${fullPath}`, err.message || err);
                    return;
                }
                if (sprite && isValid(sprite)) {
                    sprite.spriteFrame = spriteFrame;
                }
                if (callback) callback();

            });
        });
    }
}