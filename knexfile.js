// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  // FOR LOCAL DEVELOPMENT
  // development: {
  //   client: 'pg',
  //   connection: {
  //     port: 5432,
  //     database: 'pet_furriendly_db',
  //     user:     'postgres',
  //     password: 'Turing2301'
  //   }
  // },

  // FOR DEPLOYING THRU RENDER
  development: {
    client: 'pg',
    connection: {
      connectionString: 'postgres://postgres1:6VgF2qZGkAhiKpRmWC7nttNhKHpOPdb7@dpg-chslik2k728ud3k0vnig-a.oregon-postgres.render.com/pet_furriendly_db',
      ssl: {
        rejectUnauthorized: false
      },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: 'postgres://postgres1:6VgF2qZGkAhiKpRmWC7nttNhKHpOPdb7@dpg-chslik2k728ud3k0vnig-a.oregon-postgres.render.com/pet_furriendly_db',
      ssl: {
        rejectUnauthorized: false
      },
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  }
};
