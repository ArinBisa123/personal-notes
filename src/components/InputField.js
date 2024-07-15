import React from "react";

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
    //eslint-disable-next-line
    const title = this.state.title;
    //eslint-disable-next-line
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
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">Sisa Karakter {this.state.limit}</p>
        <input className="note-input__title" type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler}></input>
        <textarea className="note-input__body" type="text" placeholder="Tuliskan Deskripsi Catatan..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default InputField;
