input.onButtonPressed(Button.A, function () {
    if (!(dir2 == 1)) {
        if (dir2 == -1) {
            dir2 += 2
        } else {
            dir2 += 1
        }
    }
    basic.pause(100)
    dir2 = 0
})
input.onButtonPressed(Button.B, function () {
    if (!(dir2 == -1)) {
        if (dir2 == 1) {
            dir2 += -1
        } else {
            dir2 += -1
        }
    }
    basic.pause(100)
    dir2 = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LOGO <= 1000) {
        LOGO += 100
    } else {
        LOGO = 100
    }
})
let LOGO = 0
let dir2 = 0
dir2 = 0
let game2 = 1
let y = 0
let x = 0
let sprite = game.createSprite(x, y)
while (game2 == 1) {
    sprite.move(1)
    if (dir2 == 1) {
        sprite.turn(Direction.Right, 90)
    }
    if (dir2 == -1) {
        sprite.turn(Direction.Right, -90)
    }
    serial.writeLine("" + (sprite.get(LedSpriteProperty.X)))
    if (sprite.get(LedSpriteProperty.X) == 0 || sprite.get(LedSpriteProperty.X) == 4) {
        if (sprite.get(LedSpriteProperty.X) == 4) {
            sprite.set(LedSpriteProperty.X, 1)
        } else {
            sprite.set(LedSpriteProperty.X, 3)
        }
    }
    if (sprite.get(LedSpriteProperty.Y) == 0 || sprite.get(LedSpriteProperty.Y) == 4) {
        if (sprite.get(LedSpriteProperty.Y) == 4) {
            sprite.set(LedSpriteProperty.Y, 1)
        } else {
            sprite.set(LedSpriteProperty.Y, 3)
        }
    }
    basic.pause(LOGO)
}
basic.forever(function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
basic.forever(function () {
	
})
