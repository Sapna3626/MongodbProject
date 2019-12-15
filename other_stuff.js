// Sapna Devi (C0742477)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majorit";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{ S_Id: '001', Type: 'Magazine', Total: '200'},
{S_Id: '002', Type: 'Journals', Total: '100'},
{ S_Id: '003', Type: 'CD', Total: '300'},
{ S_Id: '004', Type: 'DVD', Total: '50'},
{ S_Id: '005', Type: 'Games', Total: '80'},
{S_Id: '006', Type: 'Newspapers', Total: '20'}
];
dbo.collection("Other_Stuff").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents inserted");
db.close();
});
});