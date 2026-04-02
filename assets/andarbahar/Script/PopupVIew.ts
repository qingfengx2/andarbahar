import { _decorator, Component, Label, Node, sys } from 'cc';
const { ccclass, property } = _decorator;
const STATUS_MSG = {
    0: "Success",
    100: "Cannot leave until the current betting round ends.",
    101: "You have been removed for inactivity (5 rounds without betting).",
    102: "Server maintenance in progress.",
    999: "This account has been logged in another device,Click to re-login!",
    1000: "Cann't connect the server,Click to re-login!"
}
@ccclass('PopupVIew')
export class PopupVIew extends Component {

    @property({ type: Label, displayName: 'contentLabel' })
    contentLabel: Label = null;
    _callback = null
    initDataInView(id: number, callback = null) {
        let content = STATUS_MSG[id] || "Unknown error.";
        this.contentLabel.string = content;
        this._callback = callback
    }

    onClickClose() {

        if (this._callback) {
            this._callback()
            this.node.destroy();
            return
        }
        this.node.destroy();
        if (sys.isMobile) {
            try { parent.postMessage("closeWebView", "*"); } catch (e) { }
            try { window["AndroidJS"].CloseWebView(); } catch (e) { }
            try {
                if (document)
                    document.location = "callbackcocos://exithall=1";
            } catch (e) { }
        }

    }

}


