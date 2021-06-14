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

const getTrocsUser = async (userId) => {
  liste = [];
  liste[0] = await demandeModel.find({ idProposeur: userId });
  liste[1] = await demandeModel.find({ idDemandeur: userId });
  return liste;
};

const accepterDemande = async (idDemande) => {
  let demande = await demandeModel.findOne({ _id: idDemande });
  demande.etat = 1;
  demande.save();
};
const refuserDemande = async (idDemande) => {
  await demandeModel.deleteOne({ _id: idDemande });
};

const updateEtat = async (idDemande, idUser) => {
  let demande = await demandeModel.findOne({ _id: idDemande });
  if (demande.etat == 2 || demande.etat == 3) {
  } else if (demande.etat == 1 && demande.idProposeur == idUser) {
    //utilisateurEst proposeur
  } else if (demande.etat == 1 && demande.idDemandeur == idUser) {
    // utilisateur est demandeur
  }
};

exports.updateEtat = updateEtat;

exports.refuserDemande = refuserDemande;
exports.accepterDemande = accepterDemande;
exports.ajouterDemande = ajouterDemande;
exports.getDemandesUser = getDemandesUser;
exports.getTrocsUser = getTrocsUser;
