import { GenreRepository } from "../../GenreRepository";
import { Genre } from "../../../entities/Genre";

export class GenreMysqlRepository implements GenreRepository {
    findAll(): Promise<Genre[]> {
        throw new Error("Method not implemented.");
    }
    save(genre: Genre): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Genre> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<Genre> {
        throw new Error("Method not implemented.");
    }

}