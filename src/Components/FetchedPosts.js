import React from 'react'
import Post from './Post'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({posts}) => {
    if (!posts.length){return <button className='btn btn-primary'>Создать пост</button>}

    return posts.map(post =>  <Post key={post} post = {post}/>)
}