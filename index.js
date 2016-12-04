var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-breakpoints'),
  require('seed-dash'),
  require('seed-publish'),
  require('seed-thumbnail'),
  path.join(__dirname, 'scss')
);

module.exports = files;
