// Sticky Header: Mengubah tampilan header saat di-scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle: Membuka dan menutup menu pada tampilan HP
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu: Menutup menu otomatis saat salah satu link diklik
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

document.getElementById('send-wa').addEventListener('click', function() {
    // Ambil data berdasarkan placeholder yang ada di form
    const nama = document.querySelector('input[placeholder="Nama Lengkap"]').value;
    const email = document.querySelector('input[placeholder="Alamat Email"]').value;
    const subjek = document.querySelector('input[placeholder="Subjek Pesan"]').value;
    const pesan = document.querySelector('textarea[placeholder="Pesan Anda"]').value;
   
    const nomorWA = "6285889264208"; 
    
    const teks = `Halo Fauzan, saya *${nama}* (${email}).%0A%0A*Subjek:* ${subjek}%0A*Pesan:*%0A${pesan}`;

    // Gunakan variabel nomorWA yang sudah dibuat
    const url = `https://wa.me/${nomorWA}?text=${teks}`;

    // Validasi sederhana
    if(nama.trim() !== "" && pesan.trim() !== "") {
        window.open(url, '_blank');
    } else {
        alert("Mohon isi Nama dan Pesan terlebih dahulu agar bisa terhubung ke WhatsApp.");
    }
});