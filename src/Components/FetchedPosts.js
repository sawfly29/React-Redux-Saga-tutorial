import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedPosts } from '../redux/actions'
import { Loader } from './Loader'
import {Alert} from './Alert'

import Post from './Post'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const dispatch = useDispatch()
    const posts  = useSelector(state => state.posts.fetchedPosts)
    const app  = useSelector(state => state.app.loading)

    if (app){return <Loader />}



    if (!posts.length){return <button className='btn btn-primary' onClick={() => dispatch(fetchedPosts())}>Подгрузить посты</button>}

    return posts.map(post => <Post key={post.id} post = {post}/>)
}