const fs = require('fs')
const router = require('express').Router()

router.get('/', (req, res) => {
  let path = './data/products.json'
  try {
    let data = JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }))
    res.send({
      status: 200,
      result: data
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