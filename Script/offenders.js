
//this might come from an API)
const offenders = [
  { name: 'Habiyakare xxxxxxxx', age: 34, location: 'Nyakabanda', crime: 'gufata kungufu' },
  { name: 'Kubwimana yyyyyyyyy', age: 54, location: 'Kanombe', crime: 'guhohotera umugore' },
  { name: 'Murekezi zzzzzzzzzz', age: 45, location: 'Nyamagabe', crime: 'gufata kungufu' },
  { name: 'Mutuyimana xxxxxxxx', age: 34, location: 'Nyakabanda', crime: 'gufata kungufu' },
  { name: 'Sezibera yyyyyyyyy', age: 54, location: 'Kanombe', crime: 'guhohotera umugore' },
  { name: 'Bihoyiki zzzzzzzzzz', age: 45, location: 'Nyamagabe', crime: 'gufata kungufu'}
  
];

// This function is for each offender being seached in seach box
function searchOffender() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
  resultsTable.innerHTML = '';
//this has responsiblity to store all information provided on array  called offenders and then return  information of offender based on the name searched or location
  const filteredOffenders = offenders.filter(offender => {
      return (
          offender.name.toLowerCase().includes(searchInput) ||
          offender.location.toLowerCase().includes(searchInput)
      );
  });
// this is for crossing to each record and desplayed based on table developed in html
  filteredOffenders.forEach(offender => {
      const row = resultsTable.insertRow();
      const nameCell = row.insertCell();
      const ageCell = row.insertCell();
      const locationCell = row.insertCell();
      const crimeCell = row.insertCell();

      nameCell.textContent = offender.name;
      ageCell.textContent = offender.age;
      locationCell.textContent = offender.location;
      crimeCell.textContent = offender.crime;
  });
//this condition to manage how stored information on array will displayed on table
  if (filteredOffenders.length === 0){
      const row = resultsTable.insertRow();
      const cell = row.insertCell(0);
      cell.colSpan = 4;
      cell.textContent = 'No results found';
      cell.style.textAlign = 'center';
  }
}

