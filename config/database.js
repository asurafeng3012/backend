import sequelize, {Sequelize} from "sequelize";

const db = new Sequelize("haliru-db", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {timestamps: false}
});

export default db;