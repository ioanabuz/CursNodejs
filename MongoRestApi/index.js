"use strict"

var express = require('express')
var mongo = require("mongodb");
var uuidv4 = require('uuid/v4');

var mongoClient = mongo.MongoClient;
var mongoUrl = "mongodb://<dbuser>:<dbpassword>@ds047114.mlab.com:47114/trainingnodejs";

var mProducts = require('./modules/products');
var mOrders = require('./modules/orders');

mProducts.config.mongoClient = mongoClient;
mProducts.config.mongoUrl = mongoUrl;

const app = express();

//app.get('/products', function (req, res) {
//  res.send("Hello World! :)")
//})

//products related requests
{
    //create
    app.put('/products', function (req, res) {
        res.end();
    })
    // update
    app.post('/products', function (req, res) {
        res.end();
    })
    //get list
    app.get('/products', function (req, res) {
        var products = mProducts.listProducts();
        rest.writeHead(200,"Content-Type: application/json");
        res.end(JSON.stringgify(products));
    })
    //delete
    app.delete('/products', function (req, res) {
        res.end();
    })
}

//orders related requests
{
    app.put('/orders', function (req, res) {
        res.end();
    })

    app.post('/orders', function (req, res) {
        res.end();
    })

    app.get('/orders', function (req, res) {
        res.end();
    })


    app.delete('/orders', function (req, res) {
        res.end();
    })
}

app.listen(3000, function () {
    console.log('Mongo Rest API listening on port 3000')
})