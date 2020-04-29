'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    album_name: DataTypes.STRING,
    artist_id: DataTypes.INTEGER,
    release_year: DataTypes.INTEGER
  }, {});
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};