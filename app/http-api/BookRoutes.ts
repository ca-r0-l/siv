import { Router } from "express";
import { saveBookController } from "../usecases/SaveBook";

const bookRouter = Router()

bookRouter.post('/book', (request, response) => {
  return saveBookController.handle(request, response);
});

export { bookRouter };