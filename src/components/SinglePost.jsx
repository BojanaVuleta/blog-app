import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { getPostById } from "../service/postService";
import AddComment from "../components/AddComment";
import useFormattedDate from "../useFormattedDate";

const SinglePost = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (id) {
      getPostById(id).then(({ data }) => {
        setPost(data);
        setComments(data.comments);
      });
    }
  }, []);

  const formattedCreatedAt = useFormattedDate(post.createdAt);

  const handleAddComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p>{formattedCreatedAt}</p>
      <h2>Comments:</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>{comment.createdAt}</p>
        </div>
      ))}

      <AddComment postId={id} handleAddComment={handleAddComment}/>
    </div>
  );
};

export default SinglePost;
