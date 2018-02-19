var mymodule = require('./module6.js')

//console.log(process.argv)

mymodule(process.argv[2], process.argv[3], function (err, list) {
    if (err) {
        return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
        console.log(file)
    })
})

/*
const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
*/