import { useParams } from "react-router-dom";
import React from "react";
import { getNote } from "../utils/network-data";
import NoteItemBody from "../components/NoteItemBody";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id}></DetailPage>;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNote(props.id),
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
  id: PropTypes.string.isRequired,
};
export default DetailPageWrapper;
