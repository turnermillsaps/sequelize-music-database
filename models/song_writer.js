'use strict';
module.exports = (sequelize, DataTypes) => {
  const song_writer = sequelize.define('song_writer', {
    writer_name: DataTypes.STRING
  }, {});
  song_writer.associate = function(models) {
    // associations can be defined here
  };
  return song_writer;
};