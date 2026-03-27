import { assetManager, AudioClip, AudioSource, director, game, Game, Node } from "cc";

export let music = {
    all_flygold: "flyChips",
    bgm: "bgm",
    count_down: "count_down",
    deal_card: "deal_card",
    my_betchips: "betchips",
    other_betchips: "betchips",
    select_chip: "select_chip",
    turn_card: "turn_card",
    launch: "dt_launch",
    win: "win",
    light_fly: "lightfly",
    dragon_win: "dragonwin",
    tiger_win: "tigerwin",
    tie: "tie",
    dice: "dice",

    start_betting: "Start_betting",
    stop_betting: "Stop_betting",

    pt_1: "1",
    pt_2: "2",
    pt_3: "3",
    pt_4: "4",
    pt_5: "5",
    pt_6: "6",
    pt_7: "7",
    pt_8: "8",
    pt_9: "9",
    pt_10: "10",
    pt_11: "11",
    pt_12: "12",
    pt_13: "13",
    Click: "Click",
    clip_ids: [],


    musicEnabled: true,

    soundEnabled: true,
    bgmVolume: 0.5,
    soundVolume: 1,

    _inited: false,
    _managerNode: null as Node | null,
    _bgmSource: null as AudioSource | null,
    _sfxSource: null as AudioSource | null,
    _clipCache: new Map<string, AudioClip>(),
    _pendingCallbacks: new Map<string, Array<(clip: AudioClip | null) => void>>(),
    _lastPlayTime: new Map<string, number>(),
    _sfxCooldown: 200,   // ms，同一音效最小播放间隔
    _currentBgmName: "",
    _pausedByGameHide: false,

    initAudioManager() {
        if (this._inited) return;

        this._managerNode = new Node("AndarbaharMusic");
        this._bgmSource = this._managerNode.addComponent(AudioSource);
        this._sfxSource = this._managerNode.addComponent(AudioSource);
        director.addPersistRootNode(this._managerNode);

        this._bgmSource.loop = true;
        this._bgmSource.playOnAwake = false;
        this._bgmSource.volume = this.bgmVolume;

        this._sfxSource.loop = false;
        this._sfxSource.playOnAwake = false;
        this._sfxSource.volume = this.soundVolume;

        game.on(Game.EVENT_HIDE, this.onGameHide, this);
        game.on(Game.EVENT_SHOW, this.onGameShow, this);

        this._inited = true;
    },

    onGameHide() {
        if (!this._inited) return;
        if (this._bgmSource && this._bgmSource.playing) {
            this._pausedByGameHide = true;
            this._bgmSource.pause();
        }
    },

    onGameShow() {
        if (!this._inited) return;
        if (this._pausedByGameHide && this.musicEnabled && this._bgmSource) {
            this._bgmSource.play();
        }
        this._pausedByGameHide = false;
    },
    loadClip(clipName: string, callback: (clip: AudioClip | null) => void) {
        this.initAudioManager();

        if (!clipName) {
            callback(null);
            return;
        }

        const cached = this._clipCache.get(clipName);
        if (cached) {
            callback(cached);
            return;
        }

        // 已有加载任务进行中，排队等待即可，不重复发起 bundle.load
        if (this._pendingCallbacks.has(clipName)) {
            this._pendingCallbacks.get(clipName).push(callback);
            return;
        }

        const bundle = assetManager.getBundle("andarbahar");
        if (!bundle) {
            callback(null);
            return;
        }

        this._pendingCallbacks.set(clipName, [callback]);

        bundle.load("music/" + clipName, AudioClip, (err, clip) => {
            const pending = this._pendingCallbacks.get(clipName) || [];
            this._pendingCallbacks.delete(clipName);

            if (err || !clip) {
                console.error(err?.message || err);
                pending.forEach(cb => cb(null));
                return;
            }
            this._clipCache.set(clipName, clip);
            pending.forEach(cb => cb(clip));
        });
    },

    playMusic(clipName, loop = false, volume = 1) {
        this.initAudioManager();
        if (!this.soundEnabled) return;

        if (loop == null || loop == undefined) loop = false;
        if (volume == null || volume == undefined) volume = 1;

        if (!loop) {
            const now = Date.now();
            const last = this._lastPlayTime.get(clipName) || 0;
            if (now - last < this._sfxCooldown) return;
            this._lastPlayTime.set(clipName, now);
        }

        this.loadClip(clipName, (clip) => {
            if (!clip || !this._sfxSource || !this.soundEnabled) return;

            if (loop) {
                this._sfxSource.stop();
                this._sfxSource.clip = clip;
                this._sfxSource.loop = true;
                this._sfxSource.volume = volume * this.soundVolume;
                this._sfxSource.play();
            } else {
                this._sfxSource.playOneShot(clip, volume * this.soundVolume);
            }
        });
    },

    playBgMusic(clipName, loop, volume) {
        this.initAudioManager();
        if (!this.musicEnabled) return;

        if (loop == null || loop == undefined) loop = true;
        if (volume == null || volume == undefined) volume = this.bgmVolume;

        this._currentBgmName = clipName;
        this.bgmVolume = volume;

        this.loadClip(clipName, (clip) => {
            if (!clip || !this._bgmSource || !this.musicEnabled) return;

            this._bgmSource.stop();
            this._bgmSource.clip = clip;
            this._bgmSource.loop = !!loop;
            this._bgmSource.volume = this.bgmVolume;
            this._bgmSource.play();
        });
    },

    stopMusic(clipName) {
        this.initAudioManager();
        if (!clipName) return;

        if (this._bgmSource && this._bgmSource.clip && this._bgmSource.clip.name === clipName) {
            this._bgmSource.stop();
            return;
        }
        if (this._sfxSource && this._sfxSource.clip && this._sfxSource.clip.name === clipName) {
            this._sfxSource.stop();
        }
    },

    stopAllMusic() {
        this.initAudioManager();
        this._bgmSource && this._bgmSource.stop();
        this._sfxSource && this._sfxSource.stop();
    },

    pauseAll() {
        this.initAudioManager();
        this._bgmSource && this._bgmSource.pause();
        this._sfxSource && this._sfxSource.pause();
    },
    resumeAll() {
        this.initAudioManager();
        if (this.musicEnabled && this._bgmSource) this._bgmSource.play();
        if (this.soundEnabled && this._sfxSource) this._sfxSource.play();
    },
    pauseBgm() {
        this.initAudioManager();
        this._bgmSource && this._bgmSource.pause();
    },
    resumeBgm() {
        this.initAudioManager();
        if (this.musicEnabled && this._bgmSource) this._bgmSource.play();
    },
    setMusicEnabled(enabled: boolean) {
        this.musicEnabled = enabled;
        if (!enabled) {
            this.pauseBgm();
            return;
        }
        if (this._currentBgmName) {
            this.playBgMusic(this._currentBgmName, true, this.bgmVolume);
        }
    },
    setSoundEnabled(enabled: boolean) {
        this.soundEnabled = enabled;
        if (!enabled && this._sfxSource) {
            this._sfxSource.stop();
        }
    },


    isMusicEnabled() {
        return this.musicEnabled;
    },

    isSoundEnabled() {
        return this.soundEnabled;
    },
}

