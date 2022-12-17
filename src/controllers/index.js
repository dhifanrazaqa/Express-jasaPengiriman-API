const transaksiController = require('./transaksiController');
const kurirController = require('./kurirController');
const userController = require('./userController');

module.exports = {
    ...transaksiController,
    ...kurirController,
    ...userController,
}