import { v4 as uuidv4 } from 'uuid';
import { Genre } from "./Genre";
import { Author } from "./Author";

class Book {
    public readonly id: string;
    public name: string;
    public price: number;
    public qtyPages: number;
    public author: Author;
    public genre: Genre;

    constructor(props: Omit<Book, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuidv4();
        }
    }
}

export { Book };