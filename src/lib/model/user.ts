import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
//   _id: mongoose.Schema.Types.ObjectId,
  name: String,
//   image: String,
  email: { type: String, unique: true },
  emailVerified: Date,
  hashedPassword: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  favouriteIds: [{ type: mongoose.Schema.Types.ObjectId }],
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
  accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
});

export const User = mongoose.models.User || mongoose.model('userss', userSchema);

// module.exports = User;
