const range = document.getElementById('points')
const directionRadios = document.getElementsByName('direction')
const timeRadios = document.getElementsByName('time')
const body = document.querySelector('body')
let timer = null
let direction = 'fall'
let speed = (1001 - range.value) / 10

snowing(speed, direction)

function snowing(speed, direction) {
  timer = setInterval(() => {
    createSnowflake(direction, 3)
  }, speed)
}

function createSnowflake(direction, duration) {
  const snowflake = document.createElement('i')
  snowflake.className = 'fa fa-snowflake-o snowflake'
  document.body.appendChild(snowflake)

  snowflake.style.left = Math.random() * 160 - 30 + 'vw'
  snowflake.style.fontSize = 5 + Math.random() * 20 + 'px'
  snowflake.style.opacity = Math.random()
  snowflake.style.animationDuration = 2 + Math.random() * duration + 's'
  snowflake.style.animationName = direction
  setTimeout(() => {
    snowflake.remove()
  }, (duration + 3) * 1000)
}

range.addEventListener('input', (e) => {
  clearInterval(timer)
  speed = (1001 - range.value) / 10
  snowing(speed, direction)
})

directionRadios.forEach((radio) => {
  radio.addEventListener('click', () => {
    clearInterval(timer)
    direction = radio.id
    snowing(speed, direction)
  })
})

timeRadios.forEach((radio) => {
  radio.addEventListener('click', () => {
    body.classList = ''
    body.classList.add(radio.id)
  })
})


