const { model, Schema} = require('mongoose');

const taskSchema = new Schema({
    body: String,
    username: String,
    createdAt: String,
    updatedAt: String,
    board: {
        type: Schema.Types.ObjectId,
        ref: 'boards'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

module.exports = model('Task', taskSchema)