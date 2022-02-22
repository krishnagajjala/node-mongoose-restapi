//deleteContact.js
const axios = require('axios');

let url = 'http://localhost:3000/api/v1/contacts'

module.exports = (args) => {
    console.log('calling DELETE')
    if (args._.length == 1) {
        console.log("no id given");
        return
    }
    let myid = args._[1]
    url = url +"/" + myid
    axios.delete(url, {}).then(resp => {
    console.log(resp.data);
    });
}