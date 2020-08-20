import { Model, DataTypes } from "sequelize";
import { sequelize } from "../SequelizeConnection";

class Book extends Model {
    public id: string
    public name: string
    public price: number
    public qtyGages: number
    public author: number
    public genre: number

    public readonly createdAt: Date;
    public readonly updatedAt: Date;
}

Book.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        qtyPages: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        author: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genre: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
    }, {
        sequelize: sequelize,
        tableName: "books"
    }
)

export { Book };
