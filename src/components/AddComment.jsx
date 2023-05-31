import { useState } from "react";
import { addComment } from "../service/postService";

const AddComment = ({ postId, handleAddComment }) => {
  const [comment, SetComment] = useState({
    text: "",
  });

  const handleCommentTextInputChange = (e) => {
    SetComment((prevState) => {
      return { ...prevState, text: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment.text.length == 0) {
      return alert("Komentar mora sadrzati bar 1 karakter");
    }
    addComment(comment, postId)
      .then((response) => {
        console.log(response);
        handleAddComment(comment);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => SetComment((prevState) => ({ ...prevState, text: "" })));
  };

  return (
    <div>
      <form onSubmit={(event) => submitHandler(event, comment)}>
        <label className="form-label" htmlFor="text">
          Comment
        </label>
        <input
          onChange={handleCommentTextInputChange}
          className="form-control container"
          name="text"
          type="text"
          required
        ></input>
        <button type="submit" className="btn btn-outline-success">
          Add Comment
        </button>
      </form>
    </div>
  );
};
export default AddComment;
