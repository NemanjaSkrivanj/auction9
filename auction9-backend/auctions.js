"use strict";

const mysql = require('./db-config').db;

module.exports.getAuctions = async (event) => {
    return 'get multiple auctions works';
};

module.exports.getAuction = async (event) => {
    return 'get one auction works';
};

module.exports.createAuction = async (event) => {
    return 'creating auction works';
};

module.exports.updateAuction = async (event) => {
    return 'updating auction works';
};

module.exports.deleteAuction = async (event) => {
    return 'deleting auction works';
};