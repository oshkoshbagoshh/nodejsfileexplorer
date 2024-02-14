const https = require('https');
const { resolve } = require('path');

// json file link

const mimeUrl = "https://gist.githubusercontent.com/AshHeskes/6038140/raw/27c8b1e28ce4c3aff0c0d8d3d7dbcb099a22c889/file-extension-to-mime-types.json";

// need to get file extension to mime types json
const getMimeType = extension => {

// return new promise 
return new Promise((resolve, reject) => {
    https.get(mimeUrl, response => {
        if(response.statusCode < 200 || response.statusCode > 299) {
            reject(`Error: Failed to load mime types json file: ${response.statusCode}`);
            console.log(`Error: Failed to load mime types json file: ${response.statusCode}`);

            return false;
        }

        // get the data in chunks
        let data = '';
        response.on('data', chunk => {
            data += chunk;
        });

        // on end of data
        response.on('end', () => {
            resolve(JSON.parse(data)[extension]);
        });
    }).on('error', error => {
        console.log(`Error: Failed to load mime types json file: ${error}`);
        reject(`Error: Failed to load mime types json file: ${error}`);


    });




});
    
    };
module.exports = getMimeType;

