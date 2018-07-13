module.exports = function(app, db) {
  app.post('/items', (req, res) => {
    console.log(req.body);
    res.send('Hello from the items route');
  });
};