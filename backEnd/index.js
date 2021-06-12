const express = require("express");
const app = express();
var cors = require("cors");
app.use(express.json());
const path = require("path");
app.use(express.urlencoded());
var fs = require("fs");
const multer = require("multer");
app.use(cors());
//app.use(express.static(path.join(__dirname + "/..", "build")));

const villeModel = require("./models/villeModel");
const categorieModel = require("./models/categorieModel");
const annonces = require("./metier/annonces");
const users = require("./metier/users");
const categories = require("./metier/categories");
const { json } = require("body-parser");
const demandes = require("./metier/demandes");

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
  res.json(users.addUser(newUser));
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
  let annonceInfo = {
    troc: {},
    adresse: "",
    categorie: "",
    nom: "",
    idAnnonce: "",
    idTroqueur: "",
  };
  annonces.getAnnonce(annonceId).then(async (annonce) => {
    annonceInfo.troc = annonce;
    let categ = await categories.getCategorie(annonce.idCategorie);
    let user = await users.getUser(annonce.idUser);
    annonceInfo.adresse = user.adresse.adresse;
    annonceInfo.categorie = categ;
    annonceInfo.nom = user.nom + " " + user.prenom;
    annonceInfo.idAnnonce = annonceId;
    annonceInfo.idTroqueur = user._id;
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

app.get("/getImageUser", (req, res) => {
  users.getUser(req.query.id).then((user) => {
    /*(path = user.image),*/ file = fs.readFileSync("./uploads/" + user.image);
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(file);
  });
});

app.get("/getImageAnnonce", (req, res) => {
  annonces.getAnnonce(req.query.id).then((annonce) => {
    /*(path = annonce.image),*/ file = fs.readFileSync(
      "./uploads/" + annonce.image
    );
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(file);
  });
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

app.post("/sendMessage", (req, res) => {
  users.ajouterMessage(req.body.message, req.body.userSending, req.body.userId);
});

app.get("/getMessages", async (req, res) => {
  let messages = await users.getMessages(req.query.id);
  res.json(messages);
});

app.post("/ajouterAuxFavoris", async (req, res) => {
  users.ajouterFavoris(req.body.idAnnonce, req.body.idUser);
});

app.post("/ajouterAuxContacts", async (req, res) => {
  users.ajouterContact(req.body.idContact, req.body.idUser);
});

app.get("/getListeTrocs", (req, res) => {
  let userId = req.query.id;
  annonces.getUserAnnonces(userId).then((result) => {
    res.json(result);
  });
});

app.get("/getListeDemandes", (req, res) => {
  let userId = req.query.id;
  demandes.getDemandesUser(userId).then((result) => {
    res.json(result);
  });
});

app.get("/getTrocs", (req, res) => {
  let userId = req.query.id;
  demandes.getTrocsUser(userId).then((result) => {
    res.json(result);
  });
});

app.post("/enregistrerDemande", (req, res) => {
  demandes.ajouterDemande(JSON.parse(JSON.stringify(req.body)));
});

app.get("/getListeFavoris", (req, res) => {
  let userId = req.query.id;
  users.getUser(userId).then(async (result) => {
    let l = await annonces.getListeAnnonces(result.favoris);
    res.json(l);
  });
});

app.get("/getListeContacts", (req, res) => {
  let userId = req.query.id;
  users.getUser(userId).then(async (result) => {
    let l = await users.getListeContacts(result.contacts);
    res.json(l);
  });
});

app.get("/supprimerFavoris", async (req, res) => {
  let userId = req.query.id;
  let annonceId = req.query.annonceId;
  await users.supprimerFavoris(userId, annonceId);
});
app.get("/supprimerContact", async (req, res) => {
  let userId = req.query.id;
  let annonceId = req.query.annonceId;
  await users.supprimerContact(userId, annonceId);
});

app.get("/getDescriptionAnnonce", (req, res) => {
  annonces.getAnnonce(req.query.id).then((annonce) => {
    console.log(annonce.description);
    res.send(annonce.description);
  });
});

app.get("/accepterDemande", (req, res) => {
  demandes.accepterDemande(req.query.id);
  res.send();
});
app.get("/refuserDemande", (req, res) => {
  demandes.refuserDemande(req.query.id);
  res.send();
});

app.post("/noterTroc", (req, res) => {
  let idAnnonce = req.body.id;
  let commentaire = req.body.commentaire;
  let note = req.body.note;
  annonces.ajouterNote(idAnnonce, commentaire, note).then((user) => {
    users.ajouterNote(user, note);
  });
  res.send();
});

app.get("/supprimerAnnonce", (req, res) => {
  let idAnnonce = req.body.id;
  annonces.supprimerAnnonce(idAnnonce);
});

app.all("/getAnnoncesUser", (req, res) => {
  let body = JSON.parse(JSON.stringify(req.body));
  annonces.getAnnonces(filtre).then((result) => {
    res.json(result);
  });
});

/*app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/..", "build", "index.html"));
});*/
app.listen(PORT, () => console.log("server started"));
