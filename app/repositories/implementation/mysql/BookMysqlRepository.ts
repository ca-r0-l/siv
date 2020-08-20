import { BookRepository } from "../../BookRepository";
import { Book } from "../../../entities/Book";
import { Book as BookModel } from "./models/Book";
import { SaveBookDTO } from "../../../usecases/SaveBook/SaveBookDTO";

export class BookMysqlRepository implements BookRepository {

    async findAll(): Promise<Book[]> {
        throw new Error("Method not implemented.");
    }

    async save(book: SaveBookDTO): Promise<void> {
        await BookModel.create(book);
    }

    async findById(id: string): Promise<Book> {
        throw new Error("Method not implemented.");
    }

    async findByName(name: string): Promise<Book | null> {
        return await null;
    }
}