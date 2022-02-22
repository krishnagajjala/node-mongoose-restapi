const minimist = require('minimist');

//uncomment this code to see a sample of making an axios get request
//axios.get('http://webcode.me').then(resp => {
    //console.log(resp.data);
//});

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    console.log("args is: ");
    console.log(args);
    let cmd = args._[0] || 'help'
  
    if (args.help || args.h) {
      cmd = 'help'
    }
    let request = cmd
    console.log("------------")
    switch (request) {
      case 'GET':
        require('./cmds/getContacts')(args)
        break
      case 'POST':
        require('./cmds/createContact')(args)
        break
      case 'PUT':
        require('./cmds/updateContact')(args)
        break
      case 'DELETE':
        require('./cmds/deleteContact')(args)
        break
      case 'help':
          require('./cmds/help')(args)
          break
      default:
        console.error(`"${cmd}" is not a valid command!`)
        require('./cmds/help')(args)
        break
    }
  }
  