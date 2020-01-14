import app from "./app";
const PORT = 3000;
import { createConnection } from "typeorm";

// createConnection().then(() => {
//     app.listen(PORT, () => {
//         console.log('Express server listening on port ' + PORT);
//     });
// }).catch(console.log);


import fs = require('fs');
import { ThumbnailGeneratorService } from "./services/thumbnail-generator.service";
const generator = new ThumbnailGeneratorService();
generator.generate(fs.createReadStream('i.mp4'));