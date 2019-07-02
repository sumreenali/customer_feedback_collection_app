/**
 * Defining a sub collection schema for the survey schema 
 * to store tes response status of the recipients
 */
const mongoose = require('mongoose')
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email:  String,
    responded:  {type:  Boolean, default: false }
});

/*
 * 
 * As this is the sub collection schema not the main 
 * collection we will not send this schema to the
 *  mongoose model instead we will export this schema 
 * and the n import in survey schema which is our main
 *  collection and from there we will send survey 
 * collection to the mongoose model 
 * 
 */

module.exports = recipientSchema;