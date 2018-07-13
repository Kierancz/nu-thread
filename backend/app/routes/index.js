const itemsRoutes = require('./items');
module.exports = function(app, db) {
  itemsRoutes(app, db);
};