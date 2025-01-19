import { BookList } from "../components/BookList";
import { useBooks } from "../domain/book/hooks";

export function BooksScreen() {
  const books = useBooks();

  return (
    <div className="book-screen">
      <BookList books={books} />
    </div>
  );
}
