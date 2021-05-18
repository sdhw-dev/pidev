const demandeModel = require("../models/demandeModel");

const ajouterDemande = async (demande, userId) => {
  const newDemande = new demandeModel({
    nom: utilisateur.nom,
    prenom: utilisateur.prenom,
    pass: utilisateur.pass,
    contact: {
      mail: utilisateur.contact.mail,
      tel: utilisateur.contact.tel,
    },
    adresse: {
      idVille: utilisateur.adresse.idVille,
      adresse: utilisateur.adresse.adresse,
    },
    description: "",
  });
  newDemande.save();
};
