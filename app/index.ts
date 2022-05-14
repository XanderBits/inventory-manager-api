
//import "reflect-metadata";
import "dotenv/config";
import app from "./app";
//import { AppDataSource } from "./db/data-source";

async function main() {
	/*await AppDataSource.initialize()
    .then(() => console.log("**SUCCESSFULLY CONNECTED TO DATABASE**"))
    .catch((err) => console.error(err));*/

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server listening on PORT:${PORT}`));
}

main();