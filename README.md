npm install
//first thing to do

This tutorial exemplifies what I've done since apivs3-nodejs parte1 until now.


"name" is editable, for example I chose "order", just check where these changes are and understand




1- Mkdir src/models

2- touch name.js    //name = your schema name

3- Create a schema into

4- module.exports = mongoose.model('Name', schema);

5- import in app.js 

const Name = require('./models/name');

// With that, in all the places that we invoke the Name model, we are referring to a structure that will be the same.

6- mkdir src/controllers

7- touch name-controller.js

8- Call the model into 

const mongoose = require('mongoose');
const Name = mongoose.model('Name');

9- Create a method to list (async)

exports.listName = async (req, res) => {
  try {
    const data = await Name.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Fail, try again'});
  }
};

10- Create a instance (object) to model

exports.createName = async (req, res) => {
  try {
    const name = new Name({ //for example:
      name: req.body.name,
      number: req.body.number
    });

   await name.save();

   res.status(201).send({message: 'Create is done'});
  } catch (e) {
    res.status(500).send({message: 'Fail'});
  }
};


11- create a file name-routes.js into src/routes

12- into:

const express = require('express');
const router = express.Router();
const nameController = require('../controllers/name-controller');

router.get('/', nameController.listName);
router.post('/', nameontroller.createName);

module.exports = router;


13- into app.js:

//in load routes:
const orderRoutes = require('./routes/order-routes');
app.use('/order', orderRoutes);


14- Test in postman
  GET: http://localhost:3000
  
   GET: http://localhost:3000/name
   
15- POST: http://localhost:3000/name
     body -> raw -> JSON
sintaxe: 

{
    "client": "Joseph",
    "address": "Deathwhite Street, 46, Broklin",
    "contact": "142789753452",
    "order": "I want some fries and a hot burguer, very well... i dont wanna wait, so run!"
}

















    HTTP STATUS

    200: all OK
    201: Is create
    400: Your request has a problem
    404: the data is not found
    500: has a problem in our server
    503: service is not work
