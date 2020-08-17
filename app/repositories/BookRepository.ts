import { Book } from "../entities/Book";

export interface BookRepository {

    findAll(): Promise<Book[]>;
    save(book: Book): Promise<void>;
    findById(id: string): Promise<Book>;
    findByName(name: string): Promise<Book>;
}