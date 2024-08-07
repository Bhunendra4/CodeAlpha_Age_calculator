document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value) - 1; 
  const year = parseInt(document.getElementById('year').value);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  document.getElementById('result').textContent = `You are ${age} years old.`;
});