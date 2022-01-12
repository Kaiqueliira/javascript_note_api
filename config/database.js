const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let url =
  "mongodb+srv://admin:jsnote1234@cluster0.sk23a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => console.error(err));
