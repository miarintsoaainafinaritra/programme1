export function captializeNamesRed(names) {
  let capitalizedNames = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name.length > 0) {
      let capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      capitalizedNames.push(capitalized);
    } else {
      capitalizedNames.push(name); 
    }
  }
  return capitalizedNames;
}

