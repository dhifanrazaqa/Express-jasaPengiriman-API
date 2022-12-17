const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

const getTransaksi = (req, res) => {
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
        `
        SELECT * FROM transaksi;
        `
    , function (error, results) {
        if(error) throw error;  
        res.send({ 
            status: "success", 
            message: 'Berhasil ambil data!',
            data: results 
        });
    });
    connection.release();
  })
}

const addTransaksi = (req, res) => {
  pool.query("SELECT no_resi FROM transaksi ORDER BY no_resi DESC LIMIT 1;", (err, result) => {
    let seriNumb = JSON.parse(JSON.stringify(result))[0].no_resi;
    seriNumb = (parseInt(seriNumb.slice(2,5)) + 1).toString();

    if (seriNumb.length == 2) seriNumb = `0${seriNumb}`;
    else if (seriNumb.length == 1) seriNumb = `00${seriNumb}`;
    else seriNumb = `000`;

    const {id_customer, id_penerima, id_kurir} = req.body;
    const no_resi = `BR${seriNumb}-${id_customer.slice(-1)}${id_penerima.slice(-1)}${id_kurir.slice(-1)}`
    const tanggal_kirim = new Date();
    const tanggal_terima = null;
  
    const data = {
      no_resi: no_resi,
      nama_barang: req.body.nama_barang,
      berat_barang: req.body.berat_barang,
      jenis_barang: req.body.jenis_barang,
      ongkir: req.body.ongkir,
      metode_pengiriman: req.body.metode_pengiriman,
      status: req.body.status,
      tanggal_kirim: tanggal_kirim,
      tanggal_terima: tanggal_terima,
      id_customer: req.body.id_customer,
      id_penerima: req.body.id_penerima,
      id_kurir: req.body.id_kurir
    }
  
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        connection.query(
            `
            INSERT INTO transaksi SET ?;
            `
        , [data],
        function (error, results) {
            if(error) throw error;
            res.status(201);
            res.send({ 
                status: "success", 
                message: 'Berhasil tambah data!',
            });
        });
        connection.release();
    })
  })
};

const getTransaksiByid = (req, res) => {
  const { id } = req.params;
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
        `
        SELECT * FROM transaksi WHERE no_resi = ?;
        `
    , [id],
    function (error, results) {
        if(error) throw error;  
        if(results.length !== 0){
          res.send({ 
            status: "success", 
            message: 'Berhasil ambil data!',
            data: results
          });
        } else {
          res.status(404).json({
            status: "fail",
            message: "Data tidak ditemukan"
          });
        }
    });
    connection.release();
  })
};

const delTransaksi = (req, res) => {
  const { id } = req.params;
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
        `
        DELETE FROM transaksi WHERE no_resi = ?;
        `
    , [id],
    function (error, results) {
        if(error) throw error;
        if (results.affectedRows === 0) {
          res.status(404).json({
            status: "fail",
            message: "Data tidak ditemukan"
          });
        } else {
          res.send({ 
            status: "success",
            message: 'Berhasil hapus data!',
          });
        }
    });
    connection.release();
  })
};

module.exports = {
  getTransaksi,
  addTransaksi,
  getTransaksiByid,
  delTransaksi,
};