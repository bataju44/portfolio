const canvas = document.getElementById("perc")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const N = 120

const randomField = []
const colorField = []

for(let i=0;i<N;i++){

randomField[i]=[]
colorField[i]=[]

for(let j=0;j<N;j++){

randomField[i][j]=Math.random()

const hue = Math.floor(Math.random()*360)

colorField[i][j] = `hsl(${hue},70%,60%)`

}

}

function draw(p){

ctx.clearRect(0,0,canvas.width,canvas.height)

const size = canvas.width/N

for(let i=0;i<N;i++){

for(let j=0;j<N;j++){

if(randomField[i][j] < p){

ctx.fillStyle = colorField[i][j]

ctx.fillRect(i*size,j*size,size,size)

}

}

}

}

function scrollProgress(){

const scrollTop = window.scrollY
const height = document.body.scrollHeight-window.innerHeight

return scrollTop/height

}

function updateBorder(p){

const panel = document.querySelector(".panel")

const rect = panel.getBoundingClientRect()

const size = canvas.width/N

let colorHit = null

for(let i=0;i<N;i++){

for(let j=0;j<N;j++){

if(randomField[i][j] < p){

const x=i*size
const y=j*size

if(
x>rect.left &&
x<rect.right &&
y>rect.top &&
y<rect.bottom
){

colorHit = colorField[i][j]

}

}

}

}

if(colorHit){

panel.style.borderColor = colorHit

}

}

window.addEventListener("scroll",()=>{

const p = 0.1 + scrollProgress()*0.7

draw(p)

updateBorder(p)

})

draw(0.1)