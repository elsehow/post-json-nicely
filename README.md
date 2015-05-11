a preferrable api for posting JSON using jquery

## postJson ($, url, javascriptObject)

JSON.stringifies `javascriptObject` and posts it to `url`.

returns a promise

## example usage

```coffeescript
myRequest = postJson($, '/json', {hi:'hey'})
myRequest.done(
	(data, ...) -> console.log 'server says:', data)
myRequest.fail(
	(jqXHR, textStatus, err) -> alert 'post req failed!', jqXHR)
myRequest.always(
	() -> console.log 'made a post req')
```
