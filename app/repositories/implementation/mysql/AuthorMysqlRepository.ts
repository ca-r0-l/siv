import { AuthorRepository } from "../../AuthorRepository";
import { Author } from "../../../entities/Author";

export class AuthorMysqlRepository implements AuthorRepository {
    findAll(): Promise<Author[]> {
        throw new Error("Method not implemented.");
    }
    save(author: Author): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Author> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<Author> {
        throw new Error("Method not implemented.");
    }

}