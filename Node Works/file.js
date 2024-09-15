
const fs = require('fs');



// fs.writeFileSync("data.txt", "Hello Node js");



console.log("1");

// //sync...     blocking req
// // const read = fs.readFileSync("msg.txt", "utf-8");
// // console.log(read);

//async...    non-blocking req
fs.readFile("data.txt", "utf-8", (err, res)=>{
    if (err) {
        console.log("Error", err);  
    }
    else{
        console.log(res); 
    }
});

console.log("2");

