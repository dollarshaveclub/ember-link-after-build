[![Build Status](https://travis-ci.org/dollarshaveclub/ember-link-after-build.svg)](https://travis-ci.org/dollarshaveclub/ember-link-after-build)
[![Ember Observer Score](http://emberobserver.com/badges/ember-link-after-build.svg)](http://emberobserver.com/addons/ember-link-after-build)


# Ember-link-after-build

[![Greenkeeper badge](https://badges.greenkeeper.io/dollarshaveclub/ember-link-after-build.svg)](https://greenkeeper.io/)

## General Information

### What is ember-link-after-build?
This addon symlinks a `src` folder in the build directory on the postBuild hook of the `ember build` task. It runs in `development` mode(by default).

### Why does this help?
Long build times suck. The shorter the build time, the more productive we can be.

In the build process, there are many static files that are not processed at all. Since the default build process is just to copy the files to your build folder, the minimalist way is to symlink instead of copy the files.

###Results
Our images assets folder is 77 MB. By removing the copying step in the build task, we reduced our initial build time from ~15 seconds to ~12 seconds, and subsequent build times (in `ember build --watch`) from ~6-8 seconds to ~2-3 seconds. Obviously, the larger the `src` folder, the more time you will save.

###To Contribute

1. Clone this directory
2. Run tests: `npm run test`

## How to Use / Configuration


1. Add `"ember-link-after-build": "^1.0.1"` to your package.json inside the dependencies hash file:


	```
	//package.json

	dependencies: {
	...
	"ember-link-after-build": "^1.0.1",
	...

	```

2. In your ember project, run `npm install`

3. By default, it will symlink the `assets/images` folder when running in development mode. You can override the configuration by adding `link-after-build.js` in the `config` folder of your ember project.
4.
	```
	module.exports = {
	  environments: [ "development" ],
	  assetPaths: [ "asset/images" ]
	};

	```

4. In your `ember-cli-build.js` don't import the src folder in the target environment.

	Example:

	```
	// Images.
	  if (ENV !== 'development') {
	  var images = new Funnel('assets/images', {
	  srcDir: '/',
	  include: ['**/*'],
	  destDir: '/assets/images'
	  });

	  output.push( images );
	}
	```
