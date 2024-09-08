function checkAnswer(answer) {
  const correctAnswer = "Increase public safety";
  const resultElement = document.getElementById("result");
  
  if (answer === correctAnswer) {
      resultElement.textContent = "Correct! The primary purpose of a Sex Offender Registry is to increase public safety.";
      resultElement.style.color = "green";
  } else {
      resultElement.textContent = "Incorrect. The primary purpose of a Sex Offender Registry is to increase public safety.";
      resultElement.style.color = "red";
  }
}