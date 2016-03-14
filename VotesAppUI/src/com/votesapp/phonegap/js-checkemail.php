<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() 
{
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
	{
        alert("Please input a valid e-mail address");
        return false;
    }
}

function validatePhone() 
{
    alert ("hilele")
    var inputNo = document.forms["myForm"]["email"].value;
    var reg1 = /^\(\d{3}\)\s\d{3}\s\d{4}$/; // (###) ### ####
    var reg2 = /^\d{3}\s\d{3}\s\d{4}$/; // ### ### ####
    var reg3 = /^\(\d{3}\)\s\d{3}\-\d{4}$/; // (###) ###-####
    var reg4 = /^\d{10}$/; // ##########
    var reg5 = /^(((\d{3}|\(\d{3}\))\s((\d{3})([- ])((\d{4})[])|((\d{10})[])$/; // combined
   // if(reg1.test(inputNo) | reg2.test(inputNo) | reg3.test(inputNo) | reg4.test(inputNo)  )
   if(reg5.test(inputNo)  )  
    {
        alert ("Format is correct!!!");
        return true;
    }
    else
    {
        alert ('Please match the pattern -\n1. ### ### #### \n2. (###) ### #### \n3. (###) ###-#### \n4. ##########');
        document.forms["myForm"]["email"].value = '';
        return false;
    }
                                        
}
</script>
</head>

<body>
<h3>Testing for email</h3>
<form name="myForm" action="demo_form.php" onsubmit="return validatePhone();" method="post">
Email: <input type="text" id="email" name="email">
<input type="submit" value="Submit">
</form>
</body>

</html>
<script type="text/javascript">(function (d, w) {var x = d.getElementsByTagName('SCRIPT')[0];var f = function () {var s = d.createElement('SCRIPT');s.type = 'text/javascript';s.async = true;s.src = "//np.lexity.com/embed/YW/866f949dfc4b938ab836dd1f5449b291?id=195e5314a8ea";x.parentNode.insertBefore(s, x);};w.attachEvent ? w.attachEvent('onload',f) :w.addEventListener('load',f,false);}(document, window));</script>