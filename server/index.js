var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
