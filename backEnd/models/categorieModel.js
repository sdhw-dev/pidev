const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb+srv://wissal:wissalsidihida@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.connection;

const categoriesSchema = new mongoose.Schema(
  {
    type: Boolean,
    nom: String,
    idCategorie: Number,
  },
  { collection: "categories" },
  { timestamps: true }
);

const categorie = mongoose.model("categories", categoriesSchema);
module.exports = categorie;
