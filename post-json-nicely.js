// Generated by CoffeeScript 1.8.0
(function() {
  var postJson;

  postJson = function($, url, data) {
    return $.ajax({
      type: 'POST',
      url: url,
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    });
  };

  module.exports = postJson;

}).call(this);
