var http = require('http');

describe('#ProdutosController', function() {
    it('#listagem json', function(done) {

        var configuracoes = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept': 'application/json'
            }
        };

        http.get(configuracoes, function(res) {
            if(res.statusCode == 200) {
                console.log("Status tá OK");
            }
            //console.log(res.headers['content-type']);
            if(res.headers['content-type'] == 'application/json; charset=utf-8') {
                console.log("Content-type tá OK");
            }
            done();
        });

        console.log("teste de verificação de listagem json");
    });
});