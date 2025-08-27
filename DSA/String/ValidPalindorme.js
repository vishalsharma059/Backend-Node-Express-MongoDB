let isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    if (s[start] != s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)); // true

s = "race a car";
console.log(isPalindrome(s)); // false
