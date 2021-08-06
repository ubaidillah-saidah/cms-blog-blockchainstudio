// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', ''),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'postgres'),
//         username: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'abrahamyusuf'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//       options: {}
//     },
//   },
// });


const { parse } = require("pg-connection-string");

// module.exports = ({ env }) => {
//   const { host, port, database, user, password } = parse(env("DATABASE_URL"));

//   return {
//     defaultConnection: "default",
//     connections: {
//       default: {
//         connector: "bookshelf",
//         settings: {
//           client: "postgres",
//           host,
//           port,
//           database,
//           username: user,
//           password,
//           ssl: { rejectUnauthorized: false }
//         },
//         options: {
//           ssl: false
//         },
//       },
//     },
//   };
// };


module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
