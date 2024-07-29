import React from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/data";
import PropTypes from "prop-types";

function NoteItemBody({ id, title, body, createdAt }) {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">
        <Link to={`/detail/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__content"> {body} </p>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
export default NoteItemBody;
