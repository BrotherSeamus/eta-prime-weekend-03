$(function() {

  $('form').on('submit', function(e) {
    e.preventDefault();

    var data = $(this).serializeArray();

    var newComment = {};

    for (var i = 0; i < data.length; i++) {
      if (data[i].name === 'message') {
        newComment.message = data[i].value;
      };
    }

    newComment.imageId = $(this)[0].id;

    $.ajax({
      url:'/comments',
      type: 'post',
      data: newComment,
    }).done(function(data) {
      var $p = $('<p>');
      $p.text(data.message);
      $('#' + newComment.imageId).append($p);
    });

    $(this)[0].reset();
  });

});
