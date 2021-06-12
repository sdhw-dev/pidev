const { ObjectId } = require("bson");
const { ObjectID } = require("bson");
const userModel = require("../models/userModel");

const exists = (utilisateur) => {
  return userModel.findOne(
    {
      pass: utilisateur.pass,
      "contact.mail": utilisateur.mail,
    },
    (user, err) => {
      if (err) {
        console.log(err);
      }
      return user;
    }
  );
};

const getUser = async (userId) => {
  return userModel.findOne({ _id: userId });
};

const checkMail = (mail) => {
  return userModel.findOne(
    {
      "contact.mail": mail.mail,
    },
    (user, err) => {
      if (err) {
        console.log(err);
      }
      if (user) {
        return true;
      } else {
        return false;
      }
    }
  );
};

const addImage = async (userId, image) => {
  let user = await userModel.findOne({ _id: userId });
  user.set("image", image);
  user.save();
  return user;
};

const getImage = async (id) => {
  let user = await userModel.findOne({ _id: id });
  return user.image;
};

const addUser = (utilisateur) => {
  const newUser = new userModel({
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
    image: "",
    description: "",
    messages: [],
  });
  newUser.save().then(() => {
    return newUser;
  });

  return newUser;
};

const updateUser = async (newUser) => {
  console.log(newUser);
  let user = await userModel.findOneAndUpdate({ _id: newUser._id }, newUser, {
    new: true,
  });
  return user;
};

const ajouterFavoris = async (idTroc, idUser) => {
  let user = await userModel.findOne({ _id: idUser });
  user.favoris.push(idTroc);
  user.save();
};
const ajouterContact = async (idContact, idUser) => {
  let user = await userModel.findOne({ _id: idUser });
  user.contacts.push(idContact);
  user.save();
};

const ajouterMessage = async (message, userSending, userId) => {
  let user = await userModel.findOne({ _id: userId });
  let date = new Date();
  date = date.toLocaleString();
  user.messages.push({
    message: message,
    user: userSending._id,
    nomUser: userSending.prenom + " " + userSending.nom,
    date: date,
  });
  user.save();
};

const getMessages = async (userId) => {
  let user = await userModel.findOne({ _id: userId });
  return user.messages;
};
const getListeContacts = async (liste) => {
  let l = [];
  for (let i = 0; i < liste.length; i++) {
    l.push(await userModel.findById(liste[i]));
  }
  return l;
};
const supprimerFavoris = async (userId, annonceId) => {
  let user = await userModel.findOne({ _id: userId });
  let c = -1;
  console.log(JSON.stringify(annonceId));
  for (let i = 0; i < user.favoris.length; i++) {
    console.log(JSON.stringify(user.favoris[i]));
    if (JSON.stringify(user.favoris[i]) === JSON.stringify(annonceId)) {
      c = i;
    }
  }
  if (c >= 0) {
    user.favoris.splice(c, 1);
    user.save();
  }
};

const ajouterNote = async (id, note) => {
  let user = await userModel.findOne({ _id: id });
  if (user.note) {
    user.note =
      (Number(user.note * user.nbreNotes) + Number(note)) /
      (user.nbreNotes + 1);
    user.nbreNotes += 1;
  } else {
    user.note = note;
    user.nbreNotes = 1;
  }

  user.save();
};

exports.ajouterNote = ajouterNote;
exports.supprimerFavoris = supprimerFavoris;
exports.getListeContacts = getListeContacts;
exports.ajouterContact = ajouterContact;
exports.ajouterFavoris = ajouterFavoris;
exports.ajouterMessage = ajouterMessage;
exports.getMessages = getMessages;
exports.exists = exists;
exports.addUser = addUser;
exports.checkMail = checkMail;
exports.addImage = addImage;
exports.getImage = getImage;
exports.getUser = getUser;
exports.updateUser = updateUser;
