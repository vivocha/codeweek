// 5.js
var elements = document.body.getElementsByTagName('*');
for (var i in elements) {
  var element = elements[i];
  element.onmouseover = function () {
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
  }
  element.onmouseout = function () {
    this.style.backgroundColor = 'transparent';
    this.style.color = 'inherit';
  }
}
