const contrato = require('../models/contrato')
const mongoose = require('mongoose')

module.exports.list = () => {
    return contrato.find()
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.getContrato = (id) => {
    return contrato.findOne({ _id: id })
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.addContrato = (cont) => {
    return contrato.collection.insertOne(cont)
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.updatecontrato = (cont) => {
    return contrato.updateOne({ _id: planta._id }, cont)
        .then(result => {
            return result
        })
        .catch(erro => {
            throw erro
        })
}

module.exports.deleteContrato = (id) => {
    return contrato.deleteOne({ _id: id })
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}


module.exports.getContratosFromProcedimento = (proc) => {
    return contrato.find({ "procedimento": proc })
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.getContratosFromEntidade = (ent) => {
    return contrato.find({ "entidade_comunicante": ent })
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.getEntidades = () => {
    return contrato.aggregate([{
        $group: {
            _id: "$entidade_comunicante",
            count: {
                $sum: 1
            }
        }
    }, {
        $sort: {
            "_id": 1
        }
    }, {
        $project: {
            count: 0
        }
    }])
        .then((result) => {
            let aux = []
            result.forEach(freg => aux.push(freg._id))
            return aux
        }).catch((err) => {
            throw err
        });
}

module.exports.getTipos = () => {
    return contrato.aggregate([{
        $group: {
            _id: "$procedimentos",
            count: {
                $sum: 1
            }
        }
    }, {
        $sort: {
            "_id": 1
        }
    }, {
        $project: {
            count: 0
        }
    }])
        .then((result) => {
            let aux = []
            result.forEach(esp => aux.push(esp._id))
            return aux
        }).catch((err) => {
            throw err
        });
}

