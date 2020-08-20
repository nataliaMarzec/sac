"use strict";
const { Sequelize, Op, Model } = require("sequelize");
// const { default: ChoferForm } = require('../../frontend/src/views/Transporte/ChoferForm.js');

module.exports = function (sequelize, DataTypes) {
  const Chofer = sequelize.define(
    "Chofer",
    {
      // id:{
      //     type:Sequelize.INTEGER,
      //  	autoIncrement: true,
      // 	primaryKey: true

      // },
      nombre: {
        type: Sequelize.STRING(35),
        allowNull: true,
      },
      dni: {
        type: Sequelize.STRING(35),
        allowNull: true,
      },
    //   viajando: {
    //     type: Sequelize.STRING("No"),
    //     allowNull: true,
    //   },
    },

    {
      timestamps: false,
      freezeTableName: true,
      tableName: "Choferes",
      modelName: "Chofer",
    }
  );

  console.log("SOY Choger:", Chofer === sequelize.models.Chofer);

  return Chofer;
};
