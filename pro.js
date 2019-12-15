var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SapnaDevi:abcde@cluster0-8jlve.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Library");
  dbo.createCollection("Other_Stuff", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  
});
});