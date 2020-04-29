'use strict';
module.exports = (sequelize, DataTypes) => {
  const song_writer_link = sequelize.define('song_writer_link', {
    song_id: DataTypes.INTEGER,
    writer_id: DataTypes.INTEGER
  }, {});
  song_writer_link.associate = function(models) {
    // associations can be defined here
  };
  return song_writer_link;
};