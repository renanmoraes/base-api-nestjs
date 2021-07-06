import * as mongoose from 'mongoose';
import defaultFilds from '../../@defaultFieldMongoose/default.schemas';

export const GroupSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    description: { type: String },
    password: { type: String, required: true },
    permissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Permission',
            required: false
        }
    ],
    idCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    ...defaultFilds
}, { timestamps: true , collection: 'Group'});