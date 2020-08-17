import { server } from "./server"
import { testConnection } from "./repositories";

const bootstrap = async () => {
    await server();
    await testConnection();
    console.log("Running...");
}

bootstrap();