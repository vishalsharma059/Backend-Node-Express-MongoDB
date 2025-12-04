import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import { add, sub, div } from "./revision.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log("Directory name:", __dirname);

console.log("File name:", __filename);

console.log("File extension:", path.extname(__filename));



console.log(add(5, 6));

// try {
//   console.log("Trying to divide by 0");

//   let result = div(10, 0);
//   console.log(result);
  
// } catch (error) {
//   console.log("Caught an error", error.message);
// }


const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created");
}

const filePath = path.join(dataFolder, "example.txt");
// synchronous way to create a file

fs.writeFileSync(filePath, "Hello how are you!!");
console.log("File created Successfully");

const readContentFromFile = fs.readFileSync(filePath, 'utf8');
console.log("File content:" , readContentFromFile);



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
