input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # . # . #
        # # . # #
        . . . . .
        `)
    music.play(music.stringPlayable("E E E A G E F F ", 120), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("C C C C5 B G A A ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
