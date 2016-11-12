module.exports = {
  context: __dirname + '/lib',

  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    // Add your application's scripts below
    './app.js',
  ],

  output: {
    filename: 'client.min.js',
    path: __dirname + '/dist',
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',

        // Exclude /node_modules directory
        exclude: /node_modules/,

        // Only run `.js` and `.jsx` files through Babel
        test: /\.js$/,

        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react']
        }
      },
    ]
  }
}
