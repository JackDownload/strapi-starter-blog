module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
        schema: "public",
        ssl: { rejectUnauthorized: false }
      },
      options: {}
    }
  }
});
