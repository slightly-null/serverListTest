"use strict";
// Import the dependency.
const sequelize = require('../../config/sequelize');
const Item = require("../../model/item");


async function  test(){
    const list = await  sequelize.models.Item.findAll();
    return list;
}


module.exports = async (req, res) => {
    const client = await test();
    res.status(200).json({client});
}

