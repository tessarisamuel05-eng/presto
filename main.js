let navbar = document.querySelector(".navbar");
let links = document.querySelectorAll(".nav-link");
let logo = document.querySelector("#logonv");
let prodotti = document.querySelector("#prodotti");
let negozi = document.querySelector("#negozi");
let utenti = document.querySelector("#utenti");

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
    navbar.classList.remove('bg-black');
    navbar.classList.add ('bg-yellow');
    navbar.style.height= '70px';
    links.forEach( (link)=>{
        link.style.color = 'var(--black)';
} );
logo.src = "http://127.0.0.1:5500/media/nero.svg";

} else{
    navbar.classList.add ('bg-black');
    navbar.classList.remove( 'bg-yellow');
  navbar.style.height= '140px';
    links.forEach( (link)=>{
link.style.color = 'var(--yellow)';
});
logo.src = "http://127.0.0.1:5500/media/giallo.svg"
}
}) ;

let confirm = true;
function creaIntervallo(n,elemento,durata) {
let counter = 0;
    let intervallo = setInterval(() => {
        if (counter < n) {
            counter++;
            elemento.innerHTML = counter;
         } else {
            clearInterval(intervallo);
        }
    }, durata);

setTimeout(() => {
    confirm = true;
    }, 7000);

};

let observer = new IntersectionObserver((entries) => {
    
    entries.forEach((entry)=> {

        if (entry.isIntersecting && confirm) {
            creaIntervallo(1000, prodotti, 1);
            creaIntervallo(500, negozi, 1);
            creaIntervallo(2000, utenti, 1);
            confirm = false;
        }
    })
});


observer.observe(prodotti);


