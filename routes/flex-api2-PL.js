var express = require('express');
var dotenv = require('dotenv');
var router = express.Router();
var request = require('request');

/* GET API page by fix training center and dinamic dates. */
router.get('/API/:p_action/:p_date', function(req, res, next) {
  dotenv.config();

  var options = {
    'method': 'POST',
    'hostname': process.env.FLEX_API_HOSTNAME,
    'path':process.env.FLEX_API_PATH,
    'url': process.env.FLEX_API_URL,
    'headers': {
      'access_token': process.env.FLEX_API_TOKEN,
      'device_location_id': '12',
      'date_range_start': req.params.p_date,
      'date_range_end': req.params.p_date,
      'Cookie': 'CFGLOBALS=urltoken%3DCFID%23%3D1877276%26CFTOKEN%23%3Dfc0f1a97c0f5b73e%2D76118BC9%2DFEE2%2DC60B%2D8255A1EB79C21C42%23lastvisit%3D%7Bts%20%272024%2D01%2D29%2023%3A40%3A52%27%7D%23hitcount%3D6%23timecreated%3D%7Bts%20%272024%2D01%2D29%2023%3A36%3A41%27%7D%23cftoken%3Dfc0f1a97c0f5b73e%2D76118BC9%2DFEE2%2DC60B%2D8255A1EB79C21C42%23cfid%3D1877276%23; CFID=2000842; CFTOKEN=a8210bb90d6c6c6a-1B8076F0-B9D5-9291-4E8F730227A6F5C9; CK_OPEN_LEFT_BAR=1'
    }
  };

  //console.log('Options setup:', options);

  request(options, function (error, response) {
    if (error) throw new Error(error);
    let sessionArray = JSON.parse(response.body);
    res.send(sessionArray.data);
  });
});


module.exports = router;
