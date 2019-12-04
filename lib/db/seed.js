const fs = require('fs')
const axios = require('axios');
const api_key = '517d3e82190e89e6ed1e578fc6cc7d8c';
const url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=0&limit=200&user_key=' + api_key;
const Meddirectmodel = require("../models/directory")

axios.get(url)
    .then(res => {
        let Data = res.data.data
        const MedDirectorry = Data.map(item => {
            const directory = {};
            directory.profile = item.profile;
            directory.educations = item.educations;
            directory.licenses = item.licenses;
            directory.specialties = item.specialties;
            directory.practices = item.practices;
            directory.insurances = item.insurances;
            return directory
        })
        Meddirectmodel.remove({})
            .then(() => {
                Meddirectmodel.create(MedDirectorry)
                    .then(item => {
                        console.log(item)
                        process.exit()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    })
