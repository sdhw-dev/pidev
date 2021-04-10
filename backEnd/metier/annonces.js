const { ObjectId } = require("bson");
const annonceModel = require("../models/annonceModel");

const getAnnonce = (filtre) => {
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

const addAnnonce = (annonce, image) => {
  console.log(annonce);
  const newAnnonce = new annonceModel({
    type: annonce.type,
    idVille: annonce.idVille,
    idCategorie: annonce.idCategorie,
    description: annonce.description,
    titre: annonce.titre,
    idUser: ObjectId(annonce.idUser),
    image: image,
  });
  return newAnnonce.save();
};

exports.addAnnonce = addAnnonce;
exports.addImage = addImage;
exports.getAnnonce = getAnnonce;
