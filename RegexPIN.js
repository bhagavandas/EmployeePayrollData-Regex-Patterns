
        // validating PIN CODE
  let pinRegex = RegExp('^[0-9]{6}$')
  var pinCode = 400048;
  if(pinRegex.test(pinCode))
    console.log(pinCode);
  else 
    throw 'PIN CODE is Incorrect';
    