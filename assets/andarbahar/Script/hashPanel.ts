import { _decorator, assetManager, Component, director, instantiate, Label, Node, Prefab, tween, Tween, UITransform, Vec3, Widget } from 'cc';
import { ClipboardUtils } from './ClipboardUtils';
import { AndarbaharManager } from './AndarbaharManager';
const { ccclass, property } = _decorator;

@ccclass('hashPanel')
export class hashPanel extends Component {

    @property({ type: Node, displayName: '规则说明' })
    frameSprite: Node = null;


    @property({ type: Label, displayName: 'server_Seed' })
    server_Seed: Label = null;

    @property({ type: Label, displayName: 'result' })
    result: Label = null;

    @property({ type: Label, displayName: 'Server Seed SHA512 Hash' })
    server_Seed_SHA512_Hash: Label = null;

    @property({ type: Label, displayName: 'Combined SHA512 Hash' })
    combined_SHA512_Hash: Label = null;

    private cached = false;
    private initLeft = 0;
    private initTop = 0;
    private initRight = 0;
    private initBottom = 0;
    private initIsAlignLeft = false;
    private initIsAlignTop = false;
    private initIsAlignRight = false;
    private initIsAlignBottom = false;

    start() {

    }

    onEnable() {
        this.playFadeIn();
    }

    private cacheInitialLayout() {
        if (this.cached || !this.frameSprite) return;


        const widget = this.frameSprite.getComponent(Widget);
        if (widget) {
            this.initLeft = widget.left;
            this.initTop = widget.top;
            this.initRight = widget.right;
            this.initBottom = widget.bottom;
            this.initIsAlignLeft = widget.isAlignLeft;
            this.initIsAlignTop = widget.isAlignTop;
            this.initIsAlignRight = widget.isAlignRight;
            this.initIsAlignBottom = widget.isAlignBottom;
        }
        this.cached = true;
    }

    private restoreWidget(widget: Widget) {
        widget.isAlignLeft = this.initIsAlignLeft;
        widget.isAlignTop = this.initIsAlignTop;
        widget.isAlignRight = this.initIsAlignRight;
        widget.isAlignBottom = this.initIsAlignBottom;
        widget.left = this.initLeft;
        widget.top = this.initTop;
        widget.right = this.initRight;
        widget.bottom = this.initBottom;
        widget.updateAlignment();
    }
    resetLabel() {
        this.server_Seed.string = "";
        this.result.string = "";
    }
    setData(secretKey = "", result = "", encryptKey = "", encryptResult = "") {
        this.server_Seed.string = secretKey;
        this.result.string = result;
        this.server_Seed_SHA512_Hash.string = encryptKey;
        this.combined_SHA512_Hash.string = encryptResult;
    }


    onClickHelp() {
        this.playFadeOut();
        AndarbaharManager.instance.openPanel('prefab/helpView');
    }
    playFadeIn(secretKey = "", result = "", encryptKey = "", encryptResult = "") {
        if (!this.frameSprite) return;
        this.cacheInitialLayout();

        const widget = this.frameSprite.getComponent(Widget);
        const uiTransform = this.frameSprite.getComponent(UITransform);
        const height = uiTransform ? uiTransform.height : 0;

        if (widget && this.initIsAlignTop) {
            Tween.stopAllByTarget(widget);
            this.restoreWidget(widget);
            widget.top = -height - 100;
            widget.updateAlignment();
            this.node.active = true;
            this.server_Seed.string = secretKey;
            this.result.string = result;
            this.server_Seed_SHA512_Hash.string = encryptKey;
            this.combined_SHA512_Hash.string = encryptResult;
            tween(widget)
                .to(0.3, { top: this.initTop }, {
                    easing: 'quadIn',
                    onUpdate: () => widget.updateAlignment(),
                })
                .call(() => this.restoreWidget(widget))
                .start();
            return;
        }
    }

    playFadeOut() {
        if (!this.frameSprite) {
            this.node.active = false;

            return;
        }

        this.cacheInitialLayout();

        const widget = this.frameSprite.getComponent(Widget);
        const uiTransform = this.frameSprite.getComponent(UITransform);
        const height = uiTransform ? uiTransform.height : 0;

        if (widget && this.initIsAlignTop) {
            Tween.stopAllByTarget(widget);
            tween(widget)
                .to(0.3, { top: -height - 100 }, {
                    easing: 'quadIn',
                    onUpdate: () => widget.updateAlignment(),
                })
                .call(() => {
                    this.node.active = false;
                    this.restoreWidget(widget);
                })
                .start();
            return;
        }
    }

    onClickClose() {
        this.playFadeOut();
    }

    onClickCopyServerSeed() {
        if (this.server_Seed != null) {
            ClipboardUtils.copy(this.server_Seed.string);
        }
    }

    onClickCopyResult() {
        if (this.result != null) {
            ClipboardUtils.copy(this.result.string);
        }
    }

    onClickCopyServerSeedSHA512Hash() {
        if (this.server_Seed_SHA512_Hash != null) {
            ClipboardUtils.copy(this.server_Seed_SHA512_Hash.string);
        }
    }

    onClickCopyCombinedSHA512Hash() {
        if (this.combined_SHA512_Hash != null) {
            ClipboardUtils.copy(this.combined_SHA512_Hash.string);
        }
    }

    update(deltaTime: number) {

    }
}


