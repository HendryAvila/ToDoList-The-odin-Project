const path = require("path");
const htmlwebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js", //punto de entrada
    output:{
        filename: "main.js", //nombre del bundle generado
        path: path.resolve(__dirname, "dist"), //directorio de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/i, //regla para procesar archivos css
                use: ["style-loader", "css-loader"] 
            },
        ],
    },
    plugins: [
        new htmlwebpackPlugin({
            template: "./src/index.html"
        })
    ],
    mode: "development", 
}