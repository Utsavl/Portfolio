const photoContainer = document.querySelector('.photoContainer')

// Creating boxes for photo particles
for (let i = 0; i < 400; i++) {
  const ele = document.createElement('div')
  ele.classList.add('photoBox')
  photoContainer.appendChild(ele)
}

// Applying the anime.js animation
const block = document.querySelectorAll('.photoBox')
const animation = anime.timeline({
  targets: block,
  easing: 'easeInOutExpo',
  loop: true
})

animation
  .add({
    delay: 4000,
    scale: 0,
    translateX: function () {
      return anime.random(-360, 2100)
    },
    translateY: function () {
      return anime.random(-360, 2100)
    },
    rotate: function () {
      return anime.random(360, -360)
    },

    duration: function () {
      return anime.random(500, 4000)
    }
  })
  .add({
    scale: 1,
    translateX: 0,
    translateY: 0,
    rotate: 0,

    duration: function () {
      return anime.random(500, 4000)
    }
  })
