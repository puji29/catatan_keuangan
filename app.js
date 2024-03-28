const express = require("express");
const dotenv = require("dotenv");
// const cors = require("cors");
const bodyParser = require("body-parser")

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("hello world");
});

const transaksiRoute = require("./routes/transaksi_route")
app.use('/api/v1', transaksiRoute)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
