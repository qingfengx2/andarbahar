import { _decorator, Component, Node, tween, Vec3, UITransform, Widget, Tween, assetManager, Prefab, instantiate, director, sys } from 'cc';
const { ccclass, property } = _decorator;
import { AndarBahar_network } from './AndarBahar_network';
// import { history_panel } from './history_panel';
// import { bet_history } from './bet_history';
import { music } from './AndarbaharMusic';
import { AndarbaharManager } from './AndarbaharManager';
import { historyView } from './historyView';

import { betHistoryView } from './betHistoryView';
@ccclass('GameMenu')
export class GameMenu extends Component {

    @property({ type: Node, displayName: 'FrameSprite' })
    frameSprite: Node = null;


    private targetPosition: Vec3 = null;
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

    private cacheInitialLayout() {
        if (this.cached || !this.frameSprite) return;

        this.targetPosition = this.frameSprite.position.clone();

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


    playFadeIn() {
        if (!this.frameSprite) return;

        this.cacheInitialLayout();
        this.node.active = true;

        const widget = this.frameSprite.getComponent(Widget);
        const uiTransform = this.frameSprite.getComponent(UITransform);
        const width = uiTransform ? uiTransform.width : 0;

        if (widget && this.initIsAlignLeft) {
            Tween.stopAllByTarget(widget);
            this.restoreWidget(widget);
            widget.left = -width - 100;
            widget.updateAlignment();

            tween(widget)
                .to(0.3, { left: this.initLeft }, {
                    easing: 'quadIn',
                    onUpdate: () => widget.updateAlignment(),
                })
                .call(() => {
                    this.restoreWidget(widget);
                })
                .start();
            return;
        }
    }

    playFadeOut() {
        if (!this.frameSprite) return;

        this.cacheInitialLayout();

        const widget = this.frameSprite.getComponent(Widget);
        const uiTransform = this.frameSprite.getComponent(UITransform);
        const width = uiTransform ? uiTransform.width : 0;

        if (widget && this.initIsAlignLeft) {
            Tween.stopAllByTarget(widget);
            tween(widget)
                .to(0.3, { left: -width - 100 }, {
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

    onClickBettingRecord() {
        music.playMusic(music.Click);
        this.playFadeOut();
        AndarBahar_network.sendGameBetRecordReq(1);
    }

    openBetHistoryPanel(data) {
        AndarbaharManager.instance.openPanel('prefab/betHistoryView', (panelNode) => {
            const betHistoryPanel = panelNode.getComponent(betHistoryView);
            if (betHistoryPanel) {
                betHistoryPanel.initData(data);
            }
        });
    }
    openHistoryPanel(data) {
        AndarbaharManager.instance.openPanel('prefab/historyView', (panelNode) => {
            const historyPanel = panelNode.getComponent(historyView);
            if (historyPanel) {
                historyPanel.initData(data);
            }
        });
    }
    onClickHistory() {
        music.playMusic(music.Click);
        this.playFadeOut();
        AndarBahar_network.sendGameHistoryReq(1)
    }
    onClickHelp() {
        music.playMusic(music.Click);
        this.playFadeOut();
        AndarbaharManager.instance.openPanel('prefab/helpView');
    }
    onClickSettings() {
        music.playMusic(music.Click);
        this.playFadeOut();
        AndarbaharManager.instance.openPanel('prefab/settings');

    }
    onClickExit() {
        music.playMusic(music.Click);
        this.playFadeOut();
        AndarBahar_network.sendGameLeaveReq();
        if (sys.isMobile) {

            try { parent.postMessage("closeWebView", "*"); } catch (e) { }
            try { window["AndroidJS"].CloseWebView(); } catch (e) { }
            try {
                if (document)
                    document.location = "callbackcocos://exithall=1";
            } catch (e) { }
        }

    }

    onClickHowToPlay() {
        this.playFadeOut();
        AndarbaharManager.instance.openPanel('prefab/howtoplay');
    }

    update(deltaTime: number) {

    }
}


