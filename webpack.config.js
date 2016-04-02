module.exports = {
  entry: './js/app/components/application.js',
  output: {
    filename: './build/application.js'
  },
  module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
	  	{ test: /\.css$/, loader: 'style-loader!css-loader' }
	  ]
	}
};