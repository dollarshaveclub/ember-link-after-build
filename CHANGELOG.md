# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 1.0.0 - 2016-01-31
### Added
- Added Unit Tests
- Added Configuration for symlink task 

### Updated
- Moved main logic from `index.js` into lib dir as `symlinker.js`

### Removed
- Removed hardcoding in the postBuild Hook.


## 0.0.2 - 2016-01-24
### Added
- Update Docs

## 0.0.1 - 2016-01-24
### Added
- This project is intended to symlink `assets/images` in the `postBuild` hook of `ember build`.
- Initial Commit