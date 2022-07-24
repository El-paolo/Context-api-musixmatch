import React from "react";
//react-router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongsContextProvider from "./contexts/SongsContext";
import LyricsContextProvider, { LyricsContext } from "./contexts/LyricsContext";
import Header from "./components/Common/Header";
import Songs from "./components/Songs";
import Lyrics from "./components/Lyrics";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <SongsContextProvider>
              <Songs />
            </SongsContextProvider>
          }
        />

        <Route path="/lyrics/track/:commontrack_id"
          element={
          <LyricsContext.Provider>
            <Lyrics />
          </LyricsContext.Provider>
        }/>

        <Route path ="*" element={<NotFound />}/>
      </Routes>
  </BrowserRouter>
);

export default App;
