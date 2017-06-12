let count = 0,
     prev = document.querySelector('.prev'),
     next = document.querySelector('.next')

const showList = document.getElementsByClassName('none')

show(count)

function show (x) {
  count += x
  if (count < 0) {
    count = showList.length - 1
  }

  if (count > showList.length-1) {
    count = 0
  }
  
  for (let i = 0, n = showList.length; i < n; i++) {
    showList[i].style.display = "none"
  }

  showList[count].style.display = "block"
}

prev.addEventListener('click', function() {show(-1)})
next.addEventListener('click', function() {show(1)})

setInterval(function() {show(1)},3000)