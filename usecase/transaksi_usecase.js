const { createTransaksi } = require("../repository/transaksi_repository") 

const RegisterTransaksi = async (newDataTransaksi)=> {
    const transaksi = await createTransaksi(newDataTransaksi)

    return transaksi
}

module.exports  = {
    RegisterTransaksi
}