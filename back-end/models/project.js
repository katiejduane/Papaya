const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Project = sequelize.define('project', {
    id: {
        type: Sequelize.INTEGER(),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    notes: {
        type: Sequelize.TEXT(),
        allowNull: true
    }
});

module.exports = Project;