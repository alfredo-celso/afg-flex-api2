var express = require('express');
var dotenv = require('dotenv');
var router = express.Router();

dotenv.config();

/* GET home page only with "start" parameter. */
router.get('/:p_action/', function(req, res, next) {
  var d_date = new Date().toISOString().slice(0, 10);
  console.log('Setting up period: ', new Date().toISOString().slice(0, 10));
  var s_url = process.env.FLEX_API_LINK12 + '/' + d_date;
  console.log('index  Environment: ', process.env.ENVIRONMENT, ' link: ', s_url);

  res.render('index', { s_title: process.env.SLOGAN, environment: process.env.ENVIRONMENT, s_image_logo:process.env.IMAGE_LOGO,
  url: s_url });
});


module.exports = router;
