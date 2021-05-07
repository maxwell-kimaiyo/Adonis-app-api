/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'
import URL from "url-parse";
const PROD_MYSQL_DB = new URL(Env.get("CLEARDB_DATABASE_URL"));

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get("DB_CONNECTION"),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | MySQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for MySQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i mysql
    |
    */
    mysql: {
      client: "mysql",
      connection: {
        host: Env.get("MYSQL_HOST", PROD_MYSQL_DB.host),
        port: Env.get("MYSQL_PORT"),
        user: Env.get("MYSQL_USER", PROD_MYSQL_DB.username),
        password: Env.get("MYSQL_PASSWORD", PROD_MYSQL_DB.password),
        database: Env.get("MYSQL_DB_NAME", PROD_MYSQL_DB.pathname.substr(1)),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
    },
  },
};

export default databaseConfig