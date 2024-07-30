import { LangConsumer } from "../contexts/LangContext";

function EmptyMesssage() {
  return (
    <LangConsumer>
      {({ language }) => {
        return (
          <div className="notes-list">
            <p className="notes-list__empty-message">
              {language === "id" ? "Tidak Ada Catatan" : "No Notes"}
            </p>
          </div>
        );
      }}
    </LangConsumer>
  );
}
export default EmptyMesssage;
