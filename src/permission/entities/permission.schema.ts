import * as mongoose from 'mongoose';
import defaultFilds from '../../@defaultFieldMongoose/default.schemas';

export const PermissionSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    screen: { type: String },
    idCompany: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    ...defaultFilds
}, { timestamps: true , collection: 'Permission'});