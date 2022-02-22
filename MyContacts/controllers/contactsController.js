//contactsController.js
var Contact = require('../models/contact');

exports.contact_update = function (req,res) {
    Contact.findById( req.params.id, (err, contact) => {
      if (err || contact == null){
        res.status(404).json({error: 'unable to update resource'})
      } else {
        contact.firstName = req.body.firstName;
        contact.lastName = req.body.lastName;
        contact.phoneNumber = req.body.phoneNumber;
        contact.email = req.body.email;
        contact.save()
        res.status(201).json(contact);
      }
     }) 
  };
exports.contact_deleteid = function(req,res) {
    Contact.findById( req.params.id, (err, contact) => {
      if(err || contact == null){
        res.status(404).json({error: 'resource not found'})
      } else {
        contact.remove(err => {
          if(err){
            res.status(404).json({error: 'resource not removed'}) 
          }
          else{
            res.status(201).json(contact);
          }
      })
      }
    })
  };

exports.contact_getid = function(req, res) {
    Contact.findById( req.params.id, (err, contact) => {
     if (err || contact == null){
      res.status(404).json({error: 'the resource was not found'})
     } else {
      res.status(200).json(contact)
     }
    }) 
};

exports.contact_create = function (req,res) {
    let ncontact = new Contact({
      firstName : null,
	    lastName : null,
      phoneNumber : null,
      email : null,
    })
    ncontact.save()
    res.status(201).json({message: 'successfully added contact'});
};
exports.contact_delete = function(req,res) {
    Contact.remove({}, function(err,removed) {
    });
    Contact.find({}, (err, contacts) => {
      res.status(200).json(contacts)
    })
};

exports.contact_list = function(req, res) {
    let fName = req.query.firstName
    let lName = req.query.lastName
    let pN = req.query.phoneNumber;
    let eM = req.query.email;
    if (fName == undefined && lName == undefined && pN == undefined && eM == undefined){
      Contact.find({}, (err, contacts) => {
        res.status(200).json(contacts)
      })
    } else {

        Contact.find({}, (err, contacts) => {
            let ans = contacts
            for (const key in req.query) {
                ans = ans.filter(x => x[key] == req.query[key])
            }
            res.status(200).json(ans)
        })     
        
    }
    
};