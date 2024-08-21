let posts=[
    {id:1,title:'post1'},
    {id:2,title:'post2'},
    {id:3,title:'post3'},
    {id:4,title:'post4'},

]

// get all notes
//@route GET /api/posts
const getPosts=(req,res,next)=>{
    const limit=parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0)
    {
       return  res.status(200).json(posts.slice(0, limit));
    }
        res.status(200).send(posts);
//
    
}
//@desc    Get single note
//@route   /api/posts/:id
const getPost=(req,res,next)=>{
    
    const id=parseInt(req.params.id);
    const post = posts.find((post)=> post.id === id);

    if(!post){
        const error=new Error('A post with the id was not found');
        error.status=404;
        return next(error);
    }
     res.status(200).send(post)
    
    
}

//@desc    Create a new note
//@route   /api/posts/:id
const createPost=(req,res,next)=>{
    const newPost={
        id:posts.length+1,
        title:req.body.title
    }
    if(!newPost.title){
        const error=new Error(`Cannot add without a title`);
        error.status=400;
        return next(error);
    }
    posts.push(newPost);
    res.status(200).json(posts)
}


//@desc    Update a note
//@route   /api/posts/:id
const updatePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id==id);

    if(!post){
       const error=new Error('A post with the id was not found');
       return next(error);
    }
    post.title=req.body.title
    res.status(200).json(posts);
}




//@desc   Delete a note
//@route   /api/posts/:id
const deletePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post=posts.find((post)=>post.id==id);

    if(!post){
        return res.status(404).json({msg:'task not found'});
    }
    posts=posts.filter((post)=>post.id!==id)
    res.status(200).json(posts);
}


module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
};