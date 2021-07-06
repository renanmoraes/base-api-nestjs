import * as mongoose from "mongoose";

export default {
    status: {
        type: Boolean,
        default: true
    },
    userCreated: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    userLastUpdated: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}