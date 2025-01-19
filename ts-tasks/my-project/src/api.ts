import { Book } from "./Book"

export function fetchBooks(): Promise<Book[]> {
    return fetch('http://localhost:4730/books').then(res => res.json())
}

export function fetchBook(id: string): Promise<Book> {
    return fetch(`http://localhost:4730/books/${id}`).then(res => res.json())
}

export function createBook(newBook: Omit<Book, 'id'>): Promise<Book> {
    return fetch('http://localhost:4730/books', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newBook),
    }).then(res => res.json())
}

