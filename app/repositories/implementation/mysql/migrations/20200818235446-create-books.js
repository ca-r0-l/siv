"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		queryInterface.createTable("books", { 
			id: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
				primaryKey: true
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.DataTypes.FLOAT,
				allowNull: false,
			},
			qtyPages: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
			},
			author: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
			},
			genre: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		queryInterface.dropTable('books');
	},
};
