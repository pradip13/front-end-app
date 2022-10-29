const express = require('express');
const compression = require('compression');
const cookie_parser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const pino = require('express-pino-logger');

const ENV = process.env.NODE_ENV || 'dev';
const PORT = process.env.PORT || 6000;

if (ENV === 'production') {
    // add stuff which you want to call in production
    // e,g: setting up metrics. like: new-relic/splunk/datadog etc
}

const proxyResolver = require('./proxy/resolver');

const morganFn = morgan((tokens, req, res) => {
    return [
        req.cookies.email,
        req.cookies.username,
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ');
});

const app = express();

app.use(compression());
app.use(cookie_parser());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// health-check
app.get('/health-check', (req, res) => res.send('Health checked passed successfully!'));

// proxy setup to select proper hostname based on env (prod/local/test)
app.use('/proxy', proxyResolver);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(pino);

// logger
app.use(morganFn);

// generate static files
app.use(express.static(path.join(__dirname, "..", "..", "build")));

// client app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "build", "index.html"))
});

const server = app.listen(PORT, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Social Media Frontend Application Server is listening at http://${host}:${port}`);
});

// app.listen(PORT, function () {
//     const host = server.address().address;
//     const port = server.address().port;
//     console.log(`ToDo Application Server is listening at http://${host}:${port}`);
// });
