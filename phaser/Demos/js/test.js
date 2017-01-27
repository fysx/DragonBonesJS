var demosPhaser = {

    start: function() {
        var game = new Phaser.Game(640, 360, Phaser.WEBGL, 'phaser-example', {
            preload: preload,
            create: create,
            update: update
        });
        var armatureDisplay;
        var F;

        function preload() {

            game.load.json("textureDataA", "./resource/assets/michar/michara_tex.json");
            game.load.json("dragonBonesData", "./resource/assets/michar/michara_ske.json");
            game.load.image("textureA", "./resource/assets/michar/michara_tex.png");
        }

        function create() {
            game.stage.backgroundColor = "#4488AA";
            F = new dragonBones.PhaserFactory(null, game);
            F.parseDragonBonesData(game.cache.getJSON("dragonBonesData"));
            F.parseTextureAtlasData(game.cache.getJSON("textureDataA"), game.cache.getBaseTexture("textureA"));

            armatureDisplay = F.buildArmatureDisplay("Armature");
            armatureDisplay.animation.play("walk2");
            armatureDisplay.x = game.world.width / 2;
            armatureDisplay.scale.set(0.2, 0.2);
        }

        function update() {
            armatureDisplay.y += 0.1;
        }
    }
}
