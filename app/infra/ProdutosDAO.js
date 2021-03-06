// function é como se estivesse criando uma classe
function ProdutosDAO(connection) {
    // no javascript tudo é público, se quer marcar um atributo com privado
    // apenas para informação incluir underline na frente do nome
    this._connection = connection
}

ProdutosDAO.prototype.lista = function (callback) {
    this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function (produto, callback) {
    this._connection.query('insert into produtos set ?', produto, callback);
}

module.exports = function () {
    return ProdutosDAO;
}