import { useParams } from "react-router-dom";
import { useBook } from "../domain/book/hooks";
//import { BookListItem } from "../components/BookListItem";
import { Link } from "react-router-dom";

export function BookDetailScreen() {
  const { isbn } = useParams<{ isbn: string }>();

  const book = useBook(isbn);

  return (
    <div className="book-detail-screen">
      {!book ? (
        <p>Loading</p>
      ) : (
        <Link to={`/books/${book.isbn}/edit`}>
          <button>Edit</button>
        </Link>
      )}
    </div>
  );
}
