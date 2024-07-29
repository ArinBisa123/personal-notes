import React from "react";
import { Route, Routes } from "react-router-dom";
import HomepageWrapper from "../pages/Homepage";
import DetailPageWrapper from "../pages/DetailNotePage";
import Navigation from "./Navigation";
import AddNotePage from "../pages/AddNotePage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";

class PersonalNoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authedUser: null,
      initiaziling: true,
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
  }
  render() {
    if (this.state.initiaziling) {
      return null;
    }
    if (this.state.authedUser == null) {
      return (
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
      );
    }
    return (
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
            <Route path="/detail/:id" element={<DetailPageWrapper />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </main>
      </div>
    );
  }
}

// function PersonalNoteApp() {
//   return (
//     <div className="note-app">
//       <header className="note-app__header">
//         <h1>Notes</h1>
//         <Navigation />
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<HomepageWrapper />}></Route>
//           <Route path="/new" element={<AddNotePage />}></Route>
//           <Route path="/detail/:id" element={<DetailPageWrapper />}></Route>
//           <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
//         </Routes>
//       </main>
//     </div>
//   );
// }
export default PersonalNoteApp;
