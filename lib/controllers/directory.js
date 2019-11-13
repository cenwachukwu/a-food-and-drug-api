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
  showName: (req, res) => {
    Meddirectories.find({specialties: {$elemMatch:{name:req.params.name}}})
      .then(Meddirectory => {
        res.json(Meddirectory)
      })
  },
  create: (req, res) => {
    Meddirectories.create(req.body)
      .then(Meddirectory => {
        res.json(Meddirectory)
      })
  }
//   edit: (req, res) => {
//     Bachelor.findOneAndUpdate({
//       name: req.params.name}, 
//       req.body,
//       {$set: req.body})
//       .then(bachelor => {
//         res.json(bachelor)
//       })
//   },
//   delete: (req, res) => {
//     Bachelor.findOneAndDelete({name: req.params.name})
//       .then(bachelor => {
//         res.json(bachelor)
//       })
//   }
}
