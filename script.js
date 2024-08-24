// Translations for different languages
const translations = {
  en: {
      home: "Home",
      contact: "Contact Us",
      faqs: "FAQs",
      mainTitle: "National Public Prosecution Authority (NPPA) Sex Offender Registry",
      remarksTitle: "Remarks",
      remarksContent: "welcome to first page",
      offendersTitle: "Offenders",
      offendersContent: "welcome to second page",
      educationTitle: "Educational Content",
      educationContent: "welcome to third page",
      viewMore: "View More →",
  },
  rw: {
      home: "Ahabanza",
      contact: "Twandikire",
      faqs: "Ibibazo Bikunze Kubazwa",
      mainTitle: "Ikigo cy'Igihugu Gishinzwe Ubushinjacyaha (NPPA) Urutonde rw'Abakoze Ibyaha byo Gufata ku Ngufu",
      remarksTitle: "Ibisobanuro",
      remarksContent: "murakaza neza ku rupapuro rwa mbere",
      offendersTitle: "Abakora Ibyaha",
      offendersContent: "murakaza neza ku rupapuro rwa kabiri",
      educationTitle: "Inyigisho",
      educationContent: "murakaza neza ku rupapuro rwa gatatu",
      viewMore: "Reba Byinshi →"
  },
  fr: {
      home: "Accueil",
      contact: "Contactez-nous",
      faqs: "FAQ",
      mainTitle: "Autorité Nationale des Poursuites Publiques (NPPA) Registre des Délinquants Sexuels",
      remarksTitle: "Remarques",
      remarksContent: "bienvenue sur la première page",
      offendersTitle: "Délinquants",
      offendersContent: "bienvenue sur la deuxième page",
      educationTitle: "Contenu Éducatif",
      educationContent: "bienvenue sur la troisième page",
      viewMore: "Voir Plus →"
  }
  
};

// Function to change the language
function changeLanguage(lang) {
  document.getElementById('home').textContent = translations[lang].home;
  document.getElementById('contact').textContent = translations[lang].contact;
  document.getElementById('faqs').textContent = translations[lang].faqs;
  document.getElementById('mainTitle').textContent = translations[lang].mainTitle;
  document.getElementById('remarksTitle').textContent = translations[lang].remarksTitle;
  document.getElementById('remarksContent').textContent = translations[lang].remarksContent;
  document.getElementById('offendersTitle').textContent = translations[lang].offendersTitle;
  document.getElementById('offendersContent').textContent = translations[lang].offendersContent;
  document.getElementById('educationTitle').textContent = translations[lang].educationTitle;
  document.getElementById('educationContent').textContent = translations[lang].educationContent;
  document.querySelectorAll('a[id$="Link"]').forEach(el => el.textContent = translations[lang].viewMore);

}

// Event listener for language button click to toggle the dropdown
document.getElementById('languageBtn').addEventListener('click', function() {
  const languageOptions = document.querySelector('.language-options');
  languageOptions.style.display = languageOptions.style.display === 'block' ? 'none' : 'block';
});

// Close the language dropdown when clicking outside
document.addEventListener('click', function(event) {
  const languageOptions = document.querySelector('.language-options');
  const languageSelector = document.querySelector('.language-selector');
  
  if (!languageSelector.contains(event.target)) {
      languageOptions.style.display = 'none';
  }
});

// Event listeners for each language button in the dropdown
document.querySelectorAll('.language-options button').forEach(button => {
  button.addEventListener('click', function() {
      changeLanguage(this.getAttribute('data-lang'));
      document.querySelector('.language-options').style.display = 'none';
  });
});

// Set the default language to English
changeLanguage('eng');
