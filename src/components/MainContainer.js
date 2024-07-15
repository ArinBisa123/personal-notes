import React from "react";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils/index";
import InputField from "./InputField";
import SearchBar from "./SearchBar";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTitle: "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }
  onArchiveHandler(id) {
    const statusNote = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
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
          <SearchBar searchTitle={this.state.searchTitle} onSearch={this.onSearchHandler}></SearchBar>
        </div>
        <div className="note-app__body">
          <h2>Buat Catatan</h2>
          <InputField addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={notYetArchivedNote} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} searchTitle={this.state.searchTitle} />
          <h2>Arsip</h2>
          <NoteList notes={archivedNote} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} searchTitle={this.state.searchTitle} />
        </div>
      </React.Fragment>
    );
  }
}
export default MainContainer;
