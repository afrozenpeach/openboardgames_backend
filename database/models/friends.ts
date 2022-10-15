import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { users, usersId } from './users';

export interface friendsAttributes {
  id: number;
  user_id_1: number;
  user_id_2: number;
  user_1_approved?: number;
  user_2_approved?: number;
}

export type friendsPk = "id";
export type friendsId = friends[friendsPk];
export type friendsOptionalAttributes = "id" | "user_1_approved" | "user_2_approved";
export type friendsCreationAttributes = Optional<friendsAttributes, friendsOptionalAttributes>;

export class friends extends Model<friendsAttributes, friendsCreationAttributes> implements friendsAttributes {
  id!: number;
  user_id_1!: number;
  user_id_2!: number;
  user_1_approved?: number;
  user_2_approved?: number;

  // friends belongsTo users via user_id_1
  user_id_1_user!: users;
  getUser_id_1_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser_id_1_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser_id_1_user!: Sequelize.BelongsToCreateAssociationMixin<users>;
  // friends belongsTo users via user_id_2
  user_id_2_user!: users;
  getUser_id_2_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser_id_2_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser_id_2_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof friends {
    return friends.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_id_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_1_approved: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    user_2_approved: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'friends',
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
        name: "friend_1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id_1" },
        ]
      },
      {
        name: "friend_2_idx",
        using: "BTREE",
        fields: [
          { name: "user_id_2" },
        ]
      },
    ]
  });
  }
}
