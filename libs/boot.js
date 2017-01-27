module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`Node API - Porta ${app.get('port')}`);
    });
};