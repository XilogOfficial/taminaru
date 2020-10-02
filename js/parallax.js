window.addEventListener("scroll", function() { // parallax scroll on scroll
    document.getElementById('background').style.transform = `scale(${1 + window.scrollY * 0.0003}, ${1 + window.scrollY * 0.0003})`;
});