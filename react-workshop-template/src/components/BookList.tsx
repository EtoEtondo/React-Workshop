import { BookListItem } from "./BookListItem";
import { Book } from "../domain/book/Book";

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <div className="book-list">
      {/* <h1>{books.length}</h1> */}
      {books.map((book) => (
        <BookListItem book={book} key={book.id} />
      ))}
    </div>
  );
};
