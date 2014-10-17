// 4.js
var img = document.createElement('img');
img.src =  "http://a3.files.biography.com/image/upload/c_fit,dpr_2.0,h_700,q_40,w_1023/MTIwNjA4NjMzODgyOTY5NjEy.jpg"
document.getElementById('gallery').appendChild(img);

var title = document.getElementsByTagName('h1')[0];
title.onclick = function () {
  this.style.backgroundColor = 'pink';
}
