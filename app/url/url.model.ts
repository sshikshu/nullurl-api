import * as mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    long: {
        required: true,
        type: String
    },
    name: {
        type: String
    },
    owner: {
        required: true,
        type: String
    },
    tags: {
        type: [String]
    }
});

export const urlModel = mongoose.model('url', urlSchema);
