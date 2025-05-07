import {
  useAddCommentMutation,
  useGetCommentsQuery,
} from "../../api/endpoints/commentApi";
import { useState } from "react";
const CommentBox = () => {
  const [addComment] = useAddCommentMutation();
  const { data: comments, isLoading, error } = useGetCommentsQuery();
  const [commentText, setCommentText] = useState("");

  const handleAddComment = async () => {
    if (!commentText.trim()) return;
    try {
      await addComment({ text: commentText }).unwrap();
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h2>نظرات</h2>
      {isLoading && <p>در حال بارگزاری نظرات...</p>}
      {error && <p>خطا در دریافت نظرات: {error.toString()}</p>}
      {comments && comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ نظری وجود ندارد.</p>
      )}

      <div style={{ marginTop: "20px" }}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="یادداشت یا نظری بنویس..."
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button onClick={handleAddComment}>افزودن نظر</button>
      </div>
    </div>
  );
};
export default CommentBox;