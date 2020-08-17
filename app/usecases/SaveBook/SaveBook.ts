import { BookRepository } from "./../../repositories/BookRepository";
import { SaveBookDTO } from "./SaveBookDTO";
import { Book } from "../../entities/Book";
import { AuthorRepository } from "../../repositories/AuthorRepository";
import { GenreRepository } from "../../repositories/GenreRepository";
import { Author } from "../../entities/Author";
import { Genre } from "../../entities/Genre";

export class SaveBook {

    constructor(
        private bookRepository: BookRepository,
        private authorRepository: AuthorRepository,
        private genreRepository: GenreRepository,
    ) { }

    async execute(book: SaveBookDTO) {
        const bookAlreadyExists = await this.bookRepository.findByName(book.name);
        
        if (bookAlreadyExists) {
            throw new Error("Book already exists.");
        }
        
        const genre = await this.genreRepository.findById(book.genre);
        const author = await this.authorRepository.findById(book.author);

        const bookToSave: Book = new Book({
            name: book.name,
            price: book.price,
            qtyPages: book.qtyPages,
            author: new Author({
                name: author.name
            }, author.id),
            genre: new Genre({
                name: genre.name
            }, genre.id),
        })
        await this.bookRepository.save(bookToSave);
    }
}