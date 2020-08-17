import { Request, Response } from "express";
import { SaveBook } from "./SaveBook";

export class SaveBookController {
	constructor(private saveBook: SaveBook) {}

	async handle(request: Request, response: Response): Promise<Response> {
		const { name,
            price,
            qtyPages,
            author,
            genre
        } = request.body;

		try {
			await this.saveBook.execute({
				name,
                price,
                qtyPages,
                author,
                genre
			});

			return response.status(201).send();
		} catch (err) {
			return response.status(400).json({
				message: err.message || "Unexpected error.",
			});
		}
	}
}
