const questions = [
    {
        question: "Diantara 4 warna ini, mana yang paling menunjukkan kamu?",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "Hijau", scores: { A: 1 } },
            B: { text: "Biru", scores: { B: 1 } },
            C: { text: "Merah", scores: { C: 1 } },
            D: { text: "Kuning", scores: { D: 1 } }
        }
    },
    {
        question: "Aktivitas apa yang paling kamu nikmati saat ada waktu luang?",
        image: "Slide1.jpeg",       
        answers: {
            A: { text: "Menghabiskan waktu bersama teman dan keluarga.", scores: { A: 1 } },
            B: { text: "Santai di rumah/kos sambil nonton film.", scores: { B: 1 } },
            C: { text: "Mencoba hobi atau aktivitas baru.", scores: { C: 1 } },
            D: { text: "Bekerja pada proyek pribadi atau belajar keterampilan baru.", scores: { D: 1 } }
        }
    },
    {
        question: "Jika kamu dihadapkan dengan deadline yang mendekat, bagaimana reaksi kamu?",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "Bertanya/meminta saran ke teman sebelum menyelesaikannya.", scores: { A: 1 } },
            B: { text: "Sudah terbiasa mengerjakan tugas mendekati deadline sehingga biasa saja.", scores: { B: 1 } },
            C: { text: "Cukup tertekan tetapi tetap berusaha mengerjakannya dengan sekreatif mungkin meskipun waktunya terbatas.", scores: { C: 1 } },
            D: { text: "Mengerjakannya dengan detail dan teratur, sesuai dengan rencana.", scores: { D: 1 } }
        }
    },
    {
        question: "Bagaimana cara kamu membuat keputusan penting (dalam konteks untuk diri sendiri)?",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "Berdiskusi dengan orang terdekat dan mendapatkan masukan.", scores: { A: 1 } },
            B: { text: "Mengikuti arus dan insting.", scores: { B: 1 } },
            C: { text: "Mencoba berbagai pilihan dan melihat hasilnya.", scores: { C: 1 } },
            D: { text: "Membuat daftar pro dan kontra, lalu memilih yang terbaik.", scores: { D: 1 } }
        }
    },
    {
        question: "Bagaimana cara kamu membuat keputusan penting (dalam konteks untuk orang lain)?",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "Berdiskusi dengan orang terdekat dan mendapatkan masukan.", scores: { A: 1 } },
            B: { text: "Mengikuti arus dan insting.", scores: { B: 1 } },
            C: { text: "Mencoba berbagai pilihan dan melihat hasilnya.", scores: { C: 1 } },
            D: { text: "Membuat daftar pro dan kontra, lalu memilih yang terbaik.", scores: { D: 1 } }
        }
    },
    {
        question: "Pilih destinasi liburan yang paling kamu impikan:",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "Mengunjungi tempat-tempat bersejarah dan budaya.", scores: { A: 1 } },
            B: { text: "Berlibur di pantai yang tenang.", scores: { B: 1 } },
            C: { text: "Berpetualang di pegunungan atau tempat ekstrem lainnya.", scores: { C: 1 } },
            D: { text: "Mengikuti workshop atau kursus di luar negeri.", scores: { D: 1 } }
        }
    },
    {
        question: "Seperti apa lingkungan kerja yang ideal menurut kamu?",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "Kolaboratif dan mendukung.", scores: { A: 1 } },
            B: { text: "Bebas tekanan dan santai.", scores: { B: 1 } },
            C: { text: "Dinamis dan penuh tantangan.", scores: { C: 1 } },
            D: { text: "Terorganisir dan terstruktur.", scores: { D: 1 } }
        }
    },
    {
        question: "Bagaimana cara kamu menangani kritik?",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "Merasa sedih tapi mencoba memahami sudut pandang orang lain.", scores: { A: 1 } },
            B: { text: "Menerima dengan santai dan tidak terlalu dipikirkan.", scores: { B: 1 } },
            C: { text: "Menganggapnya sebagai tantangan dan motivasi untuk berubah.", scores: { C: 1 } },
            D: { text: "Menganalisis kritik tersebut dan mencari cara untuk memperbaiki diri.", scores: { D: 1 } }
        }
    },
    {
        question: "Bagaimana kamu merayakan kesuksesan?",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "Mengadakan acara bersama teman dan keluarga.", scores: { A: 1 } },
            B: { text: "Menikmati momen dengan tenang dan bersyukur.", scores: { B: 1 } },
            C: { text: "Merencanakan petualangan atau proyek baru.", scores: { C: 1 } },
            D: { text: "Refleksi diri dan merencanakan langkah selanjutnya dengan lebih baik.", scores: { D: 1 } }
        }
    },
    {
        question: "Pilih lagu favorit kamu:",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "\"Heal the World\" - Michael Jackson", scores: { A: 1 } },
            B: { text: "\"It’s my life” - Bon Jovi", scores: { B: 1 } },
            C: { text: "\"Adventure of a Lifetime\" - Coldplay", scores: { C: 1 } },
            D: { text: "\"Imagine\" - John Lennon", scores: { D: 1 } }
        }
    },
    {
        question: "Pilih quotes yang paling kamu suka:",
        image: "Slide1.jpeg",
        answers: {
            A: { text: "\"The purpose of human life is to serve, and to show compassion and the will to help others.\" - Albert Schweitzer", scores: { A: 1 } },
            B: { text: "\"Life is really simple, but we insist on making it complicated.\” - Confucius", scores: { B: 1 } },
            C: { text: "\"Life is either a daring adventure or nothing at all\" - Helen Keller", scores: { C: 1 } },
            D: { text: "\"Success is not the key to happiness. Happiness is the key to success\" -  Albert Schweitzer", scores: { D: 1 } }
        }
    }
];


const resultOptions = {
    A: {
        title: "Daun Jumbai",
        text: "Kamu adalah Daun Jumbai! Kamu sangat mudah berteman dengan orang lain, sampai kamu memiliki banyak teman. Namun, kamu kadang merasa khawatir dan berpikir kalau pertemanan yang kamu miliki sebenarnya hanya satu sisi saja.",
        description: "Kamu juga sangat mencintai perdamaian, namun kadang kamu merasa kalau kamu adalah orang yang harus menjaga perdamaian itu. Kamu selalu memperhatikan orang lain dan berusaha membuat mereka senang. Secara tidak langsung, itu dapat membebani kamu secara mental.",
        image: "Daun Jumbai-Border.png"
    },
    B: {
        title: "Relung/Lung",
        text: "Kamu adalah Relung! Kamu adalah orang yang santai banget, mau itu tugas yang sangat mendekati tenggat waktu atau bahkan lomba yang sangat penting untuk kamu, kamu masih dapat bercanda dan tidak terlalu memikirkan hal tersebut hingga ke menit terakhir.",
        description: "Namun dibalik santaimu, kamu sebenarnya sulit untuk membuat pilihan. Karena kamu terbiasa untuk mengikuti keputusan orang lain, ketika kamu diminta untuk memilih, kamu sering merasa tidak nyaman.",
        image: "Relung-Border.png"
    },
    C: {
        title: "Burung Merak",
        text: "Kamu adalah Burung Merak! Kamu adalah tipe yang ingin tau banyak hal dan memiliki rasa penasaran yang tinggi, oleh karena itu, kamu memiliki banyak sekali hobi dan mencoba hal baru.",
        description: "Tapi karena kamu mudah bosan, kamu adalah orang yang sangat kreatif. Baik itu dalam gambar, desain atau karya tangan, asalkan kamu mempunyai alat dan bahannya, kamu dapat menciptakan sebuah karya yang indah.",
        image: "Burung Merak-Border.png"
    },
    D: {
        title: "Sulur Ubi Jalar",
        text: "Kamu adalah Sulur Ubi Jalar! Kamu adalah orang yang paling pertama ditunjuk untuk menjadi ketua! Baik dalam kelas, project, atau bahkan untuk liburan, orang-orang selalu menunjuk kamu untuk menjadi ketua.",
        description: "Walaupun kamu tau kesempurnaan tidak akan terjadi hanya dengan sekali jalan, bukan berarti kamu tidak akan berusaha untuk sempurna di segala hal.",
        image: "Sulur Ubi Jalar-Border.png"
    }
};


let currentQuestion = 0;
let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    quizElement.innerHTML = '';

    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        let html = `<h2>${question.question}</h2>`;
        // Include the image tag here
        html += `<img src="images/${question.image}" alt="Question Image">`;
        for (const key in question.answers) {
            html += `<button class="large-rectangular" data-answer="${key}">${question.answers[key].text}</button>`;
        }
        quizElement.innerHTML = html;

        document.querySelectorAll('.large-rectangular').forEach(button => {
            button.addEventListener('click', function() {
                const answer = this.getAttribute('data-answer');
                if (!userAnswers[currentQuestion]) {
                    userAnswers[currentQuestion] = {};
                }
                const scores = question.answers[answer].scores;
                for (const key in scores) {
                    if (!userAnswers[currentQuestion][key]) {
                        userAnswers[currentQuestion][key] = 0;
                    }
                    userAnswers[currentQuestion][key] += scores[key];
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayQuestion();
                } else {
                    displayResult(); // Panggil fungsi displayResult saat semua pertanyaan telah dijawab
                }
            });
        });
    } else {
        displayResult(); // Panggil fungsi displayResult jika tidak ada pertanyaan lagi
    }
}



// Update displayResult function in finalscript.js

// Update displayResult function in finalscript.js

// Update displayResult function in finalscript.js

function displayResult() {
    let scores = { A: 0, B: 0, C: 0, D: 0 };

    // Calculate the total score for each option
    for (let i = 0; i < questions.length; i++) {
        const userAnswer = userAnswers[i];
        for (let option in userAnswer) {
            scores[option] += userAnswer[option];
        }
    }

    // Determine the option with the highest total score
    let maxOption = '';
    let maxScore = 0;
    for (let option in scores) {
        if (scores[option] > maxScore) {
            maxScore = scores[option];
            maxOption = option;
        }
    }

    // Get the result details based on the option with the highest score
    const result = resultOptions[maxOption];

    // Store the result option in local storage to access it on the result page
    localStorage.setItem('resultOption', maxOption);

    // Redirect to the result page
    window.location.href = 'result.html';
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    displayQuestion();
});



document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    displayQuestion();
});


// Add this code at the end of finalscript.js

function displayResultPage(resultOption) {
    // Store the result option in local storage to access it on the result page
    localStorage.setItem('resultOption', resultOption);
    // Redirect to the result page
    window.location.href = 'result.html';
}

