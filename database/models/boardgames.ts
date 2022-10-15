import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames_expansions, boardgames_expansionsId } from './boardgames_expansions';
import type { boardgames_mechanics, boardgames_mechanicsId } from './boardgames_mechanics';
import type { boardgames_publishers, boardgames_publishersId } from './boardgames_publishers';
import type { boardgames_reimplementations, boardgames_reimplementationsId } from './boardgames_reimplementations';
import type { credits, creditsId } from './credits';
import type { online_implementations, online_implementationsId } from './online_implementations';
import type { photos, photosId } from './photos';
import type { plays, playsId } from './plays';
import type { versions, versionsId } from './versions';
import type { websites, websitesId } from './websites';

export interface boardgamesAttributes {
  id: number;
  name: string;
  tagline?: string;
  release_year?: any;
  release_month?: number;
  min_player?: number;
  max_player?: number;
  thematic_description?: string;
  gameplay_description?: string;
  back_of_the_box_description?: string;
  min_age?: number;
  rank?: number;
}

export type boardgamesPk = "id";
export type boardgamesId = boardgames[boardgamesPk];
export type boardgamesOptionalAttributes = "id" | "tagline" | "release_year" | "release_month" | "min_player" | "max_player" | "thematic_description" | "gameplay_description" | "back_of_the_box_description" | "min_age" | "rank";
export type boardgamesCreationAttributes = Optional<boardgamesAttributes, boardgamesOptionalAttributes>;

export class boardgames extends Model<boardgamesAttributes, boardgamesCreationAttributes> implements boardgamesAttributes {
  id!: number;
  name!: string;
  tagline?: string;
  release_year?: any;
  release_month?: number;
  min_player?: number;
  max_player?: number;
  thematic_description?: string;
  gameplay_description?: string;
  back_of_the_box_description?: string;
  min_age?: number;
  rank?: number;

  // boardgames hasMany boardgames_expansions via boardgame_child
  boardgames_expansions!: boardgames_expansions[];
  getBoardgames_expansions!: Sequelize.HasManyGetAssociationsMixin<boardgames_expansions>;
  setBoardgames_expansions!: Sequelize.HasManySetAssociationsMixin<boardgames_expansions, boardgames_expansionsId>;
  addBoardgames_expansion!: Sequelize.HasManyAddAssociationMixin<boardgames_expansions, boardgames_expansionsId>;
  addBoardgames_expansions!: Sequelize.HasManyAddAssociationsMixin<boardgames_expansions, boardgames_expansionsId>;
  createBoardgames_expansion!: Sequelize.HasManyCreateAssociationMixin<boardgames_expansions>;
  removeBoardgames_expansion!: Sequelize.HasManyRemoveAssociationMixin<boardgames_expansions, boardgames_expansionsId>;
  removeBoardgames_expansions!: Sequelize.HasManyRemoveAssociationsMixin<boardgames_expansions, boardgames_expansionsId>;
  hasBoardgames_expansion!: Sequelize.HasManyHasAssociationMixin<boardgames_expansions, boardgames_expansionsId>;
  hasBoardgames_expansions!: Sequelize.HasManyHasAssociationsMixin<boardgames_expansions, boardgames_expansionsId>;
  countBoardgames_expansions!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany boardgames_expansions via boardgame_parent
  boardgame_parent_boardgames_expansions!: boardgames_expansions[];
  getBoardgame_parent_boardgames_expansions!: Sequelize.HasManyGetAssociationsMixin<boardgames_expansions>;
  setBoardgame_parent_boardgames_expansions!: Sequelize.HasManySetAssociationsMixin<boardgames_expansions, boardgames_expansionsId>;
  addBoardgame_parent_boardgames_expansion!: Sequelize.HasManyAddAssociationMixin<boardgames_expansions, boardgames_expansionsId>;
  addBoardgame_parent_boardgames_expansions!: Sequelize.HasManyAddAssociationsMixin<boardgames_expansions, boardgames_expansionsId>;
  createBoardgame_parent_boardgames_expansion!: Sequelize.HasManyCreateAssociationMixin<boardgames_expansions>;
  removeBoardgame_parent_boardgames_expansion!: Sequelize.HasManyRemoveAssociationMixin<boardgames_expansions, boardgames_expansionsId>;
  removeBoardgame_parent_boardgames_expansions!: Sequelize.HasManyRemoveAssociationsMixin<boardgames_expansions, boardgames_expansionsId>;
  hasBoardgame_parent_boardgames_expansion!: Sequelize.HasManyHasAssociationMixin<boardgames_expansions, boardgames_expansionsId>;
  hasBoardgame_parent_boardgames_expansions!: Sequelize.HasManyHasAssociationsMixin<boardgames_expansions, boardgames_expansionsId>;
  countBoardgame_parent_boardgames_expansions!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany boardgames_mechanics via boardgame
  boardgames_mechanics!: boardgames_mechanics[];
  getBoardgames_mechanics!: Sequelize.HasManyGetAssociationsMixin<boardgames_mechanics>;
  setBoardgames_mechanics!: Sequelize.HasManySetAssociationsMixin<boardgames_mechanics, boardgames_mechanicsId>;
  addBoardgames_mechanic!: Sequelize.HasManyAddAssociationMixin<boardgames_mechanics, boardgames_mechanicsId>;
  addBoardgames_mechanics!: Sequelize.HasManyAddAssociationsMixin<boardgames_mechanics, boardgames_mechanicsId>;
  createBoardgames_mechanic!: Sequelize.HasManyCreateAssociationMixin<boardgames_mechanics>;
  removeBoardgames_mechanic!: Sequelize.HasManyRemoveAssociationMixin<boardgames_mechanics, boardgames_mechanicsId>;
  removeBoardgames_mechanics!: Sequelize.HasManyRemoveAssociationsMixin<boardgames_mechanics, boardgames_mechanicsId>;
  hasBoardgames_mechanic!: Sequelize.HasManyHasAssociationMixin<boardgames_mechanics, boardgames_mechanicsId>;
  hasBoardgames_mechanics!: Sequelize.HasManyHasAssociationsMixin<boardgames_mechanics, boardgames_mechanicsId>;
  countBoardgames_mechanics!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany boardgames_publishers via boardgame_id
  boardgames_publishers!: boardgames_publishers[];
  getBoardgames_publishers!: Sequelize.HasManyGetAssociationsMixin<boardgames_publishers>;
  setBoardgames_publishers!: Sequelize.HasManySetAssociationsMixin<boardgames_publishers, boardgames_publishersId>;
  addBoardgames_publisher!: Sequelize.HasManyAddAssociationMixin<boardgames_publishers, boardgames_publishersId>;
  addBoardgames_publishers!: Sequelize.HasManyAddAssociationsMixin<boardgames_publishers, boardgames_publishersId>;
  createBoardgames_publisher!: Sequelize.HasManyCreateAssociationMixin<boardgames_publishers>;
  removeBoardgames_publisher!: Sequelize.HasManyRemoveAssociationMixin<boardgames_publishers, boardgames_publishersId>;
  removeBoardgames_publishers!: Sequelize.HasManyRemoveAssociationsMixin<boardgames_publishers, boardgames_publishersId>;
  hasBoardgames_publisher!: Sequelize.HasManyHasAssociationMixin<boardgames_publishers, boardgames_publishersId>;
  hasBoardgames_publishers!: Sequelize.HasManyHasAssociationsMixin<boardgames_publishers, boardgames_publishersId>;
  countBoardgames_publishers!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany boardgames_reimplementations via boardgame_child
  boardgames_reimplementations!: boardgames_reimplementations[];
  getBoardgames_reimplementations!: Sequelize.HasManyGetAssociationsMixin<boardgames_reimplementations>;
  setBoardgames_reimplementations!: Sequelize.HasManySetAssociationsMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  addBoardgames_reimplementation!: Sequelize.HasManyAddAssociationMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  addBoardgames_reimplementations!: Sequelize.HasManyAddAssociationsMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  createBoardgames_reimplementation!: Sequelize.HasManyCreateAssociationMixin<boardgames_reimplementations>;
  removeBoardgames_reimplementation!: Sequelize.HasManyRemoveAssociationMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  removeBoardgames_reimplementations!: Sequelize.HasManyRemoveAssociationsMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  hasBoardgames_reimplementation!: Sequelize.HasManyHasAssociationMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  hasBoardgames_reimplementations!: Sequelize.HasManyHasAssociationsMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  countBoardgames_reimplementations!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany boardgames_reimplementations via boardgame_parent
  boardgame_parent_boardgames_reimplementations!: boardgames_reimplementations[];
  getBoardgame_parent_boardgames_reimplementations!: Sequelize.HasManyGetAssociationsMixin<boardgames_reimplementations>;
  setBoardgame_parent_boardgames_reimplementations!: Sequelize.HasManySetAssociationsMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  addBoardgame_parent_boardgames_reimplementation!: Sequelize.HasManyAddAssociationMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  addBoardgame_parent_boardgames_reimplementations!: Sequelize.HasManyAddAssociationsMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  createBoardgame_parent_boardgames_reimplementation!: Sequelize.HasManyCreateAssociationMixin<boardgames_reimplementations>;
  removeBoardgame_parent_boardgames_reimplementation!: Sequelize.HasManyRemoveAssociationMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  removeBoardgame_parent_boardgames_reimplementations!: Sequelize.HasManyRemoveAssociationsMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  hasBoardgame_parent_boardgames_reimplementation!: Sequelize.HasManyHasAssociationMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  hasBoardgame_parent_boardgames_reimplementations!: Sequelize.HasManyHasAssociationsMixin<boardgames_reimplementations, boardgames_reimplementationsId>;
  countBoardgame_parent_boardgames_reimplementations!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany credits via boardgame
  credits!: credits[];
  getCredits!: Sequelize.HasManyGetAssociationsMixin<credits>;
  setCredits!: Sequelize.HasManySetAssociationsMixin<credits, creditsId>;
  addCredit!: Sequelize.HasManyAddAssociationMixin<credits, creditsId>;
  addCredits!: Sequelize.HasManyAddAssociationsMixin<credits, creditsId>;
  createCredit!: Sequelize.HasManyCreateAssociationMixin<credits>;
  removeCredit!: Sequelize.HasManyRemoveAssociationMixin<credits, creditsId>;
  removeCredits!: Sequelize.HasManyRemoveAssociationsMixin<credits, creditsId>;
  hasCredit!: Sequelize.HasManyHasAssociationMixin<credits, creditsId>;
  hasCredits!: Sequelize.HasManyHasAssociationsMixin<credits, creditsId>;
  countCredits!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany online_implementations via boardgame
  online_implementations!: online_implementations[];
  getOnline_implementations!: Sequelize.HasManyGetAssociationsMixin<online_implementations>;
  setOnline_implementations!: Sequelize.HasManySetAssociationsMixin<online_implementations, online_implementationsId>;
  addOnline_implementation!: Sequelize.HasManyAddAssociationMixin<online_implementations, online_implementationsId>;
  addOnline_implementations!: Sequelize.HasManyAddAssociationsMixin<online_implementations, online_implementationsId>;
  createOnline_implementation!: Sequelize.HasManyCreateAssociationMixin<online_implementations>;
  removeOnline_implementation!: Sequelize.HasManyRemoveAssociationMixin<online_implementations, online_implementationsId>;
  removeOnline_implementations!: Sequelize.HasManyRemoveAssociationsMixin<online_implementations, online_implementationsId>;
  hasOnline_implementation!: Sequelize.HasManyHasAssociationMixin<online_implementations, online_implementationsId>;
  hasOnline_implementations!: Sequelize.HasManyHasAssociationsMixin<online_implementations, online_implementationsId>;
  countOnline_implementations!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany photos via boardgame
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
  // boardgames hasMany plays via boardgame
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
  // boardgames hasMany versions via boardgame
  versions!: versions[];
  getVersions!: Sequelize.HasManyGetAssociationsMixin<versions>;
  setVersions!: Sequelize.HasManySetAssociationsMixin<versions, versionsId>;
  addVersion!: Sequelize.HasManyAddAssociationMixin<versions, versionsId>;
  addVersions!: Sequelize.HasManyAddAssociationsMixin<versions, versionsId>;
  createVersion!: Sequelize.HasManyCreateAssociationMixin<versions>;
  removeVersion!: Sequelize.HasManyRemoveAssociationMixin<versions, versionsId>;
  removeVersions!: Sequelize.HasManyRemoveAssociationsMixin<versions, versionsId>;
  hasVersion!: Sequelize.HasManyHasAssociationMixin<versions, versionsId>;
  hasVersions!: Sequelize.HasManyHasAssociationsMixin<versions, versionsId>;
  countVersions!: Sequelize.HasManyCountAssociationsMixin;
  // boardgames hasMany websites via boardgame
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

  static initModel(sequelize: Sequelize.Sequelize): typeof boardgames {
    return boardgames.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tagline: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    release_year: {
      type: DataTypes.DATE,
      allowNull: true
    },
    release_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    min_player: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_player: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    thematic_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gameplay_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    back_of_the_box_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    min_age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'boardgames',
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
    ]
  });
  }
}
