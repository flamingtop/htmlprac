let count = 0,
    img = document.querySelector('img'),
    pre = document.querySelector('#previos'),
    next = document.querySelector('#next')

const imgList = ["landmark1.jpg","landmark2.jpg","landmark3.jpg"] 

pre.addEventListener('click', function() {changePic(-1)})
next.addEventListener('click', function() {changePic(1)})

function changePic(x) {

  count += x
  if (count < 0) {
    count = imgList.length - 1
  }

  if (count > imgList.length - 1) {
    count = 0
  }

  img.src = imgList[count]

}

