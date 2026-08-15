// Menu burger
const burger = document.querySelector('.menu-burger');
const navUl = document.querySelector('nav ul');

if (burger && navUl) {
    burger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });
}

// Filtre activités
const filtreBtns = document.querySelectorAll('.filtre-btn');
const cards = document.querySelectorAll('.activites-card');

if (filtreBtns.length && cards.length) {
    filtreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filtreBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const categorie = btn.dataset.category;
            cards.forEach(card => {
                card.style.display = (categorie === 'toutes' || card.dataset.category === categorie) ? 'block' : 'none';
            });
        });
    });
}

// Formulaire contact
const form = document.querySelector('#contact-form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nom = document.querySelector('#nom');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');
        let valide = true;

        document.querySelectorAll('.erreur').forEach(el => el.textContent = '');

        if (nom.value.trim() === '') {
            afficherErreur(nom, 'Le nom est requis.');
            valide = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            afficherErreur(email, 'Email invalide.');
            valide = false;
        }
        if (message.value.trim().length < 10) {
            afficherErreur(message, 'Message trop court (10 caractères min).');
            valide = false;
        }
        if (valide) {
            alert('Message envoyé avec succès !');
            form.reset();
        }
    });
}

function afficherErreur(input, texte) {
    const erreurDiv = input.nextElementSibling;
    if (erreurDiv) erreurDiv.textContent = texte;
}

// Toggle thème
const toggleTheme = document.querySelector('#toggle-theme');

const appliquerTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (toggleTheme) toggleTheme.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (toggleTheme) toggleTheme.textContent = '🌙';
    }
};

appliquerTheme(localStorage.getItem('theme') || 'light');

if (toggleTheme) {
    toggleTheme.addEventListener('click', () => {
        const nouveauTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        appliquerTheme(nouveauTheme);
        localStorage.setItem('theme', nouveauTheme);
    });
}
// Animation des stats (comptage par paliers)
const statNums = document.querySelectorAll('.stat-num');

if (statNums.length) {
    const animerCompteur = (el) => {
        const cible = parseInt(el.dataset.target, 10);
        const step = parseInt(el.dataset.step, 10) || 1;
        const suffixe = el.dataset.suffix || '';
        const duree = 1500;
        const debut = performance.now();

        const step_fn = (maintenant) => {
            const progres = Math.min((maintenant - debut) / duree, 1);
            let valeur = Math.floor((progres * cible) / step) * step;
            if (progres >= 1) valeur = cible;
            el.textContent = valeur + suffixe;
            if (progres < 1) {
                requestAnimationFrame(step_fn);
            }
        };
        requestAnimationFrame(step_fn);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animerCompteur(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNums.forEach(el => observer.observe(el));
}