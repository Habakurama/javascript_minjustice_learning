// object Translations for different languages
const translations = {
  en: {
      home: "Home",
      contact: "Contact Us",
      faqs: "FAQs",
      mainTitle: "National Public Prosecution Authority (NPPA) Sex Offender Registry",
      remarksTitle: "Remarks",
      languageBtn: "Choose Language",
      remarksContent: "The National Public Prosecution Authority, among its responsibilities, includes...",
      offendersTitle: "Offenders",
      offendersContent: "Those convicted of gender-based violence, their information...",
      educationTitle: "Educational Content",
      educationContent: "Various lessons on how to prevent gender-based violence...",
      viewMore: "View More →",
  },
  rw: {
      home: "Ahabanza",
      contact: "Twandikire",
      faqs: "Ibibazo Bikunze Kubazwa",
      mainTitle: "Ikigo cy'Igihugu Gishinzwe Ubushinjacyaha (NPPA) Urutonde rw'Abakoze Ibyaha byo Gufata ku Ngufu",
      remarksTitle: "Ibisobanuro",
      remarksContent: "Ubushinjacyaha Bukuru, munshingano bufite,harimo.. ",
      offendersTitle: "Abahamijwe ibyaha",
      languageBtn: "Hitamo ururimi",
      offendersContent: "Abahamwe nibyaha by'ihohotera rishingiye kugitsina amakuru yabo ",
      educationTitle: "Inyigisho",
      educationContent: "Inyigisho zinyuranye zijyanye nuburyo wakummira ibyaha byihohorera rishingiye kugitsina",
      viewMore: "Reba Byinshi →"
  },
  fr: {
      home: "Accueil",
      contact: "Contactez-nous",
      faqs: "FAQ",
      mainTitle: "Autorité Nationale des Poursuites Publiques (NPPA) Registre des Délinquants Sexuels",
      remarksTitle: "Remarques",
      languageBtn: "choisir la langue",
      remarksContent: "Le Parquet Général, parmi ses responsabilités, inclut...",
      offendersTitle: "Délinquants",
      offendersContent: "Ceux reconnus coupables de violences basées sur le genre, leurs informations...",
      educationTitle: "Contenu Éducatif",
      educationContent: "Différentes leçons sur la manière de prévenir les crimes de violence basée sur le genre...",
      viewMore: "Voir Plus →"
  }
  
};

// Function to change the language
function changeLanguage(lang) {
  document.getElementById('home').textContent = translations[lang].home;
  document.getElementById('contact').textContent = translations[lang].contact;
  document.getElementById('faqs').textContent = translations[lang].faqs;
  document.getElementById('mainTitle').textContent = translations[lang].mainTitle;
  document.getElementById('languageBtn').textContent = translations[lang].languageBtn;
  document.getElementById('remarksTitle').textContent = translations[lang].remarksTitle;
  document.getElementById('remarksContent').textContent = translations[lang].remarksContent;
  document.getElementById('offendersTitle').textContent = translations[lang].offendersTitle;
  document.getElementById('offendersContent').textContent = translations[lang].offendersContent;
  document.getElementById('educationTitle').textContent = translations[lang].educationTitle;
  document.getElementById('educationContent').textContent = translations[lang].educationContent;
  document.querySelectorAll('a[id$="Link"]').forEach(el => el.textContent = translations[lang].viewMore);


}
// Function to update the language button text
function updateLanguageButtonText(lang) {
  const languageNames = {
    en: 'English',
    rw: 'Kinyarwanda',
    fr: 'French'
  };
  document.getElementById('languageBtn').textContent = languageNames[lang];
}
//this is object function to change langage based on user click
document.querySelectorAll('.language-options button').forEach(button => {
  button.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang);
    updateLanguageButtonText(lang);
    closeDropdown(none);
  });
});
//this is eventListener that will happen when user click
  document.addEventListener('click', function(event) {
  const languageOptions = document.querySelector('.language-options');
  const languageSelector = document.querySelector('.language-selector');
    
  if (!languageSelector.contains(event.target)) {
        languageOptions.style.display = 'none';
  }
  });

// Event listener for language button click to toggle the dropdown
document.getElementById('languageBtn').addEventListener('click', function() {
  const languageOptions = document.querySelector('.language-options');
  languageOptions.style.display = languageOptions.style.display === 'none' ? 'block' : 'none';
});



// Event listeners for each language button in the dropdown
document.querySelectorAll('.language-options button').forEach(button => {
  button.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    changeLanguage(lang);
    updateLanguageButtonText();
    closeDropdown(lang);
  });
});

// Function to close the dropdown
function closeDropdown() {
  document.querySelector('.language-options').style.display = 'none';
}

// Event listeners for each language button in the dropdown
document.querySelectorAll('.language-options button').forEach(button => {
  button.addEventListener('click', function() {
      changeLanguage(this.getAttribute('data-lang'));
      document.querySelector('.language-options').style.display = 'none';
  });
});


// Set the default language to English
const defaultLanguage = 'rw';
changeLanguage(defaultLanguage);

let element = document.getElementById('#educationContent');
element.textContent = element.textContent.replace(/\m+/g, '').trim();



