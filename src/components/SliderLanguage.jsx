import { LangConsumer } from "../contexts/LangContext";

function SliderLanguage() {
  return (
    <LangConsumer>
      {({ language, toggleLanguage }) => {
        return (
          <button className="language-button" onClick={toggleLanguage}>
            {language === "id" ? "en" : "id"}
          </button>
        );
      }}
    </LangConsumer>
  );
}

export default SliderLanguage;
