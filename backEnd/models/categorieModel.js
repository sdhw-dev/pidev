const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/app", { useNewUrlParser: true })
  .then(() => {
    console.log("Categories :connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.connection;

const categoriesSchema = new mongoose.Schema(
  {
    type: Boolean,
    nom: String,
    id: Number,
  },
  { collection: "categories" },
  { timestamps: true }
);

const categorie = mongoose.model("categories", categoriesSchema);
module.exports = categorie;
