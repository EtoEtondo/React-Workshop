import { Book } from "./Book";

export const fetchBooks = (): Promise<Book[]> => {
  return fetch("http://localhost:4730/books").then((res) => res.json());
};

export const fetchBook = (isbn: string): Promise<Book> => {
  return fetch("http://localhost:4730/books/" + isbn).then((res) => res.json());
};

export const updateBook = (
  isbn: string,
  book: Partial<Book>
): Promise<Book> => {
  return fetch("http://localhost:4730/books/" + isbn, {
    method: "PATCH",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
