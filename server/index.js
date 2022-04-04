const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: "xxxxxx",
    user: "xxx",
    password: "xxx",
    database: "xx",
})

app.use(cors());
app.use(express.json()) //permite pegar os valores do front
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req, res) => {
    const userName = req.body.userName
    const userOffice = req.body.userOffice
    const userUrl = req.body.userUrl
    const userUrlImg = req.body.userUrlImg
    const userQrcode = req.body.userQrcode
    const userTel = req.body.userTel
    const userWpp = req.body.userWpp
    const userEmail = req.body.userEmail
    const userAddress = req.body.userAddress


    const sqlInsert = "INSERT INTO employees (name, office, url, image_url, qrcode, tel, whatsapp, email, address) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [userName, userOffice, userUrl, userUrlImg, userQrcode, userTel, userWpp, userEmail, userAddress], (err, result) => {})
});

app.listen(3001, () => {
    console.log("Tudo ok!")
})