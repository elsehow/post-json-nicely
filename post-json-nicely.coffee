postJson = ($, url, data) ->
  return $.ajax({
    type: 'POST',
    url: url,
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'application/json'
  })

module.exports = postJson
