const { model, Schema} = require('mongoose');

const boardSchema = new Schema({
    boardName: String,
    createdAt: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('Board', boardSchema);