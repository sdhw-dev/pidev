const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

/*mongodb+srv://yassine:yassinenaciri@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority*/
/* "mongodb+srv://wissal:wissalsidihida@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority"*/
/* "mongodb+srv://oumaima:oumaimatahiri@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority"*/
mongoose
  .connect("mongodb+srv://oumaima:oumaimatahiri@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority", { useNewUrlParser: true })
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
    image: String,
    idUser: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { collection: "annonces" },
  { timestamps: true }
);

const annonce = mongoose.model("annonces", annoncesSchema);
module.exports = annonce;
