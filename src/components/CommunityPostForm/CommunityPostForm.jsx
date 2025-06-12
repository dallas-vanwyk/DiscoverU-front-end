import { useState, useEffect } from "react";
import { useParams } from "react-router";

import * as postService from "../../services/postService";

const PostForm = (props) => {
  const { postId } = useParams();
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
    <main>
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
          type="text"
          name="text"
          id="text-input"
          value={formData.text}
          onChange={handleChange}
        />

        <button type="submit">Post</button>
      </form>
    </main>
  );
};

export default PostForm;
