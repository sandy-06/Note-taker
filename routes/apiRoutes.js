const router = require('express').Router();
const fs = require("fs");


const generateUniqueId = require('generate-unique-id');



router.get('/notes', (req, res) => {

   fs.readFile('db/db.json', 'utf8',  function (error, data) {
      console.log(data);
      res.json(data);
   })


});
router.post('/notes', (req, res) => {

   const note = req.body;
   fs.readFile('db/db.json','utf8',  function (error, data) {
      const id = generateUniqueId(); 


      const notesArray = JSON.parse(data);
      
      notesArray.push({...note, id});
      

      fs.writeFile('db/db.json', JSON.stringify(notesArray), function(error, data){
         console.log(data);  
         res.json(data); 
      })
   })
});


router.delete('/:id', (req, res) => {
   Note.destroy({
      where: {
         id: req.params.id
      }
   });
});





module.exports = router;