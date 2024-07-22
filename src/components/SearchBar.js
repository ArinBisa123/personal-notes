import { React } from "react";

function SearchBar({ searchTitle, onSearch }) {
  return (
    <form>
      <input
        className="search-bar"
        type="text"
        placeholder="Cari Catatan..."
        value={searchTitle}
        onChange={onSearch}
      />
    </form>
  );
}

export default SearchBar;
