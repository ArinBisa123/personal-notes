import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getNotes, deleteNote } from "../utils/data";
import React from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

function HomepageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <Homepage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getNotes() });
  }
  onArchiveHandler(id) {
    const archiveNote = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: archiveNote });
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const notYetArchivedNote = this.state.notes.filter((note) => {
      return note.archived === false;
    });
    const archivedNote = this.state.notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <React.Fragment>
        <div className="note-app__body">
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onSearchHandler}
          ></SearchBar>
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={notYetArchivedNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            keyword={this.state.keyword}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={archivedNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            keyword={this.state.keyword}
          />
        </div>
      </React.Fragment>
    );
  }
}

Homepage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
export default HomepageWrapper;
