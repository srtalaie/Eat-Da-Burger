const express = require("express");
const bodyParser = require("body-parser");
let connection = require('./config/connection.js');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
let handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
const routes = require('./controllers/burgerController.js');
routes.get(app);
routes.post(app);
routes.put(app);
routes.delete(app);

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    // Start our server so that it can begin listening to client requests.
    app.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
        console.log("connected as id " + connection.threadId);
    });  
  });