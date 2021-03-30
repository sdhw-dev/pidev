const express = require("express");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(express.urlencoded());
var fs = require("fs");
const multer = require("multer");
app.use(cors());

const villeModel = require("./models/villeModel");
const categorieModel = require("./models/categorieModel");
const annonces = require("./metier/annonces");
const users = require("./metier/users");
const { json } = require("body-parser");
const categorie = require("./models/categorieModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

app.get("/", (req, res) => {});

app.all("/connection", (req, res) => {
  let user = req.body;
  users.exists(user).then((result) => {
    res.json(result);
  });
});

app.all("/addUser", (req, res) => {
  let newUser = req.body;
  users.addUser(newUser);
});
const PORT = process.env.PORT || 6700;

app.all("/checkMail", (req, res) => {
  let mail = req.body;
  console.log(mail);
  users.checkMail(mail).then((result) => {
    res.json(result);
  });
});

app.all("/addImagestoAnnonce", upload.array("image"), (req, res) => {
  annonceId = req.query.id;
  annonces.addImage(annonceId, req.file.filename).then((result) => {
    res.json(result);
  });
});
app.all("/setUserImage", upload.single("image"), (req, res) => {
  userId = req.query.id;
  users.addImage(userId, req.file.filename).then((result) => {
    res.json(result);
  });
});

app.get("/getUser", (req, res) => {});

app.all("/getAnnonces", (req, res) => {
  annonces.getAnnonce(JSON.parse(req.body.filtre)).then((result) => {
    res.json(result);
  });
});

app.get("/getImage", (req, res) => {
  file = fs.readFileSync("./uploads/" + req.query.path);
  res.writeHead(200, { "Content-Type": "image/jpeg" });
  res.end(file);
});

app.all("/addAnnonce", (req, res) => {
  annonces.addAnnonce(JSON.parse(req.body.annonce)).then((result) => {
    res.json(result);
  });
});

app.get("/getVilles", (req, res) => {
  villeModel
    .find({}, (err, villes) => {
      if (err) {
      } else {
        return villes;
      }
    })
    .then((result) => {
      res.json(result);
    });
});

app.get("/getCategories", (req, res) => {
  categorieModel
    .find({}, (err, categories) => {
      if (err) {
      } else {
        return categories;
      }
    })
    .then((result) => {
      res.json(result);
    });
});

app.listen(PORT, () => console.log("server started"));
