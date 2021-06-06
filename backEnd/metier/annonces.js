const { ObjectId } = require("bson");
const annonceModel = require("../models/annonceModel");
const user = require("./users");
const getAnnonces = (filtre) => {
  return annonceModel.find(filtre, (err, annonces) => {
    if (err) {
    } else {
      return annonces;
    }
  });
};

const addImage = async (annonceId, images) => {
  let annonce = await annonceModel.findOne({ _id: annonceId });
  annonce.set("images", images);
  annonce.save();
  return annonce;
};

const getAnnonce = async (annonceId) => {
  return annonceModel.findOne({ _id: annonceId });
};
const getUserAnnonces = (userId) => {
  return annonceModel.find({ idUser: userId });
};

const getListeAnnonces = async (liste) => {
  let l = [];
  for (let i = 0; i < liste.length; i++) {
    l.push(await annonceModel.findById(liste[i]));
  }
  return l;
};

const addAnnonce = (annonce, img) => {
  console.log(annonce);
  var image;
  if (img == -1) {
    //image = user.getImage(ObjectId(annonce.idUser));
    image = "download.png";
  } else {
    image = img;
  }
  let date = new Date();
  date = date.toLocaleString();
  const newAnnonce = new annonceModel({
    type: annonce.type,
    idVille: annonce.idVille,
    idCategorie: annonce.idCategorie,
    description: annonce.description,
    titre: annonce.titre,
    idUser: ObjectId(annonce.idUser),
    image: image,
    date: date,
  });
  return newAnnonce.save();
};

exports.addAnnonce = addAnnonce;
exports.addImage = addImage;
exports.getAnnonces = getAnnonces;
exports.getAnnonce = getAnnonce;
exports.getUserAnnonces = getUserAnnonces;
exports.getListeAnnonces = getListeAnnonces;
