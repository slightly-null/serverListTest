"use strict";
// Import the dependency.
const clientPromise = require('./mongodb-client');
// Handler
module.exports = async (req, res) => {
    const client = await clientPromise;
    res.status(200).json({dbName: client.db().databaseName});
}
