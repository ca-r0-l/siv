import { BookRepository } from "./../../repositories/BookRepository";
import { AuthorRepository } from "../../repositories/AuthorRepository";
import { GenreRepository } from "../../repositories/GenreRepository";
import { Book } from "../../entities/Book";

export class SaveBook {

    constructor(
        private bookRepository: BookRepository,
        private authorRepository: AuthorRepository,
        private genreRepository: GenreRepository,
    ) { }

    async execute(book: Book) {
        const bookAlreadyExists = await this.bookRepository.findByName(book.name);
        
        if (bookAlreadyExists) {
            throw new Error("Book already exists.");
        }
        
        await this.bookRepository.save({
            id: book.id,
            name: book.name,
            price: book.price,
            qtyPages: book.qtyPages,
            author: book.author.id,
            genre: book.genre.id,
        });
    }
}
