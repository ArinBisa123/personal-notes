import { React } from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  return (
    <form>
      <input
        className="search-bar"
        type="text"
        placeholder="Cari Catatan..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </form>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
