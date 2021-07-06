import * as mongoose from 'mongoose';
import defaultFilds from '../../@defaultFieldMongoose/default.schemas';

export const CompanySchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    contract: { type: String, unique: true, required: true },
    ...defaultFilds
}, { timestamps: true , collection: 'Company'});