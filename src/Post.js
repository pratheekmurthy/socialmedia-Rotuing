import React from 'react'

const Post =(props)=>{
    const { post} = props

    return (
        <div>
       
        <div class="card">
        <div class="card-body">
           <b>Title -{post.title}</b>
            <p>{post.body}</p>
        </div>
</div>
    </div>
        
    )

}

export default Post