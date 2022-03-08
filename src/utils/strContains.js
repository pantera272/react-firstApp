export const strContains = (string, searchString) => {
  string = string.toLowerCase();
  searchString = searchString.toLowerCase();
  
  return string.includes(searchString);
}