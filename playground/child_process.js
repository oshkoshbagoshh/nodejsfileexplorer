const {execSync} = require('child_process');

try{

    const result = execSync(`du -sh "/Users/aj/Desktop/Udemy-Complete-Web-Dev/Projects/NodeJS-Online-File-Explorer"`).toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}