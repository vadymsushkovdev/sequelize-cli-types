#!/usr/bin/env ts-node

import { Command } from "commander";
import { initExecutor } from "../Executors/initialization/init.executor";

const commander = new Command();

commander.version("0.0.1").description("Sequelize CLI for TypeScript");

commander
  .command("init")
  .alias("i")
  .description("initialization CLI into the project")
  .action(initExecutor.init);
commander
  .command("init:config.example")
  .alias("i:con")
  .description("initialization CLI config.example into the project")
  .action(initExecutor.initConfig);
commander
  .command("init:migrations")
  .alias("i:mig")
  .description("initialization CLI migrations into the project")
  .action(initExecutor.initMigrations);
commander
  .command("init:models")
  .alias("i:mod")
  .description("initialization CLI models into the project")
  .action(initExecutor.initModels);
commander
  .command("init:seeders")
  .alias("i:see")
  .description("initialization CLI seeders into the project")
  .action(initExecutor.initSeeders);

commander.parse(process.argv);
