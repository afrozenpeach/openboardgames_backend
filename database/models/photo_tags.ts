import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { photos, photosId } from './photos';
import type { users, usersId } from './users';

export interface photo_tagsAttributes {
  id: number;
  photo?: number;
  user_id?: number;
  tag_x?: number;
  tag_y?: number;
}

export type photo_tagsPk = "id";
export type photo_tagsId = photo_tags[photo_tagsPk];
export type photo_tagsOptionalAttributes = "photo" | "user_id" | "tag_x" | "tag_y";
export type photo_tagsCreationAttributes = Optional<photo_tagsAttributes, photo_tagsOptionalAttributes>;

export class photo_tags extends Model<photo_tagsAttributes, photo_tagsCreationAttributes> implements photo_tagsAttributes {
  id!: number;
  photo?: number;
  user_id?: number;
  tag_x?: number;
  tag_y?: number;

  // photo_tags belongsTo photos via photo
  photo_photo!: photos;
  getPhoto_photo!: Sequelize.BelongsToGetAssociationMixin<photos>;
  setPhoto_photo!: Sequelize.BelongsToSetAssociationMixin<photos, photosId>;
  createPhoto_photo!: Sequelize.BelongsToCreateAssociationMixin<photos>;
  // photo_tags belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof photo_tags {
    return photo_tags.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    photo: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'photos',
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
    tag_x: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tag_y: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'photo_tags',
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
        name: "photo_idx",
        using: "BTREE",
        fields: [
          { name: "photo" },
        ]
      },
    ]
  });
  }
}
