$(function() {

  $('#commentsIn').on('submit', function(e) {
    e.preventDefault();

    var data = $(this).serializeArray();

    var newComment = {};

    for (var i = 0; i < data.length; i++) {
      if (data[i].name === 'message') {
        newComment.message = data[i].value;
      } else if (data[i].name === 'imageId') {
        newComment.imageId = data[i].value;
      }
    }

    $.ajax({
      url:'/comments',
      type: 'post',
      data: newComment,
    }).done(function(data) {
      var $p = $('<p>');
      $p.text('"' + data.message + '"' + ' for image number ' + data.imageId);
      $('#commentsOut').append($p);
    });

    $(this)[0].reset();
  });

});
