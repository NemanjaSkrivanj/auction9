"use strict";

const mysql = require('./db-config').db;

module.exports.getBid = async (event) => {
    let id = event.pathParameters.id;
    let bid = await mysql.query(`SELECT * FROM bids WHERE bid_id = ${id}`)
    return bid;
  }
  module.exports.getBids = async (event) => {
    // return "getting multiple bids works";
    let bids = await mysql.query('SELECT * FROM bids');
    return bids;
  }
  module.exports.createBid = async (event) => {
    return "creating bid works";
  }
  module.exports.deleteBid = async (event) => {
    return "deleting bid works";
  }