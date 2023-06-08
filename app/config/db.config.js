module.exports = {
    HOST: "localhost",
    PORT: 3306,
    USER: "jwt",
    PASSWORD: process.env.MYSQL_PASS,
    DB: "lane_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };