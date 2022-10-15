import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { boardgames, boardgamesId } from './boardgames';
import type { people, peopleId } from './people';

export interface creditsAttributes {
  id: number;
  person: number;
  boardgame: number;
  credit: string;
}

export type creditsPk = "id";
export type creditsId = credits[creditsPk];
export type creditsOptionalAttributes = "id";
export type creditsCreationAttributes = Optional<creditsAttributes, creditsOptionalAttributes>;

export class credits extends Model<creditsAttributes, creditsCreationAttributes> implements creditsAttributes {
  id!: number;
  person!: number;
  boardgame!: number;
  credit!: string;

  // credits belongsTo boardgames via boardgame
  boardgame_boardgame!: boardgames;
  getBoardgame_boardgame!: Sequelize.BelongsToGetAssociationMixin<boardgames>;
  setBoardgame_boardgame!: Sequelize.BelongsToSetAssociationMixin<boardgames, boardgamesId>;
  createBoardgame_boardgame!: Sequelize.BelongsToCreateAssociationMixin<boardgames>;
  // credits belongsTo people via person
  person_person!: people;
  getPerson_person!: Sequelize.BelongsToGetAssociationMixin<people>;
  setPerson_person!: Sequelize.BelongsToSetAssociationMixin<people, peopleId>;
  createPerson_person!: Sequelize.BelongsToCreateAssociationMixin<people>;

  static initModel(sequelize: Sequelize.Sequelize): typeof credits {
    return credits.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    person: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'people',
        key: 'id'
      }
    },
    boardgame: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'boardgames',
        key: 'id'
      }
    },
    credit: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'credits',
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
        name: "designers_to_people_idx",
        using: "BTREE",
        fields: [
          { name: "person" },
        ]
      },
      {
        name: "designers_to_boardgames_idx",
        using: "BTREE",
        fields: [
          { name: "boardgame" },
        ]
      },
    ]
  });
  }
}
