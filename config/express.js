/* 
para carregar sempre a mesma versão do express o código 
fica fora da function. Se for dentro da function uma nova 
versão sempre será criada.
*/
var app = require('express')();
app.set('view engine','ejs');
app.set('views','./app/views')

module.exports = function() {
    console.log("modulo express sendo carregado...")
    return app;
}

