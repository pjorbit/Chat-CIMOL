var express = require("express");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const router = express.Router();

app.use(
  "/",
  router.get("/", async (req, resp) => {
    resp.status(200).send("<h1> API - CHAT </h1>");
  })
);

app.use(
  "/sobre",
  router.get("/sobre", async (req, res, next) => {
    res.status(200).send({
      nome: "API_CHAT",
      versão: "0.1.0",
      autor: "Rafael Lindasso",
    });
  })
);

app.use(
  "/salas",
  router.get("/salas", async (req, res, next) => {
    const salaController = require("./controller/salaController");
    let resp = salaController.get();
    res.status(200).send(resp);

    if (
      await token.checkToken(
        req.headers.token,
        req.headers.idUser,
        req.headers.nick
      )
    ) {
      let resp = await salaController.get();
      res.status(200).send(resp);
    } else {
      res.status(400).send({ msg: "Usuário não autorizado!" });
    }
  })
);

app.use("/entrar", router.post("/entrar"), async (req, res, next) => {
  const userController = require("./controller/usuarioController");
  let resp = await userController.entrar(req.body.nick);
  res.status(200).send(resp);
});

app.use("sala/entrar", router.put("/sala/entrar", async (req, req) => {
    if(!token.checkToken(req.headers.token, req.headers.idUser, req.headers.nick)) {
        return false
    }
    let resp = await salaController.entrar(req.headers.idUser, req.headers.idUSala);
    res.status(200).send(resp);
}))

module.exports = app;
