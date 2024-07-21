import NoteItemBody from "../components/NoteItemBody";
import { useParams } from "react-router-dom";
import React from "react";
import { getNotes } from "../utils/data";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)}></DetailPage>;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNotes(props.id),
    };
  }
  render() {
    if (!this.state.notes) {
      return <p>Note is not found!</p>;
    }
    return (
      <>
        <h2>Detail Catatan</h2>
        <NoteItemBody {...this.state.notes}></NoteItemBody>
      </>
    );
  }
}

export default DetailPageWrapper;
