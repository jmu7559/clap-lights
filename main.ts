radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playMelody("C5 B C5 B A A G D ", 120)
        radio.sendNumber(1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendNumber(0)
    }
})
let lightsOn = false
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 140)
