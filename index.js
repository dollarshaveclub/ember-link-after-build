/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

// Idea stolen from:
// http://stackoverflow.com/questions/28663116/ember-cli-how-to-exclude-a-folder-within-public-from-build
//

module.exports = {
  name: 'ember-link-after-build',

  // link additional assets after build
  postBuild: function(result) {

    if (process.env.EMBER_ENV === 'development') {

      var buildDirPath = result.directory;

      var srcpath = path.resolve('assets/images');
      var dstpath = path.resolve(buildDirPath + "/assets/images");

      try { fs.symlinkSync(srcpath,dstpath); }
      catch (e) { /* Dir exists. */ }
    }
  }

};
