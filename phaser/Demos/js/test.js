

var demosPhaser = {

    start: function() {
        var game = new Phaser.Game(400, 400, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create });

        var F;

        function preload(){

            game.load.json("textureDataA","./resource/assets/michar/michara_tex.json");
            game.load.json("dragonBonesData","./resource/assets/michar/michara_ske.json");
            game.load.image("textureA","./resource/assets/michar/michara_tex.png");
            /*var loader = new PIXI.loaders.Loader();
            loader
                .add("dragonBonesData", "./resource/assets/michar/michara_ske.json")
                .add("textureDataA", "./resource/assets/michar/michara_tex.json")
                .add("textureA", "./resource/assets/michar/michara_tex.png");
            loader.once("complete", loadComplateHandler, this);
            loader.load();*/
        }

        function create() {
            F =  new dragonBones.PhaserFactory(null,game);
            F.parseDragonBonesData(game.cache.getJSON("dragonBonesData"));
            F.parseTextureAtlasData(game.cache.getJSON("textureDataA"), game.cache.getBaseTexture("textureA"));

            var armatureDisplay = F.buildArmatureDisplay("Armature");
            armatureDisplay.animation.play("walk1");
           // armatureDisplay.animation.timeScale = 1;
          //  armatureDisplay.animation.play("walk2");
            //armatureDisplay.create(game.world.width * 0.5,game.world.height * 0.5+100);

            //this._stage.addChild(armatureDisplay);
            armatureDisplay.x = game.world.width / 2;
            armatureDisplay.y = game.world.height  / 2 + 50;
        }
    }
}