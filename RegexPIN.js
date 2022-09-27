//UC1 EMAIL
        // validating email contains abc.xyz@bridgelabz.co.in  abc,bridgelabz and co are mandatory
  let pinRegex = RegExp("[0-9]{3}[\\s]{0,1}[0-9]{3}")
  var pinCode = "400048";
  if(pinRegex.test(pinCode))
    console.log(pinCode);
  else 
    throw 'PIN CODE is Incorrect';




    