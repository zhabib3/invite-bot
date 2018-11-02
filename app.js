const fj = require('./fetchJSON.js');
const fs = require('fs');
const req = require('request');

let jsonData = require('./members.json');

// Check if json is available if not call fetchJSON
fs.access('./members.json', fs.F_OK, (err) => {
  if (err) {
    fj.fetchJSON();
    console.log("Fetching data and updating json file");
    return
  }
});

const memArr = jsonData.members;
// Pull members ids from local json
let id = "";
let channelid = "CDUQHQ474";
const token = process.env.API_TOKEN;

const posturl = 'https://slack.com/api/channels.invite';
// Add everyone to a particular slack channel
for (i = 0; i < memArr.length; i++) {
  id = memArr[i].id;
  req.post(posturl, 
    {
      qs: {
        "channel": channelid,
        "user": id,
        "token": token
      }
    }, (err, res, body) => {
      if (err) console.log(err);
    });
}
