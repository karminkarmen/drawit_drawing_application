/**
 # do wykonania w katalogu Dzien_1/2_let_const
 npm init

 # następnie:
 npm install -g webpack  (bez g jeśli lokalnie)
 npm install babel-core babel-preset-es2015 babel-loader --save-dev

 # lokalnie webpack:
 # ./node_modules/.bin/webpack
 # globalnie webpack:
 # webpack

 # tych teraz nie trzeba:
 npm install style-loader css-loader --save-dev
 npm install node-sass sass-loader --save-dev
 npm install webpack-dev-server --save-dev


 npm install style-loader css-loader node-sass sass-loader webpack-dev-server --save-dev

 ./node_modules/.bin/webpack
 ./node_modules/.bin/webpack-dev-server --inline --hot
 http://localhost:8080/webpack-dev-server/
 **/

module.exports = {
    entry: ["./js/app.js"],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    devServer: {
        filename: './js/out.js',
    }
};
