const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));



const port = 7000;
app.listen(port, () => {
  console.log(Date());
  console.log(`Proxy server is listening on port ${port}`);
});
