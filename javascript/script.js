// tombol untuk membuka undangan
    document.querySelector('.cover-btn').addEventListener('click', function() {
        document.getElementById('main-content').style.display = 'flex';
        document.getElementById('couple-info').scrollIntoView({
            behavior: 'smooth'
        });
        document.getElementById('WeddingSong').play();
    });

    // Countdown Timer
    const countdownDate = new Date("June 6, 2025 00:00:00").getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<p>Acara telah dimulai!</p>";
        return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }, 1000);

    // Warning setelah isi form

    document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terimakasih telah mengisi RSVP!');
    this.reset(); 
  });
  