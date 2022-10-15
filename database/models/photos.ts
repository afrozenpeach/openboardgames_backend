import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';
import type { photo_tags, photo_tagsId } from './photo_tags';
import type { users, usersId } from './users';

export interface photosAttributes {
  id: number;
  user_id?: number;
  boardgame?: number;
  date_taken?: Date;
  date_uploaded?: Date;
}

export type photosPk = "id";
export type photosId = photos[photosPk];
export type photosOptionalAttributes = "user_id" | "boardgame" | "date_taken" | "date_uploaded";
export type photosCreationAttributes = Optional<photosAttributes, photosOptionalAttributes>;

export class photos extends Model<photosAttributes, photosCreationAttributes> implements photosAttributes {
  id!: number;
  user_id?: number;
  boardgame?: number;
  date_taken?: Date;
  date_uploaded?: Date;

  // photos belongsTo boardgames via boardgame
  boardgame_boardgame!: boardgames;
  getBoardgame_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // photos hasMany photo_tags via photo
  photo_tags!: photo_tags[];
  getPhoto_tags!: Sequelize.HasManyGetAssociationsMixin<photo_tags>;
  setPhoto_tags!: Sequelize.HasManySetAssociationsMixin<photo_tags, photo_tagsId>;
  addPhoto_tag!: Sequelize.HasManyAddAssociationMixin<photo_tags, photo_tagsId>;
  addPhoto_tags!: Sequelize.HasManyAddAssociationsMixin<photo_tags, photo_tagsId>;
  createPhoto_tag!: Sequelize.HasManyCreateAssociationMixin<photo_tags>;
  removePhoto_tag!: Sequelize.HasManyRemoveAssociationMixin<photo_tags, photo_tagsId>;
  removePhoto_tags!: Sequelize.HasManyRemoveAssociationsMixin<photo_tags, photo_tagsId>;
  hasPhoto_tag!: Sequelize.HasManyHasAssociationMixin<photo_tags, photo_tagsId>;
  hasPhoto_tags!: Sequelize.HasManyHasAssociationsMixin<photo_tags, photo_tagsId>;
  countPhoto_tags!: Sequelize.HasManyCountAssociationsMixin;
  // photos belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof photos {
    return photos.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    boardgame: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    },
    date_taken: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_uploaded: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'photos',
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
        name: "photographer_idx",
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
