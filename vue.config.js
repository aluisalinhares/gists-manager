const dotenv = require('dotenv').config();
const { createProxyMiddleware } = require('http-proxy-middleware');

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
  devServer: {
    proxy: {
      '/api/access_token': {
        target: 'https://github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api/access_token': '/login/oauth/access_token'
        },
      },
      '/api/gists': {
        target: 'https://api.github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api/gists': '/gists'
        },
        onProxyReq: (proxyReq) => {
          proxyReq.setHeader('Cache-Control', 'no-cache');
        }
      },
      '/api/user': {
        target: 'https://api.github.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api/user': '/user'
        },
        onProxyReq: (proxyReq) => {
          proxyReq.setHeader('Cache-Control', 'no-cache');
        }
      }
    }
  },
};
