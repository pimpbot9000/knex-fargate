
module.exports = {  

  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: 'postgres',
      database: 'knex',
      user:     'knex',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'src/db/migrations'
    }
  },
  /*
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }*/
};
