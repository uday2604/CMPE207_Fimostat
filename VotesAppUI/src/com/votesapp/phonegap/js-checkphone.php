
<!DOCTYPE html>
<html>
<head>
<script>
function validatePhone() 
{
    var inputNo = document.forms["myForm"]["phno"].value;
    var reg1 = /^\(\d{3}\)\s\d{3}\s\d{4}$/; // (###) ### ####
    var reg2 = /^\d{3}\s\d{3}\s\d{4}$/; // ### ### ####
    var reg3 = /^\(\d{3}\)\s\d{3}\-\d{4}$/; // (###) ###-####
    var reg4 = /^\d{10}$/; // ##########
    var reg5 = /^(((\d{3}\s\d{3}[ ])|(\(\d{3}\)\s\d{3}[- ]))\d{4})$/; 
    
   // if(reg1.test(inputNo) | reg2.test(inputNo) | reg3.test(inputNo) | reg4.test(inputNo)  )  
    if(reg5.test(inputNo) | reg4.test(inputNo) )  
    
    {
        alert ("Format is correct!!!")
        return true;
    }
        else
    {
        alert ('Please match the pattern -\n1. ### ### #### \n2. (###) ### #### \n3. (###) ###-#### \n4. ##########');
        document.forms["myForm"]["phno"].value = '';
        return false;
    }
                                        
}
</script>
</head>

<body>
<h3>Testing for phone number...</h3>
<form name="myForm" action="demo_form.php" onsubmit="return validatePhone();" method="post">
Phone Number: <input type="text" id="phno" name="phno">
<input type="submit" value="Submit">
</form>
</body>

</html>

