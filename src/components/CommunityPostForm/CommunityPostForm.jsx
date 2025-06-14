import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

import * as postService from "../../services/postService";
import './CommunityPostForm.css'

const PostForm = (props) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (postId) {
      props.handleUpdatePost(postId, formData);
    } else {
      props.handleAddPost(formData);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await postService.show(postId);
      setFormData(postData);
    };
    if (postId) fetchPost();
    return () => setFormData({ title: "", text: "" });
  }, [postId]);

   return (
    <main className="post-form-page">
      <div className="post-form-container">
        <h1>{postId ? "Edit Discussion" : "New Discussion"}</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title-input">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title-input"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="text-input">Text</label>
          <textarea
            required
            name="text"
            id="text-input"
            value={formData.text}
            onChange={handleChange}
          />
          <button type="submit">Post</button>
          <button type="button" onClick={() => navigate(-1)}>
            Back
          </button>
        </form>
      </div>
    </main>
  );
};

export default PostForm;
