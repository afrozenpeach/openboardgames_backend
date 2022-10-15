import type { Sequelize } from "sequelize";
import { boardgames as _boardgames } from "./boardgames";
import type { boardgamesAttributes, boardgamesCreationAttributes } from "./boardgames";
import { boardgames_expansions as _boardgames_expansions } from "./boardgames_expansions";
import type { boardgames_expansionsAttributes, boardgames_expansionsCreationAttributes } from "./boardgames_expansions";
import { boardgames_mechanics as _boardgames_mechanics } from "./boardgames_mechanics";
import type { boardgames_mechanicsAttributes, boardgames_mechanicsCreationAttributes } from "./boardgames_mechanics";
import { boardgames_publishers as _boardgames_publishers } from "./boardgames_publishers";
import type { boardgames_publishersAttributes, boardgames_publishersCreationAttributes } from "./boardgames_publishers";
import { boardgames_reimplementations as _boardgames_reimplementations } from "./boardgames_reimplementations";
import type { boardgames_reimplementationsAttributes, boardgames_reimplementationsCreationAttributes } from "./boardgames_reimplementations";
import { credits as _credits } from "./credits";
import type { creditsAttributes, creditsCreationAttributes } from "./credits";
import { friends as _friends } from "./friends";
import type { friendsAttributes, friendsCreationAttributes } from "./friends";
import { mechanics as _mechanics } from "./mechanics";
import type { mechanicsAttributes, mechanicsCreationAttributes } from "./mechanics";
import { online_implementations as _online_implementations } from "./online_implementations";
import type { online_implementationsAttributes, online_implementationsCreationAttributes } from "./online_implementations";
import { people as _people } from "./people";
import type { peopleAttributes, peopleCreationAttributes } from "./people";
import { photo_tags as _photo_tags } from "./photo_tags";
import type { photo_tagsAttributes, photo_tagsCreationAttributes } from "./photo_tags";
import { photos as _photos } from "./photos";
import type { photosAttributes, photosCreationAttributes } from "./photos";
import { platforms as _platforms } from "./platforms";
import type { platformsAttributes, platformsCreationAttributes } from "./platforms";
import { players as _players } from "./players";
import type { playersAttributes, playersCreationAttributes } from "./players";
import { plays as _plays } from "./plays";
import type { playsAttributes, playsCreationAttributes } from "./plays";
import { publishers as _publishers } from "./publishers";
import type { publishersAttributes, publishersCreationAttributes } from "./publishers";
import { rulebooks as _rulebooks } from "./rulebooks";
import type { rulebooksAttributes, rulebooksCreationAttributes } from "./rulebooks";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";
import { versions as _versions } from "./versions";
import type { versionsAttributes, versionsCreationAttributes } from "./versions";
import { website_types as _website_types } from "./website_types";
import type { website_typesAttributes, website_typesCreationAttributes } from "./website_types";
import { websites as _websites } from "./websites";
import type { websitesAttributes, websitesCreationAttributes } from "./websites";

export {
  _boardgames as boardgames,
  _boardgames_expansions as boardgames_expansions,
  _boardgames_mechanics as boardgames_mechanics,
  _boardgames_publishers as boardgames_publishers,
  _boardgames_reimplementations as boardgames_reimplementations,
  _credits as credits,
  _friends as friends,
  _mechanics as mechanics,
  _online_implementations as online_implementations,
  _people as people,
  _photo_tags as photo_tags,
  _photos as photos,
  _platforms as platforms,
  _players as players,
  _plays as plays,
  _publishers as publishers,
  _rulebooks as rulebooks,
  _users as users,
  _versions as versions,
  _website_types as website_types,
  _websites as websites,
};

export type {
  boardgamesAttributes,
  boardgamesCreationAttributes,
  boardgames_expansionsAttributes,
  boardgames_expansionsCreationAttributes,
  boardgames_mechanicsAttributes,
  boardgames_mechanicsCreationAttributes,
  boardgames_publishersAttributes,
  boardgames_publishersCreationAttributes,
  boardgames_reimplementationsAttributes,
  boardgames_reimplementationsCreationAttributes,
  creditsAttributes,
  creditsCreationAttributes,
  friendsAttributes,
  friendsCreationAttributes,
  mechanicsAttributes,
  mechanicsCreationAttributes,
  online_implementationsAttributes,
  online_implementationsCreationAttributes,
  peopleAttributes,
  peopleCreationAttributes,
  photo_tagsAttributes,
  photo_tagsCreationAttributes,
  photosAttributes,
  photosCreationAttributes,
  platformsAttributes,
  platformsCreationAttributes,
  playersAttributes,
  playersCreationAttributes,
  playsAttributes,
  playsCreationAttributes,
  publishersAttributes,
  publishersCreationAttributes,
  rulebooksAttributes,
  rulebooksCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
  versionsAttributes,
  versionsCreationAttributes,
  website_typesAttributes,
  website_typesCreationAttributes,
  websitesAttributes,
  websitesCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const boardgames = _boardgames.initModel(sequelize);
  const boardgames_expansions = _boardgames_expansions.initModel(sequelize);
  const boardgames_mechanics = _boardgames_mechanics.initModel(sequelize);
  const boardgames_publishers = _boardgames_publishers.initModel(sequelize);
  const boardgames_reimplementations = _boardgames_reimplementations.initModel(sequelize);
  const credits = _credits.initModel(sequelize);
  const friends = _friends.initModel(sequelize);
  const mechanics = _mechanics.initModel(sequelize);
  const online_implementations = _online_implementations.initModel(sequelize);
  const people = _people.initModel(sequelize);
  const photo_tags = _photo_tags.initModel(sequelize);
  const photos = _photos.initModel(sequelize);
  const platforms = _platforms.initModel(sequelize);
  const players = _players.initModel(sequelize);
  const plays = _plays.initModel(sequelize);
  const publishers = _publishers.initModel(sequelize);
  const rulebooks = _rulebooks.initModel(sequelize);
  const users = _users.initModel(sequelize);
  const versions = _versions.initModel(sequelize);
  const website_types = _website_types.initModel(sequelize);
  const websites = _websites.initModel(sequelize);

  boardgames_expansions.belongsTo(boardgames, { as: "boardgame_child_boardgame", foreignKey: "boardgame_child"});
  boardgames.hasMany(boardgames_expansions, { as: "boardgames_expansions", foreignKey: "boardgame_child"});
  boardgames_expansions.belongsTo(boardgames, { as: "boardgame_parent_boardgame", foreignKey: "boardgame_parent"});
  boardgames.hasMany(boardgames_expansions, { as: "boardgame_parent_boardgames_expansions", foreignKey: "boardgame_parent"});
  boardgames_mechanics.belongsTo(boardgames, { as: "boardgame_boardgame", foreignKey: "boardgame"});
  boardgames.hasMany(boardgames_mechanics, { as: "boardgames_mechanics", foreignKey: "boardgame"});
  boardgames_publishers.belongsTo(boardgames, { as: "boardgame", foreignKey: "boardgame_id"});
  boardgames.hasMany(boardgames_publishers, { as: "boardgames_publishers", foreignKey: "boardgame_id"});
  boardgames_reimplementations.belongsTo(boardgames, { as: "boardgame_child_boardgame", foreignKey: "boardgame_child"});
  boardgames.hasMany(boardgames_reimplementations, { as: "boardgames_reimplementations", foreignKey: "boardgame_child"});
  boardgames_reimplementations.belongsTo(boardgames, { as: "boardgame_parent_boardgame", foreignKey: "boardgame_parent"});
  boardgames.hasMany(boardgames_reimplementations, { as: "boardgame_parent_boardgames_reimplementations", foreignKey: "boardgame_parent"});
  credits.belongsTo(boardgames, { as: "boardgame_boardgame", foreignKey: "boardgame"});
  boardgames.hasMany(credits, { as: "credits", foreignKey: "boardgame"});
  online_implementations.belongsTo(boardgames, { as: "boardgame_boardgame", foreignKey: "boardgame"});
  boardgames.hasMany(online_implementations, { as: "online_implementations", foreignKey: "boardgame"});
  photos.belongsTo(boardgames, { as: "boardgame_boardgame", foreignKey: "boardgame"});
  boardgames.hasMany(photos, { as: "photos", foreignKey: "boardgame"});
  plays.belongsTo(boardgames, { as: "boardgame_boardgame", foreignKey: "boardgame"});
  boardgames.hasMany(plays, { as: "plays", foreignKey: "boardgame"});
  versions.belongsTo(boardgames, { as: "boardgame_boardgame", foreignKey: "boardgame"});
  boardgames.hasMany(versions, { as: "versions", foreignKey: "boardgame"});
  websites.belongsTo(boardgames, { as: "boardgame_boardgame", foreignKey: "boardgame"});
  boardgames.hasMany(websites, { as: "websites", foreignKey: "boardgame"});
  boardgames_mechanics.belongsTo(mechanics, { as: "mechanic_mechanic", foreignKey: "mechanic"});
  mechanics.hasMany(boardgames_mechanics, { as: "boardgames_mechanics", foreignKey: "mechanic"});
  credits.belongsTo(people, { as: "person_person", foreignKey: "person"});
  people.hasMany(credits, { as: "credits", foreignKey: "person"});
  websites.belongsTo(people, { as: "person_person", foreignKey: "person"});
  people.hasMany(websites, { as: "websites", foreignKey: "person"});
  photo_tags.belongsTo(photos, { as: "photo_photo", foreignKey: "photo"});
  photos.hasMany(photo_tags, { as: "photo_tags", foreignKey: "photo"});
  online_implementations.belongsTo(platforms, { as: "platform_platform", foreignKey: "platform"});
  platforms.hasMany(online_implementations, { as: "online_implementations", foreignKey: "platform"});
  players.belongsTo(plays, { as: "play_play", foreignKey: "play"});
  plays.hasMany(players, { as: "players", foreignKey: "play"});
  boardgames_publishers.belongsTo(publishers, { as: "publisher", foreignKey: "publisher_id"});
  publishers.hasMany(boardgames_publishers, { as: "boardgames_publishers", foreignKey: "publisher_id"});
  websites.belongsTo(publishers, { as: "publisher_publisher", foreignKey: "publisher"});
  publishers.hasMany(websites, { as: "websites", foreignKey: "publisher"});
  friends.belongsTo(users, { as: "user_id_1_user", foreignKey: "user_id_1"});
  users.hasMany(friends, { as: "friends", foreignKey: "user_id_1"});
  friends.belongsTo(users, { as: "user_id_2_user", foreignKey: "user_id_2"});
  users.hasMany(friends, { as: "user_id_2_friends", foreignKey: "user_id_2"});
  photo_tags.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(photo_tags, { as: "photo_tags", foreignKey: "user_id"});
  photos.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(photos, { as: "photos", foreignKey: "user_id"});
  players.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(players, { as: "players", foreignKey: "user_id"});
  plays.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(plays, { as: "plays", foreignKey: "user_id"});
  websites.belongsTo(users, { as: "user_user", foreignKey: "user"});
  users.hasMany(websites, { as: "websites", foreignKey: "user"});

  return {
    boardgames: boardgames,
    boardgames_expansions: boardgames_expansions,
    boardgames_mechanics: boardgames_mechanics,
    boardgames_publishers: boardgames_publishers,
    boardgames_reimplementations: boardgames_reimplementations,
    credits: credits,
    friends: friends,
    mechanics: mechanics,
    online_implementations: online_implementations,
    people: people,
    photo_tags: photo_tags,
    photos: photos,
    platforms: platforms,
    players: players,
    plays: plays,
    publishers: publishers,
    rulebooks: rulebooks,
    users: users,
    versions: versions,
    website_types: website_types,
    websites: websites,
  };
}
