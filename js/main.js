let contentPrin = document.getElementById("contentPrin");

//ADD NAV AND FOOTER IN ALL PAGES
window.addEventListener("load", function (event) {

    contentPrin.insertAdjacentHTML("beforebegin", `
    <nav class="navbar navbar-dark barnavprin fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand nameDora" href="#">DORA LUZ GARCIA ZATARAIN</a>
      <div>
        <a class="navbar-brand topNav" aria-current="page" href="./Index.html" target="_blank">HOME</a>
        <a class="navbar-brand topNav" href="./aboutme.html" target="_blank">ME</a>
        <a class="navbar-brand topNav" href="./projects.html" target="_blank">PROJECTS</a>
        <a class="navbar-brand topNav" href="./contact.html" target="_blank">CONTACT</a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end barnavaside" tabindex="-1" id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="topNav" aria-current="page" href="./Index.html" target="_blank">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" target="_blank" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                About me</a>
              <ul class="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="./aboutme.html">Me</a></li>
                <li><a class="dropdown-item" href="#skills">My skills</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./projects.html" target="_blank">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contact.html" target="_blank">Contact</a>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
    `
    )

    contentPrin.insertAdjacentHTML("afterend", `
    <footer class="fixed-bottom">
    <div id="derFooter"><em>Derechos reservador &#169; DoraGarcia</em></div>
    <div class="social" id=socialFooter>
      <a href="https://www.linkedin.com/in/dora-luz-garcia-zatarain/" target="_blank"><img src="./scr/lkn.png" width="30px"
          height="30px" class="rounded mx-auto d-block" alt="redes1"></a>
      <a href="https://github.com/doraluzgzatarain" target="_blank"><img src="./scr/github.png" width="30px" height="30px"
          class="rounded mx-auto d-block" alt="redes2"></a>
    </div>
    </footer>
    `
    )
})

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