module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        //    console.log("Atendendo a requisição...");
        //    console.log("listando...");

        var connection = app.infra.connectionFactory();

        var produtosBanco = app.infra.produtosBanco(connection);

        produtosBanco.lista(function (err, results) {
            console.log(err);
            console.log(results);
            res.render('produtos/lista', {lista:results});
        });

        connection.end();

    });
}

