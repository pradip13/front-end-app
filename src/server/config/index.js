const localConfig = require('./local');
const statgingConfig = require('./test');
const productionConfig = require('./prod');

const NODE_ENV = process.env.NODE_ENV;

let configBuffer;

switch (NODE_ENV) {
    case 'production':
        configBuffer = productionConfig;
        break;
    case 'test':
        configBuffer = statgingConfig;
        break;
    default:
        configBuffer = localConfig;
};

module.exports = configBuffer;
