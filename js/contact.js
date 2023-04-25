// SEND EMAIL TO CONTACT ME IN CONTACT.HTML

let txtName = document.getElementById("name");
let txtLastName = document.getElementById("lastName");
let txtPhone = document.getElementById("phone");
let txtMail = document.getElementById("mail");
let txtMsg = document.getElementById("msg");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let btnSend = document.getElementById("btnSend");

let isValid = true;
let idTimeOut;
let regexPhone = /^[1-9]\d{9,12}$/;
let regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

function validarPhone() {
    if (txtPhone.value.match(regexPhone)) {
        console.log("true");
        return true;
    }
    console.log(false);
    return false;
} //Validar teléfono 

function validarMail() {
    if (txtMail.value.match(regexMail)) {
        console.log("true");
        return true;
    }
    console.log(false);
    return false;
} //Validar teléfono 

btnSend.addEventListener("click", function (event) {
    event.preventDefault();
    isValid = true;
    clearTimeout(idTimeOut);
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    let alert = "Los siguientes campos deben ser llenados correctamente: <ul>";

    if (txtName.value.length < 2) {
        txtName.style.border = "solid thin red";
        alert += "<li> Se debe escribir un nombre válido.</li>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else {
        txtName.style.border = "";
    }//If name

    if (txtLastName.value.length < 2) {
        txtLastName.style.border = "solid thin red";
        alert += "<li> Se debe escribir un apellido válido.</li>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else {
        txtLastName.style.border = "";
    }// if last Name

    if (!validarPhone()) {
        txtPhone.style.border = "solid thin red";
        alert += "<li> Se debe escribir un número de teléfono válido.</li>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else {
        txtPhone.style.border = "";
    }

    if (!validarMail()) {
        txtMail.style.border = "solid thin red";
        alert += "<li> Se debe escribir un número de teléfono válido.</li>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else {
        txtMail.style.border = "";
    }//If email

    if (txtMsg.value.length < 10) {
        txtMsg.style.border = "solid thin red";
        alert += "<li> Se debe escribir un mensaje más largo.</li>";
        alertValidaciones.style.display = "block";
        isValid = false;
    } else {
        txtMsg.style.border = "";
    }//If msg

    alert += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", alert);
    idTimeOut = setTimeout(function () {
        alertValidaciones.style.display = "none";
    }, 3000);

    Email.send({
        Host: "smtp.elasticemail.com",
        To: 'doraluz.g27.com',
        From: txtMail,

        Subject: "Mensaje de Yeti Personalizado",
        Body: "Nombre: " + txtName + "<br>Apellido: " + txtLastName + "<br>Correo: " + txtMail + "<br>Telefono: " + txtPhone + "<br>Mensaje: " + txtMsg
    }).then(
        message => alert(message)
    ); // function https://smtpjs.com/
});