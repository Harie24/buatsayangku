let noClickCount = 0; // Hitung jumlah klik "Tidak"

function showName() {
    const name = document.getElementById('partnerName').value;
    const photo = document.getElementById('photo');
    const output = document.getElementById('output');

    if (name === "valda") {
        // Menyiapkan tampilan baru
        document.body.innerHTML = `
            <div class="blur-box" style="text-align: center;">
                <h1>Halo ${name}!</h1>
                <img src="foto/photo3.jpg" alt="Foto" style="width: 150px; height: auto; margin-top: 10px;">
                <p>IHHHHH IYAAAA BETULLL PACAR AKU YANG PALING CANTIKKK MWEHEHEHHEHE💘💘</p>
                <button onclick="goToGallery()">Mau tau ga siapa paling cantik di dunia?</button>
                <button onclick="showMessage()">Ada kata-kata nichh buat sayang akuuu</button>
            </div>
            <div id="flowers-container"></div>
        `;

        // Menambahkan efek bunga
        for (let i = 0; i < 20; i++) {
            createFlower();
        }
    } else {
        output.innerText = `Tetotttt salahhhh`;
        photo.src = "foto/photo2.jpg"; // Ganti 'photo2.jpg' dengan gambar yang diinginkan jika salah
    }
}

function createFlower() {
    const flowerContainer = document.getElementById('flowers-container');
    const flower = document.createElement('img');
    flower.src = 'foto/flower.png'; // Ganti 'flower.png' dengan nama file gambar bunga
    flower.className = 'flower';
    flower.style.position = 'absolute';
    flower.style.top = Math.random() * 100 + 'vh'; // Atur posisi vertikal acak
    flower.style.left = Math.random() * 100 + 'vw'; // Atur posisi horizontal acak
    flower.style.opacity = Math.random(); // Atur transparansi acak
    flower.style.animation = 'float 5s infinite'; // Efek animasi melayang

    flowerContainer.appendChild(flower);

    // Hapus bunga setelah 5 detik
    setTimeout(() => {
        flowerContainer.removeChild(flower);
    }, 5000);
}

function goToGallery() {
    document.body.innerHTML = `
        <div class="blur-box" style="text-align: center;">
            <h1>Inii bidadari aku paling cantik😍😍</h1>
            <div class="gallery">
                <img src="foto/pacar1.jpg" alt="Foto 1" class="gallery-photo">
                <img src="foto/pacar2.jpg" alt="Foto 2" class="gallery-photo">
                <img src="foto/pacar3.jpg" alt="Foto 3" class="gallery-photo">
                <img src="foto/pacar4.jpg" alt="Foto 4" class="gallery-photo">
                <img src="foto/pacar5.jpg" alt="Foto 5" class="gallery-photo">
                <img src="foto/pacar6.jpg" alt="Foto 6" class="gallery-photo">
                <!-- Tambahkan lebih banyak gambar sesuai kebutuhan -->
            </div>
            <button onclick="goBack()">Kembali</button>
        </div>
    `;
}

function showMessage() {
    let currentStep = 0; // Mulai dari langkah pertama
    const messages = [
        "Hai sayangku, makasih yaa udah milih aku",
        "ga pernah berhenti aku bersyukur dan berterima kasih bisa bersamamu, memikirkanmu, semua perasaan aku rasain aku bener bener senang. walaupun mungkin buat aku kesel atau badmood, aku ga tau kenapaa selalu sayang sama ayy",
        "semua momen aku jalani dan semua berhubungan sama sayang selalu istimewa buat aku. aku selalu berdoa agar kita bisa bersama selamanya, aku rasa itu doang keinginan aku",
        "ga pernah aku mikir yang aneh-aneh jadi aku harap sayang ga jelekin diri sendiri, mungkin aku ga pantas bilang ini tapi aku bener bener mau jadi terbaik buat sayang, dan sayang juga benar benar terbaik buat aku. aku sayang banget sama valda my princess, love, partner, wife, girlfriend, prettiest girl in the world, my everything, my love",
        "sayang aku mau nanya sesuatu dehh jawab jujur aja gapapa sayang"
    ];

    document.body.innerHTML = `
        <div class="blur-box" id="message-box" style="text-align: center;">
            <h1 id="message-text" style="color: black; font-size: 1.3em;">${messages[currentStep]}</h1> <!-- Ukuran font h1 lebih kecil -->
            <p style="font-size: 1em;"><small>Tekan layar untuk melanjutkan...</small></p> <!-- Ukuran font di paragraf lebih kecil -->
        </div>
    `;

    // Event listener untuk lanjutkan pesan ketika ditekan
    document.getElementById('message-box').addEventListener('click', () => {
        currentStep++;
        if (currentStep < messages.length) {
            // Update pesan di setiap klik
            document.getElementById('message-text').innerText = messages[currentStep];
        } else {
            // Jika pesan selesai, tampilkan pertanyaan akhir dengan tombol
            showQuestion();
        }
    });
}

function showQuestion() {
    document.body.innerHTML = `
<div class="blur-box" style="text-align: center;">
            <h1>Apakah kamu mencintaiku??</h1>
            <img src="foto/photo4.jpg" alt="Foto" style="width: 150px; height: auto; margin-top: 10px;"> <!-- Ganti dengan foto yang sesuai -->
            <div style="margin-top: 20px;">
                <button onclick="answerYesToQuestion()">Iya</button>
                <button id="noButton" onclick="answerNoToQuestion()">Tidak</button>
            </div>
        </div>
    `;
}

function answerYesToQuestion() {
    // Jika jawab "Ya", lanjutkan ke pertanyaan akhir
    showFinalQuestion();
}

function answerNoToQuestion() {
  noClickCount++; // Tambah hitungan setiap kali tombol "Tidak" diklik

    // Ganti gambar berdasarkan jumlah klik
    const imageMap = [
        'foto/cry1.jpg',
        'foto/cry2.jpg', 
        'foto/cry3.jpg', 
        'foto/cry4.jpg',
        'foto/cry5.jpg'
    ];

 // Gambar yang ditampilkan berdasarkan klik
     const currentImage = imageMap[noClickCount % imageMap.length];

    // Mengacak posisi tombol "Tidak"
    const randomTop = Math.random() * 10; // Atur posisi vertikal acak (30% untuk batas atas)
    const randomLeft = Math.random() * 10; // Atur posisi horizontal acak (30% untuk batas kiri)

    // Tampilkan tampilan dengan gambar yang diperbarui dan tombol "Tidak" berpindah
    const finalQuestionBox = document.querySelector('.blur-box');
    finalQuestionBox.querySelector('img').src = currentImage; // Ganti gambar berdasarkan klik
    const noButton = document.getElementById('noButton');

    // Pastikan tombol "Tidak" ada sebelum mengubah posisinya
    if (noButton) {
        noButton.style.position = 'relative'; // Atur posisi relatif
        noButton.style.top = randomTop + 'vh'; // Atur posisi acak
        noButton.style.left = randomLeft + 'vw'; // Atur posisi acak
    }
}

    function showFinalQuestion() {
        document.body.innerHTML = `
            <div class="blur-box" style="text-align: center;">
                <h1>Apakah kamu mau terus bersamaku selamanya?</h1>
                <img src="foto/photo4.jpg" alt="Foto" style="width: 150px; height: auto; margin-top: 10px;"> <!-- Ganti dengan foto yang sesuai -->
                <div style="margin-top: 20px;">
                    <button onclick="answerYes()">Iya</button>
                    <button id="noButton" onclick="answerNo()">Tidak</button>
                </div>
            </div>
        `;
    }

function answerYes() {
    document.body.innerHTML = `
        <div class="blur-box" style="text-align: center;">
            <h1>Yay! aku juga mau! Terima kasih sudah menjadi bagian hidupku!</h1>
            <img src="foto/photo5.jpg" alt="Foto" style="width: 150px; height: auto; margin-top: 10px;"> <!-- Ganti dengan foto yang sesuai -->
            <p><small>Selamanya bersama!</small></p>
            <button onclick="goBack()">Kembali</button> <!-- Tombol Kembali ditambahkan di sini -->
        </div>
    `;
}

function answerNo() {
    noClickCount++; 
    
    const imageMap = [
        'foto/cry1.jpg',
        'foto/cry2.jpg', 
        'foto/cry3.jpg', 
        'foto/cry4.jpg',
        'foto/cry5.jpg'
    ];

 // Gambar yang ditampilkan berdasarkan klik
     const currentImage = imageMap[noClickCount % imageMap.length];

    // Mengacak posisi tombol "Tidak"
    const randomTop = Math.random() * 10; // Atur posisi vertikal acak (30% untuk batas atas)
    const randomLeft = Math.random() * 10; // Atur posisi horizontal acak (30% untuk batas kiri)

    // Tampilkan tampilan dengan gambar yang diperbarui dan tombol "Tidak" berpindah
    const finalQuestionBox = document.querySelector('.blur-box');
    finalQuestionBox.querySelector('img').src = currentImage; // Ganti gambar berdasarkan klik
    const noButton = document.getElementById('noButton');

    // Pastikan tombol "Tidak" ada sebelum mengubah posisinya
    if (noButton) {
        noButton.style.position = 'relative'; // Atur posisi relatif
        noButton.style.top = randomTop + 'vh'; // Atur posisi acak
        noButton.style.left = randomLeft + 'vw'; // Atur posisi acak
    }
}

function goBack() {
    document.body.innerHTML = `
    <div class="blur-box" style="text-align: center;">
            <h1>Halo ${name}!</h1>
            <img src="foto/photo3.jpg" alt="Foto" style="width: 150px; height: auto; margin-top: 10px;">
            <p>IHHHHH IYAAAA BETULLL PACAR AKU YANG PALING CANTIKKK MWEHEHEHHEHE💘💘</p>
            <button onclick="goToGallery()">Mau tau ga siapa paling cantik di dunia?</button>
            <button onclick="showMessage()">Ada kata-kata nichh buat sayang akuuu</button>
        </div>
        <div id="flowers-container"></div>
    `;
}
