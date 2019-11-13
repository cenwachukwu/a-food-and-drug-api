const mongoose = require ("../db/connection");
const Schema = mongoose.Schema;
const Meddirectory = new Schema({
    profile:[
        new Schema({
            first_name: String,
            middle_name: String,
            last_name: String,
            title: String,
            gender: String,
            bio: String,
            image_url: String
        })
    ],
    educations:[
        new Schema({
            school: String,
            degree: String
        })
    ],
    licenses:[
        new Schema({
            state: String,
            number: String
        })
    ],
    specialties:[
        new Schema({
            actor: String,
            name: String,
            description: String
        })
    ],
    practices:[
        new Schema({
            name: String,
            website: String,
            accepts_new_patients: Boolean,
            visit_address:[
                new Schema({
                    street: String,
                    city: String,
                    state: String,
                    zip: Number
                })
            ],
            phones:[
                new Schema({
                    number: Number,
                    type: String
                })
            ],
            languages:[
                new Schema({
                    name: String,
                })
            ]
        })
    ],
    insurances:[
        new Schema({
            insurance_plan:[
                new Schema({
                    uid: String,
                    name: String,
                    category: Array
                })
            ]
        })
        
    ],

})
module.exports = mongoose.model("Meddirectory", Meddirectory)

