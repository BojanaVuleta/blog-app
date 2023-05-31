import { useState, useEffect } from "react";
import { getPosts, deletePostById } from "../service/postService";
import { Link } from "react-router-dom";


const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({ data }) => setPosts(data));
  }, [posts]);

  const deletePost = (postId) => {
    deletePostById(postId)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error("Failed to delete post:", error);
      });
  };
  

  return (
    <div>
      <h1 className="App">All Posts</h1>
      <br />
      <table className=" container table table-success table-striped">
        <thead>
          <tr className="table-primary">
            <th scope="col">Titel</th>
            <th scope="col"> Text</th>
          </tr>
        </thead>
        <br />
        <tbody>
          {posts.map((post, id) => (
            <tr key={id}>
              <td>{post.title}</td>
              <td>{post.text}</td>
              <td>
                <button className="btn btn-outline-primary">
                  <Link to={`/posts/${post.id}`}>View Post</Link>
                </button>
               </td> 
               <td>
                <button className="btn btn-outline-primary">
                  <Link to={`edit/${post.id}`}>Edit Post</Link>
                </button>
              </td>
              <td>
              <button className="btn btn-outline-primary" onClick={() => deletePost(post.id)}>Delete post</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AppPosts;
