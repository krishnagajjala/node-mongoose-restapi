//updateContact.js
const axios = require('axios');

let url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('calling PUT')
    if (args._.length == 1) {
        console.log("no id given");
        return
    } if (args._.length == 2) {
        console.log("no inputs given");
        return
    }

    let myid = args._[1]
    let inputs = args._[2]
    
    url = url +"/" + myid
    axios.put(url, inputs).then(resp => {
    console.log(resp.data);
    });
}