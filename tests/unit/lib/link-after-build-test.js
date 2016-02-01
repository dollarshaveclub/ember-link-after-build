/* jshint node: true */
'use strict';
var expect = require('chai').expect;
var path = require('path');
var symlinker = require("../../../lib/symlinker");

var srcResult;
var distResult;
var symlinkSyncCount;

var fakeFs = {
  name: 'fakeFs',
  symlinkSync: function(srcpath, dstpath) {
    distResult = dstpath;
    srcResult = srcpath;
    symlinkSyncCount++;

  }
};

describe('lib/symlinker.js', function() {
  beforeEach(function() {
    symlinkSyncCount = 0;
      srcResult = '';
      distResult = '';
  });

  it('symlinks the src path to dst path', function(){
    var rootPath = path.resolve('');
    symlinker.link({
      buildPath: 'mockBuild/Path',
      assetPaths: ['mockAsset/Path'],
      fs: fakeFs }
    );
    expect(srcResult).to.equal(rootPath + '/mockAsset/Path');
    expect(distResult).to.equal(rootPath + '/mockBuild/Path/mockAsset/Path');

  });

  it('symlinks the src path as a second elem of array', function(){
    var rootPath = path.resolve('');
    symlinker.link({
      buildPath: 'mockBuild/Path',
      assetPaths: ['mockAsset/Path', 'mockAsset/Path2'],
      fs: fakeFs }
    );
    expect(srcResult).to.equal(rootPath + '/mockAsset/Path2');
    expect(distResult).to.equal(rootPath + '/mockBuild/Path/mockAsset/Path2');

  });

  it('symlinks the number elms in assetPaths in the array', function(){
    symlinker.link({
      buildPath: 'mockBuild/Path',
      assetPaths: ['mockAsset/Path', 'mockAsset/Path2', 'mockAsset/Path3'],
      fs: fakeFs }
    );
    expect(symlinkSyncCount).to.equal(3);

  });

});
