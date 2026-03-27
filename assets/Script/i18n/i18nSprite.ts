import { _decorator, CCString, Component, isValid, Sprite } from "cc";
import { i18nMgr } from "./i18nMgr";
const { ccclass, property, executeInEditMode, disallowMultiple, requireComponent, menu } = _decorator;

@ccclass
@executeInEditMode
@requireComponent(Sprite)
@disallowMultiple
@menu("多语言/i18nSprite")
export class i18nSprite extends Component {

    @property({ visible: false })
    private i18n_string: string = "";

    start() {
        i18nMgr._addOrDelSprite(this, true);
        this._resetValue();
    }

    @property({ type: CCString })
    get string() {
        return this.i18n_string;
    }

    set string(value: string) {
        this.i18n_string = value;

        let sprite = this.getComponent(Sprite);
        if (isValid(sprite)) {
            i18nMgr._getSprite(value, (spriteFrame) => {
                if (isValid(sprite)) {
                    sprite.spriteFrame = spriteFrame;
                }
            });
        }
    }

    _resetValue() {
        this.string = this.i18n_string;
    }

    onDestroy() {
        i18nMgr._addOrDelSprite(this, false);
    }
}
