import { useParams } from "react-router-dom";
import React from "react";
import { getNote } from "../utils/network-data";
import NoteItemBody from "../components/NoteItemBody";
import { useEffect, useState } from "react";
import { LangConsumer } from "../contexts/LangContext";

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
      <LangConsumer>
        {({ language }) => {
          return (
            <section className="detail-page">
              <h2>{language === "id" ? "Detail Catatan" : "Note Detail"}</h2>
              <NoteItemBody key={note.id} {...note} />
            </section>
          );
        }}
      </LangConsumer>
    );
  }
  return <p>Note is not found!</p>;
}

export default DetailNotePage;
