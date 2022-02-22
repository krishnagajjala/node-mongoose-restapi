//help.js


module.exports = (args) => {
    console.log()
    console.log("help command: displays helpful information on how to use commands")
    console.log()
    console.log("GET command : say node ./bin/contactsclient GET with zero or 1 parameter. The 1 parameter will either be search parameters entered in quotes joined by &'s, or an id of the contact you want.")
    console.log("For example enter: node ./bin/contactsclient GET \"firstName=bob&lastName=jill\" or node ./bin/contactsclient GET 61ec6de1a2e99b62903c2c82")
    console.log()
    console.log("POST command: say node ./bin/contactsclient POST with zero other parameters")
    console.log("For example enter: node ./bin/contactsclient POST")
    console.log()
    console.log("PUT command : say node ./bin/contactsclient PUT with 2 parameters. The first parameter will be id, and the second parameter will be input parameters entered in quotes joined by &'s. ")
    console.log("For example enter: node ./bin/contactsclient PUT 61ec6de1a2e99b62903c2c82 \"firstName=bob&lastName=jill&phoneNumber=768-567-567&email=sdfg\"")
    console.log()
    console.log("DELETE command: say node ./bin/contactsclient DELETE with 1 parameter being the id of the contact you want to delete")
    console.log("For example enter: node ./bin/contactsclient DELETE 61ec6de1a2e99b62903c2c82")
    

}

