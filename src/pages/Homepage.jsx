import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, deleteNote } from "../utils/network-data";
import React from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { LangConsumer } from "../contexts/LangContext";

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
      notes: [],
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }
  async componentDidMount() {
    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data,
      };
    });
  }
  async onDeleteHandler(id) {
    await deleteNote(id);
    // update note state from api
    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data,
      };
    });
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
      <LangConsumer>
        {({ language }) => {
          return (
            <>
              <div className="note-app__body">
                <SearchBar
                  keyword={this.state.keyword}
                  keywordChange={this.onSearchHandler}
                ></SearchBar>
                <h2>{language === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
                <NoteList
                  notes={notYetArchivedNote}
                  onDelete={this.onDeleteHandler}
                  onArchive={this.onArchiveHandler}
                  keyword={this.state.keyword}
                />
                <h2>{language === "id" ? "Catatan Arsip" : "Archive Notes"}</h2>
                <NoteList
                  notes={archivedNote}
                  onDelete={this.onDeleteHandler}
                  onArchive={this.onArchiveHandler}
                  keyword={this.state.keyword}
                />
              </div>
            </>
          );
        }}
      </LangConsumer>
    );
  }
}

Homepage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
export default HomepageWrapper;
