const router = require('express').Router();

//const {postDog} = require('../controllers/postDog')

router.get('/', (req,res) =>{
    res.send('Hola, estas en el Get del Home... :-)')
});     //<- funciona correctamente.. Ok

module.exports = router;