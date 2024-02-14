// require node modules

const fs = require("fs");

const calculateSizeF = (stats) => {
  // size in bytes
  const filesizeBytes = stats.size; //bytes

  // human readable file size
  const units = "BKMGT"; // units

  //log10(1000) = 3
  //log10(1000000) = 6

  const index = Math.floor(Math.log10(filesizeBytes) / 3); // 5758575 -> 5.7M

  const filesizeHuman = (filesizeBytes / Math.pow(1000, index)).toFixed(1);

  const unit = units[index];

  filesize = `${filesizeHuman}${unit}`;

  return [filesize, filesizeBytes];
};

module.exports = calculateSizeF;
