import React from "react";
import { Route, Routes } from "react-router-dom";
import HomepageWrapper from "../pages/Homepage";
// import DetailPageWrapper from "../pages/DetailNotePage";
import DetailNotePage from "../pages/DetailNotePage";
import Navigation from "./Navigation";
import AddNotePage from "../pages/AddNotePage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LangProvider } from "../contexts/LangContext";

class PersonalNoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authedUser: null,
      initiaziling: true,
      theme: localStorage.getItem("theme") || "light",
      slideTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return {
            theme: newTheme,
          };
        });
      },
      langContext: {
        language: localStorage.getItem("language") || "id",
        toggleLanguage: () => {
          this.setState((prevState) => {
            const newLanguage =
              prevState.langContext.language === "id" ? "en" : "id";
            localStorage.setItem("language", newLanguage);
            return {
              langContext: {
                ...prevState.langContext,
                language: newLanguage,
              },
            };
          });
        },
      },
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }
  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }
  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken("");
  }
  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initiaziling: false,
      };
    });
    document.documentElement.setAttribute("data-theme", this.state.theme);
  }
  componentDidUpdate(prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }
  }
  render() {
    if (this.state.initiaziling) {
      return null;
    }
    if (this.state.authedUser == null) {
      return (
        <LangProvider>
          <div className="note-app">
            <header className="note-app__header">
              <h1>Notes</h1>
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                ></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
              </Routes>
            </main>
          </div>
        </LangProvider>
      );
    }
    return (
      <LangProvider value={this.state.langContext}>
        <ThemeProvider value={this.state}>
          <div className="note-app">
            <header className="note-app__header">
              <h1>Notes</h1>
              <Navigation
                logout={this.onLogout}
                name={this.state.authedUser.name}
              />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<HomepageWrapper />}></Route>
                <Route path="/new" element={<AddNotePage />}></Route>
                <Route path="/detail/:id" element={<DetailNotePage />}></Route>
                <Route path="*" element={<NotFoundPage />}></Route>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LangProvider>
    );
  }
}

export default PersonalNoteApp;
