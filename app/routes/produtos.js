
module.exports = function(app) {
    app.get('/produtos', function (req, res) {
        //    console.log("Atendendo a requisição...");
        //    console.log("listando...");
        res.render("produtos/lista");
    });
}
