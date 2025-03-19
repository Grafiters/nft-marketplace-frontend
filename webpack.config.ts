import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

const devServer: DevServerConfiguration = {
  static: path.resolve(__dirname, "dist"),
  compress: true,
  hot: true,
  port: 3000,
  historyApiFallback: true,
  proxy: [
    {
      context: ["/api"],
      target: "http://localhost:5000",
      changeOrigin: true,
      secure: false,
    },
    {
      context: ["/pinata"],
      target: "https://api.pinata.cloud",
      changeOrigin: true,
      pathRewrite: { "^/pinata": "" },
    },
  ],
};

const config: Configuration = {
  entry: "./src/index.tsx", // Ensure this matches your entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer,
};

export default config;
