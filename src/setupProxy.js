const { createProxyMiddleware } = require("http-proxy-middleware");
const backendUrl = process.env.REACT_APP_BACKEND_URL;

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: backendUrl,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Supprime le préfixe /api lors de la redirection
      },
    })
  );
};
