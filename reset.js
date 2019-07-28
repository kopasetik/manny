var request2 = new XMLHttpRequest()
request2.open('PUT', 'https://api.myjson.com/bins/1cdz25', true)
request2.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
request2.send(JSON.stringify({stops:[]}))
