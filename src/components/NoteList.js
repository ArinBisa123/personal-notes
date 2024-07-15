import React from "react";
import NoteItemContainer from "./NoteItemContainer";
import EmptyMessage from "./EmptyMessage";

function NoteList({ notes, onDelete, onArchive, archive, searchTitle }) {
  const noteSearch = notes.filter((note) => note.title.toLowerCase().includes(searchTitle.toLowerCase()));
  return notes.length > 0 ? (
    <div className="notes-list">
      {noteSearch.map((note) => (
        <NoteItemContainer key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} archive={archive} {...note} />
      ))}
    </div>
  ) : (
    <EmptyMessage />
  );
}

export default NoteList;
