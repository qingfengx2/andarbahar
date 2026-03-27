import { _decorator, Component, Node, Canvas, sys, view, Widget, ResolutionPolicy } from 'cc';
import { DEBUG, PREVIEW } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('ScreenAdapter')
export class ScreenAdapter extends Component {
    onLoad() {
        this.updateSizeFit();
        // 监听浏览器窗口大小变化
        view.on('window-resize', this.updateSizeFit, this);
    }

    updateSizeFit() {
        // if(PREVIEW) return;
        // 设置手机端和pc端canvas的显示位置，在pc是横屏的，但是canvas应该是中间的手机位置。所以要左右减 
        //  实际屏幕宽度的一半减去手机屏宽的一半，
        const design = view.getDesignResolutionSize(); // 获取设计分辨率
        const widget = this.node.getComponent(Widget);
        if(!sys.isMobile){
            view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
            const rect = view.getVisibleSize() //适配策略不一致获取的大小不一致，所以先调整适配高度
            const half = (rect.width - design.width) / 2
            widget.left = half;
            widget.right = half;
        }
        else if(sys.isBrowser){
            // 移动端保持竖屏适配
            widget.left = 0;
            widget.right = 0;
            widget.top = 0;
            widget.bottom = 0;
            widget.updateAlignment();
            view.setDesignResolutionSize(design.width, design.height, ResolutionPolicy.FIXED_WIDTH);
        }
    }
}