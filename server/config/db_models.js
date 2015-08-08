/* 
* @Author: Katrina Uychaco
* @Date:   2015-08-01 18:34:04
* @Last Modified by:   kuychaco
* @Last Modified time: 2015-08-08 03:03:44
*/

'use strict';

var Sequelize = require('sequelize');

var conString = process.env.CIRCLECI ? 'mysql://root@localhost:3306/circle_test' : process.env.DATABASE_URL || 'mysql://root@localhost:3306/linkd';



// Connect to database
var db = new Sequelize(conString, { logging: false });

// Define models

var User = db.define('User', {
  user_id_google: { type: Sequelize.STRING, primaryKey: true },
  token_google: Sequelize.STRING,
  name_google: Sequelize.STRING,
  email_google: Sequelize.STRING
});

var Group = db.define('Group', {
  name: Sequelize.STRING
});

var Folder = db.define('Folder', {
  name: Sequelize.STRING
});

var Link = db.define('Link', {
  name: Sequelize.STRING,
  url: Sequelize.STRING,
  expiration_date: Sequelize.DATE
});

var Comment = db.define('Comment', {
  text: Sequelize.STRING,
});

var UserLink = db.define('UserLink', {
  viewed: Sequelize.BOOLEAN
});

// Set up User associations
User.belongsToMany(Group, {through: 'UserGroup'});
Group.belongsToMany(User, {through: 'UserGroup'});

Group.belongsTo(User, { as: 'Owner' });

User.belongsToMany(Link, {through: UserLink});
Link.belongsToMany(User, {through: UserLink});

Comment.belongsTo(User, { as: 'Author' });


Folder.belongsTo(Folder, { as: 'Parent' });

Folder.belongsTo(Group);

Link.belongsTo(Folder);

Comment.belongsTo(Link);


// Create table based on model definitions in database
db.sync()
  .then(function() {
    console.log('Tables created');

    // Create demo data
    

  });


module.exports.User = User;
module.exports.Group = Group;
module.exports.Folder = Folder;
module.exports.Link = Link;
module.exports.Comment = Comment;
module.exports.db = db;