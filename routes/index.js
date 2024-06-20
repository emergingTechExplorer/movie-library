const express = require('express');
const router = express.Router();

// the below will point to localhost:3000 which is root of the application
router.get('/', (req, res) => {
  //   res.send('Hello World');
  res.render('index');
});

// export the router
module.exports = router;
