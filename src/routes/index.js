const express = require('express');
const transaksiRoutes = require('./transaksiRoutes')
const kurirRoutes = require('./kurirRoutes')
const userRoutes = require('./userRoutes')

const router = express.Router();

router.use('/transaksi', transaksiRoutes);
router.use('/kurir', kurirRoutes);
router.use('/user', userRoutes);

module.exports = router;