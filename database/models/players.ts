import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { plays, playsId } from './plays';
import type { users, usersId } from './users';

export interface playersAttributes {
  id: number;
  play: number;
  user_id?: number;
  friendly_name?: string;
  score?: number;
  tie_breaker?: number;
  winner?: number;
}

export type playersPk = "id";
export type playersId = players[playersPk];
export type playersOptionalAttributes = "id" | "user_id" | "friendly_name" | "score" | "tie_breaker" | "winner";
export type playersCreationAttributes = Optional<playersAttributes, playersOptionalAttributes>;

export class players extends Model<playersAttributes, playersCreationAttributes> implements playersAttributes {
  id!: number;
  play!: number;
  user_id?: number;
  friendly_name?: string;
  score?: number;
  tie_breaker?: number;
  winner?: number;

  // players belongsTo plays via play
  play_play!: plays;
  getPlay_play!: Sequelize.BelongsToGetAssociationMixin<plays>;
  setPlay_play!: Sequelize.BelongsToSetAssociationMixin<plays, playsId>;
  createPlay_play!: Sequelize.BelongsToCreateAssociationMixin<plays>;
  // players belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof players {
    return players.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    play: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'plays',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    friendly_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tie_breaker: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    winner: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'players',
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
        name: "player_play_idx",
        using: "BTREE",
        fields: [
          { name: "play" },
        ]
      },
      {
        name: "user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
