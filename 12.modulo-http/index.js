const http = require('http')

http.createServer((request, response) => {
    response.end('Hello World')
})
.listen(5000, () => console.log('o servidor esta ok'))