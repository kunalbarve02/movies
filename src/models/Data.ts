import mongoose from 'mongoose';

export interface IData extends mongoose.Document {
    show_id: string;
    type: 'TV Show' | 'Movie';
    title: string;
    director?: string;
    cast?: string;
    country?: string;
    date_added?: Date;
    release_year?: number;
    rating?: string;
    duration?: string;
    listed_in?: string;
    description?: string;
}

const DataSchema = new mongoose.Schema({
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
})

DataSchema.index({ name: 'text', director: 'text', cast: 'text' });

export const Data = mongoose.model<IData>('Data', DataSchema);
