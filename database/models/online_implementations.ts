import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';
import type { platforms, platformsId } from './platforms';

export interface online_implementationsAttributes {
  id: number;
  boardgame?: number;
  platform?: number;
  url?: string;
  cost?: string;
}

export type online_implementationsPk = "id";
export type online_implementationsId = online_implementations[online_implementationsPk];
export type online_implementationsOptionalAttributes = "id" | "boardgame" | "platform" | "url" | "cost";
export type online_implementationsCreationAttributes = Optional<online_implementationsAttributes, online_implementationsOptionalAttributes>;

export class online_implementations extends Model<online_implementationsAttributes, online_implementationsCreationAttributes> implements online_implementationsAttributes {
  id!: number;
  boardgame?: number;
  platform?: number;
  url?: string;
  cost?: string;

  // online_implementations belongsTo boardgames via boardgame
  boardgame_boardgame!: boardgames;
  getBoardgame_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // online_implementations belongsTo platforms via platform
  platform_platform!: platforms;
  getPlatform_platform!: Sequelize.BelongsToGetAssociationMixin<platforms>;
  setPlatform_platform!: Sequelize.BelongsToSetAssociationMixin<platforms, platformsId>;
  createPlatform_platform!: Sequelize.BelongsToCreateAssociationMixin<platforms>;

  static initModel(sequelize: Sequelize.Sequelize): typeof online_implementations {
    return online_implementations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    boardgame: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    },
    platform: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'platforms',
        key: 'id'
      }
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cost: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'online_implementations',
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
        name: "online_implementation_boardgame_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame" },
        ]
      },
      {
        name: "online_implementation_platform_idx",
        using: "BTREE",
        fields: [
          { name: "platform" },
        ]
      },
    ]
  });
  }
}
