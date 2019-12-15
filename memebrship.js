// Sapna Devi (C0742477)
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Maninder:maninder23@cluster0-kdz5l.mongodb.net/test?retryWrites=true&w=majorit";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
if (err) throw err;
var dbo = db.db("Library");
var myData = [
{Membership_Id: 'M1', Membership_Type: 'Monthly', Fees: '$50'},
{Membership_Id: 'M2', Membership_Type: 'Weekly', Fees: '$20'},
{ Membership_Id: 'M3', Membership_Type: 'Yearly', Fees: '$500'},
{ Membership_Id: 'M4', Membership_Type: 'Student', Fees: '$150'},
{ Membership_Id: 'M5', Membership_Type: 'Senior_Citizen', Fees: '$98'},
{Membership_Id: 'M6', Membership_Type: 'Consultant', Fees: '$174'}
];
dbo.collection("Membership").insertMany(myData, function(err, res) {
if (err) throw err;
console.log(res.insertedCount+ " documents inserted");
db.close();
});
});