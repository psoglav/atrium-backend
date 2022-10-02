const fs = require('fs')
const router = require('express').Router()

router.get('/:name', (req, res) => {
  let path = './data/products/' + req.params.name + '.json'
  try {
    let result = JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }))
    res.send({
      status: 200,
      result
    })
  } catch {
    res.send({
      status: 404,
      statusText: 'no data',
      result: null
    })
  }
})

module.exports = router