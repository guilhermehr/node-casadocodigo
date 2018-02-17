module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        //    console.log("Atendendo a requisição...");
        //    console.log("listando...");

        var connection = app.infra.connectionFactory();

        // new cria um novo contexto, novo objeto para this, senão referencia o contexto
        // de quem criou, nesse caso o express
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function (err, results) {
            console.log(err);
            console.log(results);
            res.render('produtos/lista', {lista:results});
        });

        connection.end();

    });
}

