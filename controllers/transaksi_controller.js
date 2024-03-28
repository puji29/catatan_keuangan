const { RegisterTransaksi } = require("../usecase/transaksi_usecase")

const createTransaksiHandle = async (req, res) => {
    try {
        const {saldo_awal,saldo_masuk,saldo_keluar, jumlah } = req.body;
        const transaksi = await RegisterTransaksi({saldo_awal,saldo_masuk,saldo_keluar, jumlah })

        res.json({
            data: transaksi,
            message: "succcesfully add transaksi",
        })
    } catch (error) {
        res.status(400).json({
            error: "failed create transaksi",
            message: error.message
        })
    } 
}

module.exports = {
    createTransaksiHandle
}