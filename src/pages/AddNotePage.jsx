import InputField from "../components/InputField";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import { LangConsumer } from "../contexts/LangContext";

function AddNotePage() {
  const navigate = useNavigate();
  //called when form is submitted
  function addNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <LangConsumer>
      {({ language }) => {
        return (
          <section>
            <h2>
              {language === "id" ? "Buat Catatan Baru" : "Create New Note"}
            </h2>
            <InputField addNote={addNoteHandler} />
          </section>
        );
      }}
    </LangConsumer>
  );
}

export default AddNotePage;
