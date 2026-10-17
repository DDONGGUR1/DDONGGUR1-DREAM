
(() => {
    const savedTheme = localStorage.getItem("site-theme") || "light";

    const buttons = document.querySelectorAll("[data-theme]");

    function applyTheme(theme) {
        document.body.classList.toggle("dark-mode", theme === "dark");

        localStorage.setItem("site-theme", theme);

        buttons.forEach(button => {
            const active = button.dataset.theme === theme;
            button.classList.toggle("active", active);
            button.setAttribute("aria-pressed", String(active));
        });
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            applyTheme(button.dataset.theme);
        });
    });

    applyTheme(savedTheme);
})();
