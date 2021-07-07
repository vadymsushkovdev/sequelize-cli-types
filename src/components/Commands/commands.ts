#!/usr/bin/env ts-node

import { Command } from "commander";
import {
  initExecutor,
  initialization,
} from "../Executors/init.executor";
import { showLogs } from "../../config/logs/log.action";
import { generateExecutor } from "../Executors/generate.executor";
import { dbMigrationExecutor } from "../Executors/db.migration.executor";

const commander = new Command();

commander.version("0.0.1").description("Sequelize CLI for TypeScript");

commander
  .command("init")
  .alias("i")
  .description("Initialization CLI dependencies into the project")
  .action(initialization);
commander
  .command("init:config")
  .alias("i:con")
  .description("Initialization CLI config into the project")
  .action(initExecutor.initConfig);
commander
  .command("init:migrations")
  .alias("i:mig")
  .description("Initialization CLI migrations into the project")
  .action(initExecutor.initMigrations);
commander
  .command("init:models")
  .alias("i:mod")
  .description("Initialization CLI models into the project")
  .action(initExecutor.initModels);
/*
commander
  .command("init:seeders")
  .alias("i:see")
  .description("Initialization CLI seeders into the project")
  .action(initExecutor.initSeeders);
*/

commander
  .command("migration:generate <tableName> <parameters...>")
  .alias("mig:gen")
  .description("Generation a new migration file into the project")
  .action((tableName, parameters) =>
    generateExecutor.generateMigration(tableName, parameters)
  );
commander
  .command("model:generate <modelName> <parameters...>")
  .alias("mod:gen")
  .description("Generation a new model file into the project")
  .action((modelName, parameters) =>
    generateExecutor.generateModel(modelName, parameters)
  );
/*
commander
  .command("seed:generate <seedName> <parameters...>")
  .alias("see:gen")
  .description("Generation a new seed file into the project")
  .action(generateExecutor.generateSeed);
*/

commander
  .command("db:migrate")
  .alias("db:mig")
  .description("Migrate all pending migration files")
  .action(dbMigrationExecutor.up);
commander
  .command("db:down")
  .alias("db:d")
  .description("Drop all database")
  .action(dbMigrationExecutor.down);
commander
  .command("db:specificdown <parameters...>")
  .alias("db:sd")
  .description("Drop one specific migration file")
  .action((parameters) => dbMigrationExecutor.specificDown(parameters));
commander
  .command("db:pending")
  .alias("db:p")
  .description("Check all migration files that not executed")
  .action(dbMigrationExecutor.pending);
commander
  .command("db:executed")
  .alias("db:e")
  .description("Check all migration files that executed")
  .action(dbMigrationExecutor.executed);

commander
  .command("logs")
  .alias("l")
  .description("Shows all logs of action CLI")
  .action(showLogs);

commander.parse(process.argv);
