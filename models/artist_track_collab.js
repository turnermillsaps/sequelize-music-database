'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist_track_collab = sequelize.define('artist_track_collab', {
    artist_id: DataTypes.INTEGER,
    track_id: DataTypes.INTEGER
  }, {});
  artist_track_collab.associate = function(models) {
    // associations can be defined here
  };
  return artist_track_collab;
};