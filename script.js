// Function to generate random phone number
function generatePhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100; // Random 3-digit area code
    const firstPart = Math.floor(Math.random() * 900) + 100; // Random 3 digits
    const secondPart = Math.floor(Math.random() * 9000) + 1000; // Random 4 digits
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

// Add event listener to the form
document.getElementById('rideForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const phoneNumber = generatePhoneNumber();
    alert(`Please call ${phoneNumber} to finish booking and get pricing!`);
});

// Blinking Text
function blinkText() {
    const heading = document.querySelector('h1');
    setInterval(() => {
        heading.style.visibility = (heading.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);
}
blinkText();

// Visitor Counter
let visitorCount = Math.floor(Math.random() * 10000) + 1;
const counter = document.createElement('div');
counter.style.textAlign = 'center';
counter.style.color = '#FFD700';
counter.innerHTML = `You are visitor number: ${visitorCount}`;
document.body.appendChild(counter);

// Under Construction Text 
const construction = document.createElement('div');
construction.style.textAlign = 'center';
construction.style.color = '#FFD700';
construction.innerHTML = '🚧 UNDER CONSTRUCTION 🚧';
document.querySelector('main').insertBefore(construction, document.querySelector('.toggle-options'));

// Add sparkles/stars following the mouse
document.onmousemove = function(e) {
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = '⭐';
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    star.style.position = 'absolute';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 500);
};

// Banner 
const banner = document.createElement('div');
banner.style.textAlign = 'center';
banner.style.color = '#FFD700';
banner.innerHTML = 'Best viewed in Netscape Navigator 4.0 or higher';
document.body.insertBefore(banner, document.body.firstChild);

