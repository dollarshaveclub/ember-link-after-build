/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

// Idea stolen from:
// http://stackoverflow.com/questions/28663116/ember-cli-how-to-exclude-a-folder-within-public-from-build
//

module.exports = {
  name: 'symlinker',

  /**
   * @param options
   * @param {String} options.buildPath The build path of assets
   * @param {Array} options.assetPaths Array of Paths for the src
   * @param {Obj} options.fs fs module
   */

  link: function(options) {
    var filestream = (options && options.fs) || fs;
    options.assetPaths.forEach(function (assetPath) {
      var srcpath = path.resolve(assetPath);
      var dstpath = path.resolve(options.buildPath + '/' + assetPath);
      try { filestream.symlinkSync(srcpath,dstpath); }
      catch (e) {
        console.error("\x1b[31m" + "Unable to Symlink. See Stacktrace:");
        console.error(e.stack);
      }
    });
  }

};
