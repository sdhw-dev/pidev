const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://yassine:yassinenaciri@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
const db = mongoose.connection;

const userSchema = new mongoose.Schema(
  {
    nom: String,
    prenom: String,
    pass: String,
    contact: {
      mail: String,
      tel: Number,
    },
    adresse: {
      idVille: String,
      adresse: String,
    },
    image: String,
  },
  { collection: "users" },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

module.exports = user;
