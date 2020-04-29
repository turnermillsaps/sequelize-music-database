const Sequelize = require('sequelize');

const sequelize = new Sequelize('musicseq', 'postgres', 'some-password', {
    host: 'localhost',
    dialect: 'postgres'
})


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    })


  
const Artist = sequelize.define('Artist', {
    artist_name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'artist',
    tableName: 'artist'
})

Artist.sync({ logging: console.log })
    .then(() => {
        console.log('Successfully created new table.');
        sequelize.close();
    })
    .catch((err) => {
        console.error(err);
    })