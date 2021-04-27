const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

/*mongodb+srv://yassine:yassinenaciri@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority*/
mongoose
<<<<<<< HEAD
  .connect(
    "mongodb+srv://oumaima:oumaimatahiri@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
=======
  .connect("mongodb+srv://wissal:wissalsidihida@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority", { useNewUrlParser: true })
>>>>>>> ff3a9365b01132df5c66870e0ea3a1cfef782036
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
