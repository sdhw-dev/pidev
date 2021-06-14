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
  liste[0] = await demandeModel.find({ idProposeur: userId, etat: 1 });
  liste[0] = liste[0].concat(
    await demandeModel.find({ idProposeur: userId, etat: 2 })
  );
  liste[0] = liste[0].concat(
    await demandeModel.find({ idProposeur: userId, etat: 3 })
  );
  liste[0] = liste[0].concat(
    await demandeModel.find({ idProposeur: userId, etat: 4 })
  );
  liste[1] = await demandeModel.find({ idDemandeur: userId, etat: 1 });
  liste[1] = liste[1].concat(
    await demandeModel.find({ idDemandeur: userId, etat: 2 })
  );
  liste[1] = liste[1].concat(
    await demandeModel.find({ idDemandeur: userId, etat: 3 })
  );
  liste[1] = liste[1].concat(
    await demandeModel.find({ idDemandeur: userId, etat: 4 })
  );
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
    demande.etat = 4;
  } else if (demande.etat == 1 && demande.idProposeur == idUser) {
    demande.etat = 2;
  } else if (demande.etat == 1 && demande.idDemandeur == idUser) {
    demande.etat = 3;
  }
  demande.save();
};

exports.updateEtat = updateEtat;

exports.refuserDemande = refuserDemande;
exports.accepterDemande = accepterDemande;
exports.ajouterDemande = ajouterDemande;
exports.getDemandesUser = getDemandesUser;
exports.getTrocsUser = getTrocsUser;
