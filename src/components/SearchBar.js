import { React } from "react";
import PropTypes from "prop-types";
import { LangConsumer } from "../contexts/LangContext";

function SearchBar({ keyword, keywordChange }) {
  return (
    <LangConsumer>
      {({ language }) => {
        return (
          <form>
            <input
              className="search-bar"
              type="text"
              placeholder={
                language === "id" ? "Cari catatan.." : "Search notes"
              }
              value={keyword}
              onChange={(event) => keywordChange(event.target.value)}
            />
          </form>
        );
      }}
    </LangConsumer>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
