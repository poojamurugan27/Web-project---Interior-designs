function validateform()
{
   var name=document.myform.name.value;
   var phone=document.myform.phone.value;
   var email=document.myform.email.value;
   var password=document.myform.password.value; 
   var radio = document.getElementsByName("feed");
   var formValid=false;

   if (name==null || name==""){  
      alert("Please enter your name.");  
      return false;  
      }

   if (email=="")
   {
    alert("Please enter your email.");
    return false;
   } 

   if(email.indexOf("@",0)<0) {
     alert("Please enter your valid e-mail.");
     return false;
   }
   if (password == "") 
   {
      alert("Please enter your password");
       password.focus();
       return false;
   }
   if(password.length!= "")
   {
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
          if(regex.test(password) === false) 
        { 
              alert("Password should be atleast 8 characters");
               alert("It should have atleast one uppercase,one special character,numbers");
           return false;
         }       
    }

    if(phone.length!= "")
    {
        var regex= /^(?=.*[0-9])(?=.{10,})/;
        if(regex.test(phone) === false)
        {
            alert("Please Enter the valid Phone Number");
            return false;
        }
    }
    
    var i = 0;
    while (!formValid && i < radio.length) {
        if (radio[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
    alert("Make sure you have entered all the fields.");
   /* alert("Please choose FeedbackType: Comments or BugReport or Questions");*/
    return formValid;
  }
        
}


window.addEventListener("load",start,false);
function start()
{
  document.getElementById("name").addEventListener("focus",focusone,false);
  document.getElementById("name").addEventListener("blur",blurone,false);
  document.getElementById("phone").addEventListener("focus",focustwo,false);
  document.getElementById("phone").addEventListener("blur",blurone,false);
  document.getElementById("email").addEventListener("focus",focusthree,false);
  document.getElementById("email").addEventListener("blur",blurone,false);
  document.getElementById("password").addEventListener("focus",focusfour,false);
  document.getElementById("passowrd").addEventListener("blur",blurone,false);
  document.getElementById("state").addEventListener("focus",focusfive,false);
  document.getElementById("state").addEventListener("blur",blurone,false);
  document.getElementById("myform").addEventListener("submit",subfun, false );
  document.getElementById("myform").addEventListener("reset",resetfun, false );
}

function focusone()
{
  document.getElementById("help").innerHTML="ENTER NAME";
}
function focustwo()
{
  document.getElementById("help").innerHTML="ENTER YOUR PHONE NUMBER";
}
function focusthree()
{
  document.getElementById("help").innerHTML="ENTER YOUR EMAIL ID";
}
function focusfour()
{
  document.getElementById("help").innerHTML="ENTER PASSWORD";
}
function focusfive()
{
  document.getElementById("help").innerHTML="SELECT CITY";
}
function blurone() 
{ 
  document.getElementById("help").innerHTML="" ;
}
