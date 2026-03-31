import { _decorator, Component, Sprite, Label, UITransform, assetManager, ImageAsset, isValid, SpriteFrame, Texture2D, tween, Vec3 } from 'cc';
import awesome from '../../Script/proto/awesome';
import { AndarbaharManager } from './AndarbaharManager';

const { ccclass, property } = _decorator;

@ccclass('ABPlayers')
export class ABPlayers extends Component {
    @property(Sprite)
    public sp_avatar = null;
    @property(Label)
    public label_nick = null;
    @property(Label)
    public label_money = null;
    @property(Label)
    public winLabel = null;
    @property
    public money = 0;
    @property
    public headPos = null;

    userId = null;
    winLabelPosition: Vec3 = null;
    onLoad() {
        this.winLabelPosition = this.winLabel.node.getPosition();
        this.updatePos();
    }

    updateInfo(data: awesome.com.cw.chess2.platform.GameUser) {
        this.setUserId(data.uid);
        this.setAvatar(data.userHead);
        this.setNick(data.userNick);
        this.updateMoney(data.coin);
        this.setVipHead(data);
        // this.showVipLevel(data.vip);
    }

    showVipLevel(level: any) {
        // let icon = cc.find("level", this.node); 
        // if (!icon) return; 
        // if (!level) { 
        // icon.active = false; 
        // return; 
        // } 
        // icon.active = true; 
        // cc.find("label", icon).getComponent(cc.Label).string = "Lv" + level; 
        // let path = "load/level/" + mySelfInfo.getVipIcon(level); 
        // this.loadSpriteFram(path, icon.getComponent(cc.Sprite)); 
    }



    setUserId(uid: any) {
        this.userId = uid;
    }

    getUserId() {
        return this.userId;
    }
    setAvatar(avatarId) {
        let self = this;
        let mask = this.sp_avatar.node.parent;
        let mSize = mask.getComponent(UITransform);
        let aSize = this.sp_avatar.node.getComponent(UITransform);
        this.updatePos();


        let wScale = mSize.width / aSize.width;
        let hScale = mSize.height / aSize.height;

        let scale = wScale > hScale ? wScale : hScale;

        if (avatarId.indexOf("http") == -1) {
            avatarId = avatarId > 7 ? this.getRandomNum(1, 7) : avatarId;
            AndarbaharManager.instance.loadSpriteFrame("load/avatar/" + avatarId, this.sp_avatar);
            this.sp_avatar.node.setScale(scale, scale, 1);

        } else {
            assetManager.loadRemote<ImageAsset>(avatarId, function (err, imageAsset) {
                if (!isValid(self.node)) {
                    return;
                }
                if (err) {
                    let index = self.getRandomNum(1, 7);
                    AndarbaharManager.instance.loadSpriteFrame("load/avatar/" + index, self.sp_avatar);
                    console.error(err.message || err);
                    return;
                }
                let width = self.sp_avatar.node.getComponent(UITransform).width;
                let height = self.sp_avatar.node.getComponent(UITransform).height;
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;
                self.sp_avatar.spriteFrame = spriteFrame;
                self.sp_avatar.node.getComponent(UITransform).width = width;
                self.sp_avatar.node.getComponent(UITransform).height = height;
            });
        }
    }
    getRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }

    setNick(nick: any) {
        if (this.label_nick != null) {
            this.label_nick.string = this.formatNickName(nick);
        }
    }
    formatNickName(nick) {
        if (nick && nick.length > 11) return nick.substr(0, 11);
        return nick;
    }
    updateMoney(num: any) {
        this.money = num;
        if (this.label_money != null) {
            this.label_money.string = (Number(num) / 100).toString();
        }
    }

    addMoney(num: any) {
        this.money += num;
        this.updateMoney(this.money);
    }

    playWinAnim(nums: any) {
        // let pos = this.winLabel.node.getPosition();
        this.winLabel.node.setPosition(this.winLabelPosition.x, this.winLabelPosition.y - 100);
        this.winLabel.string = "+" + (Number(nums) / 100);
        this.winLabel.node.active = true;
        tween(this.winLabel.node)
            .to(0.8, { position: new Vec3(this.winLabelPosition.x, this.winLabelPosition.y, 0) })
            .start();
    }

    stopWinAnim() {
        if (this.winLabel != null) {
            tween(this.winLabel.node).stop();
            this.winLabel.node.active = false;
        }
    }

    setVipHead(data: any) {
        // let now = comonFun.getNowTimeStamp(); 
        // var self = this; 
        // if( data.weekCardEndTime > now || data.monCardEndTime > now){ 
        // if(self.node.getChildByName("avatar_kuang") && self.node.getChildByName("avatar_kuang").getChildByName("vip_head") ){ 
        // let vipAnima = "" 
        // if(now <= data.weekCardEndTime ){ 
        // vipAnima = "animation2"; 
        // } 
        // if(now <= data.monCardEndTime ){ 
        // vipAnima = "animation1"; 
        // } 
        // let sk_vip = self.node.getChildByName("avatar_kuang").getChildByName("vip_head"); 
        // sk_vip.active = true; 
        // if(sk_vip.skeletonData == null ){ 
        // cc.resources.load("load/vip/goldsilver", sp.SkeletonData, function(err, skeletonData){ 
        // let sk_vip = self.node.getChildByName("avatar_kuang").getChildByName("vip_head").getComponent(sp.Skeleton); 
        // sk_vip.skeletonData = skeletonData; 
        // sk_vip.setAnimation(0,vipAnima, true); 
        // }); 
        // }else{ 
        // sk_vip.setAnimation(0,vipAnima, true); 
        // } 
        // } 
        // }else{ 
        // if(self.node.getChildByName("avatar_kuang") && self.node.getChildByName("avatar_kuang").getChildByName("vip_head") ){ 
        // let sk_vip = self.node.getChildByName("avatar_kuang").getChildByName("vip_head"); 
        // sk_vip.active = false; 
        // } 
        // } 
    }

    updatePos() {
        if (this.node.parent && this.node.parent.parent) {
            let avatarTransform = this.sp_avatar.node.getComponent(UITransform);
            let parentTransform = this.sp_avatar.node.parent.getComponent(UITransform);
            let targetTransform = this.node.parent.parent.getComponent(UITransform);
            if (!avatarTransform || !parentTransform || !targetTransform) {
                return;
            }
            let nodePos = this.sp_avatar.node.position;
            let worldPos = parentTransform.convertToWorldSpaceAR(nodePos);
            let endPos = targetTransform.convertToNodeSpaceAR(worldPos);
            this.headPos = { x: endPos.x, y: endPos.y, width: avatarTransform.width, height: avatarTransform.height };
        }

    }

}

