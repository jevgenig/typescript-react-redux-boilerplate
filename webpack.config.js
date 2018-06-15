const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const plugins = [];
const entry = {
    [`index`]: `./src/entry.tsx`,
};

module.exports = {
    mode: "development",
    plugins,
    entry,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [
                    path.join(__dirname, "src"),
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, 'tsconfig.json') }),
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    }
};
