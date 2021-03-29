const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/app", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.connection;

const annoncesSchema = new mongoose.Schema(
  {
    type: Boolean,
    idVille: Number,
    idCategorie: Number,
    description: String,
    titre: String,
    images: [String],
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { collection: "annonces" },
  { timestamps: true }
);

const annonce = mongoose.model("annonces", annoncesSchema);
module.exports = annonce;
