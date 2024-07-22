import React from "react";
import { Route, Routes } from "react-router-dom";
import HomepageWrapper from "../pages/Homepage";
import DetailPageWrapper from "../pages/DetailNotePage";
import Navigation from "./Navigation";
import AddNotePage from "../pages/AddNotePage";
import NotFoundPage from "../pages/NotFoundPage";

function PersonalNoteApp() {
  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Notes</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomepageWrapper />}></Route>
          <Route path="/new" element={<AddNotePage />}></Route>
          <Route path="/detail/:id" element={<DetailPageWrapper />}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </main>
    </div>
  );
}
export default PersonalNoteApp;
