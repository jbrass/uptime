// in plugins/index.js
exports.init = function() {
  require('./console').init();
  require('./email').init();
}