module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'custodio',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
