const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "react-components",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom"
    },
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components"
    }
  },
  resolve: { extensions: [".js", ".jsx"] }
};
