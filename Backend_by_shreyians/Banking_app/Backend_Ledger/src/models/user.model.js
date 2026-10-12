const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userschema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is mandatory'],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid Email'],
      unique: [true, 'Email already exists'],
    },

    name: {
      type: String,
      required: [true, 'Name cannot be left empty'],
    },

    password: {
      type: String,
      required: [true, 'Password is expected'],
      minlength: [6, 'Password should be minimum 6 characters'],
      select: false,
      // jab tak explicitly query na ho password ki tab tak mat bhejna
    },
  },
  {
    timestamps: true,
  }
);

// middleware used
userschema.pre('save', async function (next) {
  // hashing user password.
  // using bcrypt js
  if (!this.isModified('password')) {
    return next();
  }
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  return;
});
userschema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
  // checks both are matching or not in form of hashing only.
};

const userModel = mongoose.model('user', userschema);

module.exports = userModel;

