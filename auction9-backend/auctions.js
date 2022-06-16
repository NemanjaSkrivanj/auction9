"use strict";

const mysql = require('./db-config').db;

module.exports.getAuctions = async (event) => {
    let auctions = await mysql.query("SELECT * FROM auctions");
    return auctions;
};

module.exports.getAuction = async (event) => {
    let id = event.pathParameters.id;
    let auction = await mysql.query(`SELECT * FROM auctions WHERE auction_id = ${id}`);
    return auction;
};

module.exports.createAuction = async (event) => {
    let { name, description, image, start_date, end_date, starting_price } = JSON.parse(event.body);
    let user_id = 1;
    let status = "ACTIVE"
    console.log(name, description, image, start_date, end_date, starting_price);
    let createAuction = await mysql.query(`INSERT INTO auctions (name, description, image, start_date, end_date, starting_price, status, user_id)
     VALUES (?)`, [name, description, image, start_date, end_date, starting_price, status, user_id]);
    return createAuction;
};

module.exports.updateAuction = async (event) => {
    return 'updating auction works';
};

module.exports.deleteAuction = async (event) => {
    return 'deleting auction works';
};