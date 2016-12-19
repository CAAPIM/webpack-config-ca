/* eslint-disable spaced-comment */

/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import packagesTemplate from './templates/packages';
import applicationsTemplate from './templates/applications';
import serverTemplate from './templates/server';
import templateFactory from './factory';

// Export main template
const applicationsConfigurator = options => templateFactory(applicationsTemplate, options);
module.exports = applicationsConfigurator;

// Factory
//////////////////////////////////////////////////////////////////////

module.exports.factory = templateFactory;

// Templates
//////////////////////////////////////////////////////////////////////

module.exports.application = applicationsConfigurator;

module.exports.server = options => templateFactory(serverTemplate, {
  ...options,
  filenames: '[name]',
  devServer: false,
});

module.exports.packages = options => templateFactory(packagesTemplate, {
  ...options,
  sourcePath: 'src',
  outputPath: 'dist',
  react: false,
});

