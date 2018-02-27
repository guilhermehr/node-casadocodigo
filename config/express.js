/* 
para carregar sempre a mesma versão do express o código 
fica fora da function. Se for dentro da function uma nova 
versão sempre será criada.
*/
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {

    var app = express();

    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // funções middleware que podem alterar o request
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app);

    return app;
}

