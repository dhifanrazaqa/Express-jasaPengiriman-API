const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

const getKurirPackage = (req, res) => {
  const { id } = req.params;
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
        `
        SELECT * FROM transaksi WHERE id_kurir = ?;
        `
    , [id],
    function (error, results) {
        if(error) throw error;  
        res.send({ 
            status: "success", 
            message: 'Berhasil ambil data!',
            data: results 
        });
    });
    connection.release();
  })
};

const updateKurirPackage = (req, res) => {
  const { id } = req.params;
  const dataEdit = {
    status: "sampai",
    tanggal_terima: new Date(),
  };
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
        `
        UPDATE transaksi SET ? WHERE no_resi = ?;
        `
    , [dataEdit, id],
    function (error, results) {
        if(error) throw error;  
        res.send({ 
            success: true, 
            message: 'Berhasil edit data!',
        });
    });
    connection.release();
})
};

module.exports = {
  getKurirPackage,
  updateKurirPackage,
};