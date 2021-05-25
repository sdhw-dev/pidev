const { ObjectId } = require("bson");
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(
    " mongodb+srv://oumaima:oumaimatahiri@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.connection;

const demandeSchema = new mongoose.Schema(
  {
    message: String,
    nombrePoints: Number,
    annonceOfferte: ObjectId,
    annonce: ObjectId,
  },
  { collection: "demandes" },
  { timestamps: true }
);

const demande = mongoose.model("demandes", categoriesSchema);
module.exports = demande;
