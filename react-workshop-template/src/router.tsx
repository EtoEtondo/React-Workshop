import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorScreen } from "./screens/ErrorScreen";
import { BooksScreen } from "./screens/BooksScreen";
import { AboutScreen } from "./screens/AboutScreen";
import { BookDetailScreen } from "./screens/BookDetailScreen";
import { BookEditScreen } from "./screens/BookEditScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "",
        element: <BooksScreen />,
      },
      {
        path: "about",
        element: <AboutScreen />,
      },
      {
        path: "/books/:isbn",
        element: <BookDetailScreen />,
      },
      {
        path: "/books/:isbn/edit",
        element: <BookEditScreen />,
      },
    ],
  },
]);
