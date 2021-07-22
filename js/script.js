function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email); // test() retorna uma booleana de comparação com uma expressão regular
}

function validate(){
    const email = $("#email").val();

    if(validateEmail(email))
    {
        // alert("Email válido!");
        $("#email").css('border', '3px solid #00ff00');
    } else {
        // alert("Email invalido!");
        $("#email").css('border', '3px solid #ff0000');
    }
}

$("#btnSubmit").click(validate);