import React from 'react'
import {connect} from 'react-redux'//соединение реакта и редакса
import Post from "./Post";

// eslint-disable-next-line import/no-anonymous-default-export
 const Posts = ({ syncPosts }) => {
    if (!syncPosts.length){return <h3 className='text-center'>No posts here yet!</h3>}
  return syncPosts.map((post) => <Post post={post} key={post} />);
};

const mapStateToProps = state => {
  console.log(state)
  return {
    syncPosts: state.posts.posts
  }
}//преобразователь state в пропсы

export default connect(mapStateToProps, null)(Posts)