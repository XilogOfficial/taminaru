document.body.scrollTop = 0; // scroll to top

// parallax scroll when the page is loaded so it doesn't jump
document.body.style.backgroundPositionY = `${window.scrollY * -0.1}px`;