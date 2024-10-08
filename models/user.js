const { Model, DataTypes} = require('sequelize');

const bcrypt = require('bcrypt');

const sequelize = require('../config/connection');

class User extends Model {

    checkPassword(loginPW) {

        return bcrypt.compareSync(loginPW, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
{
    hooks: {
        beforeCreate: async (newUserData) => {
            
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
    },

        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;