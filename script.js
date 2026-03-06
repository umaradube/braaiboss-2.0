document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Cross-Page Scroll Logic
    // If we land on a page with a hash (e.g., restaurant.html#delivery)
    if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
            // Give it a tiny delay to ensure the page renders
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    }
});