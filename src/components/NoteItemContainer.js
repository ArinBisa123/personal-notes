import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteButtons from "./NoteButtons";
import PropTypes from "prop-types";

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

NoteItemContainer.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItemContainer;
