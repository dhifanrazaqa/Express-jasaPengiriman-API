# jasaPengirimanAPI
This project is based on my Database course final project. We were divided into several groups, and each group had to create a database from scratch. We have freedom to choose the database that we want to create. We start by defining the business process and continue with the database design and its implementation in MySQL.

The final design looks like this:

![PBDTugasAkhir drawio (14)](https://user-images.githubusercontent.com/67745986/208246808-2c1948d4-ef86-439b-808c-fcbe4c8ec003.png)


# How to run:
   ● Install node.js
   
   ● npm install
   
   ● npm run start:dev

# API documentation:
   # Transaksi
   ● Get all transaction from transaksi table
     
     url: /api/transaksi
      
     method: GET
      
   ● Add transaction to transaksi table
      
     url: /api/transaksi
     
     method: POST
     
     body example:
     {
         "nama_barang": "PSP",
         "berat_barang": 0.35,
         "jenis_barang": "Elektronik",
         "ongkir": 12000,
         "metode_pengiriman": "express",
         "status": "diantar",
         "id_customer": "CR008",
         "id_penerima": "PR003",
         "id_kurir": "KR008"
     }
      
   ● Get specific transaction using no_resi from transaksi table
     
     url: /api/transaksi/{no_resi}
     
     method: GET
      
   ● Delete transaction from transaksi table
     
     url: /api/transaksi/{no_resi}
     
     method: DELETE
      
   ● Update transaction from transaksi table
     
     url: /api/transaksi/{no_resi}
      
     method: PUT
     
     body example:
     {
         "nama_barang": "PS Vita",
         "berat_barang": 0.55,
         "jenis_barang": "Elektronik",
         "ongkir": 10000,
         "metode_pengiriman": "reguler",
         "status": "diantar",
         "id_customer": "CR008",
         "id_penerima": "PR003",
         "id_kurir": "KR008"
     }
      
   # Kurir
   ● Update transaction "status" and "tanggal_terima" from transaksi table
     
     url: /api/kurir/{id_kurir}
     
     method: PUT
      
   ● Get specific transaction using id_kurir from transaksi table
     
     url: /api/kurir/{id_kurir}
     
     method: GET

   # User
   ● Get All customer from customer table
     
     url: /api/user/customer
     
     method: GET
      
   ● Add customer to customer table
     
     url: /api/user/customer
     
     method: POST
     
     body example:
     {
         "nama_customer": "Budi Susanto",
         "alamat": "Gg. Indonesia No. 117",
         "no_hp": "082435665822",
         "kode_area": 68234
     }
      
   ● Get All penerima from penerima table
     
     url: /api/user/penerima
     
     method: GET
      
   ● Add penerima to penerima table
     
     url: /api/user/customer
     
     method: POST
     
     body example:
     {
         "nama_penerima": "Budi Susanto",
         "alamat": "Gg. Indonesia No. 117",
         "no_hp": "082435665822",
         "kode_area": 68234
     }
     
   ● Get All kurir from kurir table
     
     url: /api/user/kurir
     
     method: GET
      
   ● Add kurir to kurir table
     
     url: /api/user/kurir
     
     method: POST
     
     body example:
     {
         "nama_kurir": "Budi Susanto",
         "no_hp": "082435665822"
     }
