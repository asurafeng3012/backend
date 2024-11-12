import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Team = db.define("plbigsix", {
    teamName: {type:DataTypes.STRING},
    yearCreated: {type:DataTypes.INTEGER},
    lastTrophy: {type:DataTypes.STRING},
    teamHonors: {type:DataTypes.INTEGER}
}, {freezeTableName: true});

export default Team;