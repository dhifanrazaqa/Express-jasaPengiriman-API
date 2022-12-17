const express = require('express');
const { getCustomer, getPenerima, getKurir, addCustomer, addPenerima, addKurir } = require('../controllers');

const router = express.Router();

router.get('/customer', getCustomer);
router.post('/customer', addCustomer);
router.get('/penerima', getPenerima);
router.post('/penerima', addPenerima);
router.get('/kurir', getKurir);
router.post('/kurir', addKurir);

module.exports = router;