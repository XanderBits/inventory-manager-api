
import "dotenv/config";
import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./ormconfig"

async function main() {
    await AppDataSource.initialize()
    .then(() => console.log("**SUCCESSFULLY CONNECTED TO DATABASE**"))
    .catch((err: any) => console.error(err));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server listening on PORT:${PORT}`));
}

main();