const proxy = require('express-http-proxy');
const hosts = require('../config');

function selectProxyHost(req) {
    const hostname = req.headers.server;
    if (hosts[hostname]) {
        // intentional use of console to print the hostname
        console.log('Host: ', hosts[hostname] + req.url);
        return hosts[hostname];
    }

    console.error(`Unable to Loacate your host: ${hostname}, please set the host in config files`);
    return req.hostname;
};

module.exports = proxy(selectProxyHost, {
    memoizeHost: true
});
