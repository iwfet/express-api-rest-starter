



class postService{
    async createPost(req,res,next){
        return res.json({ status: true})
    }

}

export const PostService = new postService()