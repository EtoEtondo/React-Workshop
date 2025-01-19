import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { fetchBooks, fetchBook, createBook } from "./api.ts";
import { Book } from "./Book.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
console.log(fetchBooks());

const newBook: Omit<Book, "id"> = {
  //id: '0012',
  title: "string",
  subtitle: "string",
  isbn: "0770",
  abstract: "string",
  author: "string",
  publisher: "string",
  price: "string",
  numPages: 12,
  cover: "string",
};

//createBook(newBook)

console.log(fetchBook("1"));
