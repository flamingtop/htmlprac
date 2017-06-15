( function () {
  let item = document.querySelector('.drag-item'),
 container = document.querySelector('.drag-container'),
 itemWidth = item.getBoundingClientRect().width,
  conRight = container.getBoundingClientRect().right,   // container left 
   conLeft = container.getBoundingClientRect().left


  item.onmousedown = function (event) {
    itemLeft = item.getBoundingClientRect().left
    shiftX = event.pageX - itemLeft     // 鼠标点击位置与滑块左侧的距离
    rightLimit = conRight - itemWidth + shiftX   //鼠标在container 上滑动的极限区间
    leftLimit = conLeft + shiftX
    container.addEventListener('mousemove', onMousemove)
  }

  function onMousemove (event) {
    moveAt(event.pageX)
  }

  function moveAt(pageX) {
    if (pageX < rightLimit && pageX > leftLimit) {
      item.style.left = pageX - shiftX - conLeft + "px"
    }
  }

  item.onmouseup = function () {
    container.removeEventListener('mousemove', onMousemove)
    return false
  }
}) ()