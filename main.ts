input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    check_song(0)
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    check_song(2)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(294, music.beat(BeatFraction.Whole))
    check_song(1)
})
function play_song () {
    for (let value of song) {
        if (value == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            music.playTone(262, music.beat(BeatFraction.Whole))
        } else if (value == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . #
                . . . . .
                . . . . .
                `)
            music.playTone(294, music.beat(BeatFraction.Whole))
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . #
                . . . . .
                . . . . .
                `)
            music.playTone(330, music.beat(BeatFraction.Whole))
        }
        music.rest(music.beat(BeatFraction.Half))
    }
}
function reset () {
    song = [0]
    song_copy = [0]
    play_song()
}
function check_song (button: number) {
    if (song_copy.shift() != button) {
        music.playTone(131, music.beat(BeatFraction.Breve))
        reset()
    }
    if (song_copy.length == 0) {
        new_note = randint(0, 2)
        song.push(new_note)
        for (let value of song) {
            song_copy.push(value)
        }
        music.rest(music.beat(BeatFraction.Whole))
        play_song()
    }
    return 1
}
let new_note = 0
let song_copy: number[] = []
let song: number[] = []
music.setVolume(255)
song = [0]
song_copy = [0]
play_song()
