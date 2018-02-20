var http = require('http')
let result = ''
http.get(process.argv[2], function (response) {
    
    response.setEncoding('utf8')
    response.on('data', function(data){
        result +=data
    })
    response.on('error', console.error)
    response.on('end', function () {
        console.log(result.length)
        console.log(result)
    })
}).on('error', console.error)

/*
var http = require('http')                     
var bl = require('bl')                         
                                               
http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {      
    if (err) {                                 
      return console.error(err)                
    }                                          
    data = data.toString()                     
    console.log(data.length)                   
    console.log(data)                          
  }))                                          
})                                             
*/
