import React from "react";
import { showFormattedDate } from "../utils/data";
import { Link } from "react-router-dom";

function NoteItemBody({ id, title, body, createdAt }) {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">
        <Link to={`/detail/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__date">
        {" "}
        {(createdAt = showFormattedDate(+new Date(), "yyyy/MM/dd kk:mm:ss"))}
      </p>
      <p className="note-item__content"> {body} </p>
    </div>
  );
}

export default NoteItemBody;
