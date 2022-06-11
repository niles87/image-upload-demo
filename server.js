const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const routes = require("./controller");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });
});
