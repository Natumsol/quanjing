/**
 * Created by LiuJ on 2015/8/6.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    article: {
        type: Schema.ObjectId,
        ref: 'Article'
    },
    comment: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Email地址不合法！"]
    },
    name: {
        type: String,
        unique: true,
        required: '昵称不能为空！',
        trim: true
    },
    ip:String,
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('Comment', UserSchema);