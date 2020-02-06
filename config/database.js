if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI:
      "mongodb+srv://kevin:kevin@cluster0-ykmp1.mongodb.net/test?retryWrites=true&w=majority"
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost/coinInv" };
  // module.exports = {
  //   mongoURI:
  //     "mongodb+srv://kevin:kevin@cluster0-ykmp1.mongodb.net/test?retryWrites=true&w=majority"
  // };
}
