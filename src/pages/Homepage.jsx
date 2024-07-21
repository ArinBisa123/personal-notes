import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import {
  getNotes,
  deleteNote,
  showFormattedDate,
  archiveNote,
} from "../utils/data";
import React from "react";
import InputField from "../components/InputField";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getNotes(),
      searchTitle: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({ notes: getNotes() });
  }
  onArchiveHandler(id) {
    const statusNote = archiveNote(id);
    this.setState({ notes: statusNote });
  }
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(+new Date(), "yyyy/MM/dd kk:mm:ss"),
            archived: false,
          },
        ],
      };
    });
  }
  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchTitle: event.target.value,
      };
    });
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
        <div className="note-app__header ">
          <h1>Notes</h1>
          <SearchBar
            searchTitle={this.state.searchTitle}
            onSearch={this.onSearchHandler}
          ></SearchBar>
        </div>
        <div className="note-app__body">
          <h2>Buat Catatan</h2>
          <InputField addNote={this.onAddNoteHandler} />
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

export default Homepage;
