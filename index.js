const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const proxy = require('express-http-proxy');

const Console = console;

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));

app.use('/api/cr_reviews', proxy('http://3.134.106.102:4540'));
app.use('/api/movie', proxy('http:3.134.106.102:5050'));


const port = 7000;
app.listen(port, () => {
  Console.log(Date());
  Console.log(`Proxy server is listening on port ${port}`);
});
