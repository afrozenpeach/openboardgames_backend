import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';

export interface versionsAttributes {
  id: number;
  boardgame: number;
  release_year?: number;
  release_month?: number;
  rulebook?: number;
}

export type versionsPk = "id";
export type versionsId = versions[versionsPk];
export type versionsOptionalAttributes = "id" | "release_year" | "release_month" | "rulebook";
export type versionsCreationAttributes = Optional<versionsAttributes, versionsOptionalAttributes>;

export class versions extends Model<versionsAttributes, versionsCreationAttributes> implements versionsAttributes {
  id!: number;
  boardgame!: number;
  release_year?: number;
  release_month?: number;
  rulebook?: number;

  // versions belongsTo boardgames via boardgame
  boardgame_boardgame!: boardgames;
  getBoardgame_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;

  static initModel(sequelize: Sequelize.Sequelize): typeof versions {
    return versions.init({
    id: {
      autoIncrement: true,
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
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    release_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rulebook: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'versions',
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
        name: "versions_boardgame_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame" },
        ]
      },
    ]
  });
  }
}
