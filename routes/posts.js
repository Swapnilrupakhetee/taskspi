const express = require('express');
const router =express.Router();
const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
} = require('../controllers/postController');

//get all posts
router.get('/',getPosts)

//Get single post
router.get('/:id',getPost)

//Create new tasks
router.post('/',createPost)

// Update taks
router.put('/:id',updatePost)

//Delete Tasks
router.delete('/:id',deletePost)

module.exports= router