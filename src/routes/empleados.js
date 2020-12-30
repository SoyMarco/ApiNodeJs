const express = require('express');
const router = express.Router();

const mySqlCnn  = require('../database.js');

// GET all nurses
router.get('/', (req, res) => {
  mySqlCnn.query('SELECT * FROM nurse', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An nurse
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mySqlCnn.query('SELECT * FROM nurse WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An nurse
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mySqlCnn.query('DELETE FROM nurse WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'nurse Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An nurse
router.post('/add', (req, res) => {
  const { name, email, phone } = req.body;
  console.log(req.body)
 mySqlCnn.query("INSERT INTO nurse (name, email, phone) VALUE (?,?,?)", [name, email, phone], (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// UPDATE An nurse
router.put('/update', (req, res) => {
  const { id, name, email, phone} = req.body;
  //const { id } = req.id;
  console.log(req.body);
  console.log(req.id);
 mySqlCnn.query("UPDATE nurse SET ? WHERE id = ?", [{name: name, email: email, phone: phone}, id], (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});


module.exports = router;
