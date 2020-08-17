import { SaveBookController } from "./SaveBookController";
import { SaveBook } from "./SaveBook";
import { BookMysqlRepository } from "../../repositories/implementation/mysql/BookMysqlRepository";
import { AuthorMysqlRepository } from "../../repositories/implementation/mysql/AuthorMysqlRepository";
import { GenreMysqlRepository } from "../../repositories/implementation/mysql/GenreMysqlRepository";

const bookRepository = new BookMysqlRepository();
const authorRepository = new AuthorMysqlRepository();
const genreRepository = new GenreMysqlRepository();

const saveBook = new SaveBook(bookRepository, authorRepository, genreRepository);
const saveBookController = new SaveBookController(saveBook);

export { bookRepository, saveBookController };