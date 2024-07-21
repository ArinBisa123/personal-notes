import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import DetailPageWrapper from "../pages/DetailPage";

function PersonalNoteApp() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/detail/:id"
          element={<DetailPageWrapper></DetailPageWrapper>}
        ></Route>
      </Routes>
    </main>
  );
}
export default PersonalNoteApp;
