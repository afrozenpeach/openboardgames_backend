import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';

export interface boardgames_reimplementationsAttributes {
  id: number;
  boardgame_parent?: number;
  boardgame_child?: number;
}

export type boardgames_reimplementationsPk = "id";
export type boardgames_reimplementationsId = boardgames_reimplementations[boardgames_reimplementationsPk];
export type boardgames_reimplementationsOptionalAttributes = "id" | "boardgame_parent" | "boardgame_child";
export type boardgames_reimplementationsCreationAttributes = Optional<boardgames_reimplementationsAttributes, boardgames_reimplementationsOptionalAttributes>;

export class boardgames_reimplementations extends Model<boardgames_reimplementationsAttributes, boardgames_reimplementationsCreationAttributes> implements boardgames_reimplementationsAttributes {
  id!: number;
  boardgame_parent?: number;
  boardgame_child?: number;

  // boardgames_reimplementations belongsTo boardgames via boardgame_child
  boardgame_child_boardgame!: boardgames;
  getBoardgame_child_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_child_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_child_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // boardgames_reimplementations belongsTo boardgames via boardgame_parent
  boardgame_parent_boardgame!: boardgames;
  getBoardgame_parent_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_parent_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_parent_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;

  static initModel(sequelize: Sequelize.Sequelize): typeof boardgames_reimplementations {
    return boardgames_reimplementations.init({
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
    tableName: 'boardgames_reimplementations',
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
        name: "boardgames_reimplementations_parent_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame_parent" },
        ]
      },
      {
        name: "boardgames_reimplementations_child_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame_child" },
        ]
      },
    ]
  });
  }
}
