/* 
para carregar sempre a mesma versão do express o código 
fica fora da function. Se for dentro da function uma nova 
versão sempre será criada.
*/
var express = require('express');
var load = require('express-load');

module.exports = function () {

    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app);

    return app;
}

