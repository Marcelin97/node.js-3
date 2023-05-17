const express = require('express');
const router = express.Router();

// protect against HTTP Parameter Pollution attacks
const hpp = require('hpp');

// Protect against HPP, should come before any routes
router.use(hpp());

// on importe nos routes
const postRoutes = require("./post.js");

router.use("/posts", postRoutes);

// on exporte le router de ce fichier
module.exports = router;
