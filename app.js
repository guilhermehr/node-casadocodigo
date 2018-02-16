var app = require('./config/express')();

app.get('/produtos', function(req,res){
    console.log("Atendendo a requisição...");
    console.log("listando...");
    res.render("produtos/lista");
});

app.listen(3000, function(){
    console.log("servidor rodando");
});
