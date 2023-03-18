const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (_, res) => {
  console.log('been here')
  const stats = await redis.getAsync('added_todos')
  console.log(stats)
  res.json({
    added_todos: stats
  })
})

module.exports = router;

