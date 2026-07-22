var registerBtn = document.querySelector("#registerBtn");

  registerBtn.addEventListener("click", function(){

  var fullName = document.querySelector("#fullName").value;
  var age = document.querySelector("#age").value;
  var jobTitle = document.querySelector("#jobTitle").value;

    if(fullName == ""){
        alert("Please fill all fields");
        return;
    }

    if(age == ""){
        alert("Please fill all fields");
        return;
    }

    if(jobTitle == ""){
        alert("Please fill all fields");
        return;
    }

  console.log("Name: " + fullName);
  console.log("Age: " + age);
  console.log("Job: " + jobTitle);

  if(age < 18){
    alert("You are under age");
  } else {
    alert("Registration Completed");
  }

});