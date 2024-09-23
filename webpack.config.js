const path = require("path");

module.exports = {
  devtool: "source-map",
  mode: "production",
  entry: {
    effLarge: path.resolve(__dirname, "src/effLarge.js"),
    effShort1: path.resolve(__dirname, "src/effShort1.js"),
    effShort2: path.resolve(__dirname, "src/effShort2.js"),
    functions: path.resolve(__dirname, "src/functions.js"),
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "passphrase",
      type: "assign-properties",
    },
  },
};
