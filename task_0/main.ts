interface student 
    {
        firstName: string;
        lastName: string;
        age: number;
        location: string;
    }
// Create a variable named student1 with the type of student
// Create a variable named student2 with the type of student
const student1: student = {
    firstName: "Rahman",
    lastName: "Ademola",
    age: 26,
    location: "Lagos",
};
const student2: student = {
    firstName: "Phoebe",
    lastName: "Obaje",
    age: 20,
    location: "Abuja",
};

//Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
/*const table = document.createElement("table");
const row1 = table.insertRow();
const content = row1.textContent = `${student1.firstName} ${student1.lastName} ${student1.age} ${student1.location}`;*/

// Create an array containing the students
const studentsList: student[] = [student1, student2];

// Create a table and append it to the body
const table = document.createElement("table");
const headerRow = document.createElement("tr");

// Add table headers
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Populate the table with student data
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});


