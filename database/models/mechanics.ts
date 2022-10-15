import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames_mechanics, boardgames_mechanicsId } from './boardgames_mechanics';

export interface mechanicsAttributes {
  id: number;
  name: string;
  description?: string;
}

export type mechanicsPk = "id";
export type mechanicsId = mechanics[mechanicsPk];
export type mechanicsOptionalAttributes = "id" | "description";
export type mechanicsCreationAttributes = Optional<mechanicsAttributes, mechanicsOptionalAttributes>;

export class mechanics extends Model<mechanicsAttributes, mechanicsCreationAttributes> implements mechanicsAttributes {
  id!: number;
  name!: string;
  description?: string;

  // mechanics hasMany boardgames_mechanics via mechanic
  boardgames_mechanics!: boardgames_mechanics[];
  getBoardgames_mechanics!: Sequelize.HasManyGetAssociationsMixin<boardgames_mechanics>;
  setBoardgames_mechanics!: Sequelize.HasManySetAssociationsMixin<boardgames_mechanics, boardgames_mechanicsId>;
  addBoardgames_mechanic!: Sequelize.HasManyAddAssociationMixin<boardgames_mechanics, boardgames_mechanicsId>;
  addBoardgames_mechanics!: Sequelize.HasManyAddAssociationsMixin<boardgames_mechanics, boardgames_mechanicsId>;
  createBoardgames_mechanic!: Sequelize.HasManyCreateAssociationMixin<boardgames_mechanics>;
  removeBoardgames_mechanic!: Sequelize.HasManyRemoveAssociationMixin<boardgames_mechanics, boardgames_mechanicsId>;
  removeBoardgames_mechanics!: Sequelize.HasManyRemoveAssociationsMixin<boardgames_mechanics, boardgames_mechanicsId>;
  hasBoardgames_mechanic!: Sequelize.HasManyHasAssociationMixin<boardgames_mechanics, boardgames_mechanicsId>;
  hasBoardgames_mechanics!: Sequelize.HasManyHasAssociationsMixin<boardgames_mechanics, boardgames_mechanicsId>;
  countBoardgames_mechanics!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof mechanics {
    return mechanics.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mechanics',
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
