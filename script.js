document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // чтобы анимация была 1 раз
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".infor").forEach((section, i) => {
        const animations = ["fade-in", "slide-left", "slide-right", "zoom-in"];
        section.classList.add(animations[i % animations.length]);
        observer.observe(section);
    });
});