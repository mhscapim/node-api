const bodyParser = require('body-parser');

module.exports = app => {
    app.set('port', process.env.PORT || 3000);
    app.set('json spaces', 4);
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        // Middleware de pré-execução das rotas
        delete req.body.id;
        next();
    });
};