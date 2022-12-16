const express = require('express');
const { getTransaksi, addTransaksi } = require('../controllers');

const router = express.Router();

router.get('/', getTransaksi);
router.post('/', addTransaksi);
router.delete('/', () => {})

module.exports = router;