// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database:'accidental'
    }
  },

  staging: {
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
  },

  production: {
    client: 'pg',
    connection: {
      database: 'dgbqdbvnvvgjo',
      host: "ec2-174-129-225-9.compute-1.amazonaws.com",
      user: "bemtfkgoffpcob",
      password: "b2bea0f3cec2a6b80710eca03bc789a330f27f6e8126ab1dcf90463e2a162226"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
