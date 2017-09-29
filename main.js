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
    var $police = document.querySelector('img')
    switch (this.direction) {
      case 'North':
        $police.setAttribute('src', 'police-north.png')
        $police.setAttribute('class', 'northsouth')
        this.location[1] -= this.speed
        break
      case 'South':
        $police.setAttribute('src', 'police-south.png')
        $police.setAttribute('class', 'northsouth')
        this.location[1] += this.speed
        break
      case 'East':
        $police.setAttribute('src', 'police-east.png')
        $police.setAttribute('class', 'img')
        this.location[0] += this.speed
        break
      case 'West':
        $police.setAttribute('src', 'police-west.png')
        $police.setAttribute('class', 'img')
        this.location[0] -= this.speed
        break
    }
  }
  static start(car) {
    setInterval(function () {
      car.move()
    }, 50)
  }
  stop() {
    this.speed = 0
  }
  static stop(car) {
    car.stop()
  }
  turn(direction) {
    this.direction = direction
  }
  static turn(car, direction) {
    car.turn(direction)
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
    case '71':
      Car.start($police)
      break
    case '83':
      Car.stop($police)
      break
    case '37':
      Car.turn($police, 'West')
      break
    case '38':
      Car.turn($police, 'North')
      break
    case '39':
      Car.turn($police, 'East')
      break
    case '40':
      Car.turn($police, 'South')
      break
  }
})

setInterval(render, 16)

render()
