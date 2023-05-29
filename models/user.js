var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String},
    email: {type: String},
    isAdministrator: {type: Boolean},
    password: {type: String},
  }
);

// Virtuals
UserSchema
  .virtual('url')
  .get(function() {
    return '/user/' + this._id;
  });

module.exports = mongoose.model("User", UserSchema);