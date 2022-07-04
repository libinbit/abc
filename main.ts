basic.showIcon(IconNames.Heart)
basic.forever(function () {
    for (let index = 0; index <= 100; index++) {
        TM1650.showNumber(index)
    }
})
