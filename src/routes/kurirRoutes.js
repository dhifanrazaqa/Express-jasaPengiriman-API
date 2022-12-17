const express = require('express');
const { getKurirPackage, updateKurirPackage } = require('../controllers');

const router = express.Router();

router.get('/:id', getKurirPackage);
router.put('/:id', updateKurirPackage);

module.exports = router;