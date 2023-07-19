const { DataSource } = require("typeorm")
const dotenv = require("dotenv");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

const AppDataSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
      "node_modules/@medusajs/medusa/dist/models/*.js",
      "dist/models/*.js",
    ],
    migrations: [
      "node_modules/@medusajs/medusa/dist/migrations/*.js",
      "dist/migrations/*.js",
    ],
  })

module.exports = {
  datasource: AppDataSource,
}

