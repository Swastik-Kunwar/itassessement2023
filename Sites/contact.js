function validate(){
    const name = document.getElementById("name").value;
    const mail = document.getElementById("e-mail").value;
    const tel = document.getElementById("phone-number").value;
    const message = document.getElementById("message").value;

    if (name == "") {
        alert("Enter Your Name");
        return false;
    }

    else if (mail == "") {
        alert("Enter Your Email.");
        return false;
    } 

    else if (tel.length<10) {
        alert("Invalid Phone Number");
        return false;
    } 
    else if (message == "") {
        alert(" Enter a message.");
        return false;
    }
    else{
    return true; 
    }
}