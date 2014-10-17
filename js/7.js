// 7.js
$('body *')
  .mouseover(function () {
    $(this).css({
      "background-color": "gray",
      "color": "white"
    });
  })
  .mouseout(function() {
    $(this).css({
      "background-color": "transparent",
      "color": "inherit"
    });
  })
