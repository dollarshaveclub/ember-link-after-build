/* jshint node: true */
var fs = require('fs');
var path = require('path');

var merge = function(defaults, attrs) {
  for (var key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      if (typeof attrs[key] === 'object') {
        defaults[key] = merge(defaults[key], attrs[key]);
      } else {
        defaults[key] = attrs[key];
      }
    }
  }

  return defaults;
};

var defaults = {
  environments: ["development"],
  assetPaths: ["assets/images"]
};

var Config = function(attrs) {
  this.environments = attrs.environments;
  this.assetPaths = attrs.assetPaths;
};

Config.load = function(root) {
  var configPath = 'config/link-after-build.js';
  var config = {};

  if (root && fs.existsSync(path.join(root, configPath))) {
    config = require(path.join(root, configPath));
  }

  return new Config(merge(defaults, config));
};

module.exports = Config;
