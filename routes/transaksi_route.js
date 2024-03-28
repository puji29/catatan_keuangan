const express = require("express")
const router = express.Router()
const transaksiController = require("../controllers/transaksi_controller")

router.post('/transaksi', transaksiController.createTransaksiHandle)

module.exports = router