import { Book } from "../domain/book/Book";
import { useState } from "react";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface HideableProps {
  children: ReactNode;
  initChildState?: boolean;
}

export const Hideable = ({
  children,
  initChildState = false,
}: HideableProps) => {
  const [showChild, setShowChild] = useState(initChildState);

  const toggleShowChild = () => {
    setShowChild((ChildState) => !ChildState);
  };

  return (
    <div className="hideable">
      <button className="tertiary" onClick={toggleShowChild}>
        {showChild ? "- hide details" : "+ show details"}
      </button>
      {showChild && <p>{children}</p>}
    </div>
  );
};

interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
  const isFree = book.price === "$0.00";
  const [numLikes, setNumLikes] = useState(0);
  const showStar = numLikes >= 5;

  return (
    <div className={`book-list-item ${isFree ? "book-list-item_free" : ""}`}>
      <img src={book.cover} alt="book-cover" />
      <h2>
        {showStar && <span className="icon_entry">⭐️ </span>}
        {isFree && <span>💰 </span>} {book.title}
      </h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
      <Hideable initChildState={false}>
        <p>{book.abstract}</p>
      </Hideable>
      <button className="secondary" onClick={() => setNumLikes(numLikes + 1)}>
        <span>👏 {numLikes}</span>
      </button>
      <nav>
        <NavLink to={`/books/${book.isbn}`}>Details</NavLink>
      </nav>
    </div>
  );
};
