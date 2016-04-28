'use strict';

const x = 5;
const y = 5;
const gm = require('gm');
gm('./map.png')
  .fill('#ff0000')
  .drawCircle(x, y, x+8, y+8)
  .write('./mapnew.png', (err) => {
    console.log(err);
  });
