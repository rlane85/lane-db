module.exports = {
    HOST: "localhost",
    PORT: 3389,
    USER: "root",
    PASSWORD: "Wmozart",
    DB: "lane_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };