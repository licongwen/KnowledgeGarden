function throttle (fn, delay) {
  let timer
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay)
    }
  }
}

function debounce (fn, delay) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

function test() {
  console.log(1111)
}

const throttleTest = throttle(test, 2000)
throttleTest()
