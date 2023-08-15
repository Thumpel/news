import React, { useState } from "react";
import { addPost, deletePost } from "../store/postsSlice";
import { useDispatch } from "react-redux";
import Header from "../Components/Header";
import "./styles/scssAddPosts.scss";
export default function AddPosts() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const formValid = title !== "" && content !== "";
  const formValidDelete = title !== "" && content !== "";

  const onChangetitle = (e) => setTitle(e.target.value);
  const onChangecontent = (e) => setContent(e.target.value);

  const deleleButton = () => {
    dispatch(deletePost());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, content }));
    setTitle("");
    setContent("");
  };

  return (
    <main className="addPost">
      <Header />

      <form onSubmit={handleSubmit}>
        <div className="formFlex">
          <label htmlFor="">
            <input
              type="text"
              className="title"
              onChange={onChangetitle}
              placeholder="title"
            />
          </label>
          <label htmlFor="">
            <textarea
              cols="80"
              rows="20"
              className="content"
              placeholder="content"
              onChange={onChangecontent}
            />
          </label>
          <div className="buttons">
            <button type="submit" disabled={!formValid}>
              Add post
            </button>
            {/* <button
              type="button"
              onClick={() => deleleButton()}
              disabled={formValidDelete}
            >
              Delete post
            </button> */}
          </div>
        </div>
      </form>
    </main>
  );
}
