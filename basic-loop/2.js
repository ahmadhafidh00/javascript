/*

  STORE totalLoop AS NUMBER WITH ANY VALUE
  FOR index FROM 0 TO totalLoop - 1 INCREMENT BY 1
    DISPLAY "Hello World"
  END FOR

*/

// let totalLoop = 5;
// for (let i = 0; i < totalLoop; i++) {
//   console.log("Hello World");
// }

/*

  STORE totalLoop AS NUMBER WITH ANY VALUE
  STORE index as NUMBER WITH 0

  WHILE index IS LESS THAN totalLoop
    DISPLAY "Hello World"
    INCREMENT index
  END WHILE

*/

let totalLoop = 3;
let index = 0;

while (index < totalLoop) {
  console.log("Hello World");
  index++;
}
