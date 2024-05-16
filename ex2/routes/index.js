var express = require('express');
var router = express.Router();
const axios = require('axios')
const conf = require('../config/env')

/* GET home page. */
router.get('/', function (req, res, next) {
  axios.get(conf.apiRoute('/contratos'))
      .then((result) => {
        res.render('index', { title: 'Contratos', n_registos: result.data.length,contratos: result.data});
      }).catch((err) => {
    res.render('error', {error: err})
  });
});

router.get('/:id', function (req, res, next) {
  axios.get(conf.apiRoute('/plantas/' + req.params.id))
      .then((result) => {
        res.render('contrato', { title: `Registo ${req.params.id}`, planta: result.data});
      }).catch((err) => {
    res.render('error', {error: err})
  });
});
// entidades/:nipc
router.get('/contratos/:id', function (req, res, next) {
  axios.get(conf.apiRoute(`/contratos/${req.params.id}`))
      .then((nCientifico) => {
        axios.get(conf.apiRoute(`/contratos?NIPC_entidade_comunicante=${req.params.id}`))
            .then((result) => {
              res.render('Entidade comunicante', {title: `Entidade comunicante: ${req.params.id}`, n_registos: result.data.length, entidade: req.params.id, NIPC_entidade: nipc.data.NIPC_entidade_comunicante, contratos: result.data})
            }).catch((err) => {
          res.render('error', {error: err})
        });

      }).catch((err) => {
    res.render('error', {error: err})
  });
});

module.exports = router;