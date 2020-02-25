var db = require("../models");


module.exports = function(app) {

  app.get("/", function(req, res) {
    // query the database to get all the burgers
    db.Burger.findAll({}).then( burgers => {
      // Create two empty arrays; one for eaten burgers and one
      // for the uneaten ones
      // const eaten = [];
      // const uneaten = [];
      // // sort the burgers by eaten or not
      // burgers.forEach( burger => {
      //   if( burger.eaten === 1 ){
      //     eaten.push({ id: burger.id, burger: burger.name, status: 1 })
      //   } else {
      //     uneaten.push({ id: burger.id, burger: burger.name, status: 0 })
      //   }
      // });
      res.render('index', burgers);
    });
  });

  // Adds a new burger to the database
  app.post("/api/burger", function(req, res) {

    // Use sequelize to update the burger's eaten column from false to true. Remember all post data is stored in req.body

    // Newer versions of sequalize use TINYINT instead of Boolean values, hence using 0 below.
    db.Burger.create({
      name: req.body.name,
      eaten: 0
    }).then(function(insertedRow){
      res.json(insertedRow);
    });
  });


  // Changes burger from uneaten to eaten
  app.put("/api/eatburger/:id", function(req, res) {
    console.log("eat me")
    // Use sequelize to update the burger's eaten column
    // Newer versions of sequalize use TINYINT instead of Boolean values, hence using 1 below.

    // Remember we get the id value via the url param referenced in the wildcard above as req.params.id
    db.Burger.update(
      {eaten: req.body.eaten},
      {where: {
        id: req.params.id
      }}
    ).then(function(rowsUpdated){
      res.json(rowsUpdated);
    });
  });

}


