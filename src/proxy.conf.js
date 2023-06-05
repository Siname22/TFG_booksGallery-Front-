const PROXY_CONFIG = {
  "api": {
    "target": process.env.BACKEND || "127.0.0.1:5000",
    "secure": false,
    "pathRewrite": {
      "^/api": "/api"
    },
    "changeOrigin": true
  }
};

module.exports = PROXY_CONFIG;