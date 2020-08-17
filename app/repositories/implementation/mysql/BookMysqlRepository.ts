import { BookRepository } from "../../BookRepository";
import { Book } from "../../../entities/Book";

export class BookMysqlRepository implements BookRepository {
    findAll(): Promise<Book[]> {
        throw new Error("Method not implemented.");
    }
    save(book: Book): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<Book> {
        throw new Error("Method not implemented.");
    }

}