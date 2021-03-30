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

const addAnnonce = (user, annonce) => {
  var newImage = new imageModel(image);
  newImage.save();

  const newAnnonce = new annonceModel({
    type: annonce.type,
    idVille: annonce.idVille,
    idCategorie: annonce.idCategorie,
    description: annonce.desciption,
    titre: annonce.titre,
    idUser: annonce.idUser,
  });
  return newAnnonce.save();
};

exports.addAnnonce = addAnnonce;
exports.addImage = addImage;
exports.getAnnonce = getAnnonce;
