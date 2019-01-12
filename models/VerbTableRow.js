const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  "os_production",
  "Webapp_prod",
  "bYR#HxAtAXu*iYt:evVqkV%u",
  {
    host: "35.237.208.158",
    dialect: "mysql",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const VerbTableRow = sequelize.define(
  "verbs",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    infinitive: {
      type: Sequelize.STRING
    },
    translation: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.INTEGER
    },
    present_fs: {
      type: Sequelize.STRING
    },
    present_ss: {
      type: Sequelize.STRING
    },
    present_ts: {
      type: Sequelize.STRING
    },
    present_fp: {
      type: Sequelize.STRING
    },
    present_sp: {
      type: Sequelize.STRING
    },
    present_tp: {
      type: Sequelize.STRING
    },
    present_p: {
      type: Sequelize.STRING
    },
    past_fs: {
      type: Sequelize.STRING
    },
    past_ss: {
      type: Sequelize.STRING
    },
    past_ts: {
      type: Sequelize.STRING
    },
    past_fp: {
      type: Sequelize.STRING
    },
    past_sp: {
      type: Sequelize.STRING
    },
    past_tp: {
      type: Sequelize.STRING
    },
    past_p: {
      type: Sequelize.STRING
    },
    cond_fs: {
      type: Sequelize.STRING
    },
    cond_ss: {
      type: Sequelize.STRING
    },
    cond_ts: {
      type: Sequelize.STRING
    },
    cond_fp: {
      type: Sequelize.STRING
    },
    cond_sp: {
      type: Sequelize.STRING
    },
    cond_tp: {
      type: Sequelize.STRING
    },
    cond_p: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = VerbTableRow;
