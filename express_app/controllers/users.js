/*module.exports.controller = (app) => {
    // get users page
    app.get('/users', (req, res) => {
    res.render('users', { title: 'Users' ,description:"this is the description of all the users"});
    })
    }
*/

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
app.post('/users', (req, res) => {
    const user = new User({
      name: req.params.name,
      email: req.params.email
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
  
  app.post('/users', (req, res) => {
    console.log('Corps de la requête :', req.body); // Pour déboguer
    
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });
  
    user.save()
      .then(user => res.send(user))
      .catch(error => {
        console.log('Erreur lors de l\'ajout de l\'utilisateur :', error);
        res.status(500).send("Erreur lors de l'ajout");
      });
  });
  
    
     // Route pour ajouter John
     app.post('/users/add-john', (req, res) => {
        const user = new User({
            name: 'John Doe',
            email: 'john@doe.com'
        });

        user.save()
        .then(() => res.send("John ajouté avec succès"))
        .catch(error => {
            console.log(error);
            res.status(500).send("Erreur lors de l'ajout");
        });
    });
};