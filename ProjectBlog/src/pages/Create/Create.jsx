import React from "react";
import { useState } from "react";
import "./Create.css";
import Category from "./Category";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
//

export function Create() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  //const [user, loading] = useAuthState(auth)
  const postCollectionRef = collection(db, "Posts");
  let navigate = useNavigate();

  /* if (!user) {
        navigate("/login")
        return null;
      } */

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title: title,
      postText: postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/"); //Navigate back to homepage after creating post
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected category: ${selectedCategory}`);
  };

  return (
    <>
      {/* <header className="sticky">
                <h1>CREATE POST</h1>
            </header> */}
      <div className="create">
        <form className="create">
          <div className="createForm">
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <input type="file" id="fileInput" className="chooseFile" />
          </div>
          <div className="createForm">
            <textarea
              className="writeText"
              type="text"
              placeholder="Create Post"
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            ></textarea>
          </div>
          <div>
            <Category />
          </div>
          <button
            className="submitButton"
            type="submit"
            onSubmit={handleSubmit}
            onClick={createPost}
          >
            POST
          </button>
        </form>
      </div>
    </>
  );
}
