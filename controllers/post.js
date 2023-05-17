// import post models
const Post = require("../models/posts.js");

exports.getPosts = (req, res) => {
  const posts = Post.find().select("_id title description") // la méthode select permet de choisir les éléments que nous voulons recevoir dans la réponse.
  .then((posts) => {
    res.status(200).json({ data: posts })
  })
  .catch((error) => res.status(500).json({ error }));
};

exports.createPost = (req, res, next) => {
      // Check if request contain text
  if (!req.body) {
    return res.status(422).json({
      message: "Your request does not contain text.",
    });
  }

  const post = new Post(req.body); // new instance with Post model
  //   console.log("CREATING POST : ", req.body);
  post
  .save()
  .then(()=> res.status(201).json(post))
  .catch((error) => res.status(500).json({ error }));
};