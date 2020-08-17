import express from "express";
import { bookRouter } from "./http-api/BookRoutes";

require('dotenv').config()

const server = async () => {
    const app = express();
    
    app.use(express.json());
    app.use(bookRouter);

    app.listen(process.env.PORT || 3000);
    
};

export { server };