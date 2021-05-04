const user = require("../models/userModel");
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
    description: "",
  });
  newUser.save();

  return newUser;
};

const updateUser = async (newUser) => {
  console.log(newUser);
  let user = await userModel.findOneAndUpdate({ _id: newUser._id }, newUser, {
    new: true,
  });
  return user;
};

exports.exists = exists;
exports.addUser = addUser;
exports.checkMail = checkMail;
exports.addImage = addImage;
exports.getImage = getImage;
exports.getUser = getUser;
exports.updateUser = updateUser;
