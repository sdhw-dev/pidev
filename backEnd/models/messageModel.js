const { ObjectId } = require("bson");
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
mongoose.connection;

const messageSchema = new mongoose.Schema(
  {
    message: String,
    user: ObjectId,
  },
  { collection: "messages" },
  { timestamps: true }
);

const message = mongoose.model("messages", messageSchema);
module.exports = message;
