import React, { useEffect } from "react";
import "./NotesList.css";
import { fetchNotesAction, deleteNoteAction } from "../redux/actions/noteActions";
import { useDispatch, useSelector } from "react-redux";

const NotesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotesAction());
  }, []);

  const notes = useSelector((storeData) => {
    return storeData.notes;
  });

  return (
    <>
      <h1>Notes List</h1>

      {notes.map((note) => (
        <div className="item-container" key={note.id}>
          <div className="item-content">
            <h2> { note.title } </h2>
            <p> { note.content } </p>
            <button onClick={() => dispatch(deleteNoteAction(note.id)) } >Delete</button>
          </div>
        </div>
      ))}

    </>
  );
};

export default NotesList;
