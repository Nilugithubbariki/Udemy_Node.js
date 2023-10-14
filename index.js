/*
 * Use the inquirer package to get user input.
 * Use the qr-image npm package to rurn the user entered URL into a QR code image.
 * Create a txt file to save the user input using the native fs nod module.
 */

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Type in your URL:", name: "URL" }])
  .then((answers) => {
    let url = answers.URL;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_svg.png"));

    fs.writeFile("URL.txt", url, (error) => {
      if (error) throw error;
      console.log("This file has saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
