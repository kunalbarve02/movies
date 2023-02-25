import {Data} from '../models/Data';
const csv = require('csv-parser');
const fs = require('fs');

const csvparse = () => {
    return new Promise((resolve, reject) => {
      const results: any = [];
      fs.createReadStream('netflix_titles.csv')
        .pipe(csv())
        .on('data', (data: any) => results.push(data))
        .on('error', (err: any) => reject(err))
        .on('end', () => resolve(results));
    });
  };

exports.postData = async (req:any, res:any) => {

    Data.find({})
        .then(async(data:any) => {
            if (data.length > 0) {
                res.status(200).json({
                    message: "Data already seeded"
                })
            } else {
                const results = await csvparse();
                console.log(results);
                Data.insertMany(results)
                    .then((result:any) => {
                        console.log(result);
                        res.status(200).json({
                            message: "Data seeded successfully"
                        })
                    })
                    .catch((err:any) => {
                        res.status(400).json({
                            message: "Error seeding data"
                        })
                        console.log(err);
                    })
            }
        })
}

exports.resetData =  (req:any, res:any) => {
    Data.deleteMany({})
        .then((result:any) => {
            res.status(200).json({
                message: "Data deleted successfully"
            })
        })
        .catch((err:any) => {
            res.status(400).json({
                message: "Error deleting data"
            })
            console.log(err);
        })
}
