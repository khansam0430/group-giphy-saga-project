const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log("in server /favorite/GET");
  const queryText = `SELECT * FROM favorites ORDER BY title ASC`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log("in server post with: ", req.body);
  const newFavorite = req.body;
  const queryText = `INSERT INTO favorites ("title", "url", "category_id")
                    VALUES ($1, $2, $3)`;
  const queryValues = [
    newFavorite.sendTitle,
    newFavorite.sendUrl,
    newFavorite.sendCat
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((err) => {
      console.log('Error completing SELECT favorite query', err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id ----------------can use this route to move favorites later
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  console.log("in server delete with: ", req.params.id);
  res.sendStatus(200);
});

module.exports = router;
