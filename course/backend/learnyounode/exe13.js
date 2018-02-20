const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
    // request handling logic...
    let result = {}
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let parsedUrl = url.parse(req.url, true)
    let date = new Date(parsedUrl.query.iso)
    if (parsedUrl.pathname.indexOf('parsetime') > -1) {
        result = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    } else {
        result = {
            unixtime: date.getTime() 
        }
    }
    res.end(JSON.stringify(result))
})
server.listen(process.argv[2])

/*
const http = require('http')
const url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true)
  const time = new Date(parsedUrl.query.iso)
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
*/
