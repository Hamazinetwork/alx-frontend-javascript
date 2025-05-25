interface Teacher
    {
        firstName: string;
        lastName: string;
        fullTimeEmployee: boolean;
        yearsOfExperience?: number;
        location: string;
        Contract: boolean;
        numberOfReports: number;
    }
// Create a variable named student1 with the type of student
// Create a variable named student2 with the type of student
const teacher1: Teacher = {
    firstName: "Rahman",
    lastName: "Ademola",
    fullTimeEmployee: false,
    Contract: true,
    yearsOfExperience: 5,
    location: "Lagos",
    numberOfReports: 17
};
const teacher2: Teacher = {
    firstName: "Phoebe",
    lastName: "Obaje",
    fullTimeEmployee: false,
    Contract: true,
    yearsOfExperience: 2,
    location: "Abuja",
    numberOfReports: 17
};
console.log(teacher1);
printTeacher("Rahman", "Ademola");
function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}
// Create Contsructor that accepts firstName(string), lastName(string), method workOnHome, method displayName
class StudentClass {
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        workOnHome: () => {
            console.log("Working on homework");
        }
        displayName: () => {
            console.log(`My name is ${this.firstName} ${this.lastName}`);
        }
    }
    //The constructor of the class should be described through an Interface
//The class should be described through an Interface
    firstName: string;
    lastName: string;
    workOnHome: () => {
        console.log("Working on homework");
    }
    displayName: () => {
        console.log(`My name is ${this.firstName} ${this.lastName}`);
    }
}
//Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
/*const table = document.createElement("table");
const row1 = table.insertRow();
const content = row1.textContent = `${student1.firstName} ${student1.lastName} ${student1.age} ${student1.location}`;

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
});*/

