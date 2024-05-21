var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/register', function(req, res, next) {
  console.log(req.body)
  res.status(200).json({
    message: "ok"
  });
});

module.exports = router;
