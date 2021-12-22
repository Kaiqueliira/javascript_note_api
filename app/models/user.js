const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


let userSchema = mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }
})

userSchema.pre('save', (next) => {
    if (this.isNew || this.isModified('password')) {
        bcrypt.hash(this.password, 10, (err, hashedPassword) => {
            if (err) {
                next(err)
            } else {
                this.password = hashedPassword
                next();
            }
        })
    }
})

module.exports = mongoose.model("User", userSchema)