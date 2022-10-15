import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';
import type { mechanics, mechanicsId } from './mechanics';

export interface boardgames_mechanicsAttributes {
  id: number;
  boardgame: number;
  mechanic: number;
}

export type boardgames_mechanicsPk = "id";
export type boardgames_mechanicsId = boardgames_mechanics[boardgames_mechanicsPk];
export type boardgames_mechanicsCreationAttributes = boardgames_mechanicsAttributes;

export class boardgames_mechanics extends Model<boardgames_mechanicsAttributes, boardgames_mechanicsCreationAttributes> implements boardgames_mechanicsAttributes {
  id!: number;
  boardgame!: number;
  mechanic!: number;

  // boardgames_mechanics belongsTo boardgames via boardgame
  boardgame_boardgame!: boardgames;
  getBoardgame_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // boardgames_mechanics belongsTo mechanics via mechanic
  mechanic_mechanic!: mechanics;
  getMechanic_mechanic!: Sequelize.BelongsToGetAssociationMixin<mechanics>;
  setMechanic_mechanic!: Sequelize.BelongsToSetAssociationMixin<mechanics, mechanicsId>;
  createMechanic_mechanic!: Sequelize.BelongsToCreateAssociationMixin<mechanics>;

  static initModel(sequelize: Sequelize.Sequelize): typeof boardgames_mechanics {
    return boardgames_mechanics.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    boardgame: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    },
    mechanic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mechanics',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'boardgames_mechanics',
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
        name: "boardgames_mechanics_boardgame_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame" },
        ]
      },
      {
        name: "boardgames_mechanics_mechanic_idx",
        using: "BTREE",
        fields: [
          { name: "mechanic" },
        ]
      },
    ]
  });
  }
}
