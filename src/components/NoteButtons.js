import PropTypes from "prop-types";
import { LangConsumer } from "../contexts/LangContext";

function NoteButtons({ id, archived, onDelete, onArchive }) {
  return (
    <LangConsumer>
      {({ language }) => {
        return (
          <div className="note-item__action">
            <button
              className="note-item__delete-button"
              onClick={() => onDelete(id)}
            >
              {language === "id" ? "Hapus" : "Delete"}
            </button>
            {language === "en" ? (
              <button
                className="note-item__archive-button"
                onClick={() => {
                  onArchive(id);
                }}
                archived={archived.toString()}
              >
                {archived ? "Move" : "Archive"}
              </button>
            ) : (
              <button
                className="note-item__archive-button"
                onClick={() => {
                  onArchive(id);
                }}
                archived={archived.toString()}
              >
                {archived ? "Pindahkan" : "Arsipkan"}
              </button>
            )}
            {/* <button
                className="note-item__archive-button"
                onClick={() => {
                  onArchive(id);
                }}
                archived={archived.toString()}
              >
                {archived ? "Pindahkan" : "Arsipkan"}
              </button> */}
          </div>
        );
      }}
    </LangConsumer>
  );
}
NoteButtons.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
export default NoteButtons;
