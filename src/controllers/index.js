const transaksiController = require('./transaksiController');
const kurirController = require('./kurirController');

module.exports = {
    ...transaksiController,
    ...kurirController
}