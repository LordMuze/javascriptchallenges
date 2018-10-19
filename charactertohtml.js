function convertHTML(str) {
  // &colon;&rpar;
  let inspectString = str.split("");
  console.log(inspectString);
  for(let i = 0; i < inspectString.length; i++){
    inspectString[i] = charToHTMLEntity(inspectString[i]);
  }
  console.log(inspectString);
  str = inspectString.join("");
  console.log(str);
  return str;
}
function charToHTMLEntity(character){
  let entityReturn = character;
  switch(character){
    case "&":
    entityReturn = "&​amp;";
    break;
    case "<":
    entityReturn = " &​lt;";
    break;
    case ">":
    entityReturn = "&​gt;";
    break;
    case"'":
    entityReturn = "&​apos;";
    break;
    
  }
  return entityReturn;
}
convertHTML("<>");
