import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames_publishers, boardgames_publishersId } from './boardgames_publishers';
import type { websites, websitesId } from './websites';

export interface publishersAttributes {
  id: number;
  name: string;
  country: string;
  description?: string;
  story?: string;
}

export type publishersPk = "id";
export type publishersId = publishers[publishersPk];
export type publishersOptionalAttributes = "id" | "description" | "story";
export type publishersCreationAttributes = Optional<publishersAttributes, publishersOptionalAttributes>;

export class publishers extends Model<publishersAttributes, publishersCreationAttributes> implements publishersAttributes {
  id!: number;
  name!: string;
  country!: string;
  description?: string;
  story?: string;

  // publishers hasMany boardgames_publishers via publisher_id
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
  // publishers hasMany websites via publisher
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

  static initModel(sequelize: Sequelize.Sequelize): typeof publishers {
    return publishers.init({
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
    country: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    story: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'publishers',
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
