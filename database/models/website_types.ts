import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface website_typesAttributes {
  id: number;
  name: string;
}

export type website_typesPk = "id";
export type website_typesId = website_types[website_typesPk];
export type website_typesOptionalAttributes = "id";
export type website_typesCreationAttributes = Optional<website_typesAttributes, website_typesOptionalAttributes>;

export class website_types extends Model<website_typesAttributes, website_typesCreationAttributes> implements website_typesAttributes {
  id!: number;
  name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof website_types {
    return website_types.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'website_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
