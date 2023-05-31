module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    owner: {
      anme: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING },
      isAdministrator: { type: Sequelize.BOOLEAN},
      password: { type: Sequelize.STRING}
    },
  });

  return User;
};
