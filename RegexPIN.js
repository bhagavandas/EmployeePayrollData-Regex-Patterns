//UC1
        // validating PIN CODE and checking A400048 should fail
  let pinRegex = RegExp('^[0-9]{6}$')
  var pinCode = A400048;
  if(pinRegex.test(pinCode))
    console.log(pinCode);
  else 
    throw 'PIN CODE is Incorrect';


    