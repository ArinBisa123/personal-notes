import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteButtons from "./NoteButtons";

function NoteItemContainer({
  title,
  body,
  createdAt,
  id,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
      <NoteButtons
        id={id}
        archived={archived}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
}

export default NoteItemContainer;
