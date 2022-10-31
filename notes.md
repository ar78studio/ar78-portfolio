// from https://blog.logrocket.com/how-to-use-svgs-in-react/

In order to use SVGs or any other image format in the <img> tag, we have to set up a file loader system in whichever module bundler we’re using. Here, I will show you how to set it up in a few steps if you are already using webpack as your bundler.

First, install the file-loader library with the command $ npm install file-loader --save-dev. This will install it as a dev dependency.

You can update your webpack configuration file rules with this code:

const webpack = require('webpack');

module.exports = {
entry: './src/index.js',
module: {
rules: [
//...
{
test: /\.(png|jp(e\*)g|svg|gif)$/,
use: [
{
loader: 'file-loader',
options: {
name: 'images/[hash]-[name].[ext]',
},
},
],
