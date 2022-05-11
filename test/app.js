var express = require('express');
var app = new express();
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://172.24.104.83:27017/test",(err, db) => {
    if(err) throw err;
    db.collection('student', (err, collection) => {
        collection.find().toArray((err, items) => {
            if(err) throw err;
            console.log(items)
        })
    })
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: '.'});
});

app.post('/submit-student-data', (req, res) => {
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' Submitted Successfully!');
});

app.put('/update-data', (req, res) => {
    res.send('PUT Request');
})

app.delete('/delete-data', (req, res) => {
    res.send('DELETE Request');
})

app.use(express.static('assets'));
app.use('/images', express.static(__dirname + '/assets/images'));

var server = app.listen(5000, () => {
    console.log('Node server is running..');
});