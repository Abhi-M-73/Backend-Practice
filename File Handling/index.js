
const fs = require('fs');        //module defining


// sync method
// fs.writeFileSync("msg.txt", "Hello i am node js.");            //used to create a file
//  let fileRead = fs.readFileSync("Contact.txt", "utf-8");        //used to read a file
//  console.log(fileRead);
// fs.appendFileSync("msg.txt", " message");                       //used to append messagges
// fs.copyFileSync("contact.txt", "Copy.txt");                     //used to copy any file
// fs.unlinkSync("../Copy.txt");                                   //used to delete any file
// fs.mkdirSync("R");                                                 //used to create a folder/directory

// async methode
// fs.writeFile("Contact.txt", "Jhone - 757575", (error)=>{});      //used to create a file

// it is not return any result so we have to use this formate =      //used to read a file
// fs.readFile("msg.txt", "utf-8", (err, res)=>{
//     if (err) {
//         console.log("Error", err);    
//     }
//     else{
//         console.log(res);
//     }
// });