const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

const addCustomer = (req, res) => {
  pool.query("SELECT id_customer FROM customer ORDER BY id_customer DESC LIMIT 1;", (err, result) => {
    let seriNumb = JSON.parse(JSON.stringify(result))[0].id_customer;
    seriNumb = (parseInt(seriNumb.slice(2,5)) + 1).toString();

    if (seriNumb.length == 2) seriNumb = `0${seriNumb}`;
    else if (seriNumb.length == 1) seriNumb = `00${seriNumb}`;
    else seriNumb = `000`;

    const {
      nama_customer,
      alamat,
      no_hp,
      kode_area,
    } = req.body;
    const id_customer = `CR${seriNumb}`
  
    const data = {
      id_customer: id_customer,
      nama_customer: nama_customer,
      alamat: alamat,
      no_hp: no_hp,
      kode_area: kode_area,
    }
  
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        connection.query(
            `
            INSERT INTO customer SET ?;
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

const addPenerima = (req, res) => {
  pool.query("SELECT id_penerima FROM penerima ORDER BY id_penerima DESC LIMIT 1;", (err, result) => {
    let seriNumb = JSON.parse(JSON.stringify(result))[0].id_penerima;
    seriNumb = (parseInt(seriNumb.slice(2,5)) + 1).toString();

    if (seriNumb.length == 2) seriNumb = `0${seriNumb}`;
    else if (seriNumb.length == 1) seriNumb = `00${seriNumb}`;
    else seriNumb = `000`;

    const {
      nama_penerima,
      alamat,
      no_hp,
      kode_area,
    } = req.body;
    const id_penerima = `PR${seriNumb}`
  
    const data = {
      id_penerima: id_penerima,
      nama_penerima: nama_penerima,
      alamat: alamat,
      no_hp: no_hp,
      kode_area: kode_area,
    }
  
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        connection.query(
            `
            INSERT INTO penerima SET ?;
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

const addKurir = (req, res) => {
  pool.query("SELECT id_kurir FROM kurir ORDER BY id_kurir DESC LIMIT 1;", (err, result) => {
    let seriNumb = JSON.parse(JSON.stringify(result))[0].id_kurir;
    seriNumb = (parseInt(seriNumb.slice(2,5)) + 1).toString();

    if (seriNumb.length == 2) seriNumb = `0${seriNumb}`;
    else if (seriNumb.length == 1) seriNumb = `00${seriNumb}`;
    else seriNumb = `000`;

    const {
      nama_kurir,
      no_hp,
    } = req.body;
    const id_kurir = `KR${seriNumb}`
  
    const data = {
      id_kurir: id_kurir,
      nama_kurir: nama_kurir,
      no_hp: no_hp,
    }
  
    pool.getConnection(function(err, connection) {
        if (err) throw err;
        connection.query(
            `
            INSERT INTO kurir SET ?;
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

const getCustomer = (req, res) => {
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
        `
        SELECT * FROM customer;
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

const getPenerima = (req, res) => {
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
        `
        SELECT * FROM penerima;
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

const getKurir = (req, res) => {
  pool.getConnection(function(err, connection) {
    if (err) throw err;
    connection.query(
        `
        SELECT * FROM kurir;
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

module.exports = {
  addCustomer,
  addPenerima,
  addKurir,
  getCustomer,
  getPenerima,
  getKurir,
};