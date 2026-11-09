const subjects = [
  { name: "Matematika", icon: "📐" },
  { name: "Ona tili", icon: "📖" },
  { name: "Adabiyot", icon: "📚" },
  { name: "Ingliz tili", icon: "🌍" },
  { name: "Rus tili", icon: "📝" },
  { name: "Tarix", icon: "🏛️" },
  { name: "Geografiya", icon: "🌎" },
  { name: "Biologiya", icon: "🧬" },
  { name: "Fizika", icon: "⚛️" },
  { name: "Kimyo", icon: "🧪" },
  { name: "Informatika", icon: "💻" },
  { name: "Huquq", icon: "⚖️" },
  { name: "Iqtisod", icon: "📊" },
  { name: "Musiqa", icon: "🎵" },
  { name: "Tasviriy san'at", icon: "🎨" },
  { name: "Jismoniy tarbiya", icon: "⚽" }
];

const questionBank = {
  "Matematika": [
    { q: "12 × 8 nechaga teng?", a: ["86", "96", "108", "88"], c: 1 },
    { q: "144 ning kvadrat ildizi nechaga teng?", a: ["10", "11", "12", "14"], c: 2 },
    { q: "Uchburchak ichki burchaklari yig‘indisi nechaga teng?", a: ["90°", "180°", "270°", "360°"], c: 1 },
    { q: "3/4 kasrning o‘nli ko‘rinishi qaysi?", a: ["0.25", "0.5", "0.75", "1.25"], c: 2 },
    { q: "Agar x + 7 = 15 bo‘lsa, x nechaga teng?", a: ["6", "7", "8", "9"], c: 2 }
  ],
  "Ona tili": [
    { q: "O‘zbek tilida nechta unli tovush bor?", a: ["5", "6", "7", "8"], c: 1 },
    { q: "Ot so‘z turkumi nimani bildiradi?", a: ["Harakatni", "Belgini", "Shaxs va narsani", "Miqdorni"], c: 2 },
    { q: "Qaysi so‘z sifat?", a: ["Yugurdi", "Chiroyli", "Kitob", "Tez"], c: 1 },
    { q: "Gapning bosh bo‘laklari qaysilar?", a: ["Ega va kesim", "Aniqlovchi va hol", "To‘ldiruvchi va hol", "Faqat ega"], c: 0 },
    { q: "Qaysi qatorda sinonim so‘zlar berilgan?", a: ["Katta — kichik", "Chiroyli — go‘zal", "Oq — qora", "Kelmoq — ketmoq"], c: 1 }
  ],
  "Adabiyot": [
    { q: "Alisher Navoiy qaysi asrda yashagan?", a: ["XIV", "XV", "XVI", "XVII"], c: 1 },
    { q: "“Xamsa” nechta dostondan iborat?", a: ["3", "4", "5", "6"], c: 2 },
    { q: "“O‘tkan kunlar” romanining muallifi kim?", a: ["Cho‘lpon", "Oybek", "Abdulla Qodiriy", "G‘afur G‘ulom"], c: 2 },
    { q: "Zahiriddin Muhammad Bobur qaysi asarni yozgan?", a: ["Boburnoma", "Qutadg‘u bilig", "Mehrobdan chayon", "Kecha va kunduz"], c: 0 },
    { q: "She’riy asar yozuvchi ijodkor kim?", a: ["Shoir", "Rassom", "Muharrir", "Tarjimon"], c: 0 }
  ],
  "Ingliz tili": [
    { q: "“Apple” so‘zining tarjimasi nima?", a: ["Nok", "Olma", "Uzum", "Shaftoli"], c: 1 },
    { q: "“I ___ a student” gapini to‘ldiring.", a: ["am", "is", "are", "be"], c: 0 },
    { q: "“Went” fe’lining boshlang‘ich shakli qaysi?", a: ["Want", "Go", "Gone", "Going"], c: 1 },
    { q: "“Beautiful” so‘zining ma’nosi nima?", a: ["Chiroyli", "Tez", "Katta", "Aqlli"], c: 0 },
    { q: "“Children” so‘zining birlik shakli qaysi?", a: ["Child", "Childs", "Childes", "Childer"], c: 0 }
  ],
  "Rus tili": [
    { q: "“Здравствуйте” so‘zining tarjimasi nima?", a: ["Xayr", "Salom", "Rahmat", "Iltimos"], c: 1 },
    { q: "“Книга” so‘zining tarjimasi nima?", a: ["Daftar", "Qalam", "Kitob", "Stol"], c: 2 },
    { q: "“Я ___ ученик” gapini to‘ldiring.", a: ["есть", "быть", "—", "был"], c: 2 },
    { q: "“Большой” so‘zining antonimi qaysi?", a: ["Высокий", "Маленький", "Красивый", "Длинный"], c: 1 },
    { q: "“Спасибо” nimani anglatadi?", a: ["Salom", "Rahmat", "Xayr", "Kechirasiz"], c: 1 }
  ],
  "Tarix": [
    { q: "Amir Temur qaysi yilda tug‘ilgan?", a: ["1336", "1405", "1394", "1301"], c: 0 },
    { q: "O‘zbekiston mustaqilligi qachon e’lon qilingan?", a: ["1990-yil 1-sentabr", "1991-yil 31-avgust", "1992-yil 8-dekabr", "1991-yil 1-yanvar"], c: 1 },
    { q: "Qadimgi Misrda hukmdor qanday atalgan?", a: ["Podsho", "Imperator", "Fir’avn", "Xon"], c: 2 },
    { q: "Buyuk Ipak yo‘li asosan nimaga xizmat qilgan?", a: ["Savdo va madaniy aloqaga", "Faqat urushga", "Faqat dehqonchilikka", "Faqat sayohatga"], c: 0 },
    { q: "Jaloliddin Manguberdi kim bo‘lgan?", a: ["Shoir", "Xorazmshoh", "Olim", "Rassom"], c: 1 }
  ],
  "Geografiya": [
    { q: "Yer yuzidagi eng katta okean qaysi?", a: ["Atlantika", "Hind", "Tinch", "Shimoliy Muz"], c: 2 },
    { q: "O‘zbekiston poytaxti qaysi shahar?", a: ["Samarqand", "Buxoro", "Toshkent", "Andijon"], c: 2 },
    { q: "Dunyodagi eng baland tog‘ cho‘qqisi qaysi?", a: ["K2", "Everest", "Elbrus", "Kilimanjaro"], c: 1 },
    { q: "Yerning tabiiy yo‘ldoshi nima?", a: ["Mars", "Quyosh", "Oy", "Venera"], c: 2 },
    { q: "Sahroi Kabir qaysi materikda joylashgan?", a: ["Osiyo", "Afrika", "Yevropa", "Avstraliya"], c: 1 }
  ],
  "Biologiya": [
    { q: "O‘simliklar fotosintez jarayonida nimani yutadi?", a: ["Kislorod", "Karbonat angidrid", "Azot", "Vodorod"], c: 1 },
    { q: "Inson yuragi nechta kameradan iborat?", a: ["2", "3", "4", "5"], c: 2 },
    { q: "Hujayraning boshqaruv markazi nima?", a: ["Membrana", "Yadro", "Sitoplazma", "Vakuola"], c: 1 },
    { q: "Qonning qizil rangini nima beradi?", a: ["Gemoglobin", "Insulin", "Kalsiy", "Vitamin"], c: 0 },
    { q: "O‘simlik ildizining asosiy vazifasi nima?", a: ["Urug‘ hosil qilish", "Suv va mineral moddalarni shimish", "Gul ochish", "Meva berish"], c: 1 }
  ],
  "Fizika": [
    { q: "Kuchning SI sistemasidagi birligi nima?", a: ["Joul", "Vatt", "Nyuton", "Paskal"], c: 2 },
    { q: "Yorug‘lik tezligi taxminan qancha?", a: ["300 000 km/s", "30 000 km/s", "3 000 km/s", "150 000 km/s"], c: 0 },
    { q: "Elektr tok kuchi qaysi birlikda o‘lchanadi?", a: ["Volt", "Amper", "Om", "Vatt"], c: 1 },
    { q: "Suv normal bosimda necha °C da qaynaydi?", a: ["50", "80", "100", "120"], c: 2 },
    { q: "Tezlik formulasi qaysi?", a: ["v = s/t", "s = v/t", "t = s × v", "v = s × t"], c: 0 }
  ],
  "Kimyo": [
    { q: "Suvning kimyoviy formulasi qaysi?", a: ["CO2", "H2O", "O2", "NaCl"], c: 1 },
    { q: "Kislorodning kimyoviy belgisi qaysi?", a: ["K", "C", "O", "N"], c: 2 },
    { q: "Osh tuzining formulasi qaysi?", a: ["NaCl", "HCl", "H2O", "CO2"], c: 0 },
    { q: "Davriy jadvalni kim yaratgan?", a: ["Nyuton", "Mendeleyev", "Faradey", "Eynshteyn"], c: 1 },
    { q: "Atomning markaziy qismi nima?", a: ["Elektron", "Qobiq", "Yadro", "Molekula"], c: 2 }
  ],
  "Informatika": [
    { q: "Kompyuterning asosiy hisoblash qurilmasi nima?", a: ["Monitor", "Protsessor", "Klaviatura", "Sichqoncha"], c: 1 },
    { q: "HTML nimani yaratishda ishlatiladi?", a: ["Veb-sahifa tuzilmasini", "Rasm chizishni", "Video montajni", "Operatsion tizimni"], c: 0 },
    { q: "JavaScript asosan nima uchun ishlatiladi?", a: ["Veb-sahifaga interaktivlik qo‘shish", "Faqat matn yozish", "Kompyuterni o‘chirish", "Rasm skanerlash"], c: 0 },
    { q: "1 bayt necha bit?", a: ["4", "8", "16", "32"], c: 1 },
    { q: "CSS nima uchun kerak?", a: ["Dizayn va bezak uchun", "Ma’lumot saqlash uchun", "Internet ulash uchun", "Hisoblash uchun"], c: 0 }
  ],
  "Huquq": [
    { q: "O‘zbekiston Konstitutsiyasi qachon qabul qilingan?", a: ["1991-yil 31-avgust", "1992-yil 8-dekabr", "1993-yil 1-sentabr", "1995-yil 8-dekabr"], c: 1 },
    { q: "Qonun oldida kimlar teng?", a: ["Faqat kattalar", "Faqat davlat xizmatchilari", "Barcha fuqarolar", "Faqat talabalar"], c: 2 },
    { q: "Davlatning asosiy qonuni nima?", a: ["Farmon", "Konstitutsiya", "Qaror", "Buyruq"], c: 1 },
    { q: "O‘zbekistonda davlat hokimiyati nechta asosiy tarmoqqa bo‘linadi?", a: ["2", "3", "4", "5"], c: 1 },
    { q: "Fuqarolarning huquq va erkinliklari qayerda mustahkamlanadi?", a: ["Konstitutsiyada", "Faqat maktab nizomida", "Faqat shartnomada", "Dars jadvalida"], c: 0 }
  ],
  "Iqtisod": [
    { q: "Pulning asosiy vazifalaridan biri qaysi?", a: ["O‘lchov vositasi", "Faqat bezak", "Faqat o‘yin", "Faqat hujjat"], c: 0 },
    { q: "Talab oshsa, boshqa shartlar o‘zgarmaganda narx odatda qanday o‘zgaradi?", a: ["Pasayadi", "Oshadi", "Yo‘qoladi", "O‘zgarmaydi"], c: 1 },
    { q: "Daromad va xarajat farqi nima deyiladi?", a: ["Balans", "Foyda", "Qarz", "Soliq"], c: 1 },
    { q: "Bankning asosiy vazifalaridan biri qaysi?", a: ["Pul mablag‘larini saqlash va xizmat ko‘rsatish", "Yo‘l qurish", "Dars o‘tish", "Mahsulot yetishtirish"], c: 0 },
    { q: "Byudjet nima?", a: ["Daromad va xarajatlar rejasi", "Faqat qarz", "Faqat soliq", "Mahsulot turi"], c: 0 }
  ],
  "Musiqa": [
    { q: "Nota yozuvida nechta asosiy nota bor?", a: ["5", "6", "7", "8"], c: 2 },
    { q: "O‘zbek milliy cholg‘usi qaysi?", a: ["Gitara", "Dutor", "Skripka", "Pianino"], c: 1 },
    { q: "Musiqada tovush balandligi nimaga bog‘liq?", a: ["Tebranish chastotasiga", "Rangga", "Og‘irlikka", "Uzunlikka"], c: 0 },
    { q: "Orkestrni kim boshqaradi?", a: ["Dirijor", "Rassom", "Shoir", "Aktyor"], c: 0 },
    { q: "Do, re, mi nimani bildiradi?", a: ["Nota nomlarini", "Cholg‘u turlarini", "Raqslarni", "Qo‘shiq janrlarini"], c: 0 }
  ],
  "Tasviriy san'at": [
    { q: "Asosiy ranglar qaysilar?", a: ["Qizil, sariq, ko‘k", "Oq, qora, kulrang", "Yashil, binafsha, qora", "Jigarrang, oq, kulrang"], c: 0 },
    { q: "Rassom asar yaratishda ko‘proq nimadan foydalanadi?", a: ["Bo‘yoq va mo‘yqalamdan", "Bolg‘adan", "Kompasdan", "Termometrdan"], c: 0 },
    { q: "Ufq chizig‘i nimani ifodalaydi?", a: ["Osmon va yer tutashgandek ko‘rinadigan chiziqni", "Rasm ramkasini", "Soyani", "Ranglar aralashmasini"], c: 0 },
    { q: "Haykaltaroshlikda nima yaratiladi?", a: ["Hajmli shakllar", "Faqat kuylar", "Faqat matnlar", "Jadvallar"], c: 0 },
    { q: "Ranglar aralashmasidan hosil bo‘ladigan rang nima deyiladi?", a: ["Hosila rang", "Ovoz", "Chiziq", "Nuqta"], c: 0 }
  ],
  "Jismoniy tarbiya": [
    { q: "Yugurish qaysi jismoniy sifatni rivojlantiradi?", a: ["Chidamlilik", "Faqat eshitish", "Faqat xotira", "Faqat ko‘rish"], c: 0 },
    { q: "Futbol jamoasida maydonda nechta o‘yinchi bo‘ladi?", a: ["9", "10", "11", "12"], c: 2 },
    { q: "Mashqdan oldin nima qilish tavsiya etiladi?", a: ["Badanni qizdirish", "Darhol dam olish", "Suv ichmaslik", "Harakat qilmaslik"], c: 0 },
    { q: "Basketbolda to‘pni savatga tashlashdan maqsad nima?", a: ["Ochko olish", "Vaqtni to‘xtatish", "Maydonni almashtirish", "O‘yinni tugatish"], c: 0 },
    { q: "Sog‘lom turmush tarzining muhim qismi qaysi?", a: ["Muntazam harakat", "Doim o‘tirish", "Uyqusizlik", "Noto‘g‘ri ovqatlanish"], c: 0 }
  ]
};

let selectedGrade = 1;
let selectedSubject = "";
let questions = [];
let currentQuestion = 0;
let answers = [];
let timeLeft = 300;
let timerInterval = null;

const $ = id => document.getElementById(id);

function scrollToTests() {
  $("tests").scrollIntoView({ behavior: "smooth" });
}

function createGrades() {
  $("gradeGrid").innerHTML = "";
  for (let grade = 1; grade <= 11; grade++) {
    const button = document.createElement("button");
    button.className = "grade-card";
    button.innerHTML = `<strong>${grade}</strong><span>-sinf</span>`;
    button.onclick = () => selectGrade(grade);
    $("gradeGrid").appendChild(button);
  }
}

function selectGrade(grade) {
  selectedGrade = grade;
  $("selectedGrade").textContent = grade;
  $("subjectArea").classList.remove("hidden");
  $("subjectGrid").innerHTML = "";

  subjects.forEach(subject => {
    const button = document.createElement("button");
    button.className = "subject-card";
    button.innerHTML = `
      <span class="subject-icon">${subject.icon}</span>
      <strong>${subject.name}</strong>
      <small>5 ta savol · Testni boshlash →</small>
    `;
    button.onclick = () => startQuiz(subject.name);
    $("subjectGrid").appendChild(button);
  });

  $("subjectArea").scrollIntoView({ behavior: "smooth", block: "start" });
}

function changeGrade() {
  $("subjectArea").classList.add("hidden");
  $("gradeGrid").scrollIntoView({ behavior: "smooth" });
}

function startQuiz(subject) {
  selectedSubject = subject;
  questions = [...questionBank[subject]];
  currentQuestion = 0;
  answers = Array(questions.length).fill(null);
  timeLeft = 300;

  $("homeScreen").classList.add("hidden");
  $("resultScreen").classList.add("hidden");
  $("quizScreen").classList.remove("hidden");

  $("quizGrade").textContent = `${selectedGrade}-sinf`;
  $("quizSubject").textContent = selectedSubject;

  renderQuestion();
  startTimer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const total = questions.length;
  const progress = Math.round(((currentQuestion + 1) / total) * 100);

  $("questionCount").textContent = `Savol ${currentQuestion + 1} / ${total}`;
  $("progressPercent").textContent = `${progress}%`;
  $("progressBar").style.width = `${progress}%`;
  $("questionText").textContent = question.q;
  $("answers").innerHTML = "";
  $("answerHint").textContent = "Javobni tanlang";

  question.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

    if (answers[currentQuestion] === index) {
      button.classList.add("selected");
    }

    button.onclick = () => selectAnswer(index);
    $("answers").appendChild(button);
  });

  $("nextBtn").disabled = answers[currentQuestion] === null;
  $("nextBtn").textContent =
    currentQuestion === total - 1 ? "Natijani ko‘rish ✓" : "Keyingi savol →";
}

function selectAnswer(index) {
  answers[currentQuestion] = index;
  document.querySelectorAll(".answer-option").forEach((button, i) => {
    button.classList.toggle("selected", i === index);
  });
  $("nextBtn").disabled = false;
  $("answerHint").textContent = "Javob tanlandi";
}

function nextQuestion() {
  if (answers[currentQuestion] === null) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    finishQuiz();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  updateTimer();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      finishQuiz();
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  $("timer").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  $("timer").style.color = timeLeft <= 30 ? "#ff7777" : "#7fa0ff";
}

function finishQuiz() {
  clearInterval(timerInterval);

  const correct = questions.reduce((sum, question, index) => {
    return sum + (answers[index] === question.c ? 1 : 0);
  }, 0);

  const total = questions.length;
  const wrong = total - correct;
  const percent = Math.round((correct / total) * 100);

  $("quizScreen").classList.add("hidden");
  $("resultScreen").classList.remove("hidden");

  $("scorePercent").textContent = `${percent}%`;
  $("correctCount").textContent = correct;
  $("wrongCount").textContent = wrong;
  $("totalCount").textContent = total;

  $("resultMessage").textContent =
    percent >= 80 ? "Ajoyib natija! Juda yaxshi ishladingiz! 🎉" :
    percent >= 60 ? "Yaxshi natija! Yana biroz mashq qiling. 👍" :
    "Harakatni davom ettiring. Keyingi safar yanada yaxshi bo‘ladi! 💪";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartQuiz() {
  startQuiz(selectedSubject);
}

function confirmExit() {
  if (confirm("Testdan chiqmoqchimisiz? Joriy javoblaringiz yo‘qoladi.")) {
    clearInterval(timerInterval);
    goHome();
  }
}

function goHome() {
  clearInterval(timerInterval);
  $("quizScreen").classList.add("hidden");
  $("resultScreen").classList.add("hidden");
  $("homeScreen").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

createGrades();