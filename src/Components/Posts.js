import React from 'react'
import {connect} from 'react-redux'
import Post from "./Post";

// eslint-disable-next-line import/no-anonymous-default-export
 const Posts = ({ posts }) => {
    if (!posts.length){return <h3 className='text-center'>No posts here yet!</h3>}
  return posts.map((post) => <Post post={post} key={post} />);
};


export default connect(null, null)(Posts)