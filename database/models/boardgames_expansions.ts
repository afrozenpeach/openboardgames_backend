import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';

export interface boardgames_expansionsAttributes {
  id: number;
  boardgame_parent?: number;
  boardgame_child?: number;
}

export type boardgames_expansionsPk = "id";
export type boardgames_expansionsId = boardgames_expansions[boardgames_expansionsPk];
export type boardgames_expansionsOptionalAttributes = "id" | "boardgame_parent" | "boardgame_child";
export type boardgames_expansionsCreationAttributes = Optional<boardgames_expansionsAttributes, boardgames_expansionsOptionalAttributes>;

export class boardgames_expansions extends Model<boardgames_expansionsAttributes, boardgames_expansionsCreationAttributes> implements boardgames_expansionsAttributes {
  id!: number;
  boardgame_parent?: number;
  boardgame_child?: number;

  // boardgames_expansions belongsTo boardgames via boardgame_child
  boardgame_child_boardgame!: boardgames;
  getBoardgame_child_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_child_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_child_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // boardgames_expansions belongsTo boardgames via boardgame_parent
  boardgame_parent_boardgame!: boardgames;
  getBoardgame_parent_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_parent_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_parent_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;

  static initModel(sequelize: Sequelize.Sequelize): typeof boardgames_expansions {
    return boardgames_expansions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    boardgame_parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    },
    boardgame_child: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'boardgames_expansions',
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
      {
        name: "boardgames_expansions_parent_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame_parent" },
        ]
      },
      {
        name: "boardgames_expansions_child_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame_child" },
        ]
      },
    ]
  });
  }
}
