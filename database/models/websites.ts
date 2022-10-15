import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';
import type { people, peopleId } from './people';
import type { publishers, publishersId } from './publishers';
import type { users, usersId } from './users';

export interface websitesAttributes {
  id: number;
  name?: string;
  url: string;
  boardgame?: number;
  publisher?: number;
  user?: number;
  person?: number;
  type?: number;
}

export type websitesPk = "id";
export type websitesId = websites[websitesPk];
export type websitesOptionalAttributes = "id" | "name" | "boardgame" | "publisher" | "user" | "person" | "type";
export type websitesCreationAttributes = Optional<websitesAttributes, websitesOptionalAttributes>;

export class websites extends Model<websitesAttributes, websitesCreationAttributes> implements websitesAttributes {
  id!: number;
  name?: string;
  url!: string;
  boardgame?: number;
  publisher?: number;
  user?: number;
  person?: number;
  type?: number;

  // websites belongsTo boardgames via boardgame
  boardgame_boardgame!: boardgames;
  getBoardgame_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // websites belongsTo people via person
  person_person!: people;
  getPerson_person!: Sequelize.BelongsToGetAssociationMixin<people>;
  setPerson_person!: Sequelize.BelongsToSetAssociationMixin<people, peopleId>;
  createPerson_person!: Sequelize.BelongsToCreateAssociationMixin<people>;
  // websites belongsTo publishers via publisher
  publisher_publisher!: publishers;
  getPublisher_publisher!: Sequelize.BelongsToGetAssociationMixin<publishers>;
  setPublisher_publisher!: Sequelize.BelongsToSetAssociationMixin<publishers, publishersId>;
  createPublisher_publisher!: Sequelize.BelongsToCreateAssociationMixin<publishers>;
  // websites belongsTo users via user
  user_user!: users;
  getUser_user!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser_user!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser_user!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof websites {
    return websites.init({
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    boardgame: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    },
    publisher: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'publishers',
        key: 'id'
      }
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    person: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'people',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'websites',
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
        name: "webite_boardgame_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame" },
        ]
      },
      {
        name: "website_person_idx",
        using: "BTREE",
        fields: [
          { name: "person" },
        ]
      },
      {
        name: "website_user_idx",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
      {
        name: "website_publisher_idx",
        using: "BTREE",
        fields: [
          { name: "publisher" },
        ]
      },
    ]
  });
  }
}
