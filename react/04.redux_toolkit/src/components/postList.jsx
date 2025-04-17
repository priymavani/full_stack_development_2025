import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// to send dispatch , to access selector
import { fetchPosts } from "../redux/postSlice";
// fetchUsers to fetch data from api 

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} , {post.userId} , {post.id}, {post.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
