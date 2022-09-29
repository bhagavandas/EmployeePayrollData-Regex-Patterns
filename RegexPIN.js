//UC1 EMAIL
        // validating email contains abc.xyz@bridgelabz.co.in  abc,bridgelabz and co are mandatory
  let pinRegex = RegExp("[abc+](.+)?[a-z](@)?[bl+](.+)[co+](.+)[a-z]{2}$");
  var pinCode = "abc.xyz@bl.co.in";
  if(pinRegex.test(pinCode))
    console.log(pinCode);
  else 
    throw 'Email is Incorrect';




    