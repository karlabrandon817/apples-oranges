console.log('test');

//longerString takes to strings return the longer one
var myName = prompt("What is your name?");

function longerString(myName, string2) {
  console.log('button clicked - longerString');
  console.log(myName, string2);

  //compare strings
  if(myName.length > string2.length){
    alert(myName.length + " is longest");
    return myName;
  }else if(myName.length === string2.length) {
    alert("Samesies!");
  }
  else{
    alert(string2 + " is longest");
    return string2;
  }
  // bug: what if they are the same length?
}
