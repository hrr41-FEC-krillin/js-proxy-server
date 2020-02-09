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

let crUrl = process.env.CRURL || 'http://127.0.0.1:4540';
let castUrl = process.env.CASTURL || 'http://127.0.0.1:5050';
let arUrl = process.env.ARURL || 'http://127.0.0.1:8100';


app.use('/api/movie', proxy(castUrl, {
  proxyReqPathResolver: (req) => {
    // console.log('cast', req.url);
    return `/api/movie${req.url}`;
  }
}));
app.use('/api/cr_reviews', proxy(crUrl, {
  proxyReqPathResolver: (req) => {
    // console.log('cr', req.url);
    return `/api/cr_reviews${req.url}`;
  }
}));
app.use('/api/audienceReviews', proxy(arUrl, {
  proxyReqPathResolver: (req) => {
    // console.log('ar', req.url);
    return `/api/audienceReviews${req.url}`;
  }
}));


const port = 7000;
app.listen(port, () => {
  Console.log(Date());
  Console.log(`Proxy server is listening on port ${port}`);
});
