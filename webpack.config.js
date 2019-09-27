module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  output: {
    filename: "./dist/bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "ts-loader"
    }],
  },
};