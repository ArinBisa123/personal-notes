import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getNotes, deleteNote } from "../utils/data";
import React from "react";
import { useSearchParams } from "react-router-dom";

function HomepageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTitle = searchParams.get("searchTitle");
  function changeSearchParams(searchTitle) {
    setSearchParams({ searchTitle });
  }
  return <Homepage searchTitle={searchTitle} onSearch={changeSearchParams} />;
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNotes(),
      searchTitle: props.defaultSearchTitle || "",
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

  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchTitle: event.target.value,
      };
    });
    this.props.onSearch(event);
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
            searchTitle={this.state.searchTitle}
            onSearch={this.onSearchHandler}
          ></SearchBar>
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={notYetArchivedNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            searchTitle={this.state.searchTitle}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={archivedNote}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            searchTitle={this.state.searchTitle}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default HomepageWrapper;
