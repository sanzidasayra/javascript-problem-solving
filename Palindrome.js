function isPalindrome(str) {
  let j = str.length - 1;
  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] != str[j]){
        return false;
    }
    j--;
  }
    return true;

}

let str1 = "madam";
let str2 = "hello";


// console.log(isPalindrome("madam")); 
// console.log(isPalindrome("hello")); 
