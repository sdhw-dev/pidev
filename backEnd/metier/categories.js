const categorieModel = require("../models/categorieModel");

const getCategorie = async (categ) => {
  let categorie = await categorieModel.findOne({ id: categ });
  return categorie.nom;
};

module.exports.getCategorie = getCategorie;
