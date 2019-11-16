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
    Meddirectories.find({profile: {$elemMatch:{first_name:req.params.name}}})
      .then(Meddirectory => {
        res.json(Meddirectory)
      })
  },
  showSpecialties: (req, res) => {
    Meddirectories.find({specialties: {$elemMatch:{name:req.params.name}}})
      .then(Meddirectory => {
        res.json(Meddirectory)
      })
  },
  showInsurance: (req, res) => {
    Meddirectories.find({insurances: {$elemMatch:{type:req.params.category[0]}}})
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
    Meddirectories.findOneAndUpdate(
      {profile: {$elemMatch:{first_name:req.params.name}}}, 
      req.body,
      {$set: req.body})
      .then(Meddirectory => {
        res.json(Meddirectory)
      })
  },
  delete: (req, res) => {
    Meddirectories.findOneAndDelete({profile: {$elemMatch:{first_name:req.params.name}}})
      .then(Meddirectory => {
        res.json(Meddirectory)
      })
  }
}
