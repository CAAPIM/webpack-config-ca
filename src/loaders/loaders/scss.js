/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { resolve } from 'path';
import ExtractText from 'extract-text-webpack-plugin';

export default {
  test: /\.scss$/,
  loader: ExtractText.extract({
    fallback: 'style-loader',
    use: 'css-loader?{"modules":true}!sass-loader',
  }),
  include: [
    resolve('./src'),
  ],
};
