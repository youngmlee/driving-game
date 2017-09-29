/* eslint-disable no-unused-vars */

class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
  }
  accelerate(amount) {
    this.speed += amount
  }
  move() {
    switch (this.direction) {
      case 'North':
        this.location[1] += this.speed
        break
      case 'South':
        this.location[1] -= this.speed
        break
      case 'East':
        this.location[0] += this.speed
        break
      case 'West':
        this.location[0] -= this.speed
    }
  }
  static start(car) {
    setInterval(function () {
      car.move()
    }, 50)
  }
}

var $police = document.querySelector('img')

$police = new Car('East', 1, [0, 0])

function render() {
  var $police = document.querySelector('img')
  var [x, y] = this.$police.location
  $police.style.left = x + 'px'
  $police.style.top = y + 'px'
}

document.body.addEventListener('keydown', function (e) {
  const pressedKey = e.keyCode.toString()
  switch (pressedKey) {
    case '32':
      Car.start($police)
      break
  }
})

setInterval(render, 16)

render()
