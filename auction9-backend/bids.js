"use strict";

const mysql = require('./db-config').db;

module.exports.getBid = async (event) => {
    return "getting one bid works";
  }
  module.exports.getBids = async (event) => {
    return "getting multiple bids works";
  }
  module.exports.createBid = async (event) => {
    return "creating bid works";
  }
  module.exports.deleteBid = async (event) => {
    return "deleting bid works";
  }