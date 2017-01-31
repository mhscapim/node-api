module.exports = {
    database: 'node_api',
    username: 'postgres',
    password: '123456',
    params: {
        host: 'localhost',
        dialect: 'postgres',
        storage: 'node.api',
        define: {
            underscored: true
        }
    }
};