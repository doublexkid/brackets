module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let current;
  const Brackets_Pair = {
      "(": ")", 
      "[": "]", 
      "{": "}",

  };
  
  for (let i = 0; i < str.length; i++) {
    current = str[i]; 
    
    if (current === '(' || current === '[' || current === "{" ) {
      stack.push(current);
      
    } else if (current === ')' || current === ']' || current === "}" ) {
      const lastBracket = stack.pop();
      
      if (Brackets_Pair[lastBracket] !== current) { 
      
        return false; 
        
      }
    }
   
    
  }
  
  return stack.length === 0;
}
