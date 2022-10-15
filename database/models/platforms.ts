import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { online_implementations, online_implementationsId } from './online_implementations';

export interface platformsAttributes {
  id: number;
  name?: string;
  url?: string;
  description?: string;
  cost?: string;
}

export type platformsPk = "id";
export type platformsId = platforms[platformsPk];
export type platformsOptionalAttributes = "id" | "name" | "url" | "description" | "cost";
export type platformsCreationAttributes = Optional<platformsAttributes, platformsOptionalAttributes>;

export class platforms extends Model<platformsAttributes, platformsCreationAttributes> implements platformsAttributes {
  id!: number;
  name?: string;
  url?: string;
  description?: string;
  cost?: string;

  // platforms hasMany online_implementations via platform
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

  static initModel(sequelize: Sequelize.Sequelize): typeof platforms {
    return platforms.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "name_UNIQUE"
    },
    url: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "url_UNIQUE"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cost: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'platforms',
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
        name: "name_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "url_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "url" },
        ]
      },
    ]
  });
  }
}
