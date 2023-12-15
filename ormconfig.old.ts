import type { DataSourceOptions } from "typeorm";

const dbConfig: DataSourceOptions = {
  type: "sqlite",
  database: "mydb.sqlite",
  entities: ["**/*.entity.ts"],
  logging: ["query", "migration", "error"],
  entitySkipConstructor: true,
  entityPrefix: "",
  synchronize: false,
  dropSchema: false,
  migrationsTableName: "app_migrations",
  migrationsRun: false,
  metadataTableName: "typeorm-metas",
  migrations: ["migrations/*.ts"]
};

export default dbConfig;
