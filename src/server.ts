import app from "./app";
import { SERVER_PORT } from "./environment";

app.listen(SERVER_PORT, () => {
  console.log('Express server listening on port ' + SERVER_PORT);
});