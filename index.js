/* jshint node: true */
'use strict';

var symLinker = require('./lib/symlinker');
var Config = require('./lib/config');


module.exports = {
  name: 'ember-link-after-build',
  postBuild: function(results) {
    var config = Config.load(this.project.root);

    if (process.env.EMBER_ENV.includes(config.environments)) {
      symLinker.link({
        buildPath: results.directory,
        assetPaths: config.assetPaths
      });
    }
  }

};
