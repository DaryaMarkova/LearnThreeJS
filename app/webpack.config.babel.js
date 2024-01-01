import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: path.join(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      filename: "index.html",
    }),
  ],
  watch: true,
};
