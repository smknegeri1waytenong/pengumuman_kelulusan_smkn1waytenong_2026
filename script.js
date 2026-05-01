// ATUR TANGGAL DISINI
const targetDate = new Date("May 2, 2026 01:01:00").getTime();

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

// Data Siswa (Pastikan formatnya: "NISN": ["Nama Siswa", "NamaFile.pdf"])
const dataSiswa = {
    "0012345671": ["BUDI SANTOSO", "SKL_BUDI.pdf"],
    "0012345672": ["ANI WIJAYA", "SKL_ANI.pdf"],
    "0012345673": ["CITRA LESTARI", "SKL_CITRA.pdf"]
};

function cekLulus() {
    const input = document.getElementById("nisnInput").value;
    const downloadSection = document.getElementById("download-section");
    const errorMsg = document.getElementById("errorMsg");

    if (dataSiswa[input]) {
        const namaSiswa = dataSiswa[input][0];
        const namaFile = dataSiswa[input][1];

        errorMsg.classList.add("hidden");
        
        // Mengganti isi tampilan menjadi keterangan LULUS
        downloadSection.innerHTML = `
            <div class="result-card">
                <div class="badge-lulus">LULUS</div>
                <h3 class="student-name">${namaSiswa}</h3>
                <p class="congrats-text">Selamat! Anda dinyatakan LULUS dari SMKN 1 Way Tenong. Silakan unduh dokumen SKL di bawah ini:</p>
                <button onclick="prosesDownload('${namaFile}')" class="btn-glow">UNDUH SKL (PDF)</button>
                <button onclick="location.reload()" class="btn-back">Kembali</button>
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
    link.click();
}
