import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/posts";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/posts")
  //     .then((response) => console.log(response.data));
  // }, []);

  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <Header />
      <CreateArea />
      {posts.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
