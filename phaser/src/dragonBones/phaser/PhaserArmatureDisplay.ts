namespace dragonBones {
    /**
     * @inheritDoc
     */
    export class PhaserArmatureDisplay extends Phaser.Group {
        /**
         * @private
         */
        public _armature: Armature;
        private _debugDrawer: PIXI.Sprite;

        /**
         * @internal
         * @private
         */
        public constructor(game: Phaser.Game) {
            super(game);
        }

        /**
         * @private
         */
        public _onClear(): void {
            if (this._debugDrawer) {
                //  this._debugDrawer.destroy(true); TODO
            }

            this._armature = null;
            this._debugDrawer = null;

            this.destroy();
        }

        /**
         * @private
         */
        public _dispatchEvent(type: EventStringType, eventObject: EventObject): void { }

        /**
         * @private
         */
        public _debugDraw(isEnabled: boolean): void {
            //TODO
        }

        /**
         * @inheritDoc
         */
        public hasEvent(type: EventStringType): boolean {
            // Need to test this more...
            return true;
        }

        /**
         * @inheritDoc
         */
        public addEvent(type: EventStringType, listener: (event: EventObject) => void, target: any): void {
            this.addEvent(type, listener, target);
        }

        /**
         * @inheritDoc
         */
        public removeEvent(type: EventStringType, listener: (event: EventObject) => void, target: any): void {
            this.removeEvent(type, listener, target);
        }

        /**
         * @inheritDoc
         */
        public dispose(disposeProxy: boolean = true): void {
            if (this._armature) {
                this._armature.dispose();
                this._armature = null;
            }
        }

        /**
         * @inheritDoc
         */
        public get armature(): Armature {
            return this._armature;
        }

        /**
         * @inheritDoc
         */
        public get animation(): Animation {
            return this._armature.animation;
        }

        /**
         * @deprecated
         * @see dragonBones.Animation#timescale
         * @see dragonBones.Animation#stop()
         */
        public advanceTimeBySelf(on: boolean): void {
            if (on) {
                this._armature.clock = PhaserFactory._clock;
            }
            else {
                this._armature.clock = null;
            }
        }
    }
}
