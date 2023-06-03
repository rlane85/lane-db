module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING },
    isAdministrator: { type: Sequelize.BOOLEAN},
    password: { type: Sequelize.STRING}
  });

  return User;
};
