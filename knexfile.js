// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'teste.czckyqtvcinn.us-east-2.rds.amazonaws.com',
      port: '5432',
      user: 'postgres',
      password: ')9dfs318X',
      database: 'bd_teste'
      //database: "knex_test", //teste
      //user: "postgres",
      //password: "1234"  // )9dfs318X
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
