const express = require("express");
const routes = require('./routes');
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Porta ${port} http://localhost:${port}/`);
});
