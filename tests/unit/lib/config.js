/* jshint node: true */
'use strict';

var Config = require('../../../lib/config');
var path = require('path');
var expect = require('chai').expect;

describe('lib/configs.js', function() {

  it('initializes with defaults', function() {
    var config = Config.load();
    expect(config.environments).include.members(['development']);
    expect(config.assetPaths).include.members(['assets/images']);

  });


  it('allows settings in config to take precedence', function() {
    var config = Config.load(path.join(__dirname, '../..', 'fixtures'));
    expect(config.environments).include.members(['override-env']);
    expect(config.assetPaths).include.members(['custom/path']);
  });
});
