const dotenv = require('dotenv').config();

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/gists-manager/" : "/",
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      const env = args[0]["process.env"];

      // Load environment variables from .env file
      for (const key in dotenv.parsed) {
        env[key] = JSON.stringify(dotenv.parsed[key]);
      }

      return args;
    });
  },
};
