import { Book } from "../entities/Book";
import { SaveBookDTO } from "../usecases/SaveBook/SaveBookDTO";

export interface BookRepository {
    findAll(): Promise<Book[]>;
    save(book: SaveBookDTO): Promise<void>;
    findById(id: string): Promise<Book>;
    findByName(name: string): Promise<Book | null>;
}