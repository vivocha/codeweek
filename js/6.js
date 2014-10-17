// 6.js
$('body').append('ciao');
$('body').append('<a href="#top">Torna su</a>');

var $a = $('<a></a>');
$a.attr('href','#top');
$('body').append($a);

$('h2').click(function () {
  $(this).css({
    color: "red"
  });
});