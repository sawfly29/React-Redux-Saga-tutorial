import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({post}) => {
  return (
    <div className="card" key={post.key}>
      <div className="card-body">
        <div className="card-title">Post {post.title}</div>
      </div>
    </div>
  );
};
