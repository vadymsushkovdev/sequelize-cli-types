# Sequelize CLI for TypeScript

##Installation

1) Install library "ts-sequelize-cli"
```bash
npm install --save-dev ts-sequelize-cli
```

2) Let access for CLI
```bash
npx ts-sequelize-cli
```

##Commands 
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
  migration:generate|mig:gen <tableName> <parameters...>  Generation a new migration file into the project
  model:generate|mod:gen <modelName> <parameters...>      Generation a new model file into the project
  db:migrate|db:mig                                       Migrate all pending migration files
  db:down|db:d                                            Drop all database
  db:specificdown|db:sd <parameters...>                   Drop one specific migration file
  db:pending|db:p                                         Check all migration files that not executed
  db:executed|db:e                                        Check all migration files that executed
  logs|l                                                  Shows all logs of action CLI
  help [command]                                          display help for command
```
