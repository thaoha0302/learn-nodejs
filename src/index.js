const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const route = require("./routes");
const app = express();
const port = 3001;
const db = require("./config/db");

// fix cors localhost
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// http logger
app.use(morgan("combined"));

// template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
