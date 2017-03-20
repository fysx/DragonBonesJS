namespace dragonBones {
    /**
     * @language zh_CN
     * Pixi 插槽。
     * @version DragonBones 3.0
     */
    export class PhaserSlot extends Slot {
        /**
         * @private
         */
        public static toString(): string {
            return "[class dragonBones.PhaserSlot]";
        }

        private _renderDisplay: PIXI.DisplayObject;
        /**
         * @internal
         * @private
         */
        public constructor() {
            super();
        }
        /**
         * @inheritDoc
         */
        protected _onClear(): void {
            super._onClear();

            this._renderDisplay = null;
        }
        /**
         * @private
         */
        protected _initDisplay(value: Object): void {
        }
        /**
         * @private
         */
        protected _disposeDisplay(value: Object): void {
            //Phaser use PIXI 2.x, So we need destroy the sprite object in a diferent way
            (value as PIXI.Graphics).destroyCachedSprite();
        }
        /**
         * @private
         */
        protected _onUpdateDisplay(): void {
            this._renderDisplay = (this._display ? this._display : this._rawDisplay) as PIXI.DisplayObject;
        }
        /**
         * @private
         */
        protected _addDisplay(): void {
            const container = this._armature.display as PhaserArmatureDisplay;
            container.addChild(this._renderDisplay);
        }
        /**
         * @private
         */
        protected _replaceDisplay(value: Object): void {
            const container = this._armature.display as PhaserArmatureDisplay;
            const prevDisplay = value as PIXI.DisplayObject;
            container.addChild(this._renderDisplay);
            container.swapChildren(this._renderDisplay, prevDisplay);
            container.removeChild(prevDisplay);
        }
        /**
         * @private
         */
        protected _removeDisplay(): void {
            this._renderDisplay.parent.removeChild(this._renderDisplay);
        }
        /**
         * @private
         */
        protected _updateZOrder(): void {
            const container = this._armature.display as PhaserArmatureDisplay;
            container.addChildAt(this._renderDisplay, this._zOrder);
        }
        /**
         * @internal
         * @private
         */
        public _updateVisible(): void {
            this._renderDisplay.visible = this._parent.visible;
        }
        /**
         * @private
         */
        protected _updateBlendMode(): void {
            switch (this._blendMode) {
                case BlendMode.Normal:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.NORMAL;
                    break;

                case BlendMode.Add:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.ADD;
                    break;

                case BlendMode.Darken:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.DARKEN;
                    break;

                case BlendMode.Difference:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.DIFFERENCE;
                    break;

                case BlendMode.HardLight:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.HARD_LIGHT;
                    break;

                case BlendMode.Lighten:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.LIGHTEN;
                    break;

                case BlendMode.Multiply:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.MULTIPLY;
                    break;

                case BlendMode.Overlay:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.OVERLAY;
                    break;

                case BlendMode.Screen:
                    (this._renderDisplay as PIXI.Sprite).blendMode = PIXI.blendModes.SCREEN;
                    break;

                default:
                    break;
            }
        }
        /**
         * @private
         */
        protected _updateColor(): void {
            this._renderDisplay.alpha = this._colorTransform.alphaMultiplier;
        }
        /**
         * @private
         */
        protected _updateFrame(): void {
            const isMeshDisplay = this._meshData && this._display === this._meshDisplay;
            let currentTextureData = this._textureData as PhaserTextureData;

            if (this._displayIndex >= 0 && this._display && currentTextureData) {
                let currentTextureAtlasData = currentTextureData.parent as PhaserTextureAtlasData;

                // Update replaced texture atlas.
                if (this._armature.replacedTexture && this._displayData && currentTextureAtlasData === this._displayData.texture.parent) {
                    currentTextureAtlasData = this._armature._replaceTextureAtlasData as PhaserTextureAtlasData;
                    if (!currentTextureAtlasData) {
                        currentTextureAtlasData = BaseObject.borrowObject(PhaserTextureAtlasData);
                        currentTextureAtlasData.copyFrom(currentTextureData.parent);
                        currentTextureAtlasData.texture = this._armature.replacedTexture;
                        this._armature._replaceTextureAtlasData = currentTextureAtlasData;
                    }

                    currentTextureData = currentTextureAtlasData.getTexture(currentTextureData.name) as PhaserTextureData;
                }

                const currentTextureAtlas = currentTextureAtlasData.texture;
                if (currentTextureAtlas) {
                    if (!currentTextureData.texture) {
                        currentTextureData.texture = new PIXI.Texture(
                            currentTextureAtlas,
                            <PIXI.Rectangle><any>currentTextureData.region, // No need to set frame.
                            <PIXI.Rectangle><any>currentTextureData.region,
                            new PIXI.Rectangle(0, 0, currentTextureData.region.width, currentTextureData.region.height));
                    }

                    if (isMeshDisplay) { // Mesh.
                        const meshDisplay = this._renderDisplay as PIXI.Strip;
                        const textureAtlasWidth = currentTextureAtlas ? currentTextureAtlas.width : 1;
                        const textureAtlasHeight = currentTextureAtlas ? currentTextureAtlas.height : 1;
                        meshDisplay.drawMode = PIXI.Strip.DrawModes.TRIANGLES;
                        meshDisplay.uvs = <any>new Float32Array(this._meshData.uvs);
                        meshDisplay.vertices = <any>new Float32Array(this._meshData.vertices);
                        meshDisplay.indices = <any>new Uint16Array(this._meshData.vertexIndices);

                        for (let i = 0, l = meshDisplay.uvs.length; i < l; i += 2) {
                            const u = meshDisplay.uvs[i];
                            const v = meshDisplay.uvs[i + 1];
                            meshDisplay.uvs[i] = (currentTextureData.region.x + u * currentTextureData.region.width) / textureAtlasWidth;
                            meshDisplay.uvs[i + 1] = (currentTextureData.region.y + v * currentTextureData.region.height) / textureAtlasHeight;
                        }

                        meshDisplay.texture = currentTextureData.texture;
                        meshDisplay.dirty = true;
                    }
                    else { // Normal texture.
                        const normalDisplay = this._renderDisplay as PIXI.Sprite;
                        normalDisplay.texture = currentTextureData.texture;
                    }

                    this._updateVisible();

                    return;
                }
            }

            if (isMeshDisplay) {
                const meshDisplay = this._renderDisplay as PIXI.Strip;
                meshDisplay.visible = false;
                meshDisplay.texture = null;
                meshDisplay.x = 0.0;
                meshDisplay.y = 0.0;
            }
            else {
                const normalDisplay = this._renderDisplay as PIXI.Sprite;
                normalDisplay.visible = false;
                normalDisplay.texture = null;
                normalDisplay.x = 0.0;
                normalDisplay.y = 0.0;
            }
        }
        /**
         * @private
         */
        protected _updateMesh(): void {
            const meshDisplay = this._renderDisplay as PIXI.Strip;
            const hasFFD = this._ffdVertices.length > 0;

            if (this._meshData.skinned) {
                for (let i = 0, iF = 0, l = this._meshData.vertices.length; i < l; i += 2) {
                    let iH = i / 2;

                    const boneIndices = this._meshData.boneIndices[iH];
                    const boneVertices = this._meshData.boneVertices[iH];
                    const weights = this._meshData.weights[iH];

                    let xG = 0.0, yG = 0.0;

                    for (let iB = 0, lB = boneIndices.length; iB < lB; ++iB) {
                        const bone = this._meshBones[boneIndices[iB]];
                        const matrix = bone.globalTransformMatrix;
                        const weight = weights[iB];

                        let xL = 0.0, yL = 0.0;
                        if (hasFFD) {
                            xL = boneVertices[iB * 2] + this._ffdVertices[iF];
                            yL = boneVertices[iB * 2 + 1] + this._ffdVertices[iF + 1];
                        }
                        else {
                            xL = boneVertices[iB * 2];
                            yL = boneVertices[iB * 2 + 1];
                        }

                        xG += (matrix.a * xL + matrix.c * yL + matrix.tx) * weight;
                        yG += (matrix.b * xL + matrix.d * yL + matrix.ty) * weight;

                        iF += 2;
                    }

                    meshDisplay.vertices[i] = xG;
                    meshDisplay.vertices[i + 1] = yG;
                }

            }
            else if (hasFFD) {
                const vertices = this._meshData.vertices;
                for (let i = 0, l = this._meshData.vertices.length; i < l; i += 2) {
                    const xG = vertices[i] + this._ffdVertices[i];
                    const yG = vertices[i + 1] + this._ffdVertices[i + 1];
                    meshDisplay.vertices[i] = xG;
                    meshDisplay.vertices[i + 1] = yG;
                }
            }


        }

        /**
         * @private
         */
        protected _updateTransform(isSkinnedMesh: boolean): void {
            if (isSkinnedMesh) {
                //this._renderDisplay.setTransform(0.0, 0.0, 1.0, 1.0,0.0);
                this._renderDisplay.position.x = 0.0;
                this._renderDisplay.position.y = 0.0;
                this._renderDisplay.scale.x = 1.0;
                this._renderDisplay.scale.y = 1.0;
                this._renderDisplay.rotation = 0.0;
                // this._renderDisplay.skew.x = 0.0; //This properties doesnt exist on old pixi dsplay
                // this._renderDisplay.skew.y = 0.0; //This properties doesnt exist on old pixi dsplay
                //this._renderDisplay.pivot.x = 0.0; //This properties doesnt exist on old pixi dsplay
                //this._renderDisplay.pivot.y = 0.0; //This properties doesnt exist on old pixi dsplay
            } else {
                const x = this.globalTransformMatrix.tx - (this.globalTransformMatrix.a * this._pivotX + this.globalTransformMatrix.c * this._pivotY);
                const y = this.globalTransformMatrix.ty - (this.globalTransformMatrix.b * this._pivotX + this.globalTransformMatrix.d * this._pivotY);
                if (this._renderDisplay instanceof PIXI.Strip) {
                    this._renderDisplay.position.x = x || 0;
                    this._renderDisplay.position.y = y || 0;
                    this._renderDisplay.worldTransform.tx = this.globalTransformMatrix.tx;
                    this._renderDisplay.worldTransform.ty = this.globalTransformMatrix.ty;
                    this._renderDisplay.worldTransform.a = this.globalTransformMatrix.a;
                    this._renderDisplay.worldTransform.b = this.globalTransformMatrix.b;
                    this._renderDisplay.worldTransform.c = this.globalTransformMatrix.c;
                    this._renderDisplay.worldTransform.d = this.globalTransformMatrix.d;
                    let scaleX = !this._renderDisplay.parent.scale.x ? 1 : this._renderDisplay.parent.scale.x;
                    let scaleY = !this._renderDisplay.parent.scale.y ? 1 : this._renderDisplay.parent.scale.y;
                    this._renderDisplay.worldTransform.scale(scaleX, scaleY);
                    this._renderDisplay.worldTransform.translate(this._renderDisplay.parent.x, this._renderDisplay.parent.y);
                } else if (this._renderDisplay instanceof PIXI.Sprite) {
                    this._renderDisplay.position.x = x || 0;
                    this._renderDisplay.position.y = y || 0;
                    this._renderDisplay.scale.x = !this.global.scaleX ? 1 : this.global.scaleX;
                    this._renderDisplay.scale.y = !this.global.scaleY ? 1 : this.global.scaleY;
                    this._renderDisplay.rotation = this.global.skewY || 0;

                }
            }
        }
    }
}
