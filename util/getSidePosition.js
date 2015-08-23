function getSidePosition(e){
  var width  = e.target.offsetWidth;
  var height = e.target.offsetHeight;

  var top  = (e.layerY * 2) < height;
  var left = (e.layerX * 2) < width;
  var x = (left) ? e.layerX / width : (width - e.layerX) / width;
  var y = (top)  ? e.layerY / height : (height - e.layerY) / height;

  var pos;

  if (top) {
    if (x > y) {
      pos = "top";
    } else {
      pos = left ? "left" : "right"
    }
  } else {
    if (x > y) {
      pos = "bottom"
    } else {
      pos = left ? "left" : "right"
    }
  }

  return pos;
}