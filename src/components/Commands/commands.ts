#!/usr/bin/env ts-node

import "module-alias/register";
import { Command } from "commander";
import {initExecutor, initialization} from "@components/Executors/initialization/init.executor";
import {showLogs} from "@config/logs/log.action";
import {generateExecutor} from "@components/Executors/generate/generate.executor";

const commander = new Command();

commander.version("0.0.1").description("Sequelize CLI for TypeScript");

commander
  .command("init")
  .alias("i")
  .description("Initialization CLI dependencies into the project")
  .action(initialization);
commander
  .command("init:config.example")
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
commander
  .command("init:seeders")
  .alias("i:see")
  .description("Initialization CLI seeders into the project")
  .action(initExecutor.initSeeders);

commander
  .command("migration:generate <tableName>")
  .alias("mig:gen")
  .description("Generation a new migration file into the project")
  .action((tableName) => generateExecutor.generateMigration(tableName));
commander
  .command("model:generate <modelName> <params...>")
  .alias("mod:gen")
  .description("Generation a new model file into the project")
  .action((modelName, params) => generateExecutor.generateModel(params, modelName));
commander
  .command("seed:generate <seedName>")
  .alias("see:gen")
  .description("Generation a new seed file into the project")
  .action(generateExecutor.generateSeed);

commander
  .command("logs")
  .alias("l")
  .description("Shows all logs of action CLI")
  .action(showLogs);

commander.parse(process.argv);
