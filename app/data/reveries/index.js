module.exports = (() => {
  const context = require.context('./', true, /\.md$/);
  return context.keys().map(key => context(key));
})();