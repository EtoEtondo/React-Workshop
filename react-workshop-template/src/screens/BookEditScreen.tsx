import { useState, useEffect } from "react";
import { FormEvent } from "react";
import { ChangeEvent } from "react";
import { useBook } from "../domain/book/hooks";
import { useParams } from "react-router-dom";
import { updateBook } from "../domain/book/api";

// export function BookEditScreenUncontrolled() {
//     const titleInputRef = useRef<HTMLInputElement>(null);

//     const onSubmit = (event: FormEvent) => {
//       event.preventDefault();
//       const inputElement: HTMLInputElement = titleInputRef.current!;
//       console.log(inputElement.value);
//     };

//     return (
//       <form className="book-edit-screen">
//         <label>
//           Title:
//           <input id="title" ref={titleInputRef} />
//         </label>
//         <button onClick={onSubmit}>Submit</button>
//       </form>
//     );
//   }

export function BookEditScreen() {
  const [title, setTitle] = useState("");
  const { isbn } = useParams<{ isbn: string }>();
  const book = useBook(isbn);

  const titleError =
    title.length < 5 ? "The title must be at least 5 characters long" : "";

  useEffect(() => {
    if (!book || book.title === undefined) return;
    setTitle(book.title);
  }, [book]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!titleError && book) {
      updateBook(book.isbn, { title });
      alert(title);
    }
  };

  if (!book) {
    return <p>Loading</p>;
  }

  return (
    <form className="book-edit-screen">
      <label>
        Title:
        <input
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
      </label>
      {titleError && <div className="error">{titleError}</div>}
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}
