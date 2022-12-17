const express = require('express');
const { getTransaksi, addTransaksi, delTransaksi, getTransaksiByid, updateTransaksi } = require('../controllers');

const router = express.Router();

router.get('/', getTransaksi);
router.post('/', addTransaksi);
router.delete('/:id', delTransaksi);
router.get('/:id', getTransaksiByid);
router.put('/:id', updateTransaksi)

module.exports = router;