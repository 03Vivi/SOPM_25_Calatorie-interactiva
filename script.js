// Așteaptă ca întregul conținut al paginii să fie încărcat
document.addEventListener('DOMContentLoaded', () => {

    console.log('Sistemele de navigație sunt online. Animații activate.');

    // --- Funcționalitatea de click pe mesajul de bun venit (Pagina Acasă) ---
    const welcomeMessage = document.getElementById('welcome-message');
    
    if (welcomeMessage) {
        welcomeMessage.addEventListener('click', () => {
            welcomeMessage.textContent = 'Sistemele sunt activate. Bună călătorie!';
            welcomeMessage.style.color = '#50fa7b';
            welcomeMessage.style.cursor = 'default';
            console.log('Motoarele pornite!');
        });
        welcomeMessage.style.cursor = 'pointer';
        welcomeMessage.style.transition = 'color 0.3s';
    }


    // --- FUNCȚIONALITATE NOUĂ: Fade-in la scroll ---

    // Selectează toate cardurile de pe pagină
    const cards = document.querySelectorAll('.card');

    // Setează opțiunile pentru Observer
    const observerOptions = {
        root: null, // Privește viewport-ul
        threshold: 0.1 // Se activează când 10% din card e vizibil
    };

    // Creează funcția de callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Dacă elementul (cardul) intră în viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Adaugă clasa .visible
                observer.unobserve(entry.target); // Oprește observarea după ce s-a activat
            }
        });
    };

    // Creează noul IntersectionObserver
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Aplică observer-ul pe fiecare card
    cards.forEach(card => {
        observer.observe(card);
    });

});
