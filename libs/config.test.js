module.exports = {
    database: 'node_api_test',
    username: 'postgres',
    password: '123456',
    params: {
        host: 'localhost',
        dialect: 'postgres',
        storage: 'node.api.test',
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: 'N0d3_T3ST',
    jwtSession: { session: false }
};