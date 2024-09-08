function checkAnswer(answer) {
  const correctAnswer = "Increase public safety";
  const resultElement = document.getElementById("result");
  
  if (answer === correctAnswer) {
      resultElement.textContent = "Intego nyamukuru y’Urutonde rw’abahamijwe ibyaha by’ihohotera rishingiye ku gitsina ni ukongera umutekano rusange binyuze mu gukurikirana no gukurikiranira hafi abantu bahamwe n’ibyaha by’ihohotera rishingiye ku gitsina.";
      resultElement.style.color = "green";
  } else {
      resultElement.textContent = "Ikitaticyo! Intego nyamukuru y’Urutonde rw’abahamijwe ibyaha by’ihohotera rishingiye ku gitsina ni ukongera umutekano rusange.";
      resultElement.style.color = "red";
  }
}