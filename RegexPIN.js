//UC1
        // validating 400 048 and 400048
  let pinRegex = RegExp("[0-9]{3}[\\s]{0,1}[0-9]{3}")
  var pinCode = "400048";
  if(pinRegex.test(pinCode))
    console.log(pinCode);
  else 
    throw 'PIN CODE is Incorrect';


    