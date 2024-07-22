import { useParams } from "react-router-dom";
import React from "react";
import { getNoteByID } from "../utils/data";
import NoteItemBody from "../components/NoteItemBody";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)}></DetailPage>;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNoteByID(props.id),
    };
  }

  render() {
    if (!this.state.notes) {
      return <p>Note is not found!</p>;
    }
    return (
      <>
        <h2>Detail Catatan</h2>
        {this.state.notes.map((note) => (
          <NoteItemBody key={note.id} {...note} />
        ))}
      </>
    );
  }
}
DetailPage.propTypes = {
  id: PropTypes.number.isRequired,
};
export default DetailPageWrapper;
