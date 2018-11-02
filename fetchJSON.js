const req = require('request');
const fs = require('fs');

let url = "https://slack.com/api/users.list?" + process.env.API_TOKEN

// To be removed
exports.fetchJSON = () => {
	// Delete json file
	fs.unlink('./members.json', (err) => {
		if (err) console.log("Creating new file 'members.json'");
	});

	req(url, { json: true }, (err, res) => {
		if (err) { return console.log(err); }
		fs.appendFile('./members.json', JSON.stringify(res.body), function (err) {
			if (err) console.log(err);
			else console.log("JSON data successfully fetched!")
		});
	});
}
