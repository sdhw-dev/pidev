const demandeModel = require("../models/demandeModel");

const ajouterDemande = async (demande, userId) => {
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
  });
  newDemande.save();
  return 1;
};

const getDemandesUser = (userId) => {
  return demandeModel.find({ idProposeur: userId });
};

exports.ajouterDemande = ajouterDemande;
exports.getDemandesUser = getDemandesUser;
