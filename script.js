const text = "Full Stack Web Developer";
const typing = document.getElementById("typing");

let index = 0;

function typeText() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 80);

    }

}

window.onload = typeText;

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "#111827";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";

    }

    else {

        navbar.style.background = "rgba(10,15,35,.7)";
        navbar.style.boxShadow = "none";

    }

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

const navbar = document.querySelector(".custom-navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function(){

    this.classList.toggle("text-purple");

});