function stringRotation(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  return (string2 + string2).includes(string1);
}
