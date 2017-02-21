const logger = require('./logger.js');

module.exports = {
    database: 'node_api',
    username: 'postgres',
    password: '123456',
    params: {
        host: 'localhost',
        dialect: 'postgres',
        storage: 'node.api',
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true
        }
    },
    jwtSecret: 'N0d3-AP1',
    jwtSession: { session: false }
};