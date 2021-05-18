const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://oumaima:oumaimatahiri@cluster0.hm988.mongodb.net/app?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.connection;

const villesSchema = new mongoose.Schema(
  {
    nom: String,
    id: Number,
  },
  { collection: "villes" },
  { timestamps: true }
);

const ville = mongoose.model("villes", villesSchema);
module.exports = ville;
