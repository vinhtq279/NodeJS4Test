var express = require('express');
var app = new express();
var MongoClient = require('mongodb').MongoClient;

var bodyParser = require("body-parser");
const { ObjectId } = require('mongodb');
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});
 */

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: '.'});
});

app.get('/student-list', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    MongoClient.connect("mongodb://172.24.104.83:27017",(err, client) => {
        if(err) throw err;
        db = client.db('test');
        db.collection('student').find().toArray((err, items) => {
            if(err) throw err;
            //res.send({"name": "Minh"});
            res.send(JSON.stringify(items));
            //res.send(items);
            /**
            items.map((item) => {
                //if (item.name == 'Vinh') res.send(item);
                res.send(JSON.stringify(item));
            })
             */
            client.close();
        })
    });
});

app.get('/product-category-list', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    MongoClient.connect("mongodb://172.24.104.83:27017",(err, client) => {
        if(err) throw err;
        db = client.db('test');
        db.collection('category').find().toArray((err, items) => {
            if(err) throw err;
            //res.send({"name": "Minh"});
            
            res.send(items);
            client.close();
        })
    });
});

app.post('/product-category-view', (req, res) => {
    //res.set('Access-Control-Allow-Origin', '*');
    //console.log(JSON.parse(req.body));
    console.log(req.body);
    //MongoClient.connect("mongodb://172.24.104.83:27017",(err, client) => {
    //    if(err) throw err;
        /**
        db = client.db('test');
        db.collection('category').find({"_id": ObjectId(req.body.ID)}).toArray((err, items) => {
            if(err) throw err;
            //res.send({"name": "Minh"});
            console.log(items);
            //res.send(items);
            client.close();
        })
         */
    //});
});

app.post('/submit-employee-data', (req, res) => {
    console.log(req);
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' Submitted Successfully!');
});

app.post('/test_post', (req, res) => {
    res.send('Connected Successfully!');
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