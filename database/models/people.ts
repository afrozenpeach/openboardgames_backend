import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { credits, creditsId } from './credits';
import type { websites, websitesId } from './websites';

export interface peopleAttributes {
  id: number;
  name: string;
  profile?: string;
  user_id?: number;
}

export type peoplePk = "id";
export type peopleId = people[peoplePk];
export type peopleOptionalAttributes = "id" | "profile" | "user_id";
export type peopleCreationAttributes = Optional<peopleAttributes, peopleOptionalAttributes>;

export class people extends Model<peopleAttributes, peopleCreationAttributes> implements peopleAttributes {
  id!: number;
  name!: string;
  profile?: string;
  user_id?: number;

  // people hasMany credits via person
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
  // people hasMany websites via person
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

  static initModel(sequelize: Sequelize.Sequelize): typeof people {
    return people.init({
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
    profile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "userid_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'people',
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
        name: "userid_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
  }
}
