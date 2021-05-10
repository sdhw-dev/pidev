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
const categories = require("./metier/categories");
const { json } = require("body-parser");
const categorie = require("./models/categorieModel");
const user = require("./models/userModel");

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

app.all("/connexion", (req, res) => {
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

app.post("/addBien", upload.array("image"), (req, res) => {
  annonces
    .addAnnonce(JSON.parse(req.body.annonce), req.files[0].filename)
    .then((result) => {
      res.json(result);
    });
});
app.post("/addService", (req, res) => {
  annonces
    .addAnnonce(JSON.parse(JSON.stringify(req.body)), -1)
    .then((result) => {
      res.json(result);
    });
});

app.all("/setUserImage", upload.single("image"), (req, res) => {
  userId = req.query.id;
  users.addImage(userId, req.file.filename).then((result) => {
    res.json(result);
  });
});

app.get("/getUser", async (req, res) => {
  let userId = req.query.id;
  console.log(userId);
  users.getUser(userId).then((user) => {
    res.json(user);
  });
});

app.get("/getAnnonceInfo", (req, res) => {
  let annonceId = req.query.id;
  let annonceInfo = { troc: {}, adresse: "", categorie: "", nom: "" };
  annonces.getAnnonce(annonceId).then(async (annonce) => {
    annonceInfo.troc = annonce;
    let categ = await categories.getCategorie(annonce.idCategorie);
    let user = await users.getUser(annonce.idUser);
    annonceInfo.adresse = user.adresse.adresse;
    annonceInfo.categorie = categ;
    annonceInfo.nom = user.nom + " " + user.prenom;
    res.json(annonceInfo);
  });
});

app.all("/getAnnonces", (req, res) => {
  let body = JSON.parse(JSON.stringify(req.body));
  let filtre = {};
  filtre.type = body.type;
  if (body.idCategorie != -1) {
    filtre.idCategorie = body.idCategorie;
  }
  if (body.idVille != -1) {
    filtre.idVille = body.idVille;
  }
  console.log(filtre);
  annonces.getAnnonces(filtre).then((result) => {
    console.log(result);
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
      console.log(result);
      res.json(result);
    });
});

app.get("/getCategories", (req, res) => {
  categorieModel
    .find({ type: JSON.parse(req.query.type) }, (err, categories) => {
      if (err) {
      } else {
        return categories;
      }
    })
    .then((result) => {
      res.json(result);
    });
});

app.post("/ajouterImage", upload.single("image"), (req, res) => {
  res.json(req.file.filename);
});

app.post("/updateUser", (req, res) => {
  users.updateUser(req.body).then((user) => {
    res.json(user);
  });
});

app.listen(PORT, () => console.log("server started"));
