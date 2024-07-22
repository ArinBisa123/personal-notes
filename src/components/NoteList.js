import React from "react";
import NoteItemContainer from "./NoteItemContainer";
import EmptyMessage from "./EmptyMessage";
import PropTypes from "prop-types";

function NoteList({ notes, onDelete, onArchive, archive, keyword }) {
  const noteSearch = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return notes.length > 0 ? (
    <div className="notes-list">
      {noteSearch.map((note) => (
        <NoteItemContainer
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          archive={archive}
          {...note}
        />
      ))}
    </div>
  ) : (
    <EmptyMessage />
  );
}
NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archive: PropTypes.bool.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default NoteList;
