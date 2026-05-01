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

// DATA NISN & FILE
const dataSiswa = {
    "0012345671": "SKL_BUDI_2026.pdf",
    "0012345672": "SKL_ANI_2026.pdf"
};

function cekLulus() {
    const input = document.getElementById("nisnInput").value;
    const errorMsg = document.getElementById("errorMsg");
    const btn = document.querySelector(".btn-glow");

    if (dataSiswa[input]) {
        errorMsg.classList.add("hidden");
        btn.innerText = "MENGUNDUH...";
        
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = "files/" + dataSiswa[input];
            link.download = dataSiswa[input];
            link.click();
            btn.innerText = "UNDUH SKL";
        }, 1500);
    } else {
        errorMsg.classList.remove("hidden");
    }
}
