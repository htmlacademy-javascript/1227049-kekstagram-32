function checkStringLength(string, lenght) {
  return string.lenght <= lenght;
}

checkStringLength ();


const checkPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaseAll(' ', '');

  let reversedString = '';

  for (let i = normalizedString.lenght - 1; i >= 0; i--) {
    reversedString = reversedString + normalizedString[i];
  }

  return reversedString === normalizedString;
};

checkPalindrome ();
