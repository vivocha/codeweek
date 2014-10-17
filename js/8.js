$('h2').on('click', function () {
  $(this)
    .parent('section')
    .find('p, div')
    .toggle();
});

$('.gallery img').on('click', function () {
  var $this = $(this);
  var $next = $this.next();

  $this.hide();
  if ($next.size()) {
    $next.show();
  } else {
    $this
      .parent('.gallery')
      .find('img:first')
      .show();
  }
});

$('.gallery img:not(:first)').hide()

$('#expandall').on('click', function () {
  $('section')
    .find('p, div')
    .show();
})

$('#collapseall').on('click', function () {
  $('section')
    .find('p, div')
    .hide();
})
