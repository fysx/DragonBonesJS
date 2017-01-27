var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dragonBones;
(function (dragonBones) {
    /**
     * @inheritDoc
     */
    var PhaserArmatureDisplay = (function (_super) {
        __extends(PhaserArmatureDisplay, _super);
        /**
         * @internal
         * @private
         */
        function PhaserArmatureDisplay(game) {
            return _super.call(this, game) || this;
        }
        /**
         * @private
         */
        PhaserArmatureDisplay.prototype._onClear = function () {
            if (this._debugDrawer) {
            }
            this._armature = null;
            this._debugDrawer = null;
            this.destroy();
        };
        /**
         * @private
         */
        PhaserArmatureDisplay.prototype._dispatchEvent = function (type, eventObject) {
            //this._dispatchEvent(type,eventObject);
        };
        /**
         * @private
         */
        PhaserArmatureDisplay.prototype._debugDraw = function (isEnabled) {
            /*
               //TODO
               if (!this._debugDrawer) {
                   this._debugDrawer = new PIXI.Sprite();
                   const boneDrawer = new PIXI.Graphics();
                   this._debugDrawer.addChild(boneDrawer);
               }
   
               if (isEnabled) {
                   this.addChild(this._debugDrawer);
                   const boneDrawer = this._debugDrawer.getChildAt(0) as PIXI.Graphics;
                   boneDrawer.clear();
   
                   const bones = this._armature.getBones();
                   for (let i = 0, l = bones.length; i < l; ++i) {
                       const bone = bones[i];
                       const boneLength = bone.length;
                       const startX = bone.globalTransformMatrix.tx;
                       const startY = bone.globalTransformMatrix.ty;
                       const endX = startX + bone.globalTransformMatrix.a * boneLength;
                       const endY = startY + bone.globalTransformMatrix.b * boneLength;
   
                       boneDrawer.lineStyle(2, bone.ik ? 0xFF0000 : 0x00FFFF, 0.7);
                       boneDrawer.moveTo(startX, startY);
                       boneDrawer.lineTo(endX, endY);
                       boneDrawer.lineStyle(0, 0, 0);
                       boneDrawer.beginFill(0x00FFFF, 0.7);
                       boneDrawer.drawCircle(startX, startY, 3);
                       boneDrawer.endFill();
                   }
   
                   const slots = this._armature.getSlots();
                   for (let i = 0, l = slots.length; i < l; ++i) {
                       const slot = slots[i];
                       const boundingBoxData = slot.boundingBoxData;
   
                       if (boundingBoxData) {
                           let child = this._debugDrawer.getChildByName(slot.name) as PIXI.Graphics;
                           if (!child) {
                               child = new PIXI.Graphics();
                               child.name = slot.name;
                               this._debugDrawer.addChild(child);
                           }
   
                           child.clear();
                           child.beginFill(0xFF00FF, 0.3);
   
                           switch (boundingBoxData.type) {
                               case BoundingBoxType.Rectangle:
                                   child.drawRect(-boundingBoxData.width * 0.5, -boundingBoxData.height * 0.5, boundingBoxData.width, boundingBoxData.height);
                                   break;
   
                               case BoundingBoxType.Ellipse:
                                   child.drawEllipse(-boundingBoxData.width * 0.5, -boundingBoxData.height * 0.5, boundingBoxData.width, boundingBoxData.height);
                                   break;
   
                               case BoundingBoxType.Polygon:
                                   const vertices = boundingBoxData.vertices;
                                   for (let i = 0, l = boundingBoxData.vertices.length; i < l; i += 2) {
                                       if (i === 0) {
                                           child.moveTo(vertices[i], vertices[i + 1]);
                                       }
                                       else {
                                           child.lineTo(vertices[i], vertices[i + 1]);
                                       }
                                   }
                                   break;
   
                               default:
                                   break;
                           }
   
                           child.endFill();
                           slot._updateTransformAndMatrix();
   
                           const x = slot.globalTransformMatrix.tx - (slot.globalTransformMatrix.a * slot._pivotX + slot.globalTransformMatrix.c * slot._pivotY);
                           const y = slot.globalTransformMatrix.ty - (slot.globalTransformMatrix.b * slot._pivotX + slot.globalTransformMatrix.d * slot._pivotY);
   
                           child.setTransform(
                               x, y,
                               slot.global.scaleX, slot.global.scaleY,
                               slot.global.skewY, slot.global.skewX - slot.global.skewY
                           );
                       }
                       else {
                           const child = this._debugDrawer.getChildByName(slot.name);
                           if (child) {
                               this._debugDrawer.removeChild(child);
                           }
                       }
                   }
               }
               else if (this._debugDrawer && this._debugDrawer.parent === this) {
                   this.removeChild(this._debugDrawer);
               }*/
        };
        /**
         * @inheritDoc
         */
        PhaserArmatureDisplay.prototype.hasEvent = function (type) {
            //return this.hasEvent(type);
            //return this.listeners(type, true) as boolean;
            return true;
        };
        /**
         * @inheritDoc
         */
        PhaserArmatureDisplay.prototype.addEvent = function (type, listener, target) {
            this.addEvent(type, listener, target);
        };
        /**
         * @inheritDoc
         */
        PhaserArmatureDisplay.prototype.removeEvent = function (type, listener, target) {
            this.removeEvent(type, listener, target);
        };
        /**
         * @inheritDoc
         */
        PhaserArmatureDisplay.prototype.dispose = function (disposeProxy) {
            if (disposeProxy === void 0) { disposeProxy = true; }
            if (this._armature) {
                this._armature.dispose();
                this._armature = null;
            }
        };
        Object.defineProperty(PhaserArmatureDisplay.prototype, "armature", {
            /**
             * @inheritDoc
             */
            get: function () {
                return this._armature;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PhaserArmatureDisplay.prototype, "animation", {
            /**
             * @inheritDoc
             */
            get: function () {
                return this._armature.animation;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @deprecated
         * @see dragonBones.Animation#timescale
         * @see dragonBones.Animation#stop()
         */
        PhaserArmatureDisplay.prototype.advanceTimeBySelf = function (on) {
            if (on) {
                this._armature.clock = dragonBones.PhaserFactory._clock;
            }
            else {
                this._armature.clock = null;
            }
        };
        return PhaserArmatureDisplay;
    }(Phaser.Group));
    dragonBones.PhaserArmatureDisplay = PhaserArmatureDisplay;
})(dragonBones || (dragonBones = {}));
var dragonBones;
(function (dragonBones) {
    /**
     * @language zh_CN
     * Pixi 工厂。
     * @version DragonBones 3.0
     */
    var PhaserFactory = (function (_super) {
        __extends(PhaserFactory, _super);
        /**
         * @language zh_CN
         * 创建一个工厂。 (通常只需要一个全局工厂实例)
         * @param dataParser 龙骨数据解析器，如果不设置，则使用默认解析器。
         * @version DragonBones 3.0
         */
        function PhaserFactory(dataParser, game) {
            if (dataParser === void 0) { dataParser = null; }
            var _this = _super.call(this, dataParser) || this;
            if (!PhaserFactory._eventManager) {
                PhaserFactory._eventManager = new dragonBones.PhaserArmatureDisplay(game);
                PhaserFactory._clock = new dragonBones.WorldClock();
                PhaserFactory._game = game; // Added to Phaser Context
                PhaserFactory._game.time.events.loop(0, PhaserFactory._clockHandler, PhaserFactory._game); //added phaser ticker
            }
            return _this;
        }
        PhaserFactory._clockHandler = function (passedTime) {
            PhaserFactory._clock.advanceTime(-1); // passedTime !?
        };
        Object.defineProperty(PhaserFactory, "factory", {
            /**
             * @language zh_CN
             * 一个可以直接使用的全局工厂实例。
             * @version DragonBones 4.7
             */
            get: function () {
                if (!PhaserFactory._factory) {
                    PhaserFactory._factory = new PhaserFactory(null, this._game);
                }
                return PhaserFactory._factory;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         */
        PhaserFactory.prototype._generateTextureAtlasData = function (textureAtlasData, textureAtlas) {
            if (textureAtlasData) {
                textureAtlasData.texture = textureAtlas;
            }
            else {
                textureAtlasData = dragonBones.BaseObject.borrowObject(dragonBones.PhaserTextureAtlasData);
            }
            return textureAtlasData;
        };
        /**
         * @private
         */
        PhaserFactory.prototype._generateArmature = function (dataPackage) {
            var armature = dragonBones.BaseObject.borrowObject(dragonBones.Armature);
            var armatureDisplay = new dragonBones.PhaserArmatureDisplay(PhaserFactory._game);
            armatureDisplay._armature = armature;
            armature._init(dataPackage.armature, dataPackage.skin, armatureDisplay, armatureDisplay, PhaserFactory._eventManager);
            return armature;
        };
        /**
         * @private
         */
        PhaserFactory.prototype._generateSlot = function (dataPackage, skinSlotData, armature) {
            var slot = dragonBones.BaseObject.borrowObject(dragonBones.PhaserSlot);
            slot._init(skinSlotData, new Phaser.Sprite(PhaserFactory._game, null, null), new Phaser.Rope(PhaserFactory._game, null, null, null, null, []) // TODO ....hmm expriment
            );
            var displayList = [];
            for (var i = 0, l = skinSlotData.displays.length; i < l; ++i) {
                var displayData = skinSlotData.displays[i];
                switch (displayData.type) {
                    case 0 /* Image */:
                        if (!displayData.texture || dataPackage.textureAtlasName) {
                            displayData.texture = this._getTextureData(dataPackage.textureAtlasName || dataPackage.dataName, displayData.path);
                        }
                        displayList.push(slot.rawDisplay);
                        break;
                    case 2 /* Mesh */:
                        if (!displayData.texture || dataPackage.textureAtlasName) {
                            displayData.texture = this._getTextureData(dataPackage.textureAtlasName || dataPackage.dataName, displayData.path);
                        }
                        if (!displayData.mesh && displayData.share) {
                            displayData.mesh = skinSlotData.getMesh(displayData.share);
                        }
                        displayList.push(slot.meshDisplay);
                        break;
                    case 1 /* Armature */:
                        var childArmature = this.buildArmature(displayData.path, dataPackage.dataName, null, dataPackage.textureAtlasName);
                        if (childArmature) {
                            childArmature.inheritAnimation = displayData.inheritAnimation;
                            if (!childArmature.inheritAnimation) {
                                var actions = skinSlotData.slot.actions.length > 0 ? skinSlotData.slot.actions : childArmature.armatureData.actions;
                                if (actions.length > 0) {
                                    for (var i_1 = 0, l_1 = actions.length; i_1 < l_1; ++i_1) {
                                        childArmature._bufferAction(actions[i_1]);
                                    }
                                }
                                else {
                                    childArmature.animation.play();
                                }
                            }
                            displayData.armature = childArmature.armatureData; // 
                        }
                        displayList.push(childArmature);
                        break;
                    default:
                        displayList.push(null);
                        break;
                }
            }
            slot._setDisplayList(displayList);
            return slot;
        };
        /**
         * @language zh_CN
             * 创建一个指定名称的骨架，并使用骨架的显示容器来更新骨架动画。
         * @param armatureName 骨架名称。
         * @param dragonBonesName 龙骨数据名称，如果未设置，将检索所有的龙骨数据，如果多个数据中包含同名的骨架数据，可能无法创建出准确的骨架。
         * @param skinName 皮肤名称，如果未设置，则使用默认皮肤。
         * @param textureAtlasName 贴图集数据名称，如果未设置，则使用龙骨数据。
         * @returns 骨架的显示容器。
         * @see dragonBones.PixiArmatureDisplay
         * @version DragonBones 4.5
         */
        PhaserFactory.prototype.buildArmatureDisplay = function (armatureName, dragonBonesName, skinName, textureAtlasName) {
            if (dragonBonesName === void 0) { dragonBonesName = null; }
            if (skinName === void 0) { skinName = null; }
            if (textureAtlasName === void 0) { textureAtlasName = null; }
            var armature = this.buildArmature(armatureName, dragonBonesName, skinName, textureAtlasName);
            if (armature) {
                var armatureDisplay = armature.display;
                PhaserFactory._clock.add(armature);
                return armatureDisplay;
            }
            return null;
        };
        /**
         * @language zh_CN
         * 获取带有指定贴图的显示对象。
         * @param textureName 指定的贴图名称。
         * @param dragonBonesName 指定的龙骨数据名称，如果未设置，将检索所有的龙骨数据。
         * @version DragonBones 3.0
         */
        PhaserFactory.prototype.getTextureDisplay = function (textureName, dragonBonesName) {
            if (dragonBonesName === void 0) { dragonBonesName = null; }
            var textureData = this._getTextureData(dragonBonesName, textureName);
            if (textureData) {
                if (!textureData.texture) {
                    var textureAtlasTexture = textureData.parent.texture;
                    var originSize = new PIXI.Rectangle(0, 0, textureData.region.width, textureData.region.height);
                    textureData.texture = new PIXI.Texture(textureAtlasTexture, null, textureData.region, originSize);
                }
                return new PIXI.Sprite(textureData.texture);
            }
            return null;
        };
        Object.defineProperty(PhaserFactory.prototype, "soundEventManater", {
            /**
             * @language zh_CN
             * 获取全局声音事件管理器。
             * @version DragonBones 4.5
             */
            get: function () {
                return PhaserFactory._eventManager;
            },
            enumerable: true,
            configurable: true
        });
        return PhaserFactory;
    }(dragonBones.BaseFactory));
    PhaserFactory._factory = null;
    /**
     * @private
     */
    PhaserFactory._eventManager = null;
    /**
     * @private
     */
    PhaserFactory._clock = null;
    dragonBones.PhaserFactory = PhaserFactory;
})(dragonBones || (dragonBones = {}));
var dragonBones;
(function (dragonBones) {
    /**
     * @language zh_CN
     * Pixi 插槽。
     * @version DragonBones 3.0
     */
    var PhaserSlot = (function (_super) {
        __extends(PhaserSlot, _super);
        /**
         * @internal
         * @private
         */
        function PhaserSlot() {
            return _super.call(this) || this;
        }
        /**
         * @private
         */
        PhaserSlot.toString = function () {
            return "[class dragonBones.PhaserSlot]";
        };
        /**
         * @inheritDoc
         */
        PhaserSlot.prototype._onClear = function () {
            _super.prototype._onClear.call(this);
            this._renderDisplay = null;
        };
        /**
         * @private
         */
        PhaserSlot.prototype._initDisplay = function (value) {
        };
        /**
         * @private
         */
        PhaserSlot.prototype._disposeDisplay = function (value) {
            //Phaser use PIXI 2.x, So we need destroy the sprite object in a diferent way
            value.destroyCachedSprite();
        };
        /**
         * @private
         */
        PhaserSlot.prototype._onUpdateDisplay = function () {
            this._renderDisplay = (this._display ? this._display : this._rawDisplay);
        };
        /**
         * @private
         */
        PhaserSlot.prototype._addDisplay = function () {
            var container = this._armature.display;
            container.addChild(this._renderDisplay);
        };
        /**
         * @private
         */
        PhaserSlot.prototype._replaceDisplay = function (value) {
            var container = this._armature.display;
            var prevDisplay = value;
            container.addChild(this._renderDisplay);
            container.swapChildren(this._renderDisplay, prevDisplay);
            container.removeChild(prevDisplay);
        };
        /**
         * @private
         */
        PhaserSlot.prototype._removeDisplay = function () {
            this._renderDisplay.parent.removeChild(this._renderDisplay);
        };
        /**
         * @private
         */
        PhaserSlot.prototype._updateZOrder = function () {
            var container = this._armature.display;
            container.addChildAt(this._renderDisplay, this._zOrder);
        };
        /**
         * @internal
         * @private
         */
        PhaserSlot.prototype._updateVisible = function () {
            this._renderDisplay.visible = this._parent.visible;
        };
        /**
         * @private
         */
        PhaserSlot.prototype._updateBlendMode = function () {
            switch (this._blendMode) {
                case 0 /* Normal */:
                    this._renderDisplay.blendMode = PIXI.blendModes.NORMAL;
                    break;
                case 1 /* Add */:
                    this._renderDisplay.blendMode = PIXI.blendModes.ADD;
                    break;
                case 3 /* Darken */:
                    this._renderDisplay.blendMode = PIXI.blendModes.DARKEN;
                    break;
                case 4 /* Difference */:
                    this._renderDisplay.blendMode = PIXI.blendModes.DIFFERENCE;
                    break;
                case 6 /* HardLight */:
                    this._renderDisplay.blendMode = PIXI.blendModes.HARD_LIGHT;
                    break;
                case 9 /* Lighten */:
                    this._renderDisplay.blendMode = PIXI.blendModes.LIGHTEN;
                    break;
                case 10 /* Multiply */:
                    this._renderDisplay.blendMode = PIXI.blendModes.MULTIPLY;
                    break;
                case 11 /* Overlay */:
                    this._renderDisplay.blendMode = PIXI.blendModes.OVERLAY;
                    break;
                case 12 /* Screen */:
                    this._renderDisplay.blendMode = PIXI.blendModes.SCREEN;
                    break;
                default:
                    break;
            }
        };
        /**
         * @private
         */
        PhaserSlot.prototype._updateColor = function () {
            this._renderDisplay.alpha = this._colorTransform.alphaMultiplier;
        };
        /**
         * @private
         */
        PhaserSlot.prototype._updateFrame = function () {
            var isMeshDisplay = this._meshData && this._display === this._meshDisplay;
            var currentTextureData = this._textureData;
            if (this._displayIndex >= 0 && this._display && currentTextureData) {
                var currentTextureAtlasData = currentTextureData.parent;
                // Update replaced texture atlas.
                if (this._armature.replacedTexture && this._displayData && currentTextureAtlasData === this._displayData.texture.parent) {
                    currentTextureAtlasData = this._armature._replaceTextureAtlasData;
                    if (!currentTextureAtlasData) {
                        currentTextureAtlasData = dragonBones.BaseObject.borrowObject(dragonBones.PhaserTextureAtlasData);
                        currentTextureAtlasData.copyFrom(currentTextureData.parent);
                        currentTextureAtlasData.texture = this._armature.replacedTexture;
                        this._armature._replaceTextureAtlasData = currentTextureAtlasData;
                    }
                    currentTextureData = currentTextureAtlasData.getTexture(currentTextureData.name);
                }
                var currentTextureAtlas = currentTextureAtlasData.texture;
                if (currentTextureAtlas) {
                    if (!currentTextureData.texture) {
                        currentTextureData.texture = new PIXI.Texture(currentTextureAtlas, currentTextureData.region, // No need to set frame.
                        currentTextureData.region, new PIXI.Rectangle(0, 0, currentTextureData.region.width, currentTextureData.region.height) /*,
                        currentTextureData.rotated WTF what this does?? */);
                    }
                    if (isMeshDisplay) {
                        var meshDisplay = this._renderDisplay;
                        var textureAtlasWidth = currentTextureAtlas ? currentTextureAtlas.width : 1;
                        var textureAtlasHeight = currentTextureAtlas ? currentTextureAtlas.height : 1;
                        meshDisplay.uvs = new Float32Array(this._meshData.uvs);
                        meshDisplay.vertices = new Float32Array(this._meshData.vertices);
                        meshDisplay.indices = new Uint16Array(this._meshData.vertexIndices);
                        for (var i = 0, l = meshDisplay.uvs.length; i < l; i += 2) {
                            var u = meshDisplay.uvs[i];
                            var v = meshDisplay.uvs[i + 1];
                            meshDisplay.uvs[i] = (currentTextureData.region.x + u * currentTextureData.region.width) / textureAtlasWidth;
                            meshDisplay.uvs[i + 1] = (currentTextureData.region.y + v * currentTextureData.region.height) / textureAtlasHeight;
                        }
                        meshDisplay.texture = currentTextureData.texture;
                        meshDisplay.dirty = true;
                    }
                    else {
                        var normalDisplay = this._renderDisplay;
                        normalDisplay.texture = currentTextureData.texture;
                    }
                    this._updateVisible();
                    return;
                }
            }
            if (isMeshDisplay) {
                var meshDisplay = this._renderDisplay; // expriment...Useing Rope instead of mesh
                meshDisplay.visible = false;
                meshDisplay.texture = null;
                meshDisplay.x = 0.0;
                meshDisplay.y = 0.0;
            }
            else {
                var normalDisplay = this._renderDisplay;
                normalDisplay.visible = false;
                normalDisplay.texture = null;
                normalDisplay.x = 0.0;
                normalDisplay.y = 0.0;
            }
        };
        /**
         * @private
         */
        PhaserSlot.prototype._updateMesh = function () {
            var meshDisplay = this._renderDisplay;
            var hasFFD = this._ffdVertices.length > 0;
            if (this._meshData.skinned) {
                for (var i = 0, iF = 0, l = this._meshData.vertices.length; i < l; i += 2) {
                    var iH = i / 2;
                    var boneIndices = this._meshData.boneIndices[iH];
                    var boneVertices = this._meshData.boneVertices[iH];
                    var weights = this._meshData.weights[iH];
                    var xG = 0.0, yG = 0.0;
                    for (var iB = 0, lB = boneIndices.length; iB < lB; ++iB) {
                        var bone = this._meshBones[boneIndices[iB]];
                        var matrix = bone.globalTransformMatrix;
                        var weight = weights[iB];
                        var xL = 0.0, yL = 0.0;
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
                var vertices = this._meshData.vertices;
                for (var i = 0, l = this._meshData.vertices.length; i < l; i += 2) {
                    var xG = vertices[i] + this._ffdVertices[i];
                    var yG = vertices[i + 1] + this._ffdVertices[i + 1];
                    meshDisplay.vertices[i] = xG;
                    meshDisplay.vertices[i + 1] = yG;
                }
            }
        };
        /**
         * @private
         */
        PhaserSlot.prototype._updateTransform = function (isSkinnedMesh) {
            if (isSkinnedMesh) {
                //this._renderDisplay.setTransform(0.0, 0.0, 1.0, 1.0,0.0);
                this._renderDisplay.position.x = 0.0;
                this._renderDisplay.position.y = 0.0;
                this._renderDisplay.scale.x = 1.0;
                this._renderDisplay.scale.y = 1.0;
                this._renderDisplay.rotation = 0.0;
            }
            else {
                var x = this.globalTransformMatrix.tx - (this.globalTransformMatrix.a * this._pivotX + this.globalTransformMatrix.c * this._pivotY);
                var y = this.globalTransformMatrix.ty - (this.globalTransformMatrix.b * this._pivotX + this.globalTransformMatrix.d * this._pivotY);
                if (this._renderDisplay instanceof Phaser.Rope) {
                    this._renderDisplay.position.x = x || 0;
                    this._renderDisplay.position.y = y || 0;
                    /*this._renderDisplay.points.push(new Phaser.Point(this._meshData.vertices[0],this._meshData.vertices[1]))
                    this._renderDisplay.points.push(new Phaser.Point(this._meshData.vertices[2],this._meshData.vertices[3]))
                    this._renderDisplay.points.push(new Phaser.Point(this._meshData.vertices[4],this._meshData.vertices[5]))
                    this._renderDisplay.points.push(new Phaser.Point(this._meshData.vertices[6],this._meshData.vertices[7]))
                    this._renderDisplay.points.push(new Phaser.Point(this._meshData.vertices[8],this._meshData.vertices[9]))
                   /* this._renderDisplay.points.push(new Phaser.Point(this.global.scaleX,this.global.scaleY))
                    this._renderDisplay.points.push(new Phaser.Point(this.global.skewX,this.global.skewY))
                    this._renderDisplay.points.push(new Phaser.Point(this.global.x,this.global.y))*/
                    //PhaserFactory._game.debug.ropeSegments(this._renderDisplay);
                    this._renderDisplay.worldTransform.tx = this.globalTransformMatrix.tx /*+ (this._renderDisplay.parent.x)*/;
                    this._renderDisplay.worldTransform.ty = this.globalTransformMatrix.ty /*+ (this._renderDisplay.parent.y)/*+ (PhaserFactory._game.width*0.625)*/;
                    this._renderDisplay.worldTransform.a = this.globalTransformMatrix.a;
                    this._renderDisplay.worldTransform.b = this.globalTransformMatrix.b;
                    this._renderDisplay.worldTransform.c = this.globalTransformMatrix.c;
                    this._renderDisplay.worldTransform.d = this.globalTransformMatrix.d;
                    this._renderDisplay.worldTransform.scale(this._renderDisplay.parent.scale.x, this._renderDisplay.parent.scale.y);
                    this._renderDisplay.worldTransform.translate(this._renderDisplay.parent.x, this._renderDisplay.parent.y);
                }
                else if (this._renderDisplay instanceof PIXI.Sprite) {
                    this._renderDisplay.position.x = x || 0;
                    this._renderDisplay.position.y = y || 0;
                    this._renderDisplay.scale.x = !this.global.scaleX ? 1 : this.global.scaleX;
                    this._renderDisplay.scale.y = !this.global.scaleY ? 1 : this.global.scaleY;
                    this._renderDisplay.rotation = this.global.skewY || 0;
                }
            }
        };
        return PhaserSlot;
    }(dragonBones.Slot));
    dragonBones.PhaserSlot = PhaserSlot;
})(dragonBones || (dragonBones = {}));
var dragonBones;
(function (dragonBones) {
    /**
     * @language zh_CN
     * Pixi 贴图集数据。
     * @version DragonBones 3.0
     */
    var PhaserTextureAtlasData = (function (_super) {
        __extends(PhaserTextureAtlasData, _super);
        /**
         * @private
         */
        function PhaserTextureAtlasData() {
            return _super.call(this) || this;
        }
        /**
         * @private
         */
        PhaserTextureAtlasData.toString = function () {
            return "[class dragonBones.PhaserTextureAtlasData]";
        };
        /**
         * @private
         */
        PhaserTextureAtlasData.prototype._onClear = function () {
            _super.prototype._onClear.call(this);
            if (this.texture) {
                //this.texture.destroy();
                this.texture = null;
            }
        };
        /**
         * @private
         */
        PhaserTextureAtlasData.prototype.generateTexture = function () {
            return dragonBones.BaseObject.borrowObject(PhaserTextureData);
        };
        return PhaserTextureAtlasData;
    }(dragonBones.TextureAtlasData));
    dragonBones.PhaserTextureAtlasData = PhaserTextureAtlasData;
    /**
     * @private
     */
    var PhaserTextureData = (function (_super) {
        __extends(PhaserTextureData, _super);
        function PhaserTextureData() {
            return _super.call(this) || this;
        }
        PhaserTextureData.toString = function () {
            return "[class dragonBones.PhaserTextureData]";
        };
        PhaserTextureData.prototype._onClear = function () {
            _super.prototype._onClear.call(this);
            if (this.texture) {
                this.texture.destroy(true); // Ups now its take params
                this.texture = null;
            }
        };
        return PhaserTextureData;
    }(dragonBones.TextureData));
    dragonBones.PhaserTextureData = PhaserTextureData;
})(dragonBones || (dragonBones = {}));
//# sourceMappingURL=dragonBonesPhaser.js.map