let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/youtube' : 'postgres://localhost/youtube'

module.exports = {
  development: {
    client: 'pg',
    connection: connectionString,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
};