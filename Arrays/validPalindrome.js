const isalphanumeric = function(char) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  );
};

var isPalindrome = function(s) {
  let s1 = s.toLowerCase();
  let first = 0;
  let last = s1.length - 1;

  while (first < last) {
    if (!isalphanumeric(s1[first])) {
      first++;
      continue;
    }

    if (!isalphanumeric(s1[last])) {
      last--;
      continue;
    }

    if (s1[first] === s1[last]) {
      first++;
      last--;
    } else {
      return false;
    }
  }

  return true;
};