const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://priyanka:priyanka_123@cluster0.gdcpi.mongodb.net/test", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,

        useFindAndModify: true,
}).catch((error) => {
        console.log(error);
    });;
