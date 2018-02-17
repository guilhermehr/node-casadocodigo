module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        //    console.log("Atendendo a requisição...");
        //    console.log("listando...");

        var connection = app.infra.connectionFactory();

        // new cria um novo contexto, novo objeto para this, senão referencia o contexto
        // de quem criou, nesse caso o express
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
            console.log(err);
            console.log(results);
            res.render('produtos/lista', {lista:results});
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res) {
        //console.log("cheguei aqui");
        res.render('produtos/form');
    });

    app.post('/produtos/salva', function(req, res) {

        var produto = req.body;
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(err, resultados) {
            res.render('produtos/lista');
        });
    });
}

