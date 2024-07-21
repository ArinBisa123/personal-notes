import React from "react";

function NoteButtons({ id, archived, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Hapus
      </button>
      <button
        className="note-item__archive-button"
        onClick={() => {
          onArchive(id);
          console.log("ok");
        }}
        archived={archived.toString()}
      >
        {archived ? "Pindahkan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NoteButtons;
