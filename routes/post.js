const express = require("express");
const router = express.Router();

const postController = require('../controllers/post.js')

const { userValidationRules, validate } = require("../helpers/index.js")

//=================================>
// * Get all posts
//=================================>
router.get('/', postController.getPosts)

//=================================>
// * Create post
//=================================>
router.post('/create', userValidationRules(), validate, postController.createPost)

module.exports = router;