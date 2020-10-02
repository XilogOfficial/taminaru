document.body.scrollTop = 0; // scroll to top

// parallax scroll when the page is loaded so it doesn't jump when u scroll
document.getElementById('background').style.transform = `scale(${1 + window.scrollY * 0.0003}, ${1 + window.scrollY * 0.0003})`;