const db  = require("../config/connection/db") 


const createTransaksi = async(transaksi) => {
    const query = 'INSERT INTO transaksi (saldo_awal,saldo_masuk,saldo_keluar, jumlah) VALUES ($1,$2,$3,$4) RETURNING id, created_at'
    const values = [transaksi.saldo_awal,transaksi.saldo_masuk,transaksi.saldo_keluar, transaksi.jumlah]

    try {
        const result = db.query(query,values)
        return result
    } catch (error) {
        console.error("failed createdTransaksiQuery:", error)
    }
} 

module.exports = {
    createTransaksi
}