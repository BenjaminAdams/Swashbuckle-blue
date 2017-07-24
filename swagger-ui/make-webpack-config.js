var path = require("path")

var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var deepExtend = require("deep-extend")
const {gitDescribeSync} = require("git-describe")
const os = require("os")
var CopyWebpackPlugin = require('copy-webpack-plugin');

var pkg = require("./package.json")

let gitInfo

try {
  gitInfo = gitDescribeSync(__dirname)
} catch(e) {
  gitInfo = {
    hash: "noGit",
    dirty: false
  }
}

var commonRules = [
  { test: /\.(js(x)?)(\?.*)?$/,
    use: [{
      loader: "babel-loader",
      options: {
        retainLines: true
      }
    }],
    include: [ path.join(__dirname, "src") ]
  },
  { test: /\.(txt|yaml)(\?.*)?$/,
    loader: "raw-loader" },
  { test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
    loader: "url-loader?limit=10000" },
  { test: /\.(woff|woff2)(\?.*)?$/,
    loader: "url-loader?limit=100000" },
  { test: /\.(ttf|eot)(\?.*)?$/,
    loader: "file-loader" }
]

module.exports = function(rules, options) {

	options= options || {}

  // Special options, that have logic in this file
  // ...with defaults
  var specialOptions = deepExtend({}, {
    hot: false,
    separateStylesheets: true,
    minimize: false,
    longTermCaching: false,
    sourcemaps: true,
  }, options._special)

  var plugins = []

  if( specialOptions.separateStylesheets ) {
    plugins.push(new ExtractTextPlugin({
      filename: "[name].css" + (specialOptions.longTermCaching ? "?[contenthash]" : ""),
      allChunks: true
    }))
  }

  
  //specialOptions.minimize= false;
  
  console.log('*************specialOptions.minimize=',specialOptions.minimize)  
  
  if( specialOptions.minimize ) {

    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
		compress: true,
		beautify: false
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          context: __dirname
        }
      })
    )

    plugins.push( new webpack.NoEmitOnErrorsPlugin())
  }

  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV:  specialOptions.minimize ? JSON.stringify("production") : null,
        WEBPACK_INLINE_STYLES: !specialOptions.separateStylesheets
      },
      "buildInfo": JSON.stringify({
        PACKAGE_VERSION: (pkg.version),
        GIT_COMMIT: gitInfo.hash,
        GIT_DIRTY: gitInfo.dirty,
        HOSTNAME: os.hostname(),
        BUILD_TIME: new Date().toUTCString()
      })
    }))
	
	console.log('copying the files over to the Core project')
	plugins.push(new CopyWebpackPlugin([                
            { from: path.join(__dirname, "dist/swagger-ui-bundle.js") ,to: path.join(__dirname,"../Swashbuckle.Core/SwaggerUi/CustomAssets/swagger-ui-bundle.js") },            
            { from: path.join(__dirname, "dist/swagger-ui-bundle.js.map") ,to: path.join(__dirname,"../Swashbuckle.Core/SwaggerUi/CustomAssets/swagger-ui-bundle.js.map") },            
            { from: path.join(__dirname, "dist/swagger-ui.css") ,to: path.join(__dirname,"../Swashbuckle.Core/SwaggerUi/CustomAssets/swagger-ui.css") },            
            { from: path.join(__dirname, "dist/swagger-ui.css.map") ,to: path.join(__dirname,"../Swashbuckle.Core/SwaggerUi/CustomAssets/swagger-ui.css.map") },            
            { from: path.join(__dirname, "dist/swagger-ui.js") ,to: path.join(__dirname,"../Swashbuckle.Core/SwaggerUi/CustomAssets/swagger-ui.js") },            
            { from: path.join(__dirname, "dist/swagger-ui.js.map") ,to: path.join(__dirname,"../Swashbuckle.Core/SwaggerUi/CustomAssets/swagger-ui.js.map") },            
        ], {
            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        }))

  delete options._special

  var completeConfig = deepExtend({
    entry: {},

    output:  {
      path: path.join(__dirname, "dist"),
      publicPath: "/",
      filename: "[name].js",
      chunkFilename: "[name].js"
    },

    target: "web",

    // yaml-js has a reference to `fs`, this is a workaround
    node: {
      fs: "empty"
    },

    module: {
      rules: commonRules.concat(rules),
    },

    resolveLoader: {
      modules: [path.join(__dirname, "node_modules")],
    },

    externals: {
      "buffertools": true // json-react-schema/deeper depends on buffertools, which fails.
    },

    resolve: {
      modules: [
        path.join(__dirname, "./src"),
        "node_modules"
      ],
      extensions: [".web.js", ".js", ".jsx", ".json", ".less"],
      alias: {
        base: "getbase/src/less/base",
      }
    },

    devtool: specialOptions.sourcemaps ? "cheap-module-source-map" : null,

    plugins,

  }, options)

  return completeConfig
}
