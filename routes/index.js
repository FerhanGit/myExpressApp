"use strict";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index2', { title: 'Express' ,  title2: 'Express 2' });
});

class Beer {
  sell(location) {
  }
}

class SpottedCow extends Beer {
  constructor() {
    super();
    this.deliciousness = 50;
    this.locations = 'Wisconsin';
    this.name = 'Spotted Cow';
  }
  sell(location) {
    if(location !== 'Wisconsin') {
       
    }
  }
}

class JailTimeError {
    construct() {
        return 'Error baby@';
    }
}
class MillerLite extends Beer {
  constructor() {
    super();
    this.deliciousness = 10;
    this.locations = 'anywhere';
    this.name = 'Miller Lite';
  }
  sell(location) {
    if(Location.hasSportsTeam(location)) {
      return true;
    }
    // Enh, we'll sell anywhere
    return true;
  }
}

let beer = new SpottedCow();

console.log('I am drinking a delicious', beer.name, 'that is available', beer.locations);

beer.sell();
module.exports = router;
