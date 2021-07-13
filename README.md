# Sequelize CLI for TypeScript

## Installation

```bash
npm install --save-dev ts-sequelize-cli
```

## Commands
```bash
Usage: sqlz [options] [command]

Sequelize CLI for TypeScript

Options:
  -V, --version                                           output the version number
  -h, --help                                              display help for command

Commands:
  init|i                                                  Initialization CLI dependencies into the project
  init:config|i:con                                       Initialization CLI config into the project
  init:migrations|i:mig                                   Initialization CLI migrations into the project
  init:models|i:mod                                       Initialization CLI models into the project
  init:seeds|i:see                                        Initialization CLI seeders into the project
  migration:generate|mig:gen <tableName> <parameters...>  Generation a new migration file into the project
  model:generate|mod:gen <modelName> <parameters...>      Generation a new model file into the project
  seed:generate|see:gen <seedName>                        Generation a new seed file into the project
  db:migrate:up|db:mig:u                                  Migrate all pending migration files
  db:mig:down|db:mig:d                                    Drop all database
  db:migrate:sdown|db:mig:sd <parameters...>              Drop specific migration files
  db:migrate:pending|db:mig:p                             Check all migration files that not executed
  db:migrate:executed|db:mig:e                            Check all migration files that executed
  db:seed:up|db:s:u                                       Migrate all pending seed files
  db:seed:down|db:s:d                                     Drop all seed files
  db:seed:pending|db:s:p                                  Check all seed files that not executed
  db:migrate:executed|db:s:e                              Check all seed files that executed
  logs|l                                                  Shows all logs of action CLI
  help [command]                                          display help for command                                       display help for command
```
## Docs
[How to use?](https://github.com/vadymsushkovdev/sequelize-cli-types/blob/main/docs/howToUse.md)
