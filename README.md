# Ember-link-after-build

## General Information

### What is ember-link-after-build?
This addon symlinks the assets/images folder to build when ember build is ran in development mode.

### Why does this help?
Long build times suck. The shorter the build time, the more productive we can be.

In the build process, there are many static files that are not processed at all. Since the default build process is just to copy the files to your build folder, the minimalist way is to symlink instead of copy the files.

###Results
We reduced our initial build time from ~15 seconds to ~12 seconds, and subsequent build times (in `ember build --watch`) from ~6-8 seconds to ~2-3 seconds.


## Installation


1. In your ember project, run `npm install ember-link-after-build`
2. In your `ember-cli-build.js` don't import the assets/images folder in the development envionrment

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
