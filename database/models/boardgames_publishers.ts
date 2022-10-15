import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';
import type { publishers, publishersId } from './publishers';

export interface boardgames_publishersAttributes {
  id: number;
  publisher_id: number;
  boardgame_id: number;
}

export type boardgames_publishersPk = "id";
export type boardgames_publishersId = boardgames_publishers[boardgames_publishersPk];
export type boardgames_publishersOptionalAttributes = "id";
export type boardgames_publishersCreationAttributes = Optional<boardgames_publishersAttributes, boardgames_publishersOptionalAttributes>;

export class boardgames_publishers extends Model<boardgames_publishersAttributes, boardgames_publishersCreationAttributes> implements boardgames_publishersAttributes {
  id!: number;
  publisher_id!: number;
  boardgame_id!: number;

  // boardgames_publishers belongsTo boardgames via boardgame_id
  boardgame!: boardgames;
  getBoardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // boardgames_publishers belongsTo publishers via publisher_id
  publisher!: publishers;
  getPublisher!: Sequelize.BelongsToGetAssociationMixin<publishers>;
  setPublisher!: Sequelize.BelongsToSetAssociationMixin<publishers, publishersId>;
  createPublisher!: Sequelize.BelongsToCreateAssociationMixin<publishers>;

  static initModel(sequelize: Sequelize.Sequelize): typeof boardgames_publishers {
    return boardgames_publishers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    publisher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publishers',
        key: 'id'
      }
    },
    boardgame_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'boardgames_publishers',
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
        name: "boardgame_publishers_publisher_idx",
        using: "BTREE",
        fields: [
          { name: "publisher_id" },
        ]
      },
      {
        name: "boardgame_publishers_boardgame_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame_id" },
        ]
      },
    ]
  });
  }
}
