import { Data } from "../models/Data";

exports.filterAndSort = (req:any, res:any) => {
    const query = {
        type: req.query.type,
        search: req.query.search,
        release: {
            min: req.query.release_min || 1900,
            max: req.query.release_max || 2022
        },
        date_added: {
            min: req.query.date_added_min || new Date(1900, 1, 1),
            max: req.query.date_added_max || new Date(2023, 2, 26)
        },
        rating: req.query.rating,
        sort: req.query.sort || 'release_year'
    }

    Data.find({
        $and: [
            {$or:[
                query.search ? { title: { $regex: query.search, $options: 'i' } } : {},
                query.search ? { director: { $regex: query.search, $options: 'i' } } : {},
                query.search ? { cast: { $regex: query.search, $options: 'i' } } : {},
            ]},
            query.type ? { type: query.type } : {},
            { release_year: { $gte: query.release.min, $lte: query.release.max } },
            { date_added: { $gte: query.date_added.min, $lte: query.date_added.max } },
            query.rating ? { rating: query.rating } : {},
        ],
    })
        .sort({ [query.sort]: 1 })
        .then((data:any) => {
            if (data.length > 0) {
                res.status(200).json({
                    data: data
                })
            } else {
                res.status(200).json({
                    message: "No data found"
                })
            }
            console.log(data.length);
        }
        )
        .catch((err:any) => {
            res.status(400).json({
                message: "Error fetching data"
            })
            console.log(err);
        }
    )
}