module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log(`Node API - Porta ${app.get('port')}`);
        });
    });
};