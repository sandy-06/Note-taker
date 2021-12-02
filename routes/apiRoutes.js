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


router.delete('/notes/:id', (req, res) => {
   console.log("checking")
   fs.readFile('db/db.json', 'utf8',  function (error, data) {
      const noteArray = [].concat(JSON.parse(data));
   const newNotes = noteArray.filter( note => {return note.id !== req.params.id});
   fs.writeFile('db/db.json', JSON.stringify(newNotes), function(error, dataOne){
      console.log(dataOne);  
      res.json(dataOne); 
   })
     
     
   })

});
      




module.exports = router;