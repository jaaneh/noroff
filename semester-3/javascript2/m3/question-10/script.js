/* 
  10. Write code that displays asynchronous JavaScript. 
  There should be three functions. They should console log a,b,c respectively. 
  Set a timeout on the function that logs b out to 2000 milliseconds. Your output should be a,c,b.
*/

function funcOne() {
  console.log('a')
}

function funcTwo() {
  setTimeout(() => {
    console.log('b')
  }, 2000);
}

function funcThree() {
  console.log('c')
}

funcOne()
funcTwo()
funcThree()