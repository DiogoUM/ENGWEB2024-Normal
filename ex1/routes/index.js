var express = require('express');
var router = express.Router();
const Contrato = require('../controllers/contrato');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// GET /contratos
// GET /contratos?tipo=AAA
// GET /contratos?entidade=EEEE
router.get('/contratos', function (req, res, next) {
  if (req.query && Object.keys(req.query).length > 0) {
    if (req.query.procedimento) {
        Contrato.getContratosFromProcedimento(req.query.procedimento)
          .then((result) => {
            res.jsonp(result);
          }).catch((err) => {
        res.jsonp(err)
      });
    }
    else if (req.query.entidade_comunicante) {
        Contrato.getContratosFromEntidade(req.query.entidade_comunicante)
          .then((result) => {
            res.jsonp(result);
          }).catch((err) => {
        res.jsonp(err)
      });
    }
  }else{
      Contrato.list()
        .then((result) => {
          res.jsonp(result);
        }).catch((err) => {
      res.jsonp(err)
    });
  }
})

// GET /contratos/entidades
router.get('/contratos/entidades', function (req, res, next) {
  Contrato.getEntidades()
      .then((result) => {
        res.jsonp(result);
      }).catch((err) => {
    res.jsonp(err)
  });
})

// GET /contratos/tipos
router.get('/contratos/tipos', function (req, res, next) {
  Contrato.getTipos()
      .then((result) => {
        res.jsonp(result);
      }).catch((err) => {
    res.jsonp(err)
  });
})

// GET /contratos/:id
router.get('/contratos/:id', function (req, res, next) {
  Contrato.getContrato(req.params.id)
      .then((result) => {
        res.jsonp(result);
      }).catch((err) => {
    res.jsonp(err)
  });
})

// POST /contratos
router.post('/contratos', function (req, res, next) {
  Contrato.addContrato(req.body)
      .then((result) => {
        res.jsonp(result);
      }).catch((err) => {
    res.jsonp(err)
  });
})

//DELETE /contratos/:id
router.delete('/contratos/:id', function (req, res, next) {
  Contrato.deleteContrato(req.params.id)
      .then((result) => {
        res.jsonp(result);
      }).catch((err) => {
    res.jsonp(err)
  });
})

//PUT /contratos/:id TODO

module.exports = router;
