const demandeModel = require("../models/demandeModel");

const ajouterDemande = async (demande, userId) => {
  let date = new Date();
  date = date.toLocaleString();
  const newDemande = new demandeModel({
    idAnnonceConcerné: demande.idAnnonceConcerné,
    idAnnonceProposé: demande.idAnnonceProposé,
    idProposeur: demande.idProposeur,
    idDemandeur: demande.idDemandeur,
    message: demande.message,
    nbrePoints: demande.nbrePoints,
    titreAnnonceDemandé: demande.titreAnnonceDemandé,
    titreAnnonceProposé: demande.titreAnnonceProposé,
    nomDemandeur: demande.nomDemandeur,
    date: date,
    etat: 0,
  });
  newDemande.save();
  return 1;
};

const getDemandesUser = (userId) => {
  return demandeModel.find({ idProposeur: userId, etat: 0 });
};

const getTrocsUser = (userId) => {
  return demandeModel.find({ idProposeur: userId, etat: 1 });
};

exports.ajouterDemande = ajouterDemande;
exports.getDemandesUser = getDemandesUser;
exports.getTrocsUser = getTrocsUser;
