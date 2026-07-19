// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior:'smooth'
        });

    });

});


// ==============================
// Active Navbar
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


// ==============================
// Contact Form Validation
// ==============================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=form.querySelector("input[type='text']").value.trim();
    const email=form.querySelector("input[type='email']").value.trim();
    const message=form.querySelector("textarea").value.trim();

    if(name==="" || email==="" || message===""){

        alert("Please fill all fields.");

        return;

    }

    alert("Thank you! Your message has been submitted.");

    form.reset();

});


// ==============================
// Scroll To Top Button
// ==============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.padding="12px 16px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#2563eb";
topBtn.style.color="white";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="18px";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ==============================
// Fade In Animation
// ==============================

const cards=document.querySelectorAll(".card,.project-card,.edu-card,.about");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".6s";

    observer.observe(card);

});