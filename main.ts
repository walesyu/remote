joystickbit.initJoystickBit()
radio.setTransmitPower(7)
radio.setGroup(100)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
        radio.sendNumber(1)
        basic.pause(100)
        basic.clearScreen()
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
        radio.sendNumber(2)
        basic.pause(100)
        basic.clearScreen()
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
        radio.sendNumber(3)
        basic.pause(100)
        basic.clearScreen()
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
        radio.sendNumber(4)
        basic.pause(100)
        basic.clearScreen()
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(5)
        basic.pause(100)
        basic.clearScreen()
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # . # .
            . . # . .
            `)
        radio.sendNumber(6)
        basic.pause(100)
        basic.clearScreen()
    }
})
