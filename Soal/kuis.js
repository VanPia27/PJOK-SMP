function submitQuiz() {
    let score = 0;
    const answers = {
        q1: 'A',
        q2: 'D',
        q3: 'A',
        q4: 'C',
        q5: 'D',
        q6: 'A',
        q7: 'B',
        q8: 'B',
        q9: 'B',
        q10: 'B'
    };

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    alert(`Skor Anda: ${score} dari 10`);
}

function logout() {
    // Tambahkan logika untuk logout, jika diperlukan
    alert("Anda telah logout!");
}
