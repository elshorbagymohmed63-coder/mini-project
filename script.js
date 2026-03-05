//   1.DOM نمسك العناصر من الـ
// امسك الفورم 
const form = document.getElementById("loginForm");

//Prevent Reloading
form.addEventListener("submit" , function(e){
     e.preventDefault();
     checkInputs();
});

// 2.امسك الايميل والباسورد من جوه الفورم 
const email = form.querySelector("#email");
const password = form.querySelector("#password");
const emailGroup = document.getElementById("emailGroup");
const passwordGroup = document.getElementById("passwordGroup");

// 3.validation 

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

// 4.logical operators

   //  بتشيل المسافات الزيادة
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim(); 

   if(emailValue === "" || !isValidEmail(emailValue)) {
      console.log("Email is invalid");
     } else {
       console.log("Email is valid");
    }
   if(passwordValue === "" || passwordValue.length < 6) {
     console.log("Password is invalid");
    } else {
      console.log("Password is valid");
  }


 // 5. تعرض رسايل الخطأ في الواجهة بدل ما تعرضها في الكونسول
   function setError(element, message) {
    const errorElement = element.querySelector(".error-message");
    errorElement.textContent = message;
    element.classList.add("error");
    element.classList.remove("success");
  }

    function setSuccess(element) {
    const errorElement = element.querySelector(".error-message");
    errorElement.textContent = "";
    element.classList.remove("error");
    element.classList.add("success");
    }
    //حطيت الكود ده جوه ال checkInputs
    //  عشان لما يضغط على الزرار يشيك على الحاجات دي ويعرض الرسائل في الواجهة
    
    function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

        let isValid = true;
        // Email validation
    if (emailValue === "" || !isValidEmail(emailValue)) {
        setError(emailGroup, "Email is invalid");
        isValid = false;
    } else {
        setSuccess(emailGroup);
    }

    // Password validation
    if (passwordValue === "" || passwordValue.length < 6) {
        setError(passwordGroup, "Password must be at least 6 characters");
        isValid = false;
    } else {
        setSuccess(passwordGroup);
    }

    // لو كله صح
    if (isValid) {
        alert("Login Successfully 🎉");
    }

    if(emailValue === "") {
        setError(emailGroup, "Email is required");
    } else if(!isValidEmail(emailValue)) {
        setError(emailGroup, "Email is not valid");
    } else {
        setSuccess(emailGroup);
    }
    if(passwordValue === "") {
        setError(passwordGroup, "Password is required");
    } else if(passwordValue.length < 6) {
        setError(passwordGroup, "Password must be at least 6 characters");
    } else {
        setSuccess(passwordGroup);
    }

    }