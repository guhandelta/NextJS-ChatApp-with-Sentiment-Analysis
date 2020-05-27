const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    // Configuring Webpack to be able to provide the environment variables defined in .env and make them available to the React components...
    //... through process.env object
    webpack: config => {
        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
            return acc;
        }, {}); //Initital Accumulator value

        config.plugins.push(new webpack.DefinePlugin(env));

        return config;
    }
};
