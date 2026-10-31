OLED.init(128, 64)
let noise = 0
basic.forever(function () {
    noise = Math.round(SmartCity.read_sound_sensor(AnalogPin.P1))
    led.plotBarGraph(
    noise,
    100
    )
    OLED.clear()
    OLED.writeStringNewLine("Hello" + noise + "db0")
    basic.pause(1000)
})
