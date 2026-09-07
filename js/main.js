/* =========================================
   MENU MOBILE
========================================= */

const mobileBtn = document.querySelector(".mobile-toggle");
const navbar = document.querySelector(".navbar");

if (mobileBtn) {

    mobileBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");
        mobileBtn.classList.toggle("active");

    });

}

/* =========================================
   DROPDOWNS
========================================= */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    const trigger = item.querySelector(".dropdown-trigger");

    if (!trigger) return;

    trigger.addEventListener("click", (e) => {

        e.preventDefault();

        navItems.forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove("open");
            }

        });

        item.classList.toggle("open");

    });

});

/* =========================================
   FERMETURE SI CLIC EXTERIEUR
========================================= */

document.addEventListener("click", (e) => {

    if (!e.target.closest(".nav-item")) {

        navItems.forEach(item => {

            item.classList.remove("open");

        });

    }

});

/* =========================================
   HEADER SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* =========================================
   ANIMATIONS AU SCROLL
========================================= */

const animatedElements = document.querySelectorAll(`
    .section-title,
    .service-card,
    .catalogue-card,
    .gallery-item,
    .feature,
    .step,
    .stat,
    .contact-info,
    .contact-form
`);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

/* =========================================
   COMPTEURS ANIMÉS
========================================= */

const stats = document.querySelectorAll(".stat h3");

const animateCounter = (element, target) => {

    let current = 0;

    const increment = target / 80;

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent = Math.floor(current) + "+";

    }, 20);

};

const statsObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const stat = entry.target;

            const value = parseInt(
                stat.textContent.replace(/\D/g, "")
            );

            animateCounter(stat, value);

            statsObserver.unobserve(stat);

        }

    });

}, {
    threshold: 0.5
});

stats.forEach(stat => {

    statsObserver.observe(stat);

});

/* =========================================
   APPARITION PROGRESSIVE HERO
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* =========================================
   SCROLL FLUIDE ANCRES
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});