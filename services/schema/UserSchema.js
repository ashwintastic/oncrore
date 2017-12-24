import mongoose, { Schema } from 'mongoose';
//import AuthProvider from './authProvider';


const AuthProvider = new Schema({
    type: String,
    uid: String
});


const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String , required: true},
    email: { type: String },
    accounts: [AuthProvider]
});

const User = mongoose.model('User', UserSchema);

export default User;