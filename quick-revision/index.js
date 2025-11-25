import express from "express";

import { add, sub, div } from "./revision.js";

const app = express();

console.log(add(5, 6));

// try {
//   console.log("Trying to divide by 0");

//   let result = div(10, 0);
//   console.log(result);
  
// } catch (error) {
//   console.log("Caught an error", error.message);
// }



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
