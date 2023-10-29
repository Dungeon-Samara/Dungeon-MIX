// Код прокси 
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware({
  target: 'https://target.com',
  changeOrigin: true,
});