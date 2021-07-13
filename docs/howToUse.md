# How to use ts-sequelize-cli?

## 1) Initialization
For initialization CLI use command 
```bash
sqlz init
```
or
```bash
sqlz i
```
This will create directories
```bash
└── db
    ├── config
    │   ├── interfaces
    │   │   └── interface.config.ts
    │   └── config.ts
    ├── migrations
    └── models
```
## 2) Configuration setup
In the ./db/config directory you can find <config.ts>. This is the configuration file for connecting to your database. So, just use your settings to access the database and select the usage mode
```bash
import { ISequelizeConfig, Mode } from "ts-sequelize-cli";

export const sequelizeConfig: ISequelizeConfig = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "db_development",
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "db_test",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "db_production",
    host: "localhost",
    dialect: "postgres",
  },
};

export const operatingMode: Mode = "development";
```

## 3) Create migration 
Now you can create your migration file. 
```bash
sqlz mig:gen Posts title:string content:text dateOfPublish:date
```
This command will create the file <'date'-create-post.ts>
```bash
import Sequelize, { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.TEXT,
      }, 
      dateOfPublish: {
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable("Posts");
  },
};
```
Send your migration to database
```bash
sqlz db:migrate:up
```
or
```bash
sqlz db:mig:u
```

## 4) Create model 
Now you can create your model file.
```bash
sqlz mod:gen Posts title:string content:text dateOfPublish:date
```
This command will create the file <post.ts>
```bash
import { DataTypes } from "sequelize";
import connection from ""; //Enter your sequelize connect to database
import { IPostModel } from "./interfaces/post.interface";

export const PostModel = connection.define<IPostModel>("Posts", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  },
  dateOfPublish: {
    type: DataTypes.DATE
  }
});
```
Set up your model, add validation and dependencies to other models. For more information on how to set up a model, see the official [Sequelize](https://sequelize.org/master/manual/typescript.html) documentation for TypeScript. Also, you need to add your own connection. You can use your already connection or command:
```bash
sqlz connection:build
```
or
```bash
sqlz con:b
```
and add your environments.
