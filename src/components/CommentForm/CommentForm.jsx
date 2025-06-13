import { useState } from "react";
import "./CommentForm.css";

const CommentForm = ({ handleAddComment }) => {
  const [formData, setFormData] = useState({ text: "" });

  const handleChange = (e) => {
    setFormData({ text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddComment(formData);
    setFormData({ text: "" });
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment-text" className="comment-label">
        Your comment:
      </label>
      <textarea
        id="comment-text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="Write something..."
        required
        className="comment-textarea"
      />
      <button type="submit" className="comment-button">
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
