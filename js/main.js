let contentPrin = document.getElementById("contentPrin");


var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span>' + this.txt + '</span>';
  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

//ADD NAV AND FOOTER IN ALL PAGES
window.addEventListener("load", function (event) {

  contentPrin.insertAdjacentHTML("afterbegin", `
    <nav class="navbar navbar-dark barnavprin fixed-top" id="navegationBar">
    <div class="container-fluid">
      <a class="navbar-brand nameDora" href="#">DORA LUZ GARCIA ZATARAIN</a>
      <div>
        <a class="navbar-brand topNav" aria-current="page" href="./Index.html">HOME</a>
        <a class="navbar-brand topNav" href="#about">ME</a>
        <a class="navbar-brand topNav" href="#projectsSec" >PROJECTS</a>
        <a class="navbar-brand topNav" href="#tittleContact">CONTACT</a>
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
    <footer>
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
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
})