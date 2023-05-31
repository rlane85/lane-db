module.exports = (sequelize, Sequelize) => {
  const ActivityList = sequelize.define("activitylist", {
    owner: {
      type: Sequelize.STRING
    },
  });

  return ActivityList;
};
