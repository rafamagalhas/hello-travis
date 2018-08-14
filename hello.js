const http = require('http')

//create a server
http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/json'})
  res.end(JSON.stringify({'message': 'Hello Travis!'}))
}).listen(1337, '127.0.0.1')
console.log('Server runing at http://127.0.0.1:1337/')