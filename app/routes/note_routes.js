module.exports = function(app, db) {
  app.post('/notes', (request, response) => {
    // You'll create your note here.
    console.log(request.body)
    response.send('Hello')
  });
};
