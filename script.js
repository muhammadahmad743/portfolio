
// Simple scroll fade-in effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Optional smooth scrolling
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById("menu-toggle").addEventListener("click", function () {
    const nav = document.getElementById("nav-links");
    nav.classList.toggle("active");
});

document.querySelector("#skill h1").addEventListener("mousemove", () => {
    document.querySelector("#skill").style.border = "3px solid black"
})

document.querySelector("#skill h1").addEventListener("mouseleave", () => {
    document.querySelector("#skill").style.border = "3px solid whitesmoke"
})