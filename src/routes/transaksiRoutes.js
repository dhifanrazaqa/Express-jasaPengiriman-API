const express = require('express');
const { getTransaksi, addTransaksi, delTransaksi, getTransaksiByid } = require('../controllers');

const router = express.Router();

router.get('/', getTransaksi);
router.post('/', addTransaksi);
router.delete('/:id', delTransaksi);
router.get('/:id', getTransaksiByid);

module.exports = router;