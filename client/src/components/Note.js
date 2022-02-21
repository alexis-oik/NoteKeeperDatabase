import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deletePosts } from "../actions/posts";

function Note(props) {
  const dispatch = useDispatch();

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => dispatch(deletePosts(props.id))}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
