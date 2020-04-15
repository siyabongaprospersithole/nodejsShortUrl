const mongoose = require("mongoose");
const config = require("config");
const parse = {useNewUrlParser: true,
   useUnifiedTopology: true};

const db = config.get("mongoURI");

const connectDB = async() => {
  try {
    await mongoose.connect(db, parse
  );
    console.log("Db connected");
  //console.log(mongoose.version)

  }catch(error) {

    console.error(err.message);
    process.exit(1);

  }
}


module.exports = connectDB;
