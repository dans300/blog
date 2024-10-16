/*module.exports.controller = (app) => {
    // get users page
    app.get('/users', (req, res) => {
    res.render('users', { title: 'Users' ,description:"this is the description of all the users"});
    })
    }
*/
//var express = require('express')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const User = require('../models/User');


module.exports.controller = (app) => {
    // Route pour récupérer tous les utilisateurs
    app.get('/users', (req, res) => {
        User.find({}, 'name email')
        .then(users => res.send(users))
        .catch(error => {
          console.log(error);
          res.status(500).send("Erreur lors de la récupération des utilisateurs");
        });
      
    });
   
    // Get a single user details using promises
app.get('/users/:id', (req, res) => {
    User.findById(req.params.id, 'name email')
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: 'User not found' });
        }
        res.send(user);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send({ message: 'Error fetching user' });
      });
  });
  

// Add a new user using promises
app.post('/users',jsonParser,function (req, res)  {
  console.log('Corps de la requête :', req.body);
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });
  
    user.save()
      .then((user) => {
        res.send(user);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send("Erreur lors de l'ajout de l'utilisateur");
      });
  });
 

  


   
  app.post('/changeName',jsonParser,function (req, res)  {
    User.findOneAndUpdate({name: req.body.name},
                         { $set: { name: req.body.newName } })
    .then(result => {
      //console.log(result+" nein");
      return res.status(200).send({ message: 'ca marche'});
    })
    .catch(err => {
      console.error(err);
    });
  })

  app.post('/changeEmail',jsonParser,function (req, res)  {
    User.findOneAndUpdate({email: req.body.email},
                         { $set: { email: req.body.newEmail } })
    .then(result => {
      console.log(result);
      return res.status(200).send({ message: 'ca marche'});
    })
    .catch(err => {
      console.error(err);
    });
  })

//je pense que ce serait mieux de faire une seule fonctionpour chaque changement
    }page74

    