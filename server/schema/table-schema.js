import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const TableSchema = mongoose.Schema({
    Table_No: {type: Number, required: true},
    Seating_Capacity: {type: Number, required: true},
    Description: {type: String, required: true},
    QR_Url : {type: Object, required: true, unique: true},
})

// TableSchema.path('QR_Url').validate((val) => {
//     urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
//     return urlRegex.test(val);
// }, 'Invalid URL.');

autoIncrement.initialize(mongoose.connection);
TableSchema.plugin(autoIncrement.plugin, 'table')

const table = mongoose.model('tables', TableSchema);

export default table;