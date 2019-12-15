// Sapna Devi (C0742477)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majorit";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{ Librarian_Id: 'L1', Librarian_Name: 'Peter Sig', Contact: '45678',Salary:'$50000'},
{Librarian_Id: 'L2', Librarian_Name: 'James Anthony', Contact: '65768',Salary:'$90000'},
{ Librarian_Id: 'L3', Librarian_Name: 'Zeck Mathis', Contact: '54678',Salary:'$60000'},
{ Librarian_Id: 'L4', Librarian_Name: 'Justin Lucas', Contact: '3546',Salary:'$40000'},
{ Librarian_Id: 'L5', Librarian_Name: 'Nicolas Henri', Contact: '54363',Salary:'$50000'},
{Librarian_Id: 'l6', Librarian_Name: 'David Malik', Contact: '34546',Salary:'$70000'}
];
dbo.collection("Librarian").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents inserted");
db.close();
});
});