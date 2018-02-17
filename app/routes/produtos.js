module.exports = function (app) {

    var listaProdutos = function (req, res) {
        //    console.log("Atendendo a requisição...");
        //    console.log("listando...");

        var connection = app.infra.connectionFactory();

        // new cria um novo contexto, novo objeto para this, senão referencia o contexto
        // de quem criou, nesse caso o express
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function (err, results) {
            console.log(err);
            console.log(results);

            res.format({
                html: function() {
                    res.render('produtos/lista', {lista:results});
                },
                json: function() {
                    res.json(results);
                }
            });
            
        });
        connection.end();
    }

    // get implicito que é buscar
    app.get('/produtos', listaProdutos);

    app.get('/produtos/form', function(req, res) {
        //console.log("cheguei aqui");
        res.render('produtos/form', {errosValidacao: {}, produto: {}});
    });

    // post implicito que é salvar
    app.post('/produtos', function(req, res) {

        var produto = req.body;
        console.log(produto);

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();
        

        var erros = req.validationErrors();
        if(erros) {

            res.format({
                html: function() {
                    res.status(400).render('produtos/form', {errosValidacao: erros, produto: produto});
                },
                json: function() {
                    res.status(400).json(erros);
                }
            });
            
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(err, resultados) {

            console.log(err);

            // sempre redirect depois de post - evitar problema do F5
            res.redirect('/produtos');
        });
    });
}

