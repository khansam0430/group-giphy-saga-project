const express = require('express');
const router = express.Router();
const axios = require('axios');




router.get('/:search', (req,res)=>{
    let searchParams = req.params.search

    axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchParams}&api_key=${process.env.GIPHY_API_KEY}`)
    .then((response)=>{
        res.send(response.data);
    }).catch((error)=>{
        console.log('you got an error!', error);
        res.sendStatus(500);
    })


})

module.exports = router;