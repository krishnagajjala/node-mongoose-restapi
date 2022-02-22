//getContacts.js

const axios = require('axios');

let url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('calling GET')
    console.log(args)
    if (args._.length == 1) {
        axios.get(url).then(resp => {
            console.log(resp.data);
        });
    } else if (args._[1].includes("=")) {
        let inputs = args._[1]
        console.log(inputs)
        axios.get(url+"?"+inputs).then(resp => {
            console.log(resp.data);
        });
    } else {
        let myid = args._[1]
        url = url +"/" + myid
        axios.get(url, {}).then(resp => {
            console.log(resp.data);
        });
    }
    
}    