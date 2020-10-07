const string = `
.dog {
  position: absolute;
  top: 52%;
  width: 50vmin;
  height: 40vmin;
  z-index: 0;
}
.heart {
  position: absolute;
  width: 6%;
  height: 7%;
  background-color: #e64356;
  border-bottom-right-radius: 23%;
  opacity: 0;
  animation-fill-mode: both;
}
@keyframes heart-beat {
  0% {
    transform: scale(0.75) rotate(35deg);
    opacity: 1;
  }
  5%, 15%, 25% {
    transform: scale(1) rotate(35deg);
  }
  10%, 20% {
    transform: scale(0.75) rotate(35deg);
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(35deg) translateY(-10px) translateX(-10px);
    opacity: 0;
  }
}
.heart--1 {
  top: -25%;
  left: 15%;
  animation: heart-beat 2s ease-out infinite 1.5s;
}
.heart--2 {
  top: -36%;
  left: 7%;
  animation: heart-beat 2s ease-out infinite 1s;
}
.heart--3 {
  top: -48%;
  left: 14%;
  animation: heart-beat 2s ease-out infinite 0.5s;
}
.heart--4 {
  top: -53%;
  left: -3%;
  animation: heart-beat 2s ease-out infinite;
}
.heart:before,
.heart:after {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  border-radius: 50%;
  background-color: #e64356;
}
.heart:after {
  bottom: 0px;
  left: -53%;
}
.heart:before {
  top: -53%;
  right: 0px;
  transform: rotate(45deg);
}
.body {
  position: absolute;
  width: 100%;
  height: 50%;
  background-color: #f79e38;
  border-top-right-radius: 17% 40%;
  border-top-left-radius: 25%;
  border-bottom-right-radius: 5% 13%;
  border-bottom-left-radius: 30% 40%;
  z-index: 3;
}
.cheast {
  position: absolute;
  width: 45%;
  height: 100%;
  background-color: #fff;
  border-top-right-radius: 17% 40%;
  border-top-left-radius: 25%;
  border-bottom-right-radius: 40% 40%;
  border-bottom-left-radius: 40% 40%;
  z-index: 4;
}
.cheast:after, .cheast:before {
  position: absolute;
  content: "";
  width: 7%;
  height: 55%;
  border-radius: 39%;
  background-color: #fff;
}
.cheast:after {
  top: 36%;
  left: 3%;
  transform: rotate(-1deg);
}
.cheast:before {
  top: 19%;
  left: -4%;
}

.head {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
  animation: dog-head 1s ease-out infinite;
  animation-fill-mode: both;
  animation-direction: alternate;
}
@keyframes dog-head {
  to {
    transform: translateX(-3px) rotate(3deg);
  }
}
.tail {
  position: absolute;
  top: -14%;
  left: 92%;
  width: 10%;
  height: 45%;
  background-color: #f79e38;
  border-top-right-radius: 30% 30%;
  border-top-left-radius: 40% 30%;
  border-bottom-right-radius: 30% 40%;
  border-bottom-left-radius: 40% 40%;
  z-index: 2;
  transform: rotate(20deg);
  animation: dog-tail 170ms ease-out infinite;
}
@keyframes dog-tail {
  from, to {
    transform: rotate(10deg);
  }
  50%, 60% {
    transform: rotate(70deg) translateX(10px) translateY(2px);
  }
}
.tail:before {
  position: absolute;
  content: "";
  top: -8%;
  left: -7%;
  width: 100%;
  height: 50%;
  background-color: #f79e38;
  border-radius: 50%;
  animation: dog-tail-before 160ms ease-out infinite;
}
@keyframes dog-tail-before {
  from, to {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
}
.legs {
  position: absolute;
  top: 97%;
  left: 0;
  width: 100%;
  height: 30%;
  z-index: 2;
  animation: dog-legs 1s ease-out infinite 1.5s;
  animation-fill-mode: both;
  animation-direction: alternate;
}
@keyframes dog-legs {
  from {
    transform: translateY(-1px);
  }
  to {
    transform: translateY(0px);
  }
}
.legs__front, .legs__back {
  width: 10%;
  height: 100%;
  background-color: #f79e38;
  position: absolute;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 100%;
}
.legs__front:after, .legs__back:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 100%;
  height: 49%;
  background-color: #fff;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 100%;
}
.legs__front--left {
  left: 38%;
  transform: rotate(1deg);
}
.legs__front--right {
  left: 20%;
  transform: rotate(-4deg);
}
.legs__back--left {
  left: 69%;
  transform: rotate(-7deg);
}
.legs__back--right {
  left: 85%;
  transform: rotate(2deg);
}

.face {
  height: 40%;
  width: 42%;
  position: absolute;
  top: -13%;
  left: -3%;
  background-color: #fff;
  border-top-right-radius: 45% 50%;
  border-top-left-radius: 35% 50%;
  border-bottom-left-radius: 35% 21%;
  z-index: 6;
}
.face:after, .face:before {
  content: "";
  position: absolute;
  background-color: #f79e38;
}
.face:after {
  width: 27%;
  left: 7%;
  height: 23%;
  border-top-right-radius: 100% 100%;
  border-bottom-left-radius: 49% 100%;
  transform: rotate(-64deg);
  top: -1%;
  border-top-left-radius: 0% -20%;
  border-bottom-right-radius: 52% 0%;
  box-shadow: rgba(0, 0, 0, 0.1) 2px -6px 11px 1px;
}
.face:before {
  width: 55%;
  left: 42%;
  top: 0%;
  height: 35%;
  border-radius: 23% 7% 16% 12%;
  transform: rotate(0deg) scaleX(-1);
}

.eye {
  width: 6%;
  height: 6%;
  position: absolute;
  border-radius: 100%;
  top: 24%;
  background-color: #000;
  z-index: 6;
  animation: dog-eye 1800ms infinite;
}
@keyframes dog-eye {
  from, to {
    animation-timing-function: step-end;
    opacity: 1;
  }
  50%, 55% {
    animation-timing-function: step-start;
    opacity: 0;
  }
}
.eye--left {
  left: 27%;
}
.eye--right {
  left: 46%;
}

.mouth {
  background-color: transparent;
  border-color: #000;
  width: 44%;
  border-style: solid;
  border-width: 0.7vmin;
  height: 48%;
  z-index: 6;
  position: absolute;
  bottom: 35%;
  left: 14%;
  border-top-color: transparent;
  border-bottom-left-radius: 72% 100%;
  border-bottom-right-radius: 77% 100%;
  border-right-color: transparent;
  border-top-right-radius: 50%;
  border-left-color: transparent;
  transform: rotate(-41deg);
}

.year {
  position: absolute;
}
.year--left {
  top: -40%;
  left: 3%;
  height: 47%;
  width: 19%;
  z-index: 1;
  background-color: #e99036;
  border-top-left-radius: 68% 100%;
  border-top-right-radius: 100% 100%;
  transform-origin: bottom center;
  animation: left-year 1000ms ease-out infinite;
  animation-fill-mode: both;
  animation-direction: alternate;
}
@keyframes left-year {
  from {
    transform: rotate(-26deg);
  }
  25% {
    transform: rotate(-35deg);
  }
  50% {
    transform: rotate(-26deg);
  }
  to {
    transform: rotate(-40deg);
  }
}
.year--right {
  top: -39%;
  left: 19%;
  height: 38%;
  width: 18%;
  z-index: 1;
  background-color: #f79e38;
  border-top-left-radius: 56% 100%;
  border-top-right-radius: 100% 100%;
  transform-origin: bottom center;
  border-bottom-right-radius: 14% 38%;
  animation: right-year 1000ms ease-out infinite;
  animation-fill-mode: both;
  animation-direction: alternate;
}
@keyframes right-year {
  from {
    transform: rotate(-331deg);
  }
  25% {
    transform: rotate(-320deg);
  }
  50% {
    transform: rotate(-331deg);
  }
  to {
    transform: rotate(-320deg);
  }
}

.nose {
  position: absolute;
  width: 24%;
  height: 24%;
  background-color: #fff;
  z-index: 7;
  left: -12%;
  top: -3%;
  border-bottom-left-radius: 50% 88%;
  border-top-left-radius: 11% 43%;
  transform: rotate(12deg);
}
.nose:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 55%;
  background-color: #000;
  border-radius: 100%;
  left: -7%;
  top: -18%;
}`;

const player = {
  id: undefined,
  time: 0,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key] // pause / play / slow
        document.querySelector(key).onclick = player[value]
      }
    }

  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()




// let n = 1
// demo.innerText = string.substr(0, n)
// demo2.innerHTML = string.substr(0, n)

// let id = setInterval(() => {
//   n += 1
//   if (n > string.length){
//     window.clearInterval(id)
//     return
//   }
//   demo.innerText = string.substr(0, n)
//   demo2.innerHTML = string.substr(0, n)
// }, 300)