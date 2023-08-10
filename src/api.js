var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const router = express.Router();

app.use('/', router.get('/', (req, resp) => {
    resp.status(200).send("<h1> API - CHAT </h1>")
}))

app.use('/', router.get("/sobre", (req, res, next) => {
    res.status(200).send({
        "nome": "API_CHAT",
        "versão": "0.1.0",
        "autor": "Rafael Lindasso"
    })
}))

module.exports = app;