import { Author } from "../entities/Author";

export interface AuthorRepository {

    findAll(): Promise<Author[]>;
    save(author: Author): Promise<void>;
    findById(id: string): Promise<Author>;
}