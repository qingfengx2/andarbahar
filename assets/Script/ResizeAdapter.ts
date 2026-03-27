import { Canvas, ResolutionPolicy, sys, view } from 'cc';
import { EDITOR, PREVIEW } from 'cc/env';

export class ResizeAdapter {
    private lastWindowWidth = 0;
    private lastWindowHeight = 0;
    private designWidth: number;
    private designHeight: number;

    constructor(designWidth = 1080, designHeight = 1920) {
        this.designWidth = designWidth;
        this.designHeight = designHeight;
    }

    isRealPCBrowser(): boolean {
        return !EDITOR && !PREVIEW && sys.platform === sys.Platform.DESKTOP_BROWSER;
    }

    initResizeListener(canvas: Canvas): void {
        if (!canvas) {
            console.warn('Canvas component not found');
            return;
        }
        const designRatio = this.designWidth / this.designHeight;
        const updateResolution = () => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            if (windowWidth === this.lastWindowWidth && windowHeight === this.lastWindowHeight) {
                return;
            }
            this.lastWindowWidth = windowWidth;
            this.lastWindowHeight = windowHeight;
            const currentRatio = windowWidth / windowHeight;
            if (currentRatio > designRatio) {
                view.setDesignResolutionSize(this.designWidth, this.designHeight, ResolutionPolicy.FIXED_HEIGHT);
            } else {
                view.setDesignResolutionSize(this.designWidth, this.designHeight, ResolutionPolicy.FIXED_WIDTH);
            }
        };
        window.addEventListener('resize', updateResolution, false);
        updateResolution();
    }
}
