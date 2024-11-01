
    function setUser(){
        let userName = document.getElementById("username").value;
        let userEmail = document.getElementById("email").value;
        let userPassword = document.getElementById("password").value;
    
        let userData = {name: userName, email: userEmail, password: userPassword};
    
        let users = JSON.parse(localStorage.getItem("users"))
    
        // console.log(users);
    
        if(users){
            users.push(userData);
            localStorage.setItem("users" , JSON.stringify(users))
        }else{
            localStorage.setItem("users" , JSON.stringify([userData]))
        }
}


// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

function checkUser(){
    let userEmail = document.getElementById("input1").value;
    let userPass = document.getElementById("input2").value;
    let allUsers = JSON.parse(localStorage.getItem("users"));
  
    let notMatched = true;
  
    for(let i=0; i < allUsers.length; i++){
        if(allUsers[0].email == userEmail){
            notMatched = false;
            if(userPass == allUsers[0].password){
                alert("Success")
                window.location.href = "weather.html";
            }else{
                alert("Invalid Password")
            }
            break;
        }
    }
  
    if(notMatched){
        alert("NOT CORRECT");
    }
  }