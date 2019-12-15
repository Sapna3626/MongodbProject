var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SapnaDevi:abcde@cluster0-iqgub.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
