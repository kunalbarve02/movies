"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DataSchema = new mongoose_1.default.Schema({
    show_id: {
        type: String,
    },
    type: {
        type: String,
        enum: ['TV Show', 'Movie']
    },
    title: {
        type: String,
    },
    director: {
        type: String,
    },
    cast: {
        type: String,
    },
    country: {
        type: String,
    },
    date_added: {
        type: Date,
    },
    release_year: {
        type: Number,
    },
    rating: {
        type: String,
    },
    duration: {
        type: String,
    },
    listed_in: {
        type: String,
    },
    description: {
        type: String,
    },
});
DataSchema.index({ name: 'text', director: 'text', cast: 'text' });
exports.Data = mongoose_1.default.model('Data', DataSchema);
