import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';
import type { players, playersId } from './players';
import type { users, usersId } from './users';

export interface playsAttributes {
  id: number;
  user_id: number;
  boardgame: number;
  date: Date;
  playtime?: number;
}

export type playsPk = "id";
export type playsId = plays[playsPk];
export type playsOptionalAttributes = "id" | "playtime";
export type playsCreationAttributes = Optional<playsAttributes, playsOptionalAttributes>;

export class plays extends Model<playsAttributes, playsCreationAttributes> implements playsAttributes {
  id!: number;
  user_id!: number;
  boardgame!: number;
  date!: Date;
  playtime?: number;

  // plays belongsTo boardgames via boardgame
  boardgame_boardgame!: boardgames;
  getBoardgame_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // plays hasMany players via play
  players!: players[];
  getPlayers!: Sequelize.HasManyGetAssociationsMixin<players>;
  setPlayers!: Sequelize.HasManySetAssociationsMixin<players, playersId>;
  addPlayer!: Sequelize.HasManyAddAssociationMixin<players, playersId>;
  addPlayers!: Sequelize.HasManyAddAssociationsMixin<players, playersId>;
  createPlayer!: Sequelize.HasManyCreateAssociationMixin<players>;
  removePlayer!: Sequelize.HasManyRemoveAssociationMixin<players, playersId>;
  removePlayers!: Sequelize.HasManyRemoveAssociationsMixin<players, playersId>;
  hasPlayer!: Sequelize.HasManyHasAssociationMixin<players, playersId>;
  hasPlayers!: Sequelize.HasManyHasAssociationsMixin<players, playersId>;
  countPlayers!: Sequelize.HasManyCountAssociationsMixin;
  // plays belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof plays {
    return plays.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    boardgame: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    playtime: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plays',
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
        name: "user_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "boardgame_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame" },
        ]
      },
    ]
  });
  }
}
