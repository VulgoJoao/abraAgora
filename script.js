const music = document.getElementById("music")
const playBtn = document.getElementById("playBtn")
const progress = document.getElementById("progress")

const current = document.getElementById("current")
const duration = document.getElementById("duration")

const cover = document.getElementById("cover")

function toggleMusic(){

if(music.paused){
music.play()
playBtn.innerHTML="❚❚"
}else{
music.pause()
playBtn.innerHTML="▶"
}

}

function formatTime(sec){

const minutes = Math.floor(sec / 60)
const seconds = Math.floor(sec % 60).toString().padStart(2,'0')

return minutes + ":" + seconds

}

music.addEventListener("loadedmetadata",()=>{

duration.textContent = formatTime(music.duration)

})

music.addEventListener("timeupdate",()=>{

const percent = (music.currentTime / music.duration) * 100
progress.style.width = percent + "%"

current.textContent = formatTime(music.currentTime)

})

function showPhoto(){

document.getElementById("photo").style.display="block"

}

/* GRADIENTE AUTOMÁTICO */

window.addEventListener("load",()=>{

const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

canvas.width = cover.naturalWidth
canvas.height = cover.naturalHeight

ctx.drawImage(cover,0,0)

const pixel = ctx.getImageData(
Math.floor(canvas.width/2),
Math.floor(canvas.height/2),
1,
1
).data

const r = pixel[0]
const g = pixel[1]
const b = pixel[2]

document.body.style.background =
`linear-gradient(to bottom, rgb(${r},${g},${b}), #121212)`

})
