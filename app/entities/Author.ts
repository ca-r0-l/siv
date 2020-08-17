import { v4 as uuidv4 } from 'uuid';

class Author {
    public readonly id: string;
    public name: string;

    constructor(props: Omit<Author, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuidv4();
        }
    }

}

export { Author };