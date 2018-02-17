module.exports = function(app) {
    app.get('/produtos', function (req, res) {
        //    console.log("Atendendo a requisição...");
        //    console.log("listando...");

        var connection = app.infra.connectionFactory();

        connection.query('select * from livros', function(err,results){
            //console.log(err);
            res.render('produtos/lista', {lista:results});
        });

        connection.end();

    });
}

