const { text} = require("express");
const { type } = require("express/lib/response");
const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const inventarioSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        maxLength:100
    },
    unidades:{
        type:Number,
        min:0,
        default:0
    },
    fabricante:{
        type:String,
        required:true,
        maxLength:100

    }
})

module.exports = mongoose.model("Inventario",inventarioSchema)