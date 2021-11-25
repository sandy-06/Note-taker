const router = require('express').Router();
const fs = require("fs");





router.get('/notes', (req, res) => {
    
     fs.readFile('db/db.json', 'utf8', function(error, data){
        console.log(data);  
        res.json(data); 
     })
    
    // [].concat(JSON.parse(data))
   });
//   router.get('/animals/:id', (req, res) => {
//     const result = findById(req.params.id, animals);
//     if (result) {
//       res.json(result);
//     } else {
//       res.send(404);
//     }
//   });
//   router.post('/api/animals', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = animals.length.toString();
  
//     //if any data in re.body is incorrect, 400 error back
//     if (!validateAnimal(req.body)) {
//       res.status(400).send('The animal is not properly formatted.');
//     } else {
//     //req.body is where our incoming content will be
//     // add animal to json file and animals array in this function
//     const animal = createNewAnimal(req.body, animals);
//     res.json(req.body);
//     }
//   });
  module.exports = router;