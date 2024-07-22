import InputField from "../components/InputField";
import { addNote } from "../utils/data";
import { useNavigate } from "react-router-dom";

function AddNotePage() {
  const navigate = useNavigate();
  //called when form is submitted
  function addNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <section>
      <h2>Buat Catatan</h2>
      <InputField addNote={addNoteHandler} />
    </section>
  );
}

export default AddNotePage;
