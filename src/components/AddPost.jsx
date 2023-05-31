import { useState, useEffect } from "react";
import { postPosts } from "../service/postService";
import { getPostById, editPostById } from "../service/postService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    text: "",
    createdAt: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPostById(id).then(({ data }) => {
        setPost(data);
        console.log(data);
      });
    }
  }, []);


  const handleTitleInputChange = (e) => {
    setPost((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const handleTextInputChange = (e) => {
    setPost((prevState) => {
      return { ...prevState, text: e.target.value };
    });
  };

  const handleCreatedAtInputChange = (e) => {
    setPost((prevState) => {
      return { ...prevState, createdAt: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (post.title.length < 2) {
      return alert("Polje mora sadrzati vise karaktera");
    }
    if (post.text.length > 300) {
      return alert("Maksimalna kolicina karaktera je ogranicena na 300.");
    }
  
    if (id) {
      editPostById(id, post);
    } else {
      postPosts(post);
    }
    navigate("/posts")
  };
  const handleFormReset = () => {
    setPost({
      title: "",
      text: "",
      createdAt: ""
    });
  };

  return (
    <div>
      <form className="container" onSubmit={(event) => submitHandler(event, post)}>
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          onChange={handleTitleInputChange}
          className="form-control container"
          name="title"
          type="text"
          required
        ></input>
        <label className="form-label" htmlFor="text">
          Text
        </label>
        <input
          onChange={handleTextInputChange}
          className="form-control container"
          name="text"
          type="text"
          required
        ></input>
        <label className="form-label" htmlFor="title">
          Created at
        </label>
        <input
          onChange={handleCreatedAtInputChange}
          className="form-control container"
          name="createdAt"
          type="date"
          required
        ></input>
        <br/>

        <button type="submit" className="btn btn-outline-success">
          Add Post/edit
        </button>
        
        <button
          type="reset"
          onClick={handleFormReset}
          className="btn btn-outline-danger"
        >
          Reset
        </button>

      </form>
    </div>
  );
};

export default AddPost;
