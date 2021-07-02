import * as mongoose from 'mongoose';
import defaultFilds from '../../@defaultFieldMongoose/default.schemas';

export const UserSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    groups: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Group',
            required: false
        }
    ],
    sign: { type: String },
    type: { type: String },
    ...defaultFilds
}, { timestamps: true , collection: 'User'});