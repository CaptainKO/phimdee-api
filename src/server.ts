import app from "./app";
const PORT = 3000;
import { createConnection } from "typeorm";

createConnection().then(() => {
    app.listen(PORT, () => {
        console.log('Express server listening on port ' + PORT);
    });
}).catch(console.log);
