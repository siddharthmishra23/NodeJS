const http = require('http')
const fs = require('fs')


function rqListener (request, response){
//console.log(request.url , request.method , request.headers)
//process.exit() to exit from a server
const url = request.url
const method = request.method

if(url ==='/'){
    // some html to show
}

if(url === '/message' && method ==='POST'){

    // write to file
fs.writeFileSync('message.txt' , "dummy")
response.statusCode = 302 // tells browser to redirect
response.setHeader('Location', '/') //redirection to /
return response.end()
}
response.setHeader('name','text/html')
response.write('<html>')
response.write('<head></head>')
response.write('<body><h1>hello from nodeJS</h1></body>')
response.write("</html>")
response.end()
}

const server = http.createServer(rqListener);

server.listen(3000)