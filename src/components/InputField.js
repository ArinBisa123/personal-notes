import React from "react";
import PropTypes from "prop-types";
import { LangConsumer } from "../contexts/LangContext";

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limit: 50,
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onTitleChangeEventHandler(event) {
    if (this.state.limit > 0) {
      this.setState(() => {
        return {
          title: event.target.value,
          limit: this.state.limit - 1,
        };
      });
    }
  }
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
      limit: 50,
    });
  }

  render() {
    return (
      <LangConsumer>
        {({ language }) => {
          return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
              <p className="note-input__title__char-limit">
                {language === "id" ? "Sisa Karakter:" : "Character Remaining:"}{" "}
                {this.state.limit}
              </p>
              <input
                className="note-input__title"
                type="text"
                placeholder={language === "id" ? "Judul" : "Title"}
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
              ></input>
              <textarea
                className="note-input__body"
                type="text"
                placeholder={
                  language === "id"
                    ? "Tuliskan Deskripsi Catatan..."
                    : "Write description..."
                }
                value={this.state.body}
                onChange={this.onBodyChangeEventHandler}
              />
              <button type="submit">
                {language === "id" ? "Buat" : "Create"}
              </button>
            </form>
          );
        }}
      </LangConsumer>
    );
  }
}
InputField.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default InputField;
