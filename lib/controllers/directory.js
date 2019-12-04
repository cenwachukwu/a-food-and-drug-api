const Meddirectories = require("../models/directory")


module.exports = {
    homepage: (req, res) => {
        console.log(req.params);
        Meddirectories.find({})
            .then(directory => {
                res.json(directory)
            })
            .catch(err => res.status(400).json("Error: " + err));
    },

    showProfile: (req, res) => {
        Meddirectories.find({ profile: { $elemMatch: { last_name: req.params.lastname } } })
            .then(directory => {
                res.json(directory)
            })
            .catch(err => res.status(400).json("Error: " + err));
    },

    showSpecialties: (req, res) => {
        Meddirectories.find({ specialties: { $elemMatch: { name: req.params.name } } })
            .then(directory => {
                res.json(directory)
            })
            .catch(err => res.status(400).json("Error: " + err));
    },

    showInsurance: (req, res) => {
        Meddirectories.find({ insurances: { $elemMatch: { type: req.params.uid } } })
            .then(directory => {
                res.json(directory)
            })
            .catch(err => res.status(400).json("Error: " + err));
    },

    create: (req, res) => {
        Meddirectories.create(req.body)
            .then(directory => {
                res.json(directory)
            })
            .catch(err => res.status(400).json("Error: " + err));
    },

    update: (req, res) => {
        Meddirectories.findOneAndUpdate({ _id: req.params.id }, 
            req.body, 
            {new: true})
            .then(directory => {
                res.json(directory)
            })
        .catch(err => res.status(400).json('Error: ' + err));
    },

    delete: (req, res) => {
        Meddirectories.findByIdAndDelete({ _id: req.params.id })
            .then(() => res.json('Profile deleted.'))
            .catch(err => res.status(400).json("Error: " + err));
    }
}



