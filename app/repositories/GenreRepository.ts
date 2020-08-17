import { Genre } from "../entities/Genre";

export interface GenreRepository {

    findAll(): Promise<Genre[]>;
    save(genre: Genre): Promise<void>;
    findById(id: string): Promise<Genre>;
}