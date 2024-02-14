//require node modules
const {execSync} = require('child_process');

const calculateSizeD = itemFullStaticPath => {
    //escape spaces, tabs, etc
    const itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g, '\ ');
    
    const commandOutput = execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();
    
    console.log(commandOutput);
    
    //remove spaces, tabs, etc
    let filesize = commandOutput.replace(/\s/g, '');
    
    //split filesize using the '/' separator
    filesize = filesize.split('/');
    
    //human size is the first item of the array
    filesize = filesize[0];
    console.log(filesize);
    
    //unit
    const filesizeUnit = filesize.replace(/\d|\./g, '');
    console.log(filesizeUnit);
    
    //size number
    const filesizeNumber = parseFloat(filesize.replace(/[a-z]/i, ''));
    console.log(filesizeNumber);
    
    const units = "BKMGT";
    
    //B 10B -> 10 bytes (*1000^0)
    //K 10K -> 10*1000 bytes (*1000^1)
    //M 10M -> 10*1000*1000 bytes (*1000^2)
    //G 10G -> 10*1000*1000*1000 bytes (*1000^3)
    //T 10T -> 10*1000*1000*1000*1000 bytes (*1000^4)
    
    const filesizeBytes = filesizeNumber * Math.pow(1000, units.indexOf(filesizeUnit));
    
    console.log(filesizeBytes);
    
    return [filesize, filesizeBytes];
};

module.exports = calculateSizeD;