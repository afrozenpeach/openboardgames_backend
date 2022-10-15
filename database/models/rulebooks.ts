import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface rulebooksAttributes {
  id: number;
}

export type rulebooksPk = "id";
export type rulebooksId = rulebooks[rulebooksPk];
export type rulebooksOptionalAttributes = "id";
export type rulebooksCreationAttributes = Optional<rulebooksAttributes, rulebooksOptionalAttributes>;

export class rulebooks extends Model<rulebooksAttributes, rulebooksCreationAttributes> implements rulebooksAttributes {
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof rulebooks {
    return rulebooks.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'rulebooks',
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
