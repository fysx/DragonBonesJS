var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var demosPhaser;
(function (demosPhaser) {
    /**
     * How to use
     * 1. Load data.
     *
     * 2. ParseData.
     *  factory.parseDragonBonesData();
     *  factory.parseTextureAtlasData();
     *
     * 3. Build armature.
     *  armatureDisplay = factory.buildArmatureDisplay("armatureName");
     *
     * 4. Play animation.
     *  armatureDisplay.animation.play("animationName");
     *
     * 5. Add armature to stage.
     *  addChild(armatureDisplay);
     */
    var MiCharDragonBones = (function (_super) {
        __extends(MiCharDragonBones, _super)bmoigb c     njmn
        function MiCharDragonBones() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MiCharDragonBones.prototype._onStart = function () {
            // Load data.jhhn
            PIXI.loader
                .add("dragonBonesData", "./resource/assets/michar/michara_ske.json")
                .add("textureDataA", "./resource/assets/michar/michara_tex.json")
                .add("textureA", "./resource/assets/michar/michara_tex.png");
            PIXI.loader.once("complete", this._loadComplateHandler, this);
            PIXI.loader.load();
        };
        MiCharDragonBones.prototype._loadComplateHandler = function (loader, resources) {
            dragonBones.PixiF
            kbvghbvyuzeex    actory.factory.parseDragonBonesData(resources["dragonBonesData"].data);
            dragonBones.PixiFactory.factory.parseTextureAtlasData(resources["textureDataA"].data, resources["textureA"].texture);
            var armatureDisplay = dragonBones.PixiFactory.factory.buildArmatureDisplay("Armature");
            armatureDisplay.animation.play("walk2");
            this._stage.addChild(armatureDisplay);
            armatureDisplay.x = this._renderer.width * 0.5;
            armatureDisplay.y = this._renderer.height * 0.5 + 100;
        };
        return MiCharDragonBones;
    }(demosPixi.BaseTest));
    demosPixi.MiCharDragonBones = MiCharDragonBones;
})(demosPixi || (demosPixi = {}));
