/* eslint-disable no-unused-vars */

class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
  }
  accelerate() {
    this.speed += 1
  }
  static accelerate(car) {
    car.accelerate()
  }
  decelerate() {
    this.speed -= 1
  }
  static decelerate(car) {
    car.decelerate()
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
    this.speed += 1
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

var test = true

function render() {
  var $police = document.querySelector('img')
  var $crash = document.querySelector('.crash')
  var [x, y] = this.$police.location
  $police.style.left = x + 'px'
  $police.style.top = y + 'px'
  var $mph = document.querySelector('.mph')
  $mph.textContent = 'Current speed: ' + this.$police.speed + ' mph'
}

document.body.addEventListener('keydown', function (e) {
  const pressedKey = e.keyCode.toString()
  switch (pressedKey) {
    case '71':
      Car.start($police)
      break
    case '72':
      Car.stop($police)
      break
    case '65':
      Car.turn($police, 'West')
      break
    case '87':
      Car.turn($police, 'North')
      break
    case '68':
      Car.turn($police, 'East')
      break
    case '83':
      Car.turn($police, 'South')
      break
    case '13':
      Car.accelerate($police)
      break
    case '16':
      Car.decelerate($police)
      break
  }
})

setInterval(render, 16)

render()
