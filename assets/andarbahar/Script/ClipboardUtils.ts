import { native, sys } from 'cc';

export class ClipboardUtils {

    public static copy(text: string) {

        if (sys.isNative && native && native.copyTextToClipboard) {
            native.copyTextToClipboard(text);
            console.log("原生平台复制成功");
            return;
        }

        this.copyToWeb(text);
    }

    private static copyToWeb(text: string) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                console.log("Web平台复制成功");
            }).catch(() => {
                this.fallbackWebCopy(text);
            });
        } else {
            this.fallbackWebCopy(text);
        }
    }

    private static fallbackWebCopy(text: string) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            console.log("Web平台降级方案复制成功");
        } catch (err) {
            console.error("所有复制渠道均失败", err);
        }
        document.body.removeChild(textArea);
    }
}