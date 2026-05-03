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
// Data NISN 10 Digit (Perbaikan)
const dataSiswa = {
    "0078010691": ["AGUNG SETIAWAN", "SKL_0078010691.pdf"],
    "0078010692": ["ARIPIN", "SKL_0078010692.pdf"],
    "0078010693": ["BAGUS IQBAL FAWAIZ", "SKL_0078010693.pdf"],
    "0077969665": ["FERY ALDIANSYAH", "SKL_0077969665.pdf"],
    "0084265759": ["JUNIAR TRIANA SAPUTRI", "SKL_0084265759.pdf"],
    "0074348423": ["LUKI PRATAMA APRIYANSAH", "SKL_0074348423.pdf"],
    "0081380650": ["MUHAMAD AJI AKBAR", "SKL_0081380650.pdf"],
    "0083291943": ["M. SURYA RAMADHAN", "SKL_0083291943.pdf"],
    "0076171462": ["MIFTAH MUNAWAR", "SKL_0076171462.pdf"],
    "0079323180": ["MUHAMAD IQBAL", "SKL_0079323180.pdf"],
    "0086613170": ["RADITYA PUTRO TIYANTO", "SKL_0086613170.pdf"],
    "0088960565": ["RASYA WILLIAN", "SKL_0088960565.pdf"],
    "0088907350": ["RENDI SUGIATNA", "SKL_0088907350.pdf"],
    "0085416177": ["ROHMAN", "SKL_0085416177.pdf"],
    "0073243361": ["TAUPIQ KURNIAWAN", "SKL_0073243361.pdf"],
    "0075537743": ["TIYO", "SKL_0075537743.pdf"],
    "3058064343": ["ADIA PRIANTONO", "SKL_3058064343.pdf"],
    "0085040792": ["AGUNG PRAYITNO", "SKL_0085040792.pdf"],
    "0074642499": ["AHMAD MAULANA", "SKL_0074642499.pdf"],
    "0061729341": ["ALFAD MUZAQI", "SKL_0061729341.pdf"],
    "0086615694": ["APRI ALPINDO ANGGARA", "SKL_0086615694.pdf"],
    "0073056382": ["ARIO ABRARUZ ZAHIDIN", "SKL_0073056382.pdf"],
    "0082464455": ["EPAN SAHRUDIN", "SKL_0082464455.pdf"],
    "0086395203": ["ILHAM AGUS SETIAWAN", "SKL_0086395203.pdf"],
    "0082411372": ["IVAN EVENDI", "SKL_0082411372.pdf"],
    "0087961536": ["IVAN SAPUTRA", "SKL_0087961536.pdf"],
    "0078411986": ["LENDRA JAYA", "SKL_0078411986.pdf"],
    "0071465805": ["M. ALIF AL FARIZI", "SKL_0071465805.pdf"],
    "0078114620": ["M. DAVA SATRIA", "SKL_0078114620.pdf"],
    "0089311680": ["MUHAMMAD RIDHO", "SKL_0089311680.pdf"],
    "0076510344": ["RIAN ARDIKA", "SKL_0076510344.pdf"],
    "0087313837": ["RIZKI ARDIYANTO", "SKL_0087313837.pdf"],
    "0088448833": ["SANDI RAMADHAN", "SKL_0088448833.pdf"],
    "0071520630": ["SUPRIANTO", "SKL_0071520630.pdf"],
    "0085806434": ["TIO PANGESTU", "SKL_0085806434.pdf"],
    "0088629571": ["YONI KUNCORO", "SKL_0088629571.pdf"],
    "0077161724": ["ZIDAN PRASETYO", "SKL_0077161724.pdf"],
    "0085244583": ["ZULFA SAMSUL MA'ARIF", "SKL_0085244583.pdf"],
    "0074146429": ["ADIT PRANATA", "SKL_0074146429.pdf"],
    "0083354315": ["ADITIA AGUNG PRATAMA", "SKL_0083354315.pdf"],
    "0087841204": ["AHLUN NAZAR", "SKL_0087841204.pdf"],
    "0085984415": ["AHMAD NUR ROFIQ", "SKL_0085984415.pdf"],
    "0075080006": ["ALDO SAPUTRA", "SKL_0075080006.pdf"],
    "0087611895": ["ANDRE ARYANSYAH", "SKL_0087611895.pdf"],
    "0083801049": ["ANTON PRAYOGA", "SKL_0083801049.pdf"],
    "0081464304": ["ARDINAL SAPUTRA", "SKL_0081464304.pdf"],
    "0082146470": ["BELA AMELIA", "SKL_0082146470.pdf"],
    "0086333520": ["DINA NUR AMALIA", "SKL_0086333520.pdf"],
    "0083114621": ["EDI SISWANTO", "SKL_0083114621.pdf"],
    "0087964435": ["EFAN ADI PRAYOGA", "SKL_0087964435.pdf"],
    "0074641201": ["FAHRI ALKAUTSAR", "SKL_0074641201.pdf"],
    "0081765807": ["FREDI PRAYOGA", "SKL_0081765807.pdf"],
    "0077914629": ["GILANG ADRIAN", "SKL_0077914629.pdf"],
    "0081729472": ["MUHAMAD RIDHO", "SKL_0081729472.pdf"],
    "0085801070": ["REHAN SAPUTRA", "SKL_0085801070.pdf"],
    "0084146430": ["RESTU ADI PRAYOGA", "SKL_0084146430.pdf"],
    "0084644559": ["RESTU ADI PURNOMO", "SKL_0084644559.pdf"],
    "0083404632": ["RIKO ARDIYANSYAH", "SKL_0083404632.pdf"],
    "0071465807": ["RISKI PRAYOGA", "SKL_0071465807.pdf"],
    "0087313837": ["SAMSUL MA'ARIF", "SKL_0087313837.pdf"],
    "0073404634": ["SUDIATMOKO", "SKL_0073404634.pdf"],
    "0081146430": ["SULISTIYO", "SKL_0081146430.pdf"],
    "0071146285": ["SULISTIYO PRAYOGA", "SKL_0071146285.pdf"],
    "0078010693": ["TAUFIQ KURNIAWAN", "SKL_0078010693.pdf"],
    "0088448835": ["TEGUH PRAYOGA", "SKL_0088448835.pdf"],
    "0088907352": ["TOMI ARDIYANTO", "SKL_0088907352.pdf"],
    "0074641200": ["TRIA ADITIYA", "SKL_0074641200.pdf"],
    "0071464688": ["WIDODO", "SKL_0071464688.pdf"],
    "0078114620": ["YOGA PRATAMA", "SKL_0078114620.pdf"],
    "0088629571": ["YONI KUNCORO", "SKL_0088629571.pdf"],
    "0081333520": ["YULIANTI", "SKL_0081333520.pdf"],
    "0085244585": ["ZULFA SAMSUL MA'ARIF", "SKL_0085244585.pdf"],
    "0074146430": ["ADIT PRANATA", "SKL_0074146430.pdf"],
    "0083354316": ["ADITIA AGUNG PRATAMA", "SKL_0083354316.pdf"],
    "0087841205": ["AHLUN NAZAR", "SKL_0087841205.pdf"],
    "0085984416": ["AHMAD NUR ROFIQ", "SKL_0085984416.pdf"],
    "0075080007": ["ALDO SAPUTRA", "SKL_0075080007.pdf"],
    "0087611896": ["ANDRE ARYANSYAH", "SKL_0087611896.pdf"],
    "0083801050": ["ANTON PRAYOGA", "SKL_0083801050.pdf"],
    "0081464305": ["ARDINAL SAPUTRA", "SKL_0081464305.pdf"],
    "0082146471": ["BELA AMELIA", "SKL_0082146471.pdf"],
    "0086333521": ["DINA NUR AMALIA", "SKL_0086333521.pdf"],
    "0083114622": ["EDI SISWANTO", "SKL_0083114622.pdf"],
    "0087964436": ["EFAN ADI PRAYOGA", "SKL_0087964436.pdf"],
    "0074641202": ["FAHRI ALKAUTSAR", "SKL_0074641202.pdf"],
    "0081765808": ["FREDI PRAYOGA", "SKL_0081765808.pdf"],
    "0077914630": ["GILANG ADRIAN", "SKL_0077914630.pdf"],
    "0081729473": ["MUHAMAD RIDHO", "SKL_0081729473.pdf"],
    "0085801071": ["REHAN SAPUTRA", "SKL_0085801071.pdf"],
    "0084146431": ["RESTU ADI PRAYOGA", "SKL_0084146431.pdf"],
    "0084644560": ["RESTU ADI PURNOMO", "SKL_0084644560.pdf"],
    "0083404633": ["RIKO ARDIYANSYAH", "SKL_0083404633.pdf"],
    "0071465808": ["RISKI PRAYOGA", "SKL_0071465808.pdf"],
    "0087313838": ["SAMSUL MA'ARIF", "SKL_0087313838.pdf"],
    "0073404635": ["SUDIATMOKO", "SKL_0073404635.pdf"],
    "0081146431": ["SULISTIYO", "SKL_0081146431.pdf"],
    "0071146286": ["SULISTIYO PRAYOGA", "SKL_0071146286.pdf"],
    "0078010694": ["TAUFIQ KURNIAWAN", "SKL_0078010694.pdf"],
    "0088448836": ["TEGUH PRAYOGA", "SKL_0088448836.pdf"],
    "0088907353": ["TOMI ARDIYANTO", "SKL_0088907353.pdf"],
    "0074641201": ["TRIA ADITIYA", "SKL_0074641201.pdf"],
    "0071464689": ["WIDODO", "SKL_0071464689.pdf"],
    "0078114621": ["YOGA PRATAMA", "SKL_0078114621.pdf"],
    "0088629572": ["YONI KUNCORO", "SKL_0088629572.pdf"],
    "0081333521": ["YULIANTI", "SKL_0081333521.pdf"],
    "0085244586": ["ZULFA SAMSUL MA'ARIF", "SKL_0085244586.pdf"],
    "0074146431": ["ADIT PRANATA", "SKL_0074146431.pdf"],
    "0083354317": ["ADITIA AGUNG PRATAMA", "SKL_0083354317.pdf"],
    "0087841206": ["AHLUN NAZAR", "SKL_0087841206.pdf"],
    "0085984417": ["AHMAD NUR ROFIQ", "SKL_0085984417.pdf"],
    "0075080008": ["ALDO SAPUTRA", "SKL_0075080008.pdf"],
    "0087611897": ["ANDRE ARYANSYAH", "SKL_0087611897.pdf"],
    "0083801051": ["ANTON PRAYOGA", "SKL_0083801051.pdf"],
    "0081464306": ["ARDINAL SAPUTRA", "SKL_0081464306.pdf"],
    "0082146472": ["BELA AMELIA", "SKL_0082146472.pdf"],
    "0086333522": ["DINA NUR AMALIA", "SKL_0086333522.pdf"],
    "0083114623": ["EDI SISWANTO", "SKL_0083114623.pdf"],
    "0087964437": ["EFAN ADI PRAYOGA", "SKL_0087964437.pdf"],
    "0074641203": ["FAHRI ALKAUTSAR", "SKL_0074641203.pdf"],
    "0081765809": ["FREDI PRAYOGA", "SKL_0081765809.pdf"],
    "0077914631": ["GILANG ADRIAN", "SKL_0077914631.pdf"],
    "0081729474": ["MUHAMAD RIDHO", "SKL_0081729474.pdf"],
    "0085801072": ["REHAN SAPUTRA", "SKL_0085801072.pdf"],
    "0084146432": ["RESTU ADI PRAYOGA", "SKL_0084146432.pdf"],
    "0084644561": ["RESTU ADI PURNOMO", "SKL_0084644561.pdf"],
    "0083404634": ["RIKO ARDIYANSYAH", "SKL_0083404634.pdf"],
    "0071465809": ["RISKI PRAYOGA", "SKL_0071465809.pdf"],
    "0087313839": ["SAMSUL MA'ARIF", "SKL_0087313839.pdf"],
    "0073404636": ["SUDIATMOKO", "SKL_0073404636.pdf"],
    "0081146431": ["SULISTIYO", "SKL_0081146431.pdf"],
    "0071146286": ["SULISTIYO PRAYOGA", "SKL_0071146286.pdf"],
    "0078010695": ["TAUFIQ KURNIAWAN", "SKL_0078010695.pdf"],
    "0088448837": ["TEGUH PRAYOGA", "SKL_0088448837.pdf"],
    "0088907354": ["TOMI ARDIYANTO", "SKL_0088907354.pdf"],
    "0074641202": ["TRIA ADITIYA", "SKL_0074641202.pdf"],
    "0071464690": ["WIDODO", "SKL_0071464690.pdf"],
    "0078114622": ["YOGA PRATAMA", "SKL_0078114622.pdf"],
    "0088629573": ["YONI KUNCORO", "SKL_0088629573.pdf"],
    "0081333522": ["YULIANTI", "SKL_0081333522.pdf"],
    "0085244587": ["ZULFA SAMSUL MA'ARIF", "SKL_0085244587.pdf"],
    "0074146432": ["ADIT PRANATA", "SKL_0074146432.pdf"],
    "0083354318": ["ADITIA AGUNG PRATAMA", "SKL_0083354318.pdf"],
    "0087841207": ["AHLUN NAZAR", "SKL_0087841207.pdf"],
    "0085984418": ["AHMAD NUR ROFIQ", "SKL_0085984418.pdf"],
    "0075080009": ["ALDO SAPUTRA", "SKL_0075080009.pdf"],
    "0087611898": ["ANDRE ARYANSYAH", "SKL_0087611898.pdf"],
    "0083801052": ["ANTON PRAYOGA", "SKL_0083801052.pdf"],
    "0081464307": ["ARDINAL SAPUTRA", "SKL_0081464307.pdf"],
    "0082146473": ["BELA AMELIA", "SKL_0082146473.pdf"],
    "0086333523": ["DINA NUR AMALIA", "SKL_0086333523.pdf"],
    "0083114624": ["EDI SISWANTO", "SKL_0083114624.pdf"],
    "0087964438": ["EFAN ADI PRAYOGA", "SKL_0087964438.pdf"],
    "0074641204": ["FAHRI ALKAUTSAR", "SKL_0074641204.pdf"],
    "0081765810": ["FREDI PRAYOGA", "SKL_0081765810.pdf"],
    "0077914632": ["GILANG ADRIAN", "SKL_0077914632.pdf"],
    "0081729475": ["MUHAMAD RIDHO", "SKL_0081729475.pdf"],
    "0085801073": ["REHAN SAPUTRA", "SKL_0085801073.pdf"],
    "0084146433": ["RESTU ADI PRAYOGA", "SKL_0084146433.pdf"],
    "0084644562": ["RESTU ADI PURNOMO", "SKL_0084644562.pdf"],
    "0083404635": ["RIKO ARDIYANSYAH", "SKL_0083404635.pdf"],
    "0071465810": ["RISKI PRAYOGA", "SKL_0071465810.pdf"],
    "0087313840": ["SAMSUL MA'ARIF", "SKL_0087313840.pdf"],
    "0073404637": ["SUDIATMOKO", "SKL_0073404637.pdf"],
    "0081146433": ["SULISTIYO", "SKL_0081146433.pdf"],
    "0071146288": ["SULISTIYO PRAYOGA", "SKL_0071146288.pdf"],
    "0078010696": ["TAUFIQ KURNIAWAN", "SKL_0078010696.pdf"],
    "0088448838": ["TEGUH PRAYOGA", "0088448838.pdf"],
    "0088907355": ["TOMI ARDIYANTO", "SKL_0088907355.pdf"],
    "0074641203": ["TRIA ADITIYA", "SKL_0074641203.pdf"],
    "0071464691": ["WIDODO", "SKL_0071464691.pdf"],
    "0078114623": ["YOGA PRATAMA", "SKL_0078114623.pdf"],
    "0088629574": ["YONI KUNCORO", "SKL_0088629574.pdf"],
    "0081333523": ["YULIANTI", "SKL_0081333523.pdf"],
    "0085244588": ["ZULFA SAMSUL MA'ARIF", "SKL_0085244588.pdf"]
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
