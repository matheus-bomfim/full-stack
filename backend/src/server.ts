import app from "./app";
import {AppDataSource} from "./datasource";

require('dotenv').config()

const startServer = async () => {
  const PORT = process.env.PORT || 8080;

  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source initialized");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(PORT, () => console.log(`App is running!`));
};

startServer();