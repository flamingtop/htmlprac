let audio = document.querySelector('audio'),
      btn = document.querySelector('#toggle'),
     time = document.querySelector('#time'),
   volume = document.querySelector('#volume'),
 progress = document.querySelector('progress')

btn.addEventListener('click', toggle)

volume.addEventListener('change', changeVolume)

audio.addEventListener('timeupdate', function() {
  progress.max = audio.duration
  progress.value = audio.currentTime

  current = secToMin(audio.currentTime)
  duration = secToMin(audio.duration)
  time.textContent = `${current}/${duration}`
})

function toggle () {
  if (!audio) {
    return false 
  }
  
  if (btn.value === 'play') {
    btn.value = 'pause'
    audio.play()
  } else {
    btn.value = 'play'
    audio.pause()
  }
}

function changeVolume () {
  audio.volume = volume.value 
}

function secToMin (secs) {
  if(secs <= 0) {
    return false
  }

  if (secs < 60) {
    let sec =  parseInt(secs)
    return `0:${sec}`
  }

  let min = parseInt(secs / 60),
      sec = parseInt(secs - min * 60)
  
  return `${min}:${sec}`
}