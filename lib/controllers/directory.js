const Meddirectories = require("../models/directory")


module.exports = {
    homepage: (req, res) => {
        console.log(req.params);
        Meddirectories.find({})
            .then(Meddirectory => {
                res.json(Meddirectory)
            })
    },
    showProfile: (req, res) => {
        console.log(req.params.name)
        Meddirectories.find({ profile: { $elemMatch: { first_name: req.params.name } } })
            .then(Meddirectory => {
                res.json(Meddirectory)
            })
    },
    showSpecialties: (req, res) => {
        Meddirectories.find({ specialties: { $elemMatch: { name: req.params.name } } })
            .then(Meddirectory => {
                res.json(Meddirectory)
            })
    },
    showInsurance: (req, res) => {
        Meddirectories.find({ insurances: { $elemMatch: { type: req.params.uid } } })
            .then(Meddirectory => {
                res.json(Meddirectory)
            })
    },
    create: (req, res) => {
        Meddirectories.create(req.body)
            .then(Meddirectory => {
                res.json(Meddirectory)
            })
    },
    edit: (req, res) => {
        Meddirectories.findOne(({ profile: { $elemMatch: { first_name: req.params.name } } }), req.body,
            { $set: req.body })
            .then(() => res.json('Profile Updated.'))
            .catch(err => console.log(err));
    },
    update: (req, res) => {
        Meddirectories.findById({ _id: req.params.id })
            .then(user => {
                user.profile.first_name = { profile: { $elemMatch: { $eq: req.body.first_name } } };
                user.profile.last_name = { profile: { $elemMatch: { $eq: req.body.first_name } } };
                user.save()
                    .then(() => res.json('Exercise updated!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
        .catch(err => res.status(400).json('Error: ' + err));
    },

    delete: (req, res) => {
        Meddirectories.findByIdAndDelete({ _id: req.params.id })
            .then(() => res.json('Profile deleted.'))
            .catch(err => console.log(err));
    }
}


