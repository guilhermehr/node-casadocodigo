var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host : 'localhost',
        port : '3306',
        user : 'root',
        password : 'root',
        database : 'casadocodigo_nodejs'
    });
}

