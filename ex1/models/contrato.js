const mongoose = require('mongoose')

var contratoSchema = new mongoose.Schema({
    "_id": Number,
    "dataCelebracaoContrato": String,
    "dataPublicacao": String,
    "entidade_comunicante": String,
    "fundamentacao":String,
    "nAnuncio": String,
    "NIPC_entidade_comunicante": Number,
    "objectoContrato": String,
    "prazoExecucao": Number,
    "precoContratual": Number,
    "procedimento": String,
}, { collection: 'contrato' });

module.exports = mongoose.model('contrato', contratoSchema)