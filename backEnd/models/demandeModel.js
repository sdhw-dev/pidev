const { ObjectId } = require("bson");
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/app", { useNewUrlParser: true })
  .then(() => {
    console.log("Demandes :connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.connection;

const demandeSchema = new mongoose.Schema(
  {
    idAnnonceConcerné: ObjectId,
    idAnnonceProposé: ObjectId,
    idProposeur: ObjectId,
    idDemandeur: ObjectId,
    message: String,
    nbrePoints: Number,
    titreAnnonceDemandé: String,
    titreAnnonceProposé: String,
    nomDemandeur: String,
    date: String,
    etat:Number,
  },
  { collection: "demandes" },
  { timestamps: true }
);

const demande = mongoose.model("demandes", demandeSchema);
module.exports = demande;
