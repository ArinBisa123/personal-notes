import { useParams } from "react-router-dom";
import React from "react";
import { getNote } from "../utils/network-data";
import NoteItemBody from "../components/NoteItemBody";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function DetailNotePage() {
  const [note, setNote] = useState({});
  console.log(note);
  const { id } = useParams();
  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);
  if (note.id !== undefined) {
    return (
      <>
        <h2>Detail Catatan</h2>
        {note.map((note) => (
          <NoteItemBody key={note.id} {...note} />
        ))}
      </>
    );
  }
  return <p>Note is not found!</p>;
}
export default DetailNotePage;

// function DetailPageWrapper() {
//   const { id } = useParams();
//   return <DetailPage id={id}></DetailPage>;
// }

// class DetailPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getNote(props.id),
//     };
//     console.log(this.state.notes);
//   }
//   render() {
//     if (!this.state.notes) {
//       return <p>Note is not found!</p>;
//     }
//     return (
//       <>
//         <h2>Detail Catatan</h2>
//         {this.state.notes.map((note) => (
//           <NoteItemBody key={note.id} {...note} />
//         ))}
//       </>
//     );
//   }
// }
DetailNotePage.propTypes = {
  id: PropTypes.string.isRequired,
};
