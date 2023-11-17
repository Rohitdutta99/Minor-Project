function seterror(id, error){
    
}

function validateform(){
    var returnval = false;

    // perform validation
    var email = document.forms['form1']["email-id"].value;
    var revEmail = email.split("").reverse().join("");
    if (email === "")
        returnval = false;
    if (revEmail.slice(0,10) === "moc.liamg@"){
        alert(revEmail.slice(0,10));
        returnval = true;
    }
    return returnval;
}
