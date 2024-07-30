const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const updateSchema = new Schema({
    version:{type:Schema.Types.String,required:true},
    force:{type:Schema.Types.Boolean,required:true},
});


module.exports = mongoose.model('update',updateSchema);