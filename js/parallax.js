window.addEventListener("scroll", function() { // parallax scroll on scroll
    document.body.style.backgroundPositionX = `${window.scrollY * 0.1}px`;
});