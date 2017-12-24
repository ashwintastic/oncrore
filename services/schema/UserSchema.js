import mongoose, { Schema } from 'mongoose';
import AuthProvider from './authProvider';

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String , required: true},
    email: { type: String },
    accounts: [AuthProvider]
});

const User = mongoose.model('User', UserSchema);

export default User;