function processNumbers(a, b) {
  let result = a + b; 
  if (result > 10) { 
    result = result * 2; return result;       // One Line but 2 statement  
  } else {  
    // 2 Lines but one statement
    result = (a * b) +                             
    (a - b);
  }
  return result; 
}