import React from "react";
//import logo from "./logo.svg";
//import './App.css';
import { AppHeader } from "./components/AppHeader";
//import { BookList } from "./components/BookList";
//import { exampleBooks } from "./domain/book/exampleBooks";
//import { useBooks } from "./domain/book/hooks";
import { useState } from "react";
import { ThemeContext } from "./domain/theme/ThemeContext";
import { Outlet } from "react-router-dom";

function App() {
  const [primaryColor, setPrimaryColor] = useState("tomato");

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      <div className="App">
        <AppHeader />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
