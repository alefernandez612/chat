const express = require('express');
const router = express.Router();
const Mensaje = require('../models/mensaje.model');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const mensajes = (await Mensaje
    .find()
    .sort({ createdAt: -1 })
    .limit(5)
    .exec())
    .reverse();
  res.render('index', { title: 'Chat Chachi', mensajes });
});

module.exports = router;
