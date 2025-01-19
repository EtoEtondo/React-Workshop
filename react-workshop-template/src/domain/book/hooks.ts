import { useState, useEffect } from "react";
import { Book } from "./Book";
import { fetchBooks, fetchBook } from "./api";

export const useBooks = (): Book[] => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then((books) => setBooks(books));
  }, []);

  return books;
};

export const useBook = (isbn: string | undefined): Book | undefined => {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    if (!isbn) return;
    fetchBook(isbn).then((book) => setBook(book));
  }, [isbn]);

  return book;
};
