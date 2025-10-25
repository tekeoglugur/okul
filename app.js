// Sınav Uygulaması - Ana JavaScript Dosyası

let currentQuestion = 0;
let userAnswers = [];
let startTime;
let timerInterval;
let autoNextTimer = null; // Otomatik geçiş zamanlayıcısı
let selectedQuestions = [];
let wrongAnswers = []; // Yanlış cevaplanan sorular
let retryQueue = []; // Tekrar edilecek sorular kuyruğu
let correctCount = 0;
let incorrectCount = 0;
let answered = false; // Anlık geri bildirim için
let totalQuestions = 50;
let quizState = null; // Kayıt için

// Sayfa yüklendiğinde giriş ekranını göster
window.onload = function() {
    document.getElementById('welcomeScreen').style.display = 'flex';
    document.getElementById('quizContainer').style.display = 'none';
    
    // Kaydedilmiş sınav var mı kontrol et
    loadQuizState();
};

// Sınav durumunu kaydet
function saveQuizState() {
    const state = {
        currentQuestion,
        userAnswers,
        selectedQuestions,
        wrongAnswers,
        retryQueue,
        correctCount,
        incorrectCount,
        totalQuestions,
        startTime: startTime.getTime(),
        timestamp: new Date().getTime()
    };
    localStorage.setItem('turkIktisatQuizState', JSON.stringify(state));
}

// Sınav durumunu yükle
function loadQuizState() {
    const savedState = localStorage.getItem('turkIktisatQuizState');
    if (savedState) {
        quizState = JSON.parse(savedState);
        // 24 saatten eski kayıtları sil
        const dayInMs = 24 * 60 * 60 * 1000;
        if (new Date().getTime() - quizState.timestamp > dayInMs) {
            localStorage.removeItem('turkIktisatQuizState');
            quizState = null;
        } else {
            showContinueOption();
        }
    }
}

// Devam etme seçeneğini göster
function showContinueOption() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const continueDiv = document.createElement('div');
    continueDiv.className = 'continue-quiz';
    continueDiv.innerHTML = `
        <div class="continue-card">
            <span class="continue-icon">⏸️</span>
            <div class="continue-info">
                <h3>Devam Eden Sınav</h3>
                <p>Soru ${quizState.currentQuestion + 1} / ${quizState.selectedQuestions.length}</p>
                <p class="continue-stats">✓ ${quizState.correctCount} Doğru · ✗ ${quizState.incorrectCount} Yanlış</p>
            </div>
            <div class="continue-actions">
                <button class="btn btn-continue" onclick="continueQuiz()">
                    Devam Et
                </button>
                <button class="btn btn-new" onclick="clearSavedQuiz()">
                    Yeni Başla
                </button>
            </div>
        </div>
    `;
    welcomeScreen.querySelector('.welcome-content').insertBefore(continueDiv, welcomeScreen.querySelector('.difficulty-selection'));
}

// Kaydedilmiş sınavı temizle
function clearSavedQuiz() {
    localStorage.removeItem('turkIktisatQuizState');
    quizState = null;
    location.reload();
}

// Sınavı devam ettir
function continueQuiz() {
    currentQuestion = quizState.currentQuestion;
    userAnswers = quizState.userAnswers;
    selectedQuestions = quizState.selectedQuestions;
    wrongAnswers = quizState.wrongAnswers;
    retryQueue = quizState.retryQueue;
    correctCount = quizState.correctCount;
    incorrectCount = quizState.incorrectCount;
    totalQuestions = quizState.totalQuestions;
    startTime = new Date(quizState.startTime);
    answered = false;
    
    // Ekranları değiştir
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    startTimer();
    showQuestion();
    updateProgress();
    updateMiniStats();
}

// Sınavı başlat
function startQuiz(questionCount) {
    // Kaydedilmiş sınavı temizle
    localStorage.removeItem('turkIktisatQuizState');
    
    totalQuestions = questionCount;
    
    // Rastgele soru seç
    selectedQuestions = selectRandomQuestions(questionCount);
    
    // Ekranları değiştir
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // İlk değerleri ayarla
    currentQuestion = 0;
    userAnswers = new Array(selectedQuestions.length).fill(null);
    wrongAnswers = [];
    retryQueue = [];
    correctCount = 0;
    incorrectCount = 0;
    answered = false;
    
    startTime = new Date();
    startTimer();
    showQuestion();
    updateProgress();
    updateMiniStats();
}

// Rastgele soru seç
function selectRandomQuestions(count) {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Zamanlayıcı
function startTimer() {
    timerInterval = setInterval(() => {
        const now = new Date();
        const diff = now - startTime;
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        document.getElementById('timeDisplay').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Otomatik geçiş zamanlayıcısını temizle
function clearAutoNext() {
    if (autoNextTimer) {
        clearTimeout(autoNextTimer);
        autoNextTimer = null;
    }
}

// Soruyu göster
function showQuestion() {
    // Otomatik geçişi iptal et
    clearAutoNext();
    
    answered = false;
    const question = selectedQuestions[currentQuestion];
    
    // Tekrar badge'i kontrol et
    const retryBadge = document.getElementById('retryBadge');
    if (retryQueue.includes(currentQuestion)) {
        retryBadge.style.display = 'inline-block';
    } else {
        retryBadge.style.display = 'none';
    }
    
    // Soru numarası ve metni
    document.getElementById('questionBadge').textContent = `Soru ${currentQuestion + 1}`;
    document.getElementById('questionText').textContent = question.question;
    
    // Geri bildirimi gizle
    document.getElementById('feedback').style.display = 'none';
    
    // Şıkları oluştur
    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        
        // Eğer bu soru daha önce cevaplandıysa göster
        if (userAnswers[currentQuestion] !== null) {
            const isCorrect = index === question.correct;
            const isSelected = userAnswers[currentQuestion] === index;
            
            optionDiv.style.pointerEvents = 'none';
            
            if (isSelected) {
                optionDiv.classList.add('selected');
                if (isCorrect) {
                    optionDiv.classList.add('correct');
                } else {
                    optionDiv.classList.add('incorrect');
                }
            }
            
            if (isCorrect && !isSelected) {
                optionDiv.classList.add('correct');
            }
            
            // Geri bildirimi göster
            if (userAnswers[currentQuestion] !== null) {
                const wasCorrect = userAnswers[currentQuestion] === question.correct;
                showFeedback(wasCorrect, question.correct);
            }
        }
        
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = index;
        radio.id = `option${index}`;
        if (userAnswers[currentQuestion] === index) {
            radio.checked = true;
        }
        
        const label = document.createElement('label');
        label.className = 'option-label';
        label.htmlFor = `option${index}`;
        label.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        
        optionDiv.appendChild(radio);
        optionDiv.appendChild(label);
        
        // Tıklama olayları (sadece cevaplamadıysa)
        if (userAnswers[currentQuestion] === null) {
            optionDiv.onclick = () => selectOption(index);
            radio.onchange = () => selectOption(index);
        }
        
        optionsList.appendChild(optionDiv);
    });
    
    // Buton durumları
    updateButtons();
    
    // Animasyon
    document.querySelector('.question-card').classList.add('fade-in');
    
    // Durumu kaydet
    saveQuizState();
}

// Şık seçimi ve anlık geri bildirim
function selectOption(index) {
    if (answered) return; // Zaten cevaplandıysa tekrar seçim yapma
    
    userAnswers[currentQuestion] = index;
    const question = selectedQuestions[currentQuestion];
    const isCorrect = index === question.correct;
    
    answered = true;
    
    // İstatistikleri güncelle
    if (isCorrect) {
        correctCount++;
    } else {
        incorrectCount++;
        // Yanlış cevabı kaydet ve tekrar kuyruğuna ekle
        if (!wrongAnswers.includes(currentQuestion)) {
            wrongAnswers.push(currentQuestion);
            scheduleRetry(currentQuestion);
        }
    }
    
    updateMiniStats();
    
    // Tüm şıkları güncelle ve doğru/yanlış göster
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        // Tıklamayı devre dışı bırak
        opt.style.pointerEvents = 'none';
        
        if (idx === index) {
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
            
            if (isCorrect) {
                opt.classList.add('correct');
            } else {
                opt.classList.add('incorrect');
            }
        }
        
        // Doğru cevabı her zaman göster
        if (idx === question.correct && !isCorrect) {
            opt.classList.add('correct');
        }
    });
    
    // Geri bildirim göster
    showFeedback(isCorrect, question.correct);
    
    updateButtons();
    saveQuizState();
    
    // Otomatik sonraki soru (2.5 saniye sonra)
    autoNextTimer = setTimeout(() => {
        if (currentQuestion < selectedQuestions.length - 1) {
            nextQuestion();
        } else {
            document.getElementById('nextBtn').disabled = false;
        }
    }, 2500);
}

// Geri bildirim göster
function showFeedback(isCorrect, correctIndex) {
    const feedback = document.getElementById('feedback');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    
    feedback.style.display = 'flex';
    
    if (isCorrect) {
        feedback.className = 'feedback correct-feedback';
        feedbackIcon.textContent = '🎉';
        
        const messages = [
            '<strong>Harika!</strong> Doğru cevap!',
            '<strong>Mükemmel!</strong> Çok iyisin!',
            '<strong>Süper!</strong> Doğru bildin!',
            '<strong>Aferin!</strong> Tam isabet!',
            '<strong>Bravo!</strong> Kesinlikle doğru!'
        ];
        feedbackText.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    } else {
        feedback.className = 'feedback incorrect-feedback';
        feedbackIcon.textContent = '💡';
        
        const correctOption = selectedQuestions[currentQuestion].options[correctIndex];
        feedbackText.innerHTML = `<strong>Doğru cevap:</strong> ${String.fromCharCode(65 + correctIndex)}) ${correctOption}`;
    }
}

// Yanlış soruyu tekrar kuyruğuna ekle
function scheduleRetry(questionIndex) {
    // 10-20 soru sonrasında rastgele bir yere ekle
    const delay = Math.floor(Math.random() * 11) + 10; // 10-20 arası
    const retryAt = currentQuestion + delay;
    
    // Eğer sınavın sonunu geçmiyorsa ekle
    if (retryAt < selectedQuestions.length) {
        // Soruyu kopyala ve ekle
        const retryQuestion = {...selectedQuestions[questionIndex]};
        selectedQuestions.splice(retryAt, 0, retryQuestion);
        userAnswers.splice(retryAt, 0, null);
        retryQueue.push(retryAt);
    }
}

// Mini istatistikleri güncelle
function updateMiniStats() {
    document.getElementById('correctMini').textContent = correctCount;
    document.getElementById('incorrectMini').textContent = incorrectCount;
}

// Butonları güncelle
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Önceki buton
    prevBtn.disabled = currentQuestion === 0;
    
    // Sonraki buton
    if (answered || userAnswers[currentQuestion] !== null) {
        nextBtn.disabled = false;
        if (currentQuestion === selectedQuestions.length - 1) {
            nextBtn.innerHTML = 'Sınavı Bitir <span>✓</span>';
        } else {
            nextBtn.innerHTML = 'Sonraki <span>→</span>';
        }
    } else {
        nextBtn.disabled = true;
    }
}

// İlerleme çubuğunu güncelle
function updateProgress() {
    const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('questionCounter').textContent = 
        `Soru ${currentQuestion + 1} / ${selectedQuestions.length}`;
}

// Sonraki soru
function nextQuestion() {
    // Otomatik geçiş zamanlayıcısını temizle
    clearAutoNext();
    
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
        updateProgress();
    } else {
        finishQuiz();
    }
}

// Önceki soru
function previousQuestion() {
    // Otomatik geçiş zamanlayıcısını temizle
    clearAutoNext();
    
    if (currentQuestion > 0) {
        currentQuestion--;
        answered = true; // Önceki sorularda otomatik geçiş olmasın
        showQuestion();
        updateProgress();
    }
}

// Sınavı bitir
function finishQuiz() {
    clearInterval(timerInterval);
    clearAutoNext();
    localStorage.removeItem('turkIktisatQuizState');
    
    // Sonuçları hesapla
    let correct = 0;
    let incorrect = 0;
    let empty = 0;
    
    selectedQuestions.forEach((question, index) => {
        if (userAnswers[index] === null) {
            empty++;
        } else if (userAnswers[index] === question.correct) {
            correct++;
        } else {
            incorrect++;
        }
    });
    
    const score = Math.round((correct / selectedQuestions.length) * 100);
    
    // Sonuç ekranını göster
    document.getElementById('quizSection').style.display = 'none';
    document.querySelector('.progress-section').style.display = 'none';
    
    const resultSection = document.getElementById('resultSection');
    resultSection.style.display = 'block';
    
    // Sonuç ikonunu değiştir
    const resultIcon = document.getElementById('resultIcon');
    if (score >= 90) {
        resultIcon.textContent = '🏆';
        resultIcon.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
    } else if (score >= 70) {
        resultIcon.textContent = '🎉';
        resultIcon.style.background = 'var(--success-color)';
    } else if (score >= 50) {
        resultIcon.textContent = '👍';
        resultIcon.style.background = 'var(--primary-color)';
    } else {
        resultIcon.textContent = '💪';
        resultIcon.style.background = 'var(--warning-color)';
    }
    
    // Sonuçları doldur
    document.getElementById('scoreNumber').textContent = score;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('incorrectCount').textContent = incorrect;
    document.getElementById('emptyCount').textContent = empty;
    
    // Mesaj
    let message = '';
    if (score >= 90) {
        message = '🏆 Mükemmel! Türk İktisat Tarihi konusunda uzman seviyesindesiniz!';
    } else if (score >= 70) {
        message = '🎉 Harika! Konuya çok iyi hakimsiniz. Tebrikler!';
    } else if (score >= 50) {
        message = '👍 İyi! Biraz daha çalışmayla başarınız artacak.';
    } else {
        message = '💪 Tekrar çalışmanızı öneririz. Her şey pratikle gelişir!';
    }
    document.getElementById('resultMessage').textContent = message;
}

// Ana sayfaya dön
function goHome() {
    clearInterval(timerInterval);
    clearAutoNext();
    localStorage.removeItem('turkIktisatQuizState');
    window.location.href = './index.html';
}

// Sınavı yeniden başlat
function restartQuiz() {
    clearInterval(timerInterval);
    clearAutoNext();
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    document.querySelector('.progress-section').style.display = 'block';
    
    startQuiz(totalQuestions);
}
