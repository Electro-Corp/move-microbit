def on_button_pressed_a():
    global dir2
    if not (dir2 == 1):
        if dir2 == -1:
            dir2 += 2
        else:
            dir2 += 1
    basic.pause(100)
    dir2 = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global dir2
    if not (dir2 == -1):
        if dir2 == 1:
            dir2 += -1
        else:
            dir2 += -1
    basic.pause(100)
    dir2 = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

dir2 = 0
dir2 = 0
game2 = 1
y = 0
x = 0
sprite = game.create_sprite(x, y)
while game2 == 1:
    sprite.move(1)
    if dir2 == 1:
        sprite.turn(Direction.RIGHT, 90)
    if dir2 == -1:
        sprite.turn(Direction.RIGHT, -90)
    if sprite.get(LedSpriteProperty.X) == -5 or sprite.get(LedSpriteProperty.X) == 5:
        if sprite.get(LedSpriteProperty.X) == 5:
            sprite.set(LedSpriteProperty.X, -5)
        else:
            sprite.set(LedSpriteProperty.X, 5)
    basic.pause(100)

def on_forever():
    pass
basic.forever(on_forever)
