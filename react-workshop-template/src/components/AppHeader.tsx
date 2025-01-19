import logo from "../logo.png";
import { ThemeContext } from "../domain/theme/ThemeContext";
import { useContext } from "react";
import { ThemeEditor } from "./ThemeEditor";
import { NavLink } from "react-router-dom";

export const AppHeader = () => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <div className="app-header">
      <ThemeEditor />
      <img src={logo} alt="logo" />
      <h1 style={{ color: primaryColor }}>Bookmonkey</h1>
      <nav>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};
