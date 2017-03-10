/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { resolve } from 'path';

export default {
  test: /\.js$/,
  use: 'babel-loader',
  include: [
    resolve('./src'),
  ],
};
