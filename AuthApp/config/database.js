const mongoose = require("mongoose");

require("dotenv").config();

const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB connection is succesfully");
    })
    .catch((error) => {
      console.log("DB connection error occur");
      console.error(error.message);
    });
};

module.exports = connect;
