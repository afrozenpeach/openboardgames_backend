import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { friends, friendsId } from './friends';
import type { photo_tags, photo_tagsId } from './photo_tags';
import type { photos, photosId } from './photos';
import type { players, playersId } from './players';
import type { plays, playsId } from './plays';
import type { websites, websitesId } from './websites';

export interface usersAttributes {
  id: number;
  alias: string;
  password_hash?: string;
  name?: string;
  profile?: string;
  date_registered?: Date;
  email?: string;
  google_id?: string;
  admin: number;
  active: number;
  token?: string;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id" | "password_hash" | "name" | "profile" | "date_registered" | "email" | "google_id" | "admin" | "active" | "token";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: number;
  alias!: string;
  password_hash?: string;
  name?: string;
  profile?: string;
  date_registered?: Date;
  email?: string;
  google_id?: string;
  admin!: number;
  active!: number;
  token?: string;

  // users hasMany friends via user_id_1
  friends!: friends[];
  getFriends!: Sequelize.HasManyGetAssociationsMixin<friends>;
  setFriends!: Sequelize.HasManySetAssociationsMixin<friends, friendsId>;
  addFriend!: Sequelize.HasManyAddAssociationMixin<friends, friendsId>;
  addFriends!: Sequelize.HasManyAddAssociationsMixin<friends, friendsId>;
  createFriend!: Sequelize.HasManyCreateAssociationMixin<friends>;
  removeFriend!: Sequelize.HasManyRemoveAssociationMixin<friends, friendsId>;
  removeFriends!: Sequelize.HasManyRemoveAssociationsMixin<friends, friendsId>;
  hasFriend!: Sequelize.HasManyHasAssociationMixin<friends, friendsId>;
  hasFriends!: Sequelize.HasManyHasAssociationsMixin<friends, friendsId>;
  countFriends!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany friends via user_id_2
  user_id_2_friends!: friends[];
  getUser_id_2_friends!: Sequelize.HasManyGetAssociationsMixin<friends>;
  setUser_id_2_friends!: Sequelize.HasManySetAssociationsMixin<friends, friendsId>;
  addUser_id_2_friend!: Sequelize.HasManyAddAssociationMixin<friends, friendsId>;
  addUser_id_2_friends!: Sequelize.HasManyAddAssociationsMixin<friends, friendsId>;
  createUser_id_2_friend!: Sequelize.HasManyCreateAssociationMixin<friends>;
  removeUser_id_2_friend!: Sequelize.HasManyRemoveAssociationMixin<friends, friendsId>;
  removeUser_id_2_friends!: Sequelize.HasManyRemoveAssociationsMixin<friends, friendsId>;
  hasUser_id_2_friend!: Sequelize.HasManyHasAssociationMixin<friends, friendsId>;
  hasUser_id_2_friends!: Sequelize.HasManyHasAssociationsMixin<friends, friendsId>;
  countUser_id_2_friends!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany photo_tags via user_id
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
  // users hasMany photos via user_id
  photos!: photos[];
  getPhotos!: Sequelize.HasManyGetAssociationsMixin<photos>;
  setPhotos!: Sequelize.HasManySetAssociationsMixin<photos, photosId>;
  addPhoto!: Sequelize.HasManyAddAssociationMixin<photos, photosId>;
  addPhotos!: Sequelize.HasManyAddAssociationsMixin<photos, photosId>;
  createPhoto!: Sequelize.HasManyCreateAssociationMixin<photos>;
  removePhoto!: Sequelize.HasManyRemoveAssociationMixin<photos, photosId>;
  removePhotos!: Sequelize.HasManyRemoveAssociationsMixin<photos, photosId>;
  hasPhoto!: Sequelize.HasManyHasAssociationMixin<photos, photosId>;
  hasPhotos!: Sequelize.HasManyHasAssociationsMixin<photos, photosId>;
  countPhotos!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany players via user_id
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
  // users hasMany plays via user_id
  plays!: plays[];
  getPlays!: Sequelize.HasManyGetAssociationsMixin<plays>;
  setPlays!: Sequelize.HasManySetAssociationsMixin<plays, playsId>;
  addPlay!: Sequelize.HasManyAddAssociationMixin<plays, playsId>;
  addPlays!: Sequelize.HasManyAddAssociationsMixin<plays, playsId>;
  createPlay!: Sequelize.HasManyCreateAssociationMixin<plays>;
  removePlay!: Sequelize.HasManyRemoveAssociationMixin<plays, playsId>;
  removePlays!: Sequelize.HasManyRemoveAssociationsMixin<plays, playsId>;
  hasPlay!: Sequelize.HasManyHasAssociationMixin<plays, playsId>;
  hasPlays!: Sequelize.HasManyHasAssociationsMixin<plays, playsId>;
  countPlays!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany websites via user
  websites!: websites[];
  getWebsites!: Sequelize.HasManyGetAssociationsMixin<websites>;
  setWebsites!: Sequelize.HasManySetAssociationsMixin<websites, websitesId>;
  addWebsite!: Sequelize.HasManyAddAssociationMixin<websites, websitesId>;
  addWebsites!: Sequelize.HasManyAddAssociationsMixin<websites, websitesId>;
  createWebsite!: Sequelize.HasManyCreateAssociationMixin<websites>;
  removeWebsite!: Sequelize.HasManyRemoveAssociationMixin<websites, websitesId>;
  removeWebsites!: Sequelize.HasManyRemoveAssociationsMixin<websites, websitesId>;
  hasWebsite!: Sequelize.HasManyHasAssociationMixin<websites, websitesId>;
  hasWebsites!: Sequelize.HasManyHasAssociationsMixin<websites, websitesId>;
  countWebsites!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "alias_UNIQUE"
    },
    password_hash: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    google_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    admin: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    token: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: "alias_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alias" },
        ]
      },
    ]
  });
  }
}
