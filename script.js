// ATUR TANGGAL DISINI
const targetDate = new Date("May 4, 2026 17:00:00").getTime();

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer-wrapper").classList.add("hidden");
        document.getElementById("download-section").classList.remove("hidden");
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
};

const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Jalankan langsung saat load

// Data Siswa: "NISN": ["Nama", "NamaFile.pdf"]
const dataSiswa = {
    "0012345671": ["AGUS PRAYITNO", "SKL_0012345671.pdf"],
    "0012345672": ["PINARAX KIOS", "SKL_0012345672.pdf"]
};

function cekKelulusan() {
    const input = document.getElementById("nisnInput").value;
    const resultContainer = document.getElementById("result-container");
    const errorMsg = document.getElementById("errorMsg");

    if (dataSiswa[input]) {
        const namaSiswa = dataSiswa[input][0];
        const namaFile = dataSiswa[input][1];

        errorMsg.classList.add("hidden");
        
        // Mengubah isi container secara dinamis
        resultContainer.innerHTML = `
            <div class="result-card">
                <div class="badge-lulus">LULUS</div>
                <h3 class="student-name">${namaSiswa}</h3>
                <p class="congrats-text">Selamat! Anda dinyatakan lulus. Klik tombol di bawah untuk mengunduh dokumen SKL.</p>
                
                <!-- Tombol berubah menjadi UNDUH SKL -->
                <button onclick="prosesDownload('${namaFile}')" class="btn-glow">UNDUH SKL (PDF)</button>
                
                <br>
                <button onclick="location.reload()" class="btn-back">Cek NISN Lain</button>
            </div>
        `;
    } else {
        errorMsg.classList.remove("hidden");
    }
}

function prosesDownload(file) {
    const link = document.createElement('a');
    link.href = "files/" + file;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
