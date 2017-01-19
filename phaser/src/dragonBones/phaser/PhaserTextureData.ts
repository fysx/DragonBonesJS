namespace dragonBones {
    /**
     * @language zh_CN
     * Pixi 贴图集数据。
     * @version DragonBones 3.0
     */
    export class PhaserTextureAtlasData extends TextureAtlasData{
        /**
         * @private
         */
        public static toString(): string {
            return "[class dragonBones.PhaserTextureAtlasData]";
        }
        /**
         * @language zh_CN
         * Pixi 贴图。
         * @version DragonBones 3.0
         */
        public texture: PIXI.BaseTexture;
        /**
         * @private
         */
        public constructor() {
            super();
        }
        /**
         * @private
         */
        protected _onClear(): void {
            super._onClear();

            if (this.texture) {
                //this.texture.destroy();
                this.texture = null;
            }
        }
        /**
         * @private
         */
        public generateTexture(): TextureData {
            return BaseObject.borrowObject(PhaserTextureData);
        }
    }
    /**
     * @private
     */
    export class PhaserTextureData extends TextureData {
        public static toString(): string {
            return "[class dragonBones.PhaserTextureData]";
        }

        public texture: PIXI.Texture;

        public constructor() {
            super();
        }

        protected _onClear(): void {
            super._onClear();

            if (this.texture) {
                this.texture.destroy(true); // Ups now its take params
                this.texture = null;
            }
        }
    }
}