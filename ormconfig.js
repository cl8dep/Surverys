module.exports = {
    name: "default",
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number.parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: true,
    migrations: [__dirname + '/migrations/*.js'],
    cli: {
        migrationsDir: 'migrations',
    },
    entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
};