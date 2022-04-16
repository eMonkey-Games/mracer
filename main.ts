scene.onOverlapTile(SpriteKind.Player, assets.tile`empty cave`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`MONEY`, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`spikes`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`acid`, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
mySprite = sprites.create(assets.image`truck2`, SpriteKind.Player)
mySprite.ay = 500
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
assets.animation`truck2 animated`,
100,
true
)
