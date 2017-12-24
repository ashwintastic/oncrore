import mongoose, { Schema } from 'mongoose';

const AuthProviderSchema = new Schema({
    type: String,
    uid: String
});

const AuthProvider = mongoose.model('AuthProvider', AuthProviderSchema);

export default AuthProvider;