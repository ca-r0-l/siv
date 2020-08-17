import { v4 as uuidv4 } from 'uuid';

class Genre {
    public readonly id: string;
    public name: string;
    
    constructor(props: Omit<Genre, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuidv4();
        }
    }

}

export { Genre };