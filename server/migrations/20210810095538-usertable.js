/** @format */

"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable("user_table", {
			id: {
				type: Sequelize.INTEGER,
				unique: true,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			user_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			profile_pic: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {},
};
