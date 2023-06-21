// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'teste.czckyqtvcinn.us-east-2.rds.amazonaws.com',
      port: '5432',
      user: 'postgres',
      password: ')9dfs318X',
      database: 'bd_teste'
      
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
