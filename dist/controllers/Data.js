"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("../models/Data");
const csv = require('csv-parser');
const fs = require('fs');
const csvparse = () => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream('netflix_titles.csv')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('error', (err) => reject(err))
            .on('end', () => resolve(results));
    });
};
exports.postData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Data_1.Data.find({})
        .then((data) => __awaiter(void 0, void 0, void 0, function* () {
        if (data.length > 0) {
            res.status(200).json({
                message: "Data already seeded"
            });
        }
        else {
            const results = yield csvparse();
            console.log(results);
            Data_1.Data.insertMany(results)
                .then((result) => {
                console.log(result);
                res.status(200).json({
                    message: "Data seeded successfully"
                });
            })
                .catch((err) => {
                res.status(400).json({
                    message: "Error seeding data"
                });
                console.log(err);
            });
        }
    }));
});
exports.resetData = (req, res) => {
    Data_1.Data.deleteMany({})
        .then((result) => {
        res.status(200).json({
            message: "Data deleted successfully"
        });
    })
        .catch((err) => {
        res.status(400).json({
            message: "Error deleting data"
        });
        console.log(err);
    });
};
