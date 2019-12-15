// Sapna Devi (C0742477)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majorit";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var updateData = {Librarian_Name:/^J/};
var newValues={$set:{Salary:"10000"}};
dbo.collection("Librarian").updateMany(updateData,newValues, function(err, res) {
if (err) throw err;
console.log( " Your documents updated");
db.close();
});
});