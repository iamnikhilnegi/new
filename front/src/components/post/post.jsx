import React from 'react';
import PostText from './postText.jsx'

function Post(props)
{
    return( 
    <div className="post-box">
    <PostText Text={props.Text}/>  
    </div>
    );
}

export default Post;