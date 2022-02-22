// module that will define all routes associated with contacts
/* In this file you will define all the routes for your api.
You will need to define the following routes:
1) /api/v1/contacts
  This route will need to respond to 3 requests:
  1) GET: it will respond with the serialized form of all the
  contacts in your application and a response code of 200
  /api/v1/contacts?firstName=foo&lastName=bar
  2) GET: It will return all of the contacts that match the query paramaters
  you pass. If none of them match you should respond with an empty array. If more than
  one query parameter is passed, the resources that match need to match all of the 
  conditions, e.g. if you are passing values for both the firstName and lastName then
  your matches need to match both query parameters. Note: query params end at the end of the route,
  and all come after the ? character and are combined with a &.
  3) POST: it will respond to a POST request that will generate a 
  new instance of a contact and add it to the database.
  Your server should respond with a 201 status code and a message saying "successfully added contact".
2) /api/v1/contacts/:id
  This route will need to responde to 3 requests:
  1) GET: it will respond with the serialized form of the requested
  resource and a response code of 200. You will receive the :id from 
  the req.params.id property. If the resource (contact) is not found in your "database",
  then you should respond with a http status code of 404 and a message saying
  "the resource was not found" as json.
  /api/v1/contacts/:id
  3) PUT: it will update the resource with the information attached in
  the req.body property.   
  Your route should respond with a 201 response code along with the updated
  resource otherwise 404 with an error message of "unable to update resource".
  4) DELETE: it will remove the contact from the collection with the matching id 
  in the request.params object and respond with a status code of 201 along with 
  the deleted resource in the response. If the resource is not found the route should
  respond with a 404 error and message "resource not found".  

  Hint: when sending your response you should follow the following examples:
  res.status(404).json({error: 'Contact not found'})  
  res.status(200).json(contacts)
  res.status(201).json(data)  
  */


var express = require('express');
var contactsRouter = express.Router();
var Contact = require('../../../models/contact');
var contact_controller = require('../../../controllers/contactsController')


contactsRouter.route('/')
  .get(contact_controller.contact_list)
  .post(contact_controller.contact_create)
  .delete(contact_controller.contact_delete)

contactsRouter.route('/:id')
  .get(contact_controller.contact_getid)
  .put(contact_controller.contact_update)
  .delete(contact_controller.contact_deleteid)


  module.exports = contactsRouter;