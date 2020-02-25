const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./models");

const PORT = process.env.PORT || 8080;
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

// If you're embedding everything inside an app folder, tell Handlebars there's a different location for views
app.set('views', __dirname+'/views/');

app.set("view engine", "handlebars");

// Static directory
app.use(express.static(__dirname + "/public"));

// Routes
require("./routes/api-routes.js")(app);

// Have sequelize boot up the models before express starts listening. If you want sequelize to drop any existing tables and make them from scratch, put {force: true} inside the sync function
db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("Listening on port %s", PORT);
  })
})
