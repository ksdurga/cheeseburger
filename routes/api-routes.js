let Burger = require("../models/burger.js");
const path = require("path")
module.exports = function(app){
  

app.get("/", function(req, res) {
  Burger.findAll({}).then(result => {
    res.sendfile(path.join(__dirname, result));
  });
});

app.post("/api/burgers", function(req, res) {
  Burger.create({
    name: req.body.name,
  }).then(function(results) {
    // `results` here would be the newly created chirp
    res.end();
  });

});


app.put("/api/burgers/:id", function(req, res) {
  console.log(req.params.id)
  connection.query("UPDATE burgers SET eaten = ? WHERE id = ?", [req.body.eaten, req.params.id], function(err, result) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

  });
})};